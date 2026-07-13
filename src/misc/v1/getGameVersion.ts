import { doApiRequest } from "../../lib/request-handler";

export async function v1_getGameVersion(apiKey: string, affinity: string) {
  return await doApiRequest<v1_getGameVersion_ResponseData[]>(
    apiKey,
    `/v1/version/${affinity}`,
    {},
    { method: "GET" },
  );
}
export interface v1_getGameVersion_ResponseData {
  branch: string;
  build_date: string;
  build_ver: string;
  last_checked: string;
  region: string;
  version: number;
  version_for_api: string;
}
