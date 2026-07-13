import { doApiRequest } from "../../lib/request-handler";

export async function v2_getAccountByPuuid(
  apiKey: string,
  puuid: string,
  force?: boolean,
) {
  return doApiRequest<v2_getAccountByPuuid_ResponseData>(
    apiKey,
    `/v2/by-puuid/account/${puuid}`,
    { force: force ? (force ? "true" : "false") : undefined },
    { method: "GET" },
  );
}

export interface v2_getAccountByPuuid_ResponseData {
  account_level: number;
  card: string;
  name: string;
  platforms: string[];
  puuid: string;
  region: string;
  tag: string;
  title: string;
  updated_at: string;
}
