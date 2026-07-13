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
exports.v1_PremierHistoryCategory = void 0;
const getPremierTeamHistoryById_1 = require("./getPremierTeamHistoryById");
const getPremierTeamHistoryByName_1 = require("./getPremierTeamHistoryByName");
class v1_PremierHistoryCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-history-by-name-v1
     * @param name Team name
     * @param tag Team tag
     * @param season Premier season id (optional)
     * @returns Premier team history retrieved successfully
     */
    getByName(name, tag, season) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getPremierTeamHistoryByName_1.v1_getPremierTeamHistoryByName)(this.apiKey, name, tag, season);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-premier-team-history-by-id-v1
     * @param id Team UUID
     * @param season Premier season id (optional)
     * @returns Premier team history retrieved successfully
     */
    getById(id, season) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getPremierTeamHistoryById_1.v1_getPremierTeamHistoryById)(this.apiKey, id, season);
        });
    }
}
exports.v1_PremierHistoryCategory = v1_PremierHistoryCategory;
