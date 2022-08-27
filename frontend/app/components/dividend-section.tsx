import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import invariant from 'tiny-invariant';
import type { MockStock } from '~/types/mocks';
import { ContentWrapper } from '~/layouts';

interface DividendSectionProps {
  stocks: MockStock[];
}

export default function DividendSection({ stocks }: DividendSectionProps) {
  return (
    <section className="bg-blue-400 text-white">
      <ContentWrapper className="flex flex-col py-7.5" style={{ overflow: 'hidden' }}>
        <h2 className="mb-3.75 text-xl">지금 사면 배당받는 주식!</h2>
        <div className="order-first">
          <div className="text-xs iphone:flex iphone:justify-between iphone:flex-row-reverse">
            <span className="flex justify-end items-center mb-1.25">
              미국 배당락일 기준
              <QuestionMarkCircleIcon className="w-[0.8125rem] h-[0.8125rem] ml-1.25" />
            </span>
            <span className="flex mb-1.25">은행 이자 부럽지 않은 배당</span>
          </div>
        </div>
        <ul className="flex h-[10.125rem]">
          {stocks.map(({
            code, krName, price, dividendRate, exDividendDate,
          }) => {
            const dateMatchResult = exDividendDate.match(/^\d+-(\d+)-(\d+)/);

            invariant(dateMatchResult);

            const displayPercentage = (dividendRate * 100).toFixed(2);
            const [, month, dayOfMonth] = dateMatchResult;

            return (
              <li key={code} className="shrink-0 w-31.25 h-[10.125rem] ml-1.25 first:ml-0 rounded px-3.75 py-3.5 bg-white text-black">
                <div>
                  <img
                    className="w-6.25 h-6.25 object-contain rounded-full"
                    src="https://via.placeholder.com/80"
                    alt={`임시 ${krName} 아이콘`}
                  />
                </div>
                <div className="mt-[0.4375rem] text-[13px] leading-[1.125rem] truncate">{krName}</div>
                <div className="mt-[0.875rem] text-[15px] leading-[1.375rem]">
                  연
                  {' '}
                  {displayPercentage}
                  %
                </div>
                <div className="mt-[0.1875rem] text-gray-400 text-xs">
                  {price.toLocaleString('ko-KR')}
                  원
                </div>
                <div className="mt-[0.8125rem] text-red-500 text-xs">
                  {Number(month)}
                  월
                  {' '}
                  {Number(dayOfMonth)}
                  일 배당락
                </div>
              </li>
            );
          })}
        </ul>
      </ContentWrapper>
    </section>
  );
}
