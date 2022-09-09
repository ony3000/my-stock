import type { Stock } from './models';

export type MockStock = Stock & {
  /**
   * @deprecated
   */
  price: number;
  /**
   * @deprecated
   */
  fluctuationRate: number;
  dividendRate: number;
  exDividendDate: string;
};
