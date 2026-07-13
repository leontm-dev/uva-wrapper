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
exports.v1_MMRCategory = void 0;
const getMMRByName_1 = require("./getMMRByName");
const getMMRByPuuid_1 = require("./getMMRByPuuid");
class v1_MMRCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-name-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @returns MMR data retrieved successfully
     */
    getByName(affinity, name, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getMMRByName_1.v1_getMMRByName)(this.apiKey, affinity, name, tag);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-mmr-by-puuid-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param puuid Player UUID
     * @returns MMR data retrieved successfully
     */
    getByPuuid(affinity, puuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getMMRByPuuid_1.v1_getMMRByPuuid)(this.apiKey, affinity, puuid);
        });
    }
}
exports.v1_MMRCategory = v1_MMRCategory;
