import { DefaultErrorsResponse } from "../../types/response.type";
export declare function v2_getLeaderboard(apiKey: string, affinity: string, season?: string, name?: string, tag?: string, puuid?: string): Promise<DefaultErrorsResponse | v2_getLeaderboard_ResponseData>;
export interface v2_getLeaderboard_ResponseData {
    immortal_1_threshold: number;
    immortal_2_threshold: number;
    immortal_3_threshold: number;
    last_update: number;
    next_update: number;
    players: {
        IsAnonymized: boolean;
        IsBanned: boolean;
        PlayerCardID: string;
        TitleID: string;
        competitiveTier: number;
        gameName: string;
        leaderboardRank: number;
        numberOfWins: number;
        rankedRating: number;
        tagLine: string;
        puuid: string | null;
    }[];
    radiant_threshold: number;
    total_players: number;
}
