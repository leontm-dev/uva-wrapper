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
exports.StoreCategory = void 0;
const getFeaturedStoreItems_1 = require("./getFeaturedStoreItems");
const getStoreOffers_1 = require("./getStoreOffers");
class StoreCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-featured-store-items
     * @param version API version (v1, v2)
     * @returns Store featured items retrieved successfully
     */
    getFeaturedItems(version) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getFeaturedStoreItems_1.getFeaturedStoreItems)(this.apiKey, version);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-store-offers
     * @param version API version (v1, v2)
     * @returns Store offers retrieved successfully
     */
    getOffers(version) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getStoreOffers_1.getStoreOffers)(this.apiKey, version);
        });
    }
}
exports.StoreCategory = StoreCategory;
