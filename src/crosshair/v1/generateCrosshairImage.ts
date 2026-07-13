import { doApiRequest } from "../../lib/request-handler";

export async function v1_generateCrosshairImage(apiKey: string, id?: string) {
  return await doApiRequest(
    apiKey,
    "/valorant/v1/crosshair/generate",
    { id },
    { method: "GET" },
  );
}
