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
exports.v3_MMRCategory = void 0;
const getMMRByName_1 = require("./getMMRByName");
const getMMRByPuuid_1 = require("./getMMRByPuuid");
class v3_MMRCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-name-v3
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @returns MMR data retrieved successfully
     */
    getByName(affinity, platform, name, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getMMRByName_1.v3_getMMRByName)(this.apiKey, affinity, platform, name, tag);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-puuid-v3
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param platform Platform (pc, console)
     * @param puuid Player UUID
     * @returns MMR data retrieved successfully
     */
    getByPuuid(affinity, platform, puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getMMRByPuuid_1.v3_getMMRByPuuid)(this.apiKey, affinity, platform, puuid);
        });
    }
}
exports.v3_MMRCategory = v3_MMRCategory;
