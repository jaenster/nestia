/**
 * @packageDocumentation
 * @module api.functional.headers
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";
import typia from "typia";

import { NestiaSimulator } from "./../../utils/NestiaSimulator";
import type { IHeaders } from "./../../structures/IHeaders";
import type { IBbsArticle } from "./../../structures/IBbsArticle";

/**
 * @controller HeadersController.emplace()
 * @path PATCH /headers/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function emplace(
    connection: IConnection<emplace.Headers>,
    section: string,
): Promise<emplace.Output> {
    return !!connection.simulate
        ? emplace.simulate(
              connection,
              section,
          )
        : Fetcher.fetch(
              connection,
              emplace.ENCRYPTED,
              emplace.METHOD,
              emplace.path(section),
          );
}
export namespace emplace {
    export type Headers = Primitive<IHeaders>;
    export type Output = Primitive<IHeaders>;

    export const METHOD = "PATCH" as const;
    export const PATH: string = "/headers/:section";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (section: string): string => {
        return `/headers/${encodeURIComponent(section ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection<emplace.Headers>,
        section: string,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(section)
        });
        assert.param("section")("string")(() => typia.assert(section));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * @controller HeadersController.store()
 * @path POST /headers/:section
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
    connection: IConnection<store.Headers>,
    section: string,
    input: store.Input,
): Promise<store.Output> {
    return !!connection.simulate
        ? store.simulate(
              connection,
              section,
              input,
          )
        : Fetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              store.ENCRYPTED,
              store.METHOD,
              store.path(section),
              input,
          );
}
export namespace store {
    export type Headers = Primitive<IHeaders>;
    export type Input = Primitive<IBbsArticle.IStore>;
    export type Output = Primitive<IBbsArticle>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/headers/:section";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (section: string): string => {
        return `/headers/${encodeURIComponent(section ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Output =>
        typia.random<Output>(g);
    export const simulate = async (
        connection: IConnection<store.Headers>,
        section: string,
        input: store.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(section)
        });
        assert.param("section")("string")(() => typia.assert(section));
        assert.body(() => typia.assert(input));
        return random(
            typeof connection.simulate === 'object' &&
                connection.simulate !== null
                ? connection.simulate
                : undefined
        );
    }
}

/**
 * @controller HeadersController.update()
 * @path PUT /headers/:section/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
    connection: IConnection,
    section: string,
    id: string,
    input: update.Input,
): Promise<void> {
    return !!connection.simulate
        ? update.simulate(
              connection,
              section,
              id,
              input,
          )
        : Fetcher.fetch(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              update.ENCRYPTED,
              update.METHOD,
              update.path(section, id),
              input,
          );
}
export namespace update {
    export type Input = Primitive<IBbsArticle.IStore>;

    export const METHOD = "PUT" as const;
    export const PATH: string = "/headers/:section/:id";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (section: string, id: string): string => {
        return `/headers/${encodeURIComponent(section ?? "null")}/${encodeURIComponent(id ?? "null")}`;
    }
    export const simulate = async (
        connection: IConnection,
        section: string,
        id: string,
        input: update.Input,
    ): Promise<void> => {
        const assert = NestiaSimulator.assert({
            method: METHOD,
            host: connection.host,
            path: path(section, id)
        });
        assert.param("section")("string")(() => typia.assert(section));
        assert.param("id")("uuid")(() => typia.assert(id));
        assert.body(() => typia.assert(input));
    }
}