import type { Stock } from './models';

export type MockStock = Stock & {
  price: number;
  fluctuationRate: number;
  dividendRate: number;
  exDividendDate: string;
};
