import { doApiRequest } from "../../lib/request-handler";

export async function v2_getVlrEsportsEvents(
  apiKey: string,
  region?:
    | "north_america"
    | "europe"
    | "brazil"
    | "asia_pacific"
    | "korea"
    | "japan"
    | "latin_america"
    | "oceania"
    | "mena"
    | "gc"
    | "collegiate",
  type?: "completed" | "upcoming",
  page?: number,
) {
  return await doApiRequest<v2_getVlrEsportsEvents_ResponseData[]>(
    apiKey,
    "/valorant/v2/esports/vlr/events",
    { region, type, page: page?.toString() },
    { method: "GET" },
  );
}

export interface v2_getVlrEsportsEvents_ResponseData {
  dates: {
    end: string;
    start: string;
  };
  icon: string;
  id: number;
  price: string;
  region: string;
  slug: string;
  status: "completed" | "ongoing" | "upcoming" | "unknown";
  title: string;
}
