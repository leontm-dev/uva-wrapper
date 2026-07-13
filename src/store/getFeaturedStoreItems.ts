import { doApiRequest } from "../lib/request-handler";
import { DefaultErrorsResponse } from "../types/response.type";

export async function getFeaturedStoreItems(
  apiKey: string,
  version: "v1" | "v2",
) {
  return (await doApiRequest(
    apiKey,
    `/${version}/store-featured`,
    {},
    { method: "GET" },
  )) as getFeaturedStoreItems_ResponseData | DefaultErrorsResponse;
}
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
        },
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
          },
        ];
        TotalDiscountPercent: number;
        WholesaleOnly: boolean;
      },
    ];
  };
}
