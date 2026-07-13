import { v3_MatchesCategory } from "./v3";
import { v4_MatchesCategory } from "./v4";
export declare class MatchesCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    v3: v3_MatchesCategory;
    v4: v4_MatchesCategory;
}
