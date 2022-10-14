import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { SearchIcon } from '@heroicons/react/outline';
import { XCircleIcon } from '@heroicons/react/solid';
import { useState, useRef } from 'react';
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
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <PageContainer className="pt-15" title="검색">
      <section className="fixed z-50 top-0 w-full max-w-screen-sm h-15 bg-white">
        <h2 className="sr-only">검색어 입력</h2>
        <ContentWrapper className="flex items-center h-full">
          <SearchIcon className="relative shrink-0 w-5 h-5 -mr-6.25 ml-1.25 text-gray-700 pointer-events-none" />
          <input
            ref={inputRef}
            className="w-full h-full px-10 placeholder:text-gray-300"
            type="text"
            placeholder="주식명, 주식코드 검색"
            onChange={(e) => setInputValue(e.target.value)}
          />
          {inputValue && inputRef.current && (
            <button
              type="button"
              className="relative shrink-0 w-5 h-5 mr-1.25 -ml-6.25 rounded-full"
              onClick={() => {
                inputRef.current!.value = '';
                setInputValue('');
              }}
            >
              <XCircleIcon className="w-5 h-5 text-gray-300" />
            </button>
          )}
        </ContentWrapper>
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
