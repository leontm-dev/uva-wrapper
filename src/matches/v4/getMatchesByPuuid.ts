import { doApiRequest } from "../../lib/request-handler";

export async function v4_getMatchesByPuuid(
  apiKey: string,
  affinity: string,
  platform: string,
  puuid: string,
  mode?: string,
  map?: string,
  size?: number,
  start?: number,
) {
  return await doApiRequest<v4_getMatchesByPuuid_ResponseData[]>(
    apiKey,
    `/v4/by-puuid/matches/${affinity}/${platform}/${puuid}`,
    {
      mode,
      map,
      size: size?.toString(),
      start: start?.toString(),
    },
    { method: "GET" },
  );
}

export interface v4_getMatchesByPuuid_ResponseData {
  coaches: {
    puuid: string;
    team_id: string;
  }[];
  kills: {
    assistants: {
      name: string;
      puuid: string;
      tag: string;
      team: string;
    }[];
    killer: {
      name: string;
      puuid: string;
      tag: string;
      team: string;
    };
    location: {
      x: number;
      y: number;
    };
    player_locations: {
      location: {
        x: number;
        y: number;
      };
      player: {
        name: string;
        puuid: string;
        tag: string;
        team: string;
      };
      view_radians: number;
    }[];
    round: number;
    secondary_fire_mode: boolean;
    time_in_match_in_ms: number;
    time_in_round_in_ms: number;
    victim: {
      name: string;
      puuid: string;
      tag: string;
      team: string;
    };
    weapon: {
      id: string | null;
      name: string | null;
      type: string | null;
    };
  }[];
  metadata: {
    game_length_in_ms: number;
    game_version: string;
    is_completed: boolean;
    map: {
      id: string;
      name: string;
    };
    match_id: string;
    party_rr_penaltys: {
      party_id: string;
      penalty: number;
    }[];
    platform: string;
    queue: {
      id: string;
      mode_type: string | null;
      name: string | null;
    };
    season: {
      id: string;
      short: string;
    };
    started_at: string;
    cluster: string | null;
    premier: unknown;
    region: string | null;
  };
  observers: {
    account_level: number;
    card_id: string;
    name: string;
    party_id: string;
    puuid: string;
    session_playtime_in_ms: number;
    tag: string;
    title_id: string;
  }[];
  players: {
    ability_casts: {
      ability1: number | null;
      ability2: number | null;
      grenade: number | null;
      ultimate: number | null;
    };
    account_level: number;
    agent: {
      id: string;
      name: string;
    };
    behavior: {
      afk_rounds: number;
      friendly_fire: {
        incoming: number;
        outgoing: number;
      };
      rounds_in_spawn: number;
    };
    customization: {
      card: string;
      title: string;
      preferred_level_border: string | null;
    };
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
    name: string;
    party_id: string;
    platform: string;
    puuid: string;
    session_playtime_in_ms: number;
    stats: {
      assists: number;
      bodyshots: number;
      damage: {
        dealt: number;
        received: number;
      };
      deaths: number;
      headshots: number;
      kills: number;
      legshots: number;
      score: number;
    };
    tag: string;
    team_id: string;
    tier: {
      id: number;
      name: string;
    };
  }[];
  rounds: {
    ceremony: string;
    id: number;
    result: string;
    stats: {
      ability_casts: {
        ability_1: number | null;
        ability_2: number | null;
        grenade: number | null;
        ultimate: number | null;
      };
      damage_events: {
        bodyshots: number;
        damage: number;
        headshots: number;
        legshots: number;
        player: {
          name: string;
          puuid: string;
          tag: string;
          team: string;
        };
      }[];
      economy: {
        loadout_value: number;
        remaining: number;
        armor: {
          id: string;
          name: string | null;
        } | null;
        weapon: {
          id: string | null;
          name: string | null;
          type: string | null;
        } | null;
      };
      player: {
        name: string;
        puuid: string;
        tag: string;
        team: string;
      };
      received_penalty: boolean;
      stats: {
        bodyshots: number;
        headshots: number;
        kills: number;
        legshots: number;
        score: number;
      };
      stayed_in_spawn: boolean;
      was_afk: boolean;
    }[];
    winning_team: string;
    defuse: {
      location: {
        x: number;
        y: number;
      };
      player: {
        name: string;
        puuid: string;
        tag: string;
        team: string;
      };
      player_locations: {
        location: {
          x: number;
          y: number;
        };
        player: {
          name: string;
          puuid: string;
          tag: string;
          team: string;
        };
        view_radians: number;
      }[];
      round_time_in_ms: number;
    } | null;
    plant: {
      location: {
        x: number;
        y: number;
      };
      player: {
        name: string;
        puuid: string;
        tag: string;
        team: string;
      };
      player_locations: {
        location: {
          x: number;
          y: number;
        };
        player: {
          name: string;
          puuid: string;
          tag: string;
          team: string;
        };
        view_radians: number;
      }[];
      round_time_in_ms: number;
      site: string;
    } | null;
  }[];
  teams: {
    rounds: {
      lost: number;
      won: number;
    };
    team_id: string;
    won: boolean;
    premier_roster: {
      customization: {
        icon: string;
        image: string;
        primary_color: string;
        secondary_color: string;
        tertiary_color: string;
      } | null;
      id: string;
      members: string[];
      name: string;
      tag: string;
    };
  }[];
}
