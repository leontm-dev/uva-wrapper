import { v1_MMRHistoryCategory } from "./v1";
import { v2_MMRHistoryCategory } from "./v2";
export declare class MMRHistoryCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    v1: v1_MMRHistoryCategory;
    v2: v2_MMRHistoryCategory;
}
