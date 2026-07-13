import { v2_MatchDetailsCategory } from "./v2";
import { v4_MatchDetailsCategory } from "./v4";
export declare class MatchDetailsCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    v2: v2_MatchDetailsCategory;
    v4: v4_MatchDetailsCategory;
}
