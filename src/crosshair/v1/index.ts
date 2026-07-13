import { v1_generateCrosshairImage } from "./generateCrosshairImage";

export class v1_CrosshairCategory {
  constructor(readonly apiKey: string) {}

  /**
   * @link https://docs.henrikdev.xyz/api-reference/valorant/generate-crosshair-image-v1
   * @param id Crosshair code
   * @returns Crosshair image generated successfully
   */
  async generateImage(id?: string) {
    return await v1_generateCrosshairImage(this.apiKey, id);
  }
}
