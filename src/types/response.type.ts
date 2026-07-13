export type DefaultApiResponse<T> = {
  data: T;
  status: number;
};
export type DefaultErrorsResponse = {
  errors: { code: number; message: string; status: number; details: unknown }[];
};
