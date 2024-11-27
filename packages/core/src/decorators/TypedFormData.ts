import {
  BadRequestException,
  ExecutionContext,
  InternalServerErrorException,
  createParamDecorator,
} from "@nestjs/common";
import type { HttpArgumentsHost } from "@nestjs/common/interfaces";
import type express from "express";
import type { FastifyReply, FastifyRequest } from "fastify";
import fastifyMulter from "fastify-multer";
import type * as FastifyMulter from "fastify-multer/lib/interfaces";
import ExpressMulter from "multer";

import type { IRequestFormDataProps } from "../options/IRequestFormDataProps";
import { Singleton } from "../utils/Singleton";
import { validate_request_form_data } from "./internal/validate_request_form_data";

/**
 * Type safe multipart/form-data decorator.
 *
 * `TypedFormData.Body()` is a request body decorator function for the
 * `multipart/form-data` content type. It automatically casts property type
 * following its DTO definition, and performs the type validation too.
 *
 * Also, `TypedFormData.Body()` is much easier and type safer than `@nest.UploadFile()`.
 * If you're considering the [SDK library](https://nestia.io/docs/sdk/sdk) generation,
 * only `TypedFormData.Body()` can do it. Therefore, I recommend you to use
 * `TypedFormData.Body()` instead of the `@nest.UploadFile()` function.
 *
 * For reference, target type `T` must follow such restriction. Of course, if actual
 * form-data values are different with their promised type `T`,
 * `BadRequestException` error (status code: 400) would be thrown.
 *
 * 1. Type `T` must be an object type
 * 2. Do not allow dynamic property
 * 3. Only `boolean`, `bigint`, `number`, `string`, `Blob`, `File` or their array types are allowed
 * 4. By the way, union type never be not allowed
 *
 * By the way, if you're using `fastify`, you have to setup `fastify-multer`
 * and configure like below when composing the NestJS application. If you don't do
 * that, `@TypedFormData.Body()` will not work properly, and throw 500 internal
 * server error when `Blob` or `File` type being utilized.
 *
 * ```typescript
 * import fastifyMulter from "fastify-multer";
 * import { NestFactory } from "@nestjs/core";
 * import {
 *   FastifyAdapter,
 *   NestFastifyApplication
 * } from "@nestjs/platform-fastify";
 *
 * export async function main() {
 *   const app = await NestFactory.create<NestFastifyApplication>(
 *     AppModule,
 *     new FastifyAdapter(),
 *   );
 *   app.register(fastifyMulter.contentParser);
 *   await app.listen(3000);
 * }
 * ```
 *
 * @todo Change to ReadableStream through configuring storage engine of multer
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace TypedFormData {
  /**
   * Request body decorator.
   *
   * Request body decorator for the `multipart/form-data` type.
   *
   * Much easier and type safer than `@nest.UploadFile()` decorator.
   *
   * @param options Options for the `multer` or `fastify-multer`
   */
  export function Body(
    options?: ExpressMulter.Options | FastifyMulter.Options,
  ): ParameterDecorator;

  /**
   * @internal
   */
  export function Body<T extends object>(
    options: ExpressMulter.Options | FastifyMulter.Options | undefined,
    props?: IRequestFormDataProps<T> | undefined,
  ): ParameterDecorator {
    if (typeof File === "undefined")
      throw new Error(
        "Error on TypedFormData.Body(): 'File' class is not supported in the older version of NodeJS. Upgrade the NodeJS to the modern.",
      );
    const checker = validate_request_form_data(props);
    const predicator = (type: "express" | "fastify") =>
      new Singleton(() =>
        type === "express"
          ? decodeExpress(options as ExpressMulter.Options | undefined, props!)
          : decodeFastify(options as FastifyMulter.Options | undefined, props!),
      );
    return createParamDecorator(async function TypedFormDataBody(
      _unknown: any,
      context: ExecutionContext,
    ): Promise<T> {
      const http: HttpArgumentsHost = context.switchToHttp();
      const request: express.Request = http.getRequest();
      if (isMultipartFormData(request.headers["content-type"]) === false)
        throw new BadRequestException(
          `Request body type is not "multipart/form-data".`,
        );

      const decoder = isExpressRequest(request)
        ? predicator("express").get()
        : predicator("fastify").get();
      const data: FormData = await decoder({
        request: request as any,
        response: http.getResponse(),
      });
      const output: T | Error = checker(data);
      if (output instanceof Error) throw output;
      return output;
    })();
  }
}

