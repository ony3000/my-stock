import { GlobalNavigation } from '~/components';

export default function Home() {
  return (
    <div className="container max-w-screen-sm">
      <h1 className="sr-only">홈</h1>
      <GlobalNavigation />
      <main>
        <section>
          <h2 className="sr-only">배너</h2>
        </section>
        <section>
          <h2 className="sr-only">유형별 주식 Top 10</h2>
        </section>
        <section>
          <h2 className="sr-only">지금 사면 배당받는 주식</h2>
        </section>
        <section>
          <h2 className="sr-only">원달러 환율</h2>
        </section>
        <section>
          <h2 className="sr-only">책임의 한계와 법적 고지</h2>
        </section>
      </main>
    </div>
  );
}
