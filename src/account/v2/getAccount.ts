import { doApiRequest } from "../../lib/request-handler";

export async function v2_getAccount(
  apiKey: string,
  name: string,
  tag: string,
  force?: boolean,
) {
  return await doApiRequest<v2_getAccount_ResponseData>(
    apiKey,
    `/valorant/v2/account/${name}/${tag}`,
    { force: force ? (force ? "true" : "false") : undefined },
    { method: "GET" },
  );
}

export interface v2_getAccount_ResponseData {
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