/**
 * @internal
 */
const decodeExpress = <T>(
  options: ExpressMulter.Options | undefined,
  props: IRequestFormDataProps<T>,
) => {
  const upload = ExpressMulter(options).fields(
    props!.files.map((file) => ({
      name: file.name,
      ...(file.limit === 1 ? { maxCount: 1 } : {}),
    })),
  );
  const interceptor = (request: express.Request, response: express.Response) =>
    new Promise<void>((resolve, reject) =>
      upload(request, response, (error) => {
        if (error) reject(error);
        else resolve();
      }),
    );
  return async (socket: {
    request: express.Request;
    response: express.Response;
  }): Promise<FormData> => {
    await interceptor(socket.request, socket.response);

    const data: FormData = new FormData();
    for (const [key, value] of Object.entries(socket.request.body))
      if (Array.isArray(value))
        for (const elem of value) data.append(key, String(elem));
      else data.append(key, String(value));
    if (socket.request.files) parseFiles(data)(socket.request.files);
    return data;
  };
};

/**
 * @internal
 */
const decodeFastify = <T>(
  options: FastifyMulter.Options | undefined,
  props: IRequestFormDataProps<T>,
) => {
  const fastifyInstance = fastifyMulter(options);
  const upload = fastifyInstance.fields(
    props!.files.map((file) => ({
      name: file.name,
      ...(file.limit === 1 ? { maxCount: 1 } : {}),
    })),
  );
  const interceptor = (request: FastifyRequest, response: FastifyReply) =>
    new Promise<void>((resolve, reject) =>
      upload.call(request.server, request, response, (error) => {
        if (error) reject(error);
        else resolve();
      }),
    );
  return async (socket: {
    request: FastifyRequest;
    response: FastifyReply;
  }): Promise<FormData> => {
    if (
      (socket.request as any).files === undefined ||
      (typeof socket.request as any).files !== "function"
    )
      throw new InternalServerErrorException(
        "Have not configured the `fastify-multer` plugin yet. Inquiry to the backend developer.",
      );

    await interceptor(socket.request, socket.response);

    const data: FormData = new FormData();
    for (const [key, value] of Object.entries(socket.request.body as any))
      if (Array.isArray(value))
        for (const elem of value) data.append(key, String(elem));
      else data.append(key, String(value));
    if ((socket.request as any).files)
      parseFiles(data)((socket.request as any).files);
    return data;
  };
};

/**
 * @internal
 */
const parseFiles =
  (data: FormData) =>
  (files: Express.Multer.File[] | Record<string, Express.Multer.File[]>) => {
    if (Array.isArray(files))
      for (const file of files)
        data.append(
          file.fieldname,
          new File([file.buffer], file.originalname, {
            type: file.mimetype,
          }),
        );
    else
      for (const [key, value] of Object.entries(files))
        for (const file of value)
          data.append(
            key,
            new File([file.buffer], file.originalname, {
              type: file.mimetype,
            }),
          );
  };

/**
 * @internal
 */
const isMultipartFormData = (text?: string): boolean =>
  text !== undefined &&
  text
    .split(";")
    .map((str) => str.trim())
    .some((str) => str === "multipart/form-data");

/**
 * @internal
 */
const isExpressRequest = (
  request: express.Request | FastifyRequest,
): request is express.Request => (request as express.Request).app !== undefined;
