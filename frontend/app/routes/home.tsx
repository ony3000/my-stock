import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import type { ListApiResponse } from '~/types/apis';
import type { MockStock } from '~/types/mocks';
import type { Stock } from '~/types/models';
import { typedGet } from '~/plugins/axios';
import {
  BannerSection,
  DisclaimerSection,
  DividendSection,
  ErrorDialog,
  ExchangeRateSection,
  GlobalNavigation,
  RankingSection,
  SectionDivider,
} from '~/components';
import { isApiError } from '~/utils/type-guard';

const injectMockProps = (stock: Stock): MockStock => {
  const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
  const now = new Date();

  return {
    ...stock,
    price: Math.floor(Math.random() * 901234 + 5678),
    fluctuationRate: Number(((Math.random() * 2 - 1) / 10).toFixed(4)),
    dividendRate: Number(((Math.random() * 1000 + 1) / 10000).toFixed(4)),
    exDividendDate: new Date(
      now.getTime() + oneDayInMilliseconds * Math.floor(Math.random() * 5 + 2),
    ).toJSON(),
  };
};

export const loader: LoaderFunction = async () => {
  const response = await typedGet<ListApiResponse<Stock>>('stocks/');

  invariant(!isApiError(response));

  const stocks = response.data.results;
  const mockIncreasingStocks = stocks.map<MockStock>(injectMockProps).sort(
    (former, latter) => (latter.fluctuationRate - former.fluctuationRate),
  );
  const mockDecreasingStocks = stocks.map<MockStock>(injectMockProps).sort(
    (former, latter) => (former.fluctuationRate - latter.fluctuationRate),
  );
  const mockDividendStocks = stocks.map<MockStock>(injectMockProps).sort(
    (former, latter) => (
      former.exDividendDate.slice(0, 10).localeCompare(latter.exDividendDate.slice(0, 10))
      || latter.dividendRate - former.dividendRate
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
    <div className="container max-w-screen-sm pb-15 bg-gray-100">
      <h1 className="sr-only">홈</h1>
      <GlobalNavigation />
      <main>
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
      </main>
      <ErrorDialog />
    </div>
  );
}
