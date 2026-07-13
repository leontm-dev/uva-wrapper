import { v1_StoredMMRHistoryCategory } from "./v1";
import { v2_StoredMMRHistoryCategory } from "./v2";
export declare class StoredMMRHistoryCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    v1: v1_StoredMMRHistoryCategory;
    v2: v2_StoredMMRHistoryCategory;
}
