export declare function v3_getMatchesByName(apiKey: string, affinity: string, name: string, tag: string, mode?: "Competitive" | "Unrated" | "Custom" | "Practice" | "Unknown", map?: string, size?: number): Promise<import("../../types/response.type").DefaultApiResponse<v3_getMatchesByName_ResponseData[]> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v3_getMatchesByName_ResponseData {
    coaches: {
        puuid: string;
        team: string;
    }[];
    is_available: boolean;
    kills: {
        assistants: {
            assistant_display_name: string;
            assistant_puuid: string;
            assistant_team: string;
        }[];
        damage_weapon_assets: {
            display_icon: string | null;
            killfeed_icon: string | null;
        };
        damage_weapon_id: string;
        kill_time_in_match: number;
        kill_time_in_round: number;
        killer_display_name: string;
        killer_puuid: string;
        killer_team: string;
        player_locations_on_kill: {
            location: {
                x: number;
                y: number;
            };
            player_display_name: string;
            player_puuid: string;
            player_team: string;
            view_radians: number;
        }[];
        round: number;
        secondary_fire_mode: boolean;
        victim_death_location: {
            x: number;
            y: number;
        };
        victim_display_name: string;
        victim_puuid: string;
        victim_team: string;
        damage_weapon_name: string | null;
    }[];
    observers: {
        level: number;
        name: string;
        party_id: string;
        platform: {
            os: {
                name: string;
                version: string;
            };
            type: string;
        };
        player_card: string;
        player_title: string;
        puuid: string;
        session_playtime: {
            milliseconds: number;
            minutes: number;
            seconds: number;
        };
        tag: string;
        team: string;
    }[];
    rounds: {
        bomb_defused: boolean;
        bomb_planted: boolean;
        defuse_events: {
            defuse_location: {
                x: number;
                y: number;
            } | null;
            defuse_time_in_round: number | null;
            defused_by: {
                display_name: string;
                puuid: string;
                team: string;
            } | null;
            player_locations_on_defuse: {
                location: {
                    x: number;
                    y: number;
                };
                player_display_name: string;
                player_puuid: string;
                player_team: string;
                view_radians: number;
            }[] | null;
        };
        end_type: string;
        plant_events: {
            plant_location: {
                x: number;
                y: number;
            } | null;
            plant_site: string | null;
            plant_time_in_round: number | null;
            planted_by: {
                display_name: string;
                puuid: string;
                team: string;
            } | null;
            player_locations_on_plant: {
                location: {
                    x: number;
                    y: number;
                };
                player_display_name: string;
                player_puuid: string;
                player_team: string;
                view_radians: number;
            }[] | null;
        };
        player_stats: {
            ability_casts: {
                c_casts: number | null;
                e_casts: number | null;
                q_casts: number | null;
                x_casts: number | null;
            };
            bodyshots: number;
            damage: number;
            damage_events: {
                bodyshots: number;
                damage: number;
                headshots: number;
                legshots: number;
                receiver_display_name: string;
                receiver_puuid: string;
                receiver_team: string;
            }[];
            economy: {
                armor: {
                    assets: {
                        display_icon: string | null;
                    };
                    id: string | null;
                    name: string | null;
                };
                loadout_value: number;
                remaining: number;
                spent: number;
                weapon: {
                    assets: {
                        display_icon: string | null;
                        killfeed_icon: string | null;
                    };
                    id: string | null;
                    name: string | null;
                };
            };
            headshots: number;
            kill_events: {
                assistants: {
                    assistant_display_name: string;
                    assistant_puuid: string;
                    assistant_team: string;
                }[];
                damage_weapon_assets: {
                    display_icon: string | null;
                    killfeed_icon: string | null;
                };
                damage_weapon_id: string;
                kill_time_in_match: number;
                kill_time_in_round: number;
                killer_display_name: string;
                killer_puuid: string;
                killer_team: string;
                player_locations_on_kill: {
                    location: {
                        x: number;
                        y: number;
                    };
                    player_display_name: string;
                    player_puuid: string;
                    player_team: string;
                    view_radians: number;
                }[];
                secondary_fire_mode: boolean;
                victim_death_location: {
                    x: number;
                    y: number;
                };
                victim_display_name: string;
                victim_puuid: string;
                victim_team: string;
                damage_weapon_name: string | null;
            }[];
            kills: number;
            legshots: number;
            player_display_name: string;
            player_puuid: string;
            player_team: string;
            score: number;
            stayed_in_spawn: boolean;
            was_afk: boolean;
            was_penalized: boolean;
        }[];
        winning_team: string;
    }[];
    metadata: {
        game_length: number;
        game_start: number;
        game_start_patched: string;
        game_version: string;
        matchid: string;
        mode_id: string;
        platform: string;
        premier_info: {
            matchup_id: string;
            tournament_id: string;
        };
        rounds_played: number;
        season_id: string;
        cluster: string | null;
        map: string | null;
        mode: string | null;
        queue: string | null;
        region: string | null;
    } | null;
    players: {
        all_players: {
            ability_casts: {
                c_cast: number | null;
                e_cast: number | null;
                q_cast: number | null;
                x_cast: number | null;
            };
            assets: {
                agent: {
                    bust: string;
                    full: string;
                    killfeed: string;
                    small: string;
                };
                card: {
                    large: string;
                    small: string;
                    wide: string;
                };
            };
            behavior: {
                afk_rounds: number;
                friendly_fire: {
                    incoming: number | null;
                    outgoing: number | null;
                };
                rounds_in_spawn: number | null;
            };
            currenttier: number;
            currenttier_patched: string;
            damage_made: number;
            damage_received: number;
            economy: {
                loadout_value: {
                    average: number;
                    overall: number;
                };
                spent: {
                    average: number;
                    overall: number;
                };
            };
            level: number;
            name: string;
            party_id: string;
            platform: {
                os: {
                    name: string;
                    version: string;
                };
                type: string;
            };
            player_card: string;
            player_title: string;
            puuid: string;
            session_playtime: {
                milliseconds: number;
                minutes: number;
                seconds: number;
            };
            stats: {
                assists: number;
                bodyshots: number;
                deaths: number;
                headshots: number;
                kills: number;
                legshots: number;
                score: number;
            };
            tag: string;
            team: string;
            character: string | null;
        }[];
        blue: {
            ability_casts: {
                c_cast: number | null;
                e_cast: number | null;
                q_cast: number | null;
                x_cast: number | null;
            };
            assets: {
                agent: {
                    bust: string;
                    full: string;
                    killfeed: string;
                    small: string;
                };
                card: {
                    large: string;
                    small: string;
                    wide: string;
                };
            };
            behavior: {
                afk_rounds: number;
                friendly_fire: {
                    incoming: number | null;
                    outgoing: number | null;
                };
                rounds_in_spawn: number | null;
            };
            currenttier: number;
            currenttier_patched: string;
            damage_made: number;
            damage_received: number;
            economy: {
                loadout_value: {
                    average: number;
                    overall: number;
                };
                spent: {
                    average: number;
                    overall: number;
                };
            };
            level: number;
            name: string;
            party_id: string;
            platform: {
                os: {
                    name: string;
                    version: string;
                };
                type: string;
            };
            player_card: string;
            player_title: string;
            puuid: string;
            session_playtime: {
                milliseconds: number;
                minutes: number;
                seconds: number;
            };
            stats: {
                assists: number;
                bodyshots: number;
                deaths: number;
                headshots: number;
                kills: number;
                legshots: number;
                score: number;
            };
            tag: string;
            team: string;
            character: string | null;
        }[];
        red: {
            ability_casts: {
                c_cast: number | null;
                e_cast: number | null;
                q_cast: number | null;
                x_cast: number | null;
            };
            assets: {
                agent: {
                    bust: string;
                    full: string;
                    killfeed: string;
                    small: string;
                };
                card: {
                    large: string;
                    small: string;
                    wide: string;
                };
            };
            behavior: {
                afk_rounds: number;
                friendly_fire: {
                    incoming: number | null;
                    outgoing: number | null;
                };
                rounds_in_spawn: number | null;
            };
            currenttier: number;
            currenttier_patched: string;
            damage_made: number;
            damage_received: number;
            economy: {
                loadout_value: {
                    average: number;
                    overall: number;
                };
                spent: {
                    average: number;
                    overall: number;
                };
            };
            level: number;
            name: string;
            party_id: string;
            platform: {
                os: {
                    name: string;
                    version: string;
                };
                type: string;
            };
            player_card: string;
            player_title: string;
            puuid: string;
            session_playtime: {
                milliseconds: number;
                minutes: number;
                seconds: number;
            };
            stats: {
                assists: number;
                bodyshots: number;
                deaths: number;
                headshots: number;
                kills: number;
                legshots: number;
                score: number;
            };
            tag: string;
            team: string;
            character: string | null;
        }[];
    } | null;
    teams: {
        blue: {
            has_won: boolean | null;
            roster: {
                customization: {
                    icon: string;
                    image: string;
                    primary_color: string;
                    secondary_color: string;
                    tertiary_color: string;
                };
                id: string;
                members: string[];
                name: string;
                tag: string;
            } | null;
            rounds_lost: number | null;
            rounds_won: number | null;
        };
        red: {
            has_won: boolean | null;
            roster: {
                customization: {
                    icon: string;
                    image: string;
                    primary_color: string;
                    secondary_color: string;
                    tertiary_color: string;
                };
                id: string;
                members: string[];
                name: string;
                tag: string;
            } | null;
            rounds_lost: number | null;
            rounds_won: number | null;
        };
    };
}
