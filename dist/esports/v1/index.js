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
exports.v1_EsportsCategory = void 0;
const getEsportsSchedule_1 = require("./getEsportsSchedule");
class v1_EsportsCategory {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * @link https://docs.henrikdev.xyz/api-reference/valorant/get-esports-schedule-v1
     * @param region
     * @param league
     * @returns Esports schedule retrieved successfully
     */
    getSchedule(region, league) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, getEsportsSchedule_1.v1_getEsportsSchedule)(this.apiKey, region, league);
        });
    }
}
exports.v1_EsportsCategory = v1_EsportsCategory;
