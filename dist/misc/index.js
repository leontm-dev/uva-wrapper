"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscCategory = void 0;
const v1_1 = require("./v1");
class MiscCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_MiscCategory(this.apiKey);
    }
}
exports.MiscCategory = MiscCategory;
