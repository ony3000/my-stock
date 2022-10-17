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
import { StockList } from '~/components/search';
import { isApiError } from '~/utils/type-guard';

export const loader: LoaderFunction = async () => {
  const response = await typedGet<SearchableStock[]>('bulk/searchable-stocks/');

  invariant(!isApiError(response));

  const searchableStocks = response.data.map<SearchableStock>(({ keywords, ...otherProps }) => ({
    keywords: keywords.map((keyword) => keyword.toLowerCase()),
    ...otherProps,
  }));

  return json(searchableStocks);
};

export default function Search() {
  const searchableStocks = useLoaderData<SearchableStock[]>();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const lowerCaseInputValue = inputValue.toLowerCase();
  const filteredStocks = searchableStocks.filter(
    (stock) => stock.keywords.some(
      (keyword) => keyword.includes(lowerCaseInputValue),
    ),
  );

  return (
    <PageContainer className="py-15 bg-white" title="검색">
      <section className="fixed z-50 top-0 w-full max-w-screen-sm h-15 bg-white">
        <h2 className="sr-only">검색어 입력</h2>
        <ContentWrapper className="flex items-center h-full border-y border-solid border-t-transparent border-b-blue-400">
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
      {inputValue ? (
        <section className="bg-white">
          <h2 className="sr-only">검색 결과</h2>
          {filteredStocks.length ? (
            <StockList items={filteredStocks} />
          ) : (
            <div className="flex justify-center items-center h-[calc(100vh-7.5rem)]">
              <div className="text-center">
                <SearchIcon className="w-15 h-15 mx-auto text-gray-300 pointer-events-none" />
                <div className="mt-3 text-xl">정보를 찾을 수 없네요.</div>
                <div className="mt-2 text-gray-500 text-sm">
                  주식명이나 종목코드를
                  <br />
                  다시 확인해 보세요.
                </div>
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className="bg-white">
          <div className="sticky top-15 h-12 pt-3.75 bg-white">
            <ContentWrapper className="flex justify-between items-center h-full">
              <h2 className="text-[13px] leading-[1.125rem] font-semibold">해외주식</h2>
              <div className="text-gray-400 text-xs">시가총액순</div>
            </ContentWrapper>
          </div>
          <StockList items={searchableStocks} />
        </section>
      )}
    </PageContainer>
  );
}
