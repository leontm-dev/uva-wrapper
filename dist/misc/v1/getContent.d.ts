export declare function v1_getContent(apiKey: string, locale?: string): Promise<import("../../types/response.type").DefaultApiResponse<v1_getContent_ResponseData> | import("../../types/response.type").DefaultErrorsResponse>;
export interface v1_getContent_ResponseData {
    acts: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    ceremonies: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    characters: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    charmLevels: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    charms: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    chromas: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    equips: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    gameModes: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    maps: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    playerCards: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    playerTitles: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    skinLevels: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    skins: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    sprayLevels: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    sprays: [
        {
            assetName: string;
            name: string;
            id: string | null;
            localizedNames: Record<string, string> | null;
        }
    ];
    version: string;
}
