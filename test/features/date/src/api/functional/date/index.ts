/**
 * @packageDocumentation
 * @module api.functional.date
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher } from "@nestia/fetcher";
import type { IConnection, Primitive } from "@nestia/fetcher";

import type { IDateDefined } from "./../../structures/IDateDefined";

/**
 * @controller DateController.get()
 * @path GET /date
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(
    connection: IConnection,
): Promise<get.Output> {
    return Fetcher.fetch(
        connection,
        get.ENCRYPTED,
        get.METHOD,
        get.path(),
    );
}
export namespace get {
    export type Output = Primitive<IDateDefined>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/date";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export const path = (): string => {
        return `/date`;
    }
}