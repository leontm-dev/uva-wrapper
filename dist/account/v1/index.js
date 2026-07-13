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
exports.v1_AccountCategory = void 0;
const getAccount_1 = require("./getAccount");
const getAccountByPuuid_1 = require("./getAccountByPuuid");
class v1_AccountCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-account-by-puuid-v1
     * @param puuid Player UUID
     * @param force Bypass cache and refresh (optional)
     * @returns Account data retrieved successfully
     */
    getByPuuid(puuid, force) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getAccountByPuuid_1.v1_getAccountByPuuid)(this.apiKey, puuid, force);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-account-v1
     * @param name Riot ID name
     * @param tag Riot ID tag
     * @param force Bypass cache and refresh (optional)
     * @returns Account data retrieved successfully
     */
    get(name, tag, force) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getAccount_1.v1_getAccount)(this.apiKey, name, tag, force);
        });
    }
}
exports.v1_AccountCategory = v1_AccountCategory;
