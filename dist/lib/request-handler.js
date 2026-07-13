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
exports.doApiRequest = doApiRequest;
const api_const_1 = require("../constants/api.const");
function doApiRequest(apiKey, url, query, init) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fetch(api_const_1.apiURL + url + Object.entries(query || {}).length
            ? "?"
            : "" +
                Object.entries(query || {})
                    .filter((e) => typeof e[1] === "string")
                    .map((e) => e[0] + "=" + e[1].toString())
                    .join("&"), Object.assign(Object.assign({}, init), { headers: Object.assign(Object.assign({}, init === null || init === void 0 ? void 0 : init.headers), { Authorization: apiKey }) })).then((res) => res.json());
    });
}
