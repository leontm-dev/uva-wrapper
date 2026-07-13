export declare function v2_getVlrMatchDetails(apiKey: string, matchId: number): Promise<import("../../types/response.type").DefaultApiResponse<v2_getVlrMatchDetails_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v2_getVlrMatchDetails_ResponseData {
    games: {
        map: string;
        rounds: {
            round: number;
            winning_site: string;
            winning_team: number;
        }[];
        teams: {
            is_winner: boolean;
            name: string;
            players: {
                agent: string;
                player: {
                    id: number;
                    name: string;
                    nation: string;
                    slug: string;
                };
                stats: {
                    acs: number | null;
                    adr: number | null;
                    assists: number | null;
                    deaths: number | null;
                    first_deaths: number | null;
                    first_kills: number | null;
                    fk_diff: number | null;
                    hs_pct: number | null;
                    kast: number | null;
                    kd_diff: number | null;
                    kills: number | null;
                    rating: number | null;
                };
            }[];
            score: number | null;
            score_ct: number | null;
            score_t: number | null;
        }[];
        duration_in_s: number | null;
        picked_by: number | null;
    }[];
    head_to_head: {
        date: string;
        event: {
            icon: string;
            name: string;
            series: string;
        };
        match: {
            id: number;
            slug: string;
        };
        score: {
            team_1: number;
            team_2: number;
            winner_team: number;
        };
    }[];
    metadata: {
        date: string;
        event: {
            icon: string;
            id: number;
            series: string;
            slug: string;
            title: string;
        };
        format: string;
        note: string;
        patch: string;
        status: string;
    };
    past_matches: {
        matches: {
            date: string;
            is_win: boolean;
            match: {
                id: number;
                slug: string;
            };
            opponent: {
                logo: string;
                name: string;
            };
            score: {
                against: number;
                for: number;
            };
        }[];
        team: number;
    }[];
    streams: {
        link: string;
        name: string;
    }[];
    teams: {
        icon: string;
        id: number;
        name: string;
        slug: string;
        url: string;
        score: number | null;
    }[];
    vods: {
        link: string;
        name: string;
    }[];
    economy: {
        teams: {
            eco: {
                rounds: number;
                won: number;
            };
            full_buy: {
                rounds: number;
                won: number;
            };
            pistol_won: number;
            semi_eco: {
                rounds: number;
                won: number;
            };
            team_name: string;
        }[];
    } | null;
    performance: {
        kill_matrix: {
            deaths: number;
            killer: number;
            kills: number;
            victim: number;
        }[];
        player_performances: {
            clutches: {
                "1v1": number;
                "1v2": number;
                "1v3": number;
                "1v4": number;
                "1v5": number;
            };
            defuses: number;
            econ_rating: number;
            multi_kills: {
                "2k": number;
                "3k": number;
                "4k": number;
                "5k": number;
            };
            plants: number;
            player: {
                id: number;
                name: string;
            };
        }[];
    } | null;
}
