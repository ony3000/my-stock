import {
  BannerSection,
  DisclaimerSection,
  DividendSection,
  ExchangeRateSection,
  GlobalNavigation,
  RankingSection,
  SectionDivider,
} from '~/components';

export default function Home() {
  return (
    <div className="container max-w-screen-sm pb-15 bg-gray-100">
      <h1 className="sr-only">홈</h1>
      <GlobalNavigation />
      <main>
        <BannerSection />
        <SectionDivider />
        <RankingSection />
        <DividendSection />
        <SectionDivider />
        <ExchangeRateSection />
        <DisclaimerSection />
      </main>
    </div>
  );
}
