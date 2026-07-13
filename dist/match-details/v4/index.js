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
exports.v4_MatchDetailsCategory = void 0;
const getMatchDetails_1 = require("./getMatchDetails");
class v4_MatchDetailsCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-match-details-v4
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @param matchId Match UUID
     * @returns Match details retrieved successfully
     */
    get(affinity, matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getMatchDetails_1.v4_getMatchDetails)(this.apiKey, affinity, matchId);
        });
    }
}
exports.v4_MatchDetailsCategory = v4_MatchDetailsCategory;
