"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnofficialValorantAPI = void 0;
const account_1 = require("./account");
const crosshair_1 = require("./crosshair");
const esports_1 = require("./esports");
const leaderboard_1 = require("./leaderboard");
const match_details_1 = require("./match-details");
const matches_1 = require("./matches");
const misc_1 = require("./misc");
const mmr_1 = require("./mmr");
const mmr_history_1 = require("./mmr-history");
const premier_1 = require("./premier");
const premier_history_1 = require("./premier-history");
const premier_leaderboard_1 = require("./premier-leaderboard");
const premium_1 = require("./premium");
const store_1 = require("./store");
const stored_matches_1 = require("./stored-matches");
const stored_mmr_history_1 = require("./stored-mmr-history");
const vlr_1 = require("./vlr");
class UnofficialValorantAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.Account = new account_1.AccountCategory(this.apiKey);
        this.Crosshair = new crosshair_1.CrosshairCategory(this.apiKey);
        this.Esports = new esports_1.EsportsCategory(this.apiKey);
        this.Leaderboard = new leaderboard_1.LeaderboardCategory(this.apiKey);
        this.Match_Details = new match_details_1.MatchDetailsCategory(this.apiKey);
        this.Matches = new matches_1.MatchesCategory(this.apiKey);
        this.Misc = new misc_1.MiscCategory(this.apiKey);
        this.MMR = new mmr_1.MMRCategory(this.apiKey);
        this.MMR_History = new mmr_history_1.MMRHistoryCategory(this.apiKey);
        this.Premier = new premier_1.PremierCategory(this.apiKey);
        this.Premier_History = new premier_history_1.PremierHistoryCategory(this.apiKey);
        this.Premier_Leaderboard = new premier_leaderboard_1.PremierLeaderboardCategory(this.apiKey);
        this.Premium = new premium_1.PremiumCategory(this.apiKey);
        this.Store = new store_1.StoreCategory(this.apiKey);
        this.Stored_Matches = new stored_matches_1.StoredMatchesCategory(this.apiKey);
        this.Stored_MMR_History = new stored_mmr_history_1.StoredMMRHistoryCategory(this.apiKey);
        this.Vlr = new vlr_1.VlrCategory(this.apiKey);
    }
}
exports.UnofficialValorantAPI = UnofficialValorantAPI;
