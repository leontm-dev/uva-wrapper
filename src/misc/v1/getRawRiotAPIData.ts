import { doApiRequest } from "../../lib/request-handler";

export async function v1_getRawRiotAPIData(
  apiKey: string,
  region: string,
  type: string,
  value: string | string[],
  platform: string | null,
  queries: string | null,
) {
  return await doApiRequest<unknown[]>(
    apiKey,
    "/v1/raw",
    {},
    {
      method: "POST",
      body: JSON.stringify({ region, type, value, platform, queries }),
    },
  );
}
