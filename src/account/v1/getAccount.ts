import { doApiRequest } from "../../lib/request-handler";

export async function v1_getAccount(
  apiKey: string,
  name: string,
  tag: string,
  force?: boolean,
) {
  return await doApiRequest<v1_getAccount_ResponseData>(
    apiKey,
    `/v1/account/${name}/${tag}`,
    { force: force ? (force ? "true" : "false") : undefined },
    { method: "GET" },
  );
}

export interface v1_getAccount_ResponseData {
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
