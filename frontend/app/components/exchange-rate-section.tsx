import classNames from 'classnames';
import invariant from 'tiny-invariant';
import { ContentWrapper } from '~/layouts';

export default function ExchangeRateSection() {
  const now = new Date();
  const mockRate = 1331.3;
  const mockDifference = -3.9;
  const mockPercentage = -0.29;
  const dateMatchResult = now.toLocaleDateString().match(/\. (\d+)\. (\d+)\./);

  invariant(dateMatchResult);

  const [, month, dayOfMonth] = dateMatchResult;
  const absoluteDifference = Math.abs(mockDifference);
  const absolutePercentage = Math.abs(mockPercentage);
  const isIncrease = absolutePercentage >= 0.01 && mockPercentage > 0;
  const isDecrease = absolutePercentage >= 0.01 && mockPercentage < 0;
  const displaySign = `${isIncrease ? '+' : ''}${isDecrease ? '-' : ''}`;
  const displayPercentage = `${displaySign}${absolutePercentage.toFixed(2)}`;

  return (
    <section className="bg-white">
      <ContentWrapper className="flex justify-between items-center h-20 whitespace-nowrap">
        <div className="text-left">
          <h2 className="text-[15px] leading-[1.375rem] font-bold">원&middot;달러 환율</h2>
          <div className="text-gray-400 text-xs">
            {month}
            월
            {' '}
            {dayOfMonth}
            일 최초고시환율
          </div>
        </div>
        <div className="text-right">
          <div className="font-bold">
            {mockRate.toLocaleString('ko-KR')}
            원
          </div>
          <div className="text-[13px] leading-[1.125rem]">
            <span
              className={classNames({
                'text-red-500': isIncrease,
                'text-blue-500': isDecrease,
                'text-gray-400': !isIncrease && !isDecrease,
              })}
            >
              {absoluteDifference}
              원
            </span>
            {' '}
            <span className="text-gray-200">&#x2223;</span>
            {' '}
            <span
              className={classNames({
                'text-red-500': isIncrease,
                'text-blue-500': isDecrease,
                'text-gray-400': !isIncrease && !isDecrease,
              })}
            >
              {displayPercentage}
              %
            </span>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
}
