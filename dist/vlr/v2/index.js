"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v2_VlrCategory = void 0;
const getVlrEsportsEvents_1 = require("./getVlrEsportsEvents");
const getVlrEventMatches_1 = require("./getVlrEventMatches");
const getVlrMatchDetails_1 = require("./getVlrMatchDetails");
const getVlrPlayer_1 = require("./getVlrPlayer");
const getVlrPlayerMatches_1 = require("./getVlrPlayerMatches");
const getVlrTeam_1 = require("./getVlrTeam");
const getVlrTeamMatches_1 = require("./getVlrTeamMatches");
const getVlrTeamTransactions_1 = require("./getVlrTeamTransactions");
class v2_VlrCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-esports-events-v2
     * @param region
     * @param type
     * @param page
     * @returns Esports events retrieved successfully
     */
    getEsportsEvents(region, type, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getVlrEsportsEvents_1.v2_getVlrEsportsEvents)(this.apiKey, region, type, page);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-event-matches-v2
     * @param eventId
     * @returns Esports event matches retrieved successfully
     */
    getEventMatches(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getVlrEventMatches_1.v2_getVlrEventMatches)(this.apiKey, eventId);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-match-details-v2
     * @param matchId
     * @returns Esports match details retrieved successfully
     */
    getMatchDetails(matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getVlrMatchDetails_1.v2_getVlrMatchDetails)(this.apiKey, matchId);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-team-v2
     * @param teamId
     * @returns Esports team profile retrieved successfully
     */
    getTeam(teamId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getVlrTeam_1.v2_getVlrTeam)(this.apiKey, teamId);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-team-matches-v2
     * @param teamId
     * @param page
     * @returns Esports team matches retrieved successfully
     */
    getTeamMatches(teamId, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getVlrTeamMatches_1.v2_getVlrTeamMatches)(this.apiKey, teamId, page);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-team-transactions-v2
     * @param teamId
     * @returns Esports team transactions retrieved successfully
     */
    getTeamTransactions(teamId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getVlrTeamTransactions_1.v2_getVlrTeamTransactions)(this.apiKey, teamId);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-player-v2
     * @param player
     * @param timespan
     * @returns Esports player profile retrieved successfully
     */
    getPlayer(player, timespan) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getVlrPlayer_1.v2_getVlrPlayer)(this.apiKey, player, timespan);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-vlr-player-matches-v2
     * @param player
     * @param page
     * @returns Esports player matches retrieved successfully
     */
    getPlayerMatches(player, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getVlrPlayerMatches_1.v2_getVlrPlayerMatches)(this.apiKey, player, page);
        });
    }
}
exports.v2_VlrCategory = v2_VlrCategory;
