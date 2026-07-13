import { doApiRequest } from "../../lib/request-handler";

export async function v1_getAccountByPuuid(
  apiKey: string,
  puuid: string,
  force?: boolean,
) {
  return doApiRequest<v1_getAccountByPuuid_ResponseData>(
    apiKey,
    `/valorant/v1/by-puuid/account/${puuid}`,
    { force: force ? (force ? "true" : "false") : undefined },
    { method: "GET" },
  );
}

export interface v1_getAccountByPuuid_ResponseData {
  account_level: number;
  card: {
    id: string;
    large: string;
    small: string;
    wide: string;
  };
  last_update: string;
  last_update_raw: number;
  name: string;
  puuid: string;
  region: string;
  tag: string;
}
