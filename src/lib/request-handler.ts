import { apiURL } from "../constants/api.const";
import {
  DefaultApiResponse,
  DefaultErrorsResponse,
} from "../types/response.type";

export async function doApiRequest<T>(
  apiKey: string,
  url: string,
  query?: Record<string, string | undefined>,
  init?: RequestInit & { method: "GET" | "POST" | "PUT" | "DELETE" },
): Promise<DefaultApiResponse<T> | DefaultErrorsResponse> {
  return await fetch(
    apiURL + url + Object.entries(query || {}).length
      ? "?"
      : "" +
          Object.entries(query || {})
            .filter((e) => typeof e[1] === "string")
            .map((e) => e[0] + "=" + e[1]!.toString())
            .join("&"),
    {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: apiKey,
      },
    },
  ).then((res) => res.json());
}
