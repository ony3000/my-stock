import type { Stock } from './models';

export type MockStock = Stock & {
  dividendRate: number;
  exDividendDate: string;
};
