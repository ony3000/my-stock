import type { Nullable, DecimalPatternString, UrlPatternString } from '~/types/common';

export type Stock = {
  code: string;
  logoImage: Nullable<UrlPatternString>;
  krName: string;
  usName: string;
  krwPrice: number;
  krwPriceFluctuationRate: DecimalPatternString;
};

export type SearchableStock = {
  code: string;
  logoImage: Nullable<UrlPatternString>;
  readableName: string;
  keywords: string[];
};
