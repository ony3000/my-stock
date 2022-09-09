export type Dict<T = unknown> = Record<string, T>;

export type Nullable<T> = T | null;

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type DecimalPattern = `${number}.${Digit}${Digit}`;

export type UrlPattern = `http${'s' | ''}://${string}`;
