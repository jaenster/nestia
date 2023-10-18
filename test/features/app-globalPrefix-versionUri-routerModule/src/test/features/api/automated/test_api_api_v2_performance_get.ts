import typia from "typia";

import api from "../../../../api";
import type { IPerformance } from "../../../../api/structures/IPerformance";

export const test_api_api_v2_performance_get = async (
    connection: api.IConnection
): Promise<void> => {
    const output = await api.functional.api.v2.performance.get(
        connection,
    );
    typia.assert(output);
};