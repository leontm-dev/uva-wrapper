export type DefaultApiResponse<T> = {
  data: T;
  /**
   * Required range: x >= 0
   */
  status: number;
};
export type DefaultErrorsResponse = {
  errors: { code: number; message: string; status: number; details: unknown }[];
};
