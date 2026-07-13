import { doApiRequest } from "../../lib/request-handler";

export async function v2_getVlrTeamTransactions(
  apiKey: string,
  teamId: number,
) {
  return await doApiRequest<v2_getVlrTeamTransactions_ResponseData[]>(
    apiKey,
    `/v2/esports/vlr/teams/${teamId}/transactions`,
  );
}
export interface v2_getVlrTeamTransactions_ResponseData {
  action: string;
  player: {
    alias: string;
    id: number;
    slug: string;
    country_code: string;
    real_name: string;
  };
  position: string;
  date: string;
  reference_url: string;
}
