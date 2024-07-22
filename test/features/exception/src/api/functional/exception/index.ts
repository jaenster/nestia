/**
 * @packageDocumentation
 * @module api.functional.exception
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { IBbsArticle } from "../../structures/IBbsArticle";
import type { INotFound } from "../../structures/INotFound";
import type { IUnprocessibleEntity } from "../../structures/IUnprocessibleEntity";

/**
 * @throws 400 invalid request
 * @throws 404 unable to find the matched section
 * @throws 428
 * @throws 5XX internal server error
 * @controller ExceptionController.typed
 * @path POST /exception/:section/typed
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function typed(
  connection: IConnection,
  section: string,
  input: typed.Input,
): Promise<typed.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...typed.METADATA,
      template: typed.METADATA.path,
      path: typed.path(section),
    },
    input,
  );
}
export namespace typed {
  export type Input = Primitive<IBbsArticle.IStore>;
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "POST",
    path: "/exception/:section/typed",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (section: string) =>
    `/exception/${encodeURIComponent(section ?? "null")}/typed`;
}

/**
 * @throws 428 unable to process the request
 * @controller ExceptionController.union
 * @path GET /exception/:section/union
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function union(
  connection: IConnection,
  section: string,
): Promise<union.Output> {
  return PlainFetcher.fetch(connection, {
    ...union.METADATA,
    template: union.METADATA.path,
    path: union.path(section),
  });
}
export namespace union {
  export type Output = Primitive<
    IBbsArticle | INotFound | IUnprocessibleEntity
  >;

  export const METADATA = {
    method: "GET",
    path: "/exception/:section/union",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (section: string) =>
    `/exception/${encodeURIComponent(section ?? "null")}/union`;
}

/**
 * @throws 400 invalid request
 * @throws 404 unable to find the matched section
 * @throw 428 unable to process the request
 * @throw 5XX internal server error
 * @controller ExceptionController.tags
 * @path POST /exception/:section/tags
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function tags(
  connection: IConnection,
  section: string,
  input: tags.Input,
): Promise<tags.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...tags.METADATA,
      template: tags.METADATA.path,
      path: tags.path(section),
    },
    input,
  );
}
export namespace tags {
  export type Input = Primitive<IBbsArticle.IStore>;
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "POST",
    path: "/exception/:section/tags",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (section: string) =>
    `/exception/${encodeURIComponent(section ?? "null")}/tags`;
}

/**
 * @throws 400 invalid request
 * @throws 404 unable to find the matched section
 * @throw 428 unable to process the request
 * @throw 5XX internal server error
 * @controller ExceptionController.composite
 * @path POST /exception/:section/composite
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function composite(
  connection: IConnection,
  section: string,
  input: composite.Input,
): Promise<composite.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...composite.METADATA,
      template: composite.METADATA.path,
      path: composite.path(section),
    },
    input,
  );
}
export namespace composite {
  export type Input = Primitive<IBbsArticle.IStore>;
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "POST",
    path: "/exception/:section/composite",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (section: string) =>
    `/exception/${encodeURIComponent(section ?? "null")}/composite`;
}
