import { PageContainer } from '~/layouts';

export default function Search() {
  return (
    <PageContainer title="검색">
      <section>
        <h2 className="sr-only">검색어 입력</h2>
      </section>
      <section>
        <h2 className="sr-only">검색 결과</h2>
      </section>
    </PageContainer>
  );
}
