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
exports.v1_CrosshairCategory = void 0;
const generateCrosshairImage_1 = require("./generateCrosshairImage");
class v1_CrosshairCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/generate-crosshair-image-v1
     * @param id Crosshair code
     * @returns Crosshair image generated successfully
     */
    generateImage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, generateCrosshairImage_1.v1_generateCrosshairImage)(this.apiKey, id);
        });
    }
}
exports.v1_CrosshairCategory = v1_CrosshairCategory;
