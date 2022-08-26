import {
  BannerSection,
  DividendSection,
  ExchangeRateSection,
  GlobalNavigation,
  RankingSection,
  SectionDivider,
} from '~/components';

export default function Home() {
  return (
    <div className="relative container overflow-y-auto max-w-screen-sm h-screen pb-15 bg-gray-100">
      <h1 className="sr-only">홈</h1>
      <GlobalNavigation />
      <main>
        <BannerSection />
        <SectionDivider />
        <RankingSection />
        <DividendSection />
        <SectionDivider />
        <ExchangeRateSection />
        <section>
          <h2 className="sr-only">책임의 한계와 법적 고지</h2>
        </section>
      </main>
    </div>
  );
}
