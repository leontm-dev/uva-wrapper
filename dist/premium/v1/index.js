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
exports.v1_PremiumCategory = void 0;
const addPremiumWebhookUser_1 = require("./addPremiumWebhookUser");
const deletePremiumWebhookUser_1 = require("./deletePremiumWebhookUser");
const getPremiumWebhookSettings_1 = require("./getPremiumWebhookSettings");
const updatePremiumWebhookUser_1 = require("./updatePremiumWebhookUser");
class v1_PremiumCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/premium/get-premium-webhook-settings
     * @returns Premium webhook settings and tracked users retrieved successfully
     */
    getWebhookSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getPremiumWebhookSettings_1.v1_getPremiumWebhookSettings)(this.apiKey);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/premium/add-premium-webhook-user
     * @param enabled
     * @param events
     * @param name
     * @param puuid
     * @param tag
     * @returns Tracked user added successfully
     */
    addWebhookUser(enabled, events, name, puuid, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, addPremiumWebhookUser_1.v1_addPremiumWebhookUser)(this.apiKey, enabled, events, name, puuid, tag);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/premium/update-premium-webhook-user
     * @param id Tracked user id
     * @param events
     * @returns Tracked user updated successfully
     */
    updateWebhookUser(id, events) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, updatePremiumWebhookUser_1.v1_updatePremiumWebhookUser)(this.apiKey, id, events);
        });
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/premium/delete-premium-webhook-user
     * @param id Tracked user id
     * @returns Tracked user removed successfully
     */
    deleteWebhookUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, deletePremiumWebhookUser_1.v1_deletePremiumWebhookUser)(this.apiKey, id);
        });
    }
}
exports.v1_PremiumCategory = v1_PremiumCategory;
