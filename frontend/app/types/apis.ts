export type ListApiResponse<T = unknown> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type ManuallyRaisedExceptionData = {
  code: string;
  title: string;
  message: string;
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
};

export type RefinedError = ManuallyRaisedExceptionData & {
  status: number;
};
