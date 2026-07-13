import { DefaultErrorsResponse } from "../types/response.type";
export declare function getFeaturedStoreItems(apiKey: string, version: "v1" | "v2"): Promise<DefaultErrorsResponse | getFeaturedStoreItems_ResponseData>;
export interface getFeaturedStoreItems_ResponseData {
    FeaturedBundle: {
        Bundle: {
            CurrencyID: string;
            DataAssetID: string;
            DurationRemainingInSeconds: number;
            ID: string;
            Items: [
                {
                    BasePrice: number;
                    CurrencyID: string;
                    DiscountPercent: number;
                    DiscountedPrice: number;
                    IsPromoItem: boolean;
                    Item: {
                        Amount: number;
                        ItemID: string;
                        ItemTypeID: string;
                    };
                }
            ];
            TotalDiscountPercent: number;
            WholesaleOnly: boolean;
        };
        BundleRemainingDurationInSeconds: number;
        Bundles: [
            {
                CurrencyID: string;
                DataAssetID: string;
                DurationRemainingInSeconds: number;
                ID: string;
                Items: [
                    {
                        BasePrice: number;
                        CurrencyID: string;
                        DiscountPercent: number;
                        DiscountedPrice: number;
                        IsPromoItem: boolean;
                        Item: {
                            Amount: number;
                            ItemID: string;
                            ItemTypeID: string;
                        };
                    }
                ];
                TotalDiscountPercent: number;
                WholesaleOnly: boolean;
            }
        ];
    };
}
