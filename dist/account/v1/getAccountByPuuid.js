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
exports.v1_getAccountByPuuid = v1_getAccountByPuuid;
const request_handler_1 = require("../../lib/request-handler");
function v1_getAccountByPuuid(apiKey, puuid, force) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, request_handler_1.doApiRequest)(apiKey, `/valorant/v1/by-puuid/account/${puuid}`, { force: force ? (force ? "true" : "false") : undefined }, { method: "GET" });
    });
}
