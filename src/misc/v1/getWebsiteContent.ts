import { doApiRequest } from "../../lib/request-handler";

export async function v1_getWebsiteContent(
  apiKey: string,
  countryCode: string,
  category?: string,
) {
  return await doApiRequest<v1_getWebsiteContent_ResponseData[]>(
    apiKey,
    `/valorant/v1/website/${countryCode}`,
    { category },
    { method: "GET" },
  );
}
export interface v1_getWebsiteContent_ResponseData {
  category: string;
  date: string;
  id: string;
  title: string;
  url: string;
  banner_url: string | null;
  description: string | null;
  external_link: string | null;
}
