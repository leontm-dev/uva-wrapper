"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsportsCategory = void 0;
const v1_1 = require("./v1");
class EsportsCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.v1 = new v1_1.v1_EsportsCategory(this.apiKey);
    }
}
exports.EsportsCategory = EsportsCategory;
