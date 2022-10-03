import { ErrorDialog, GlobalNavigation } from '~/components';

export default function Search() {
  return (
    <div className="container max-w-screen-sm pb-15 bg-gray-100">
      <h1 className="sr-only">검색</h1>
      <GlobalNavigation />
      <main>
        <section>
          <h2 className="sr-only">검색어 입력</h2>
        </section>
        <section>
          <h2 className="sr-only">검색 결과</h2>
        </section>
      </main>
      <ErrorDialog />
    </div>
  );
}
