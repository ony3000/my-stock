import type { Nullable, DecimalPatternString, UrlPatternString } from '~/types/common';

export type Stock = {
  code: string;
  logoImage: Nullable<UrlPatternString>;
  krName: string;
  krNameInitialConsonant: string;
  usName: string;
  krwPrice: number;
  krwPriceFluctuationRate: DecimalPatternString;
};
