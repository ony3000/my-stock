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

export type UniformResponse<T = unknown> = {
  status: number;
  data: T;
};

export type UniformError = ManuallyRaisedExceptionData & {
  status: number;
};

export type ApiErrorTuple = [UniformError, null];

export type ApiResponseTuple<T = unknown> = [null, UniformResponse<T>];
