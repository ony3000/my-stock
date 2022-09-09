import type { Nullable, DecimalPattern, UrlPattern } from '~/types/common';

export type Stock = {
  code: string;
  logoImage: Nullable<UrlPattern>;
  krName: string;
  krNameInitialConsonant: string;
  usName: string;
  krwPrice: number;
  krwPriceFluctuationRate: DecimalPattern;
};
