export declare function getStoreOffers(apiKey: string, version: "v1" | "v2"): Promise<import("../types/response.type").DefaultApiResponse<getStoreOffers_ResponseData> | import("../types/response.type").DefaultErrorsResponse>;
export interface getStoreOffers_ResponseData {
    Offers: {
        Cost: Record<string, number>;
        IsDirectPurchase: boolean;
        OfferID: string;
        Rewards: {
            ItemID: string;
            ItemTypeID: string;
            Quantity: number;
        }[];
        StartDate: string;
    }[];
    UpgradeCurrencyOffers: {
        DiscountedPercent: number;
        Offer: {
            Cost: Record<string, number>;
            IsDirectPurchase: boolean;
            OfferID: string;
            Rewards: {
                ItemID: string;
                ItemTypeID: string;
                Quantity: number;
            }[];
            StartDate: string;
        };
        OfferID: string;
        StorefrontItemID: string;
    }[];
}
