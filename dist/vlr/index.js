"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VlrCategory = void 0;
const v2_1 = require("./v2");
class VlrCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v2 = new v2_1.v2_VlrCategory(this.apiKey);
    }
}
exports.VlrCategory = VlrCategory;
