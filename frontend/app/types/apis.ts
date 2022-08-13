export type ListApiResponse<T = unknown> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type ManuallyRaisedExceptionData = {
  detail: string;
};

export type ErrorResponseData = string | ManuallyRaisedExceptionData | undefined;

export type ErrorInformation = {
  code: string;
  config: object;
  message: string;
  name: string;
  status: number | null;
};

export type RefinedResponse<T = unknown> = {
  status: number;
  data: T;
  message?: undefined;
};

export type RefinedError = {
  status: number;
  data?: undefined;
  message: string;
};
