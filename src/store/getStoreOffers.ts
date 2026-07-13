import { doApiRequest } from "../lib/request-handler";

export async function getStoreOffers(apiKey: string, version: "v1" | "v2") {
  return await doApiRequest<getStoreOffers_ResponseData>(
    apiKey,
    `/${version}/store-offers`,
    {},
    { method: "GET" },
  );
}
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
