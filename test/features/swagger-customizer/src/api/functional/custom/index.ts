/**
 * @packageDocumentation
 * @module api.functional.custom
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

/**
 * @controller CustomController.customize
 * @path GET /custom/:key/:value/customize
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function customize(
  connection: IConnection,
  ___key: number,
  ___value: string,
): Promise<customize.Output> {
  return PlainFetcher.fetch(connection, {
    ...customize.METADATA,
    template: customize.METADATA.path,
    path: customize.path(___key, ___value),
  });
}
export namespace customize {
  export type Output = Primitive<string>;

  export const METADATA = {
    method: "GET",
    path: "/custom/:key/:value/customize",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (___key: number, ___value: string) =>
    `/custom/${encodeURIComponent(___key ?? "null")}/${encodeURIComponent(___value ?? "null")}/customize`;
}

/**
 * @controller CustomController.normal
 * @path GET /custom/:id/normal
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function normal(
  connection: IConnection,
  id: string & Format<"uuid">,
): Promise<normal.Output> {
  return PlainFetcher.fetch(connection, {
    ...normal.METADATA,
    template: normal.METADATA.path,
    path: normal.path(id),
  });
}
export namespace normal {
  export type Output = Primitive<string>;

  export const METADATA = {
    method: "GET",
    path: "/custom/:id/normal",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = (id: string & Format<"uuid">) =>
    `/custom/${encodeURIComponent(id ?? "null")}/normal`;
}
