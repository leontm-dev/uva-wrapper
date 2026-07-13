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
exports.v1_MiscCategory = void 0;
const getContent_1 = require("./getContent");
const getGameVersion_1 = require("./getGameVersion");
const getQueueStatus_1 = require("./getQueueStatus");
const getRawRiotAPIData_1 = require("./getRawRiotAPIData");
const getStatus_1 = require("./getStatus");
const getWebsiteContent_1 = require("./getWebsiteContent");
const getWebsiteEntryById_1 = require("./getWebsiteEntryById");
class v1_MiscCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-content-v1
     * @param locale Locale code (e.g., en-US, de-DE) - optional
     * @returns Content retrieved successfully
     */
    getContent(locale) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getContent_1.v1_getContent)(this.apiKey, locale);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-status-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @returns Status retrieved successfully
     */
    getStatus(affinity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getStatus_1.v1_getStatus)(this.apiKey, affinity);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-queue-status-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @returns Queue status retrieved successfully
     */
    getQueueStatus(affinity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getQueueStatus_1.v1_getQueueStatus)(this.apiKey, affinity);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-game-version-v1
     * @param affinity Region/affinity (e.g., na, eu, ap, kr)
     * @returns Version data retrieved successfully
     */
    getGameVersion(affinity) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getGameVersion_1.v1_getGameVersion)(this.apiKey, affinity);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-website-content-v1
     * @param countryCode Country code (e.g., en-us, de-de)
     * @param category Category filter (optional)
     * @returns Website content retrieved successfully
     */
    getWebsiteContent(countryCode, category) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getWebsiteContent_1.v1_getWebsiteContent)(this.apiKey, countryCode, category);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-website-entry-by-id-v1
     * @param dbId Database ID of the website entry
     * @param countryCode Country code (e.g., en-us, de-de)
     * @returns Website entry retrieved successfully
     */
    getWebsiteEntryById(dbId, countryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getWebsiteEntryById_1.v1_getWebsiteEntryById)(this.apiKey, dbId, countryCode);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-raw-riot-api-data-v1
     * @param region
     * @param type
     * @param value
     * @param platform
     * @param queries
     * @returns Raw Riot API data retrieved successfully
     */
    getRawRiotAPIData(region, type, value, platform, queries) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getRawRiotAPIData_1.v1_getRawRiotAPIData)(this.apiKey, region, type, value, platform, queries);
        });
    }
}
exports.v1_MiscCategory = v1_MiscCategory;
