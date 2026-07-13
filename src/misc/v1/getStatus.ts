import { doApiRequest } from "../../lib/request-handler";

export async function v1_getStatus(apiKey: string, affinity: string) {
  return await doApiRequest<v1_getStatus_ResponseData>(
    apiKey,
    `/valorant/v1/status/${affinity}`,
    {},
    { method: "GET" },
  );
}
export interface v1_getStatus_ResponseData {
  incidents: {
    created_at: string;
    id: number;
    incident_severity: string;
    platforms: string[];
    titles: {
      content: string;
      locale: string;
    }[];
    updates: {
      author: string;
      created_at: string;
      id: number;
      publish: boolean;
      publish_locations: string[];
      translations: {
        content: string;
        locale: string;
      }[];
      updated_at: string;
    }[];
    archive_at: string | null;
    maintenance_status: string | null;
    updated_at: string | null;
  }[];
  maintenances: {
    created_at: string;
    id: number;
    incident_severity: string;
    platforms: string[];
    titles: {
      content: string;
      locale: string;
    }[];
    updates: {
      author: string;
      created_at: string;
      id: number;
      publish: boolean;
      publish_locations: string[];
      translations: {
        content: string;
        locale: string;
      }[];
      updated_at: string;
    }[];
    archive_at: string | null;
    maintenance_status: string | null;
    updated_at: string | null;
  }[];
}
