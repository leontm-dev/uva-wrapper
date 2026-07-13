import { v1_AccountCategory } from "./v1";
import { v2_AccountCategory } from "./v2";
export declare class AccountCategory {
    apiKey: string;
    constructor(apiKey: string);
    v1: v1_AccountCategory;
    v2: v2_AccountCategory;
}
