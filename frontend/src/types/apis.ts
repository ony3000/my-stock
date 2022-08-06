export type ListApiResponse<T = unknown> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
