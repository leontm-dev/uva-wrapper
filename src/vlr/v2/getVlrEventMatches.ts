import { doApiRequest } from "../../lib/request-handler";

export async function v2_getVlrEventMatches(apiKey: string, eventId: number) {
  return await doApiRequest<v2_getVlrEventMatches_ResponseData[]>(
    apiKey,
    `/v2/esports/vlr/events/${eventId}/matches`,
    {},
    { method: "GET" },
  );
}
export interface v2_getVlrEventMatches_ResponseData {
  event: string;
  id: number;
  series: string;
  slug: string;
  tags: string[];
  teams: {
    is_winner: boolean;
    name: string;
    score: number | null;
  }[];
  date: string;
}
