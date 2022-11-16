import type { Dict } from '~/types/common';

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

export type ErrorResponseData = string | Dict | undefined;

export type RefinedResponse<T = unknown> = {
  status: number;
  data: T;
};

export type RefinedError = ManuallyRaisedExceptionData & {
  status: number;
};
