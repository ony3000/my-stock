import type { DecimalPatternString } from '~/types/common';
import type { Stock } from './models';

export type MockStock = Stock & {
  dividendRate: DecimalPatternString;
  exDividendDate: string;
};
