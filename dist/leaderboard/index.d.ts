import { v1_LeaderboardCategory } from "./v1";
import { v2_LeaderboardCategory } from "./v2";
import { v3_LeaderboardCategory } from "./v3";
export declare class LeaderboardCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    v1: v1_LeaderboardCategory;
    v2: v2_LeaderboardCategory;
    v3: v3_LeaderboardCategory;
}
