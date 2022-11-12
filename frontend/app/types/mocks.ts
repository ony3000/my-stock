import type { DecimalPatternString } from '~/types/common';
import type { Stock } from './models';

export type MockStock = Stock & {
  dividendRate: DecimalPatternString;
  exDividendDate: string;
};

export type Profile = {
  id: number;
  name: string;
  phone: string;
  email: string;
};
