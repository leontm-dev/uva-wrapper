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
exports.v1_MMRHistoryCategory = void 0;
const getMMRHistoryByName_1 = require("./getMMRHistoryByName");
const getMMRHistoryByPuuid_1 = require("./getMMRHistoryByPuuid");
class v1_MMRHistoryCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-history-by-name-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @returns MMR history retrieved successfully
     */
    getByName(affinity, name, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getMMRHistoryByName_1.v1_getMMRHistoryByName)(this.apiKey, affinity, name, tag);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-history-by-puuid-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param puuid Player UUID
     * @returns MMR history retrieved successfully
     */
    getByPuuid(affinity, puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getMMRHistoryByPuuid_1.v1_getMMRHistoryByPuuid)(this.apiKey, affinity, puuid);
        });
    }
}
exports.v1_MMRHistoryCategory = v1_MMRHistoryCategory;
