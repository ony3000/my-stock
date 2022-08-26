import {
  ArrowUpIcon,
} from '@heroicons/react/outline';

export default function DisclaimerSection() {
  return (
    <section className="bg-gray-100">
      <h2 className="sr-only">면책 조항</h2>
      <div className="flex p-6.25">
        <span className="flex-1 text-gray-400 text-xs">
          주가 및 뉴스, 재무정보는 각 컨텐츠 제공업체로부터 받는 정보로 오류 및 지연이 발생될 수 있으며, mystock은 투자결과에 대한 법적인 책임을 지지 않습니다.
        </span>
        <button type="button" className="inline-flex justify-center items-center w-11.25 h-11.25 ml-6.25 rounded-full bg-white">
          <ArrowUpIcon className="w-6 h-6 text-gray-400" />
        </button>
      </div>
    </section>
  );
}
