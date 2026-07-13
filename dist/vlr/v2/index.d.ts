export declare class v2_VlrCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-esports-events-v2
     * @param region
     * @param type
     * @param page
     * @returns Esports events retrieved successfully
     */
    getEsportsEvents(region?: "north_america" | "europe" | "brazil" | "asia_pacific" | "korea" | "japan" | "latin_america" | "oceania" | "mena" | "gc" | "collegiate", type?: "completed" | "upcoming", page?: number): Promise<import("../../types/response.type").DefaultApiResponse<import("./getVlrEsportsEvents").v2_getVlrEsportsEvents_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-event-matches-v2
     * @param eventId
     * @returns Esports event matches retrieved successfully
     */
    getEventMatches(eventId: number): Promise<import("../../types/response.type").DefaultApiResponse<import("./getVlrEventMatches").v2_getVlrEventMatches_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-match-details-v2
     * @param matchId
     * @returns Esports match details retrieved successfully
     */
    getMatchDetails(matchId: number): Promise<import("../../types/response.type").DefaultApiResponse<import("./getVlrMatchDetails").v2_getVlrMatchDetails_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-team-v2
     * @param teamId
     * @returns Esports team profile retrieved successfully
     */
    getTeam(teamId: number): Promise<import("../../types/response.type").DefaultApiResponse<import("./getVlrTeam").v2_getVlrTeam_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-team-matches-v2
     * @param teamId
     * @param page
     * @returns Esports team matches retrieved successfully
     */
    getTeamMatches(teamId: number, page?: number): Promise<import("../../types/response.type").DefaultApiResponse<import("./getVlrTeamMatches").v2_getVlrTeamMatches_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-team-transactions-v2
     * @param teamId
     * @returns Esports team transactions retrieved successfully
     */
    getTeamTransactions(teamId: number): Promise<import("../../types/response.type").DefaultApiResponse<import("./getVlrTeamTransactions").v2_getVlrTeamTransactions_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-player-v2
     * @param player
     * @param timespan
     * @returns Esports player profile retrieved successfully
     */
    getPlayer(player: number, timespan?: "30d" | "60d" | "90d" | "all"): Promise<import("../../types/response.type").DefaultApiResponse<unknown> | import("../../types/response.type").DefaultErrorsResponse>;
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-player-matches-v2
     * @param player
     * @param page
     * @returns Esports player matches retrieved successfully
     */
    getPlayerMatches(player: number, page?: number): Promise<import("../../types/response.type").DefaultApiResponse<import("./getVlrPlayerMatches").v2_getVlrPlayerMatches_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
}
