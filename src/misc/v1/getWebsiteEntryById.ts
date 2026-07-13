import { doApiRequest } from "../../lib/request-handler";

export async function v1_getWebsiteEntryById(
  apiKey: string,
  dbId: string,
  countryCode: string,
) {
  return await doApiRequest<v1_getWebsiteEntryById_ResponseData[]>(
    apiKey,
    `/valorant/v1/website/${countryCode}/${dbId}`,
    {},
    { method: "GET" },
  );
}
export interface v1_getWebsiteEntryById_ResponseData {
  category: string;
  date: string;
  title: string;
  url: string;
  banner_url: string | null;
  content: string | null;
  description: string | null;
  external_link: string | null;
}
