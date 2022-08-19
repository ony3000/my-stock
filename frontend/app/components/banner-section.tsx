import { Link } from '@remix-run/react';

export default function BannerSection() {
  return (
    <section className="flex w-full h-[12.5rem]">
      <h2 className="sr-only">배너</h2>
      <Link to="#" className="inline-flex justify-center items-center w-full h-full p-[1.5625rem]">
        <img
          className="w-full h-full object-contain"
          src="https://picsum.photos/650/300"
          alt="임시 배너 이미지"
        />
      </Link>
    </section>
  );
}
