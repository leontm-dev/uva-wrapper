import { v1_MMRCategory } from "./v1";
import { v2_MMRCategory } from "./v2";
import { v3_MMRCategory } from "./v3";
export declare class MMRCategory {
    private readonly apiKey;
    constructor(apiKey: string);
    v1: v1_MMRCategory;
    v2: v2_MMRCategory;
    v3: v3_MMRCategory;
}
