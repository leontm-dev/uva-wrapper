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
exports.v1_PremierCategory = void 0;
const getPremierTeamById_1 = require("./getPremierTeamById");
const getPremierTeamByName_1 = require("./getPremierTeamByName");
const searchPremierTeams_1 = require("./searchPremierTeams");
class v1_PremierCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/search-premier-teams-v1
     * @param name Team name to search for (optional)
     * @param tag Team tag to search for (optional)
     * @param id Team UUID to search for (optional)
     * @param season Premier season id (optional)
     * @returns Premier team search results retrieved successfully
     */
    search(name, tag, id, season) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, searchPremierTeams_1.v1_searchPremierTeams)(this.apiKey, name, tag, id, season);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-by-id-v1
     * @param id Team UUID
     * @param season Premier season id (optional)
     * @param affinity Region/affinity for fallback resolution (optional)
     * @returns Premier team data retrieved successfully
     */
    getById(id, season, affinity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getPremierTeamById_1.v1_getPremierTeamById)(this.apiKey, id, season, affinity);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-by-name-v1
     * @param name Team name
     * @param tag Team tag
     * @param season Premier season id (optional)
     * @param affinity Region/affinity for fallback resolution (optional)
     * @returns Premier team data retrieved successfully
     */
    getByName(name, tag, season, affinity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getPremierTeamByName_1.v1_getPremierTeamByName)(this.apiKey, name, tag, season, affinity);
        });
    }
}
exports.v1_PremierCategory = v1_PremierCategory;
