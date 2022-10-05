import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import type { SearchableStock } from '~/types/models';
import { typedGet } from '~/plugins/axios';
import { PageContainer, ContentWrapper } from '~/layouts';
import { isApiError } from '~/utils/type-guard';
import { makeGravatarUrl } from '~/utils/gravatar';

export const loader: LoaderFunction = async () => {
  const response = await typedGet<SearchableStock[]>('bulk/searchable-stocks/');

  invariant(!isApiError(response));

  const searchableStocks = response.data;

  return json(searchableStocks);
};

export default function Search() {
  const searchableStocks = useLoaderData<SearchableStock[]>();

  return (
    <PageContainer className="pt-15" title="검색">
      <section className="fixed z-50 top-0 w-full max-w-screen-sm h-15 bg-white">
        <h2 className="sr-only">검색어 입력</h2>
      </section>
      <section className="bg-white">
        <div className="sticky top-15 h-12 pt-3.75 bg-white">
          <ContentWrapper className="flex justify-between items-center h-full">
            <h2 className="text-[13px] leading-[1.125rem] font-semibold">해외주식</h2>
            <div className="text-gray-400 text-xs">시가총액순</div>
          </ContentWrapper>
        </div>
        <ContentWrapper>
          <ul>
            {searchableStocks.map(({
              code, logoImage, readableName,
            }) => (
              <li key={code} className="flex items-center h-13.75 whitespace-nowrap">
                <div>
                  <img
                    className="w-7.5 h-7.5 object-contain rounded-full"
                    src={logoImage ?? makeGravatarUrl(code)}
                    alt={`${readableName} 아이콘`}
                  />
                </div>
                <div className="flex-1 overflow-hidden flex items-center">
                  <div className="overflow-hidden text-ellipsis ml-2.5 font-semibold">{readableName}</div>
                  <div className="ml-1.5 text-xs text-gray-500">{code}</div>
                </div>
              </li>
            ))}
          </ul>
        </ContentWrapper>
      </section>
      <section>
        <h2 className="sr-only">검색 결과</h2>
      </section>
    </PageContainer>
  );
}
