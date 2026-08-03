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
  let requestUrl = apiURL;
  if (url.startsWith("/")) requestUrl += url;
  else requestUrl += `/${url}`;
  if (
    query &&
    Object.entries(query).filter((e) => e[1] !== undefined).length > 0
  )
    requestUrl += "?";
  requestUrl += Object.entries(query || {})
    .filter((e) => typeof e[1] === "string")
    .map((e) => e[0] + "=" + e[1]!.toString())
    .join("&");
  return await fetch(requestUrl, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: apiKey,
    },
  }).then((res) => res.json());
}
