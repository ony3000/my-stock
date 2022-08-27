import classNames from 'classnames';
import type { MockStock } from '~/types/mocks';
import { ContentWrapper } from '~/layouts';

interface RankingSectionProps {
  increasingStocks: MockStock[];
  // eslint-disable-next-line react/no-unused-prop-types
  decreasingStocks: MockStock[];
}

export default function RankingSection({ increasingStocks }: RankingSectionProps) {
  const mockCategories = [
    {
      title: '상승',
      isActive: true,
    },
    {
      title: '하락',
      isActive: false,
    },
  ];

  return (
    <section className="bg-white">
      <h2 className="sr-only">유형별 주식 Top 10</h2>
      <ContentWrapper className="h-13.75 border-b border-solid border-gray-300">
        <ul className="flex items-end h-full text-sm font-bold">
          {mockCategories.map(({ title, isActive }) => (
            <li
              key={title}
              className={classNames('ml-7.5', 'first:ml-0', 'border-b-[3px]', 'border-solid', {
                'border-blue-400': isActive,
                'text-blue-400': isActive,
                'border-transparent': !isActive,
              })}
            >
              <button type="button" className="py-2.5">
                {title}
              </button>
            </li>
          ))}
        </ul>
      </ContentWrapper>
      <ContentWrapper className="pt-8.75 pb-5">
        <ul className="h-[50rem]">
          {increasingStocks.map(({
            code, krName, price, fluctuationRate,
          }) => {
            const absoluteFluctuationRate = Math.abs(fluctuationRate);
            const isIncrease = absoluteFluctuationRate >= 0.0001 && fluctuationRate > 0;
            const isDecrease = absoluteFluctuationRate >= 0.0001 && fluctuationRate < 0;
            const displaySign = `${isIncrease ? '+' : ''}${isDecrease ? '-' : ''}`;
            const displayPercentage = `${displaySign}${(absoluteFluctuationRate * 100).toFixed(2)}`;

            return (
              <li key={code} className="flex items-center h-20 whitespace-nowrap shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1)] last:shadow-none">
                <div>
                  <img
                    className="w-10 h-10 object-contain rounded-full"
                    src="https://via.placeholder.com/80"
                    alt={`임시 ${krName} 아이콘`}
                  />
                </div>
                <div className="flex-1 overflow-hidden mx-2.5">
                  <div className="overflow-hidden text-ellipsis">{krName}</div>
                  <div className="text-xs text-gray-400">{code}</div>
                </div>
                <div className="text-right">
                  <div
                    className={classNames({
                      'text-red-500': isIncrease,
                      'text-blue-500': isDecrease,
                      'text-gray-400': !isIncrease && !isDecrease,
                    })}
                  >
                    {displayPercentage}
                    %
                  </div>
                  <div className="text-sm">
                    {price.toLocaleString('ko-KR')}
                    원
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="flex justify-center items-center w-full h-13.75 my-2.5 border border-solid border-gray-200 rounded-[3px]"
        >
          <span className="text-gray-700 text-[13px] leading-[1.125rem]">더보기</span>
        </button>
      </ContentWrapper>
    </section>
  );
}
