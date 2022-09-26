import { useState } from 'react';
import classNames from 'classnames';
import type Swiper from 'swiper';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import type { MockStock } from '~/types/mocks';
import { ContentWrapper } from '~/layouts';

interface RankingSectionProps {
  increasingStocks: MockStock[];
  decreasingStocks: MockStock[];
}

export default function RankingSection({
  increasingStocks,
  decreasingStocks,
}: RankingSectionProps) {
  const [categorySwiper, setCategorySwiper] = useState<Swiper | null>(null);
  const [stockSwiper, setStockSwiper] = useState<Swiper | null>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const mockCategories = [
    {
      title: '상승',
      stocks: increasingStocks,
    },
    {
      title: '하락',
      stocks: decreasingStocks,
    },
  ];

  return (
    <section className="bg-white">
      <h2 className="sr-only">유형별 주식 Top 10</h2>
      <ReactSwiper
        className="h-13.75 border-b border-solid border-gray-300 !px-5 iphone:!px-6.25"
        freeMode
        grabCursor
        spaceBetween={30}
        slidesPerView="auto"
        onSwiper={setCategorySwiper}
      >
        {mockCategories.map(({ title }, index) => (
          <SwiperSlide key={title} className="flex items-end !w-auto h-full text-sm font-bold">
            <div
              className={classNames('border-b-[3px]', 'border-solid', {
                'border-blue-400': (activeCategoryIndex === index),
                'text-blue-400': (activeCategoryIndex === index),
                'border-transparent': (activeCategoryIndex !== index),
              })}
            >
              <button type="button" className="py-2.5" onClick={() => stockSwiper?.slideTo(index)}>
                {title}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </ReactSwiper>
      <ReactSwiper
        grabCursor
        onSwiper={setStockSwiper}
        onSlideChange={(swiper) => {
          categorySwiper?.slideTo(swiper.activeIndex);
          setActiveCategoryIndex(swiper.activeIndex);
        }}
      >
        {mockCategories.map(({ title, stocks }) => (
          <SwiperSlide key={title}>
            <ContentWrapper className="pt-8.75 pb-5">
              <ul className="h-[50rem]">
                {stocks.map(({
                  code, krName, usName, krwPrice, krwPriceFluctuationRate,
                }) => {
                  const displayName = krName || usName;
                  const numericFluctuationRate = Number(krwPriceFluctuationRate);
                  const isRatePositive = numericFluctuationRate >= 0.01;
                  const isRateNegative = numericFluctuationRate <= -0.01;
                  const displayFluctuationRate = `${isRatePositive ? '+' : ''}${krwPriceFluctuationRate}`;

                  return (
                    <li key={code} className="flex items-center h-20 whitespace-nowrap shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.1)] last:shadow-none">
                      <div>
                        <img
                          className="w-10 h-10 object-contain rounded-full"
                          src="https://via.placeholder.com/80"
                          alt={`임시 ${displayName} 아이콘`}
                        />
                      </div>
                      <div className="flex-1 overflow-hidden mx-2.5">
                        <div className="overflow-hidden text-ellipsis">{displayName}</div>
                        <div className="text-xs text-gray-400">{code}</div>
                      </div>
                      <div className="text-right">
                        <div
                          className={classNames({
                            'text-red-500': isRatePositive,
                            'text-blue-500': isRateNegative,
                            'text-gray-400': !isRatePositive && !isRateNegative,
                          })}
                        >
                          {displayFluctuationRate}
                          %
                        </div>
                        <div className="text-sm">
                          {krwPrice.toLocaleString('ko-KR')}
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
          </SwiperSlide>
        ))}
      </ReactSwiper>
    </section>
  );
}
