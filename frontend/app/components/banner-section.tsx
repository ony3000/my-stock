import { Link } from '@remix-run/react';

export default function BannerSection() {
  return (
    <section className="flex h-50 bg-white">
      <h2 className="sr-only">배너</h2>
      <Link to="#" className="inline-flex justify-center items-center w-full h-full p-6.25">
        <img
          className="w-full h-full object-contain"
          src="https://via.placeholder.com/650x300"
          alt="임시 배너 이미지"
        />
      </Link>
    </section>
  );
}
