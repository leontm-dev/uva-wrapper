import { doApiRequest } from "../../lib/request-handler";

export async function v1_getLeaderboard(
  apiKey: string,
  affinity: string,
  season?: string,
  name?: string,
  tag?: string,
) {
  return await doApiRequest<unknown>(
    apiKey,
    `/v1/leaderboard/${affinity}`,
    { season, name, tag },
    { method: "GET" },
  );
}
export interface v1_getLeaderboard {}
