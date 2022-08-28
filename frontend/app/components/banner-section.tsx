import { Link } from '@remix-run/react';
import { ContentWrapper } from '~/layouts';

export default function BannerSection() {
  return (
    <section className="bg-white">
      <h2 className="sr-only">배너</h2>
      <ContentWrapper className="flex h-50 py-6.25">
        <Link to="#" className="inline-flex justify-center items-center w-full h-full">
          <img
            className="w-full h-full object-contain"
            src="https://via.placeholder.com/650x300"
            alt="임시 배너 이미지"
          />
        </Link>
      </ContentWrapper>
    </section>
  );
}
