import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import type { DecimalPatternString } from '~/types/common';
import type { ListApiResponse } from '~/types/apis';
import type { MockStock } from '~/types/mocks';
import type { Stock } from '~/types/models';
import { typedGet } from '~/plugins/axios';
import { PageContainer } from '~/layouts';
import {
  BannerSection,
  DisclaimerSection,
  DividendSection,
  ExchangeRateSection,
  RankingSection,
  SectionDivider,
} from '~/components';
import { isApiError, isDecimalPatternString } from '~/utils/type-guard';

const injectMockProps = (stock: Stock): MockStock => {
  const randomRate = ((Math.random() * 1000 + 1) / 100).toFixed(2);
  const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
  const now = new Date();

  invariant(isDecimalPatternString(randomRate));

  return {
    ...stock,
    dividendRate: randomRate,
    exDividendDate: new Date(
      now.getTime() + oneDayInMilliseconds * Math.floor(Math.random() * 5 + 2),
    ).toJSON(),
  };
};

export const loader: LoaderFunction = async () => {
  const [
    increasingStocksResponse,
    decreasingStocksResponse,
    stocksResponse,
  ] = await Promise.all([
    typedGet<ListApiResponse<Stock>>('stocks/increasing/'),
    typedGet<ListApiResponse<Stock>>('stocks/decreasing/'),
    typedGet<ListApiResponse<Stock>>('stocks/'),
  ]);

  invariant(!isApiError(increasingStocksResponse));
  invariant(!isApiError(decreasingStocksResponse));
  invariant(!isApiError(stocksResponse));

  const increasingStocks = increasingStocksResponse.data.results;
  const decreasingStocks = decreasingStocksResponse.data.results;
  const stocks = stocksResponse.data.results;

  const mockIncreasingStocks = increasingStocks.map<MockStock>(injectMockProps);
  const mockDecreasingStocks = decreasingStocks.map<MockStock>(injectMockProps);
  const mockDividendStocks = stocks.map<MockStock>(injectMockProps).sort(
    (former, latter) => (
      former.exDividendDate.slice(0, 10).localeCompare(latter.exDividendDate.slice(0, 10))
      || Number(latter.dividendRate) - Number(former.dividendRate)
    ),
  );

  return json({
    increasing: mockIncreasingStocks,
    decreasing: mockDecreasingStocks,
    dividend: mockDividendStocks,
  });
};

export default function Home() {
  const mockStocks = useLoaderData<{
    increasing: MockStock[];
    decreasing: MockStock[];
    dividend: MockStock[];
  }>();

  return (
    <PageContainer title="홈">
      <BannerSection />
      <SectionDivider />
      <RankingSection
        increasingStocks={mockStocks.increasing}
        decreasingStocks={mockStocks.decreasing}
      />
      <DividendSection
        stocks={mockStocks.dividend}
      />
      <SectionDivider />
      <ExchangeRateSection />
      <DisclaimerSection />
    </PageContainer>
  );
}
