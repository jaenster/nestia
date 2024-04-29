/**
 * @packageDocumentation
 * @module api.functional.api.v3.websocket.calculate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { WebConnector } from "tgrid";
import type { Driver } from "tgrid";

import type { ICalculator } from "../../../../../structures/ICalculator";
import type { IListener } from "../../../../../structures/IListener";
import type { IPrecision } from "../../../../../structures/IPrecision";

export async function connect(
  connection: IConnection<connect.Header>,
  provider: connect.Provider,
): Promise<connect.Output> {
  const connector: WebConnector<
    connect.Header,
    connect.Provider,
    connect.Listener
  > = new WebConnector(connection.headers ?? ({} as any), provider);
  await connector.connect(
    `${connection.host}/${connect.path()}`
      .split("/")
      .filter((str) => !!str)
      .join("/"),
  );
  const driver: Driver<connect.Listener> = connector.getDriver();
  return {
    connector,
    driver,
  };
}
export namespace connect {
  export type Output = {
    connector: WebConnector<Header, Provider, Listener>;
    driver: Driver<Listener>;
  };
  export type Header = IPrecision;
  export type Provider = IListener;
  export type Listener = ICalculator;

  export const path = () => "/api/v3/websocket/calculate";
}
