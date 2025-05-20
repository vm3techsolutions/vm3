'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative w-full sm:h-[130vh] h-[70vh] ">
      {/* Background Image */}
      <Image
        src="/assets/homebanner.jpg"
        alt="Business Woman"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-16 md:px-24">
        <h1 className="text-white text-3xl sm:text-6xl md:text-7xl font-bold max-w-2xl leading-tight mb-10 mt-10">
          Empowering<br /> Businesses with <br /> Tailored Software Solutions
        </h1>

        <Link href="/Contact">
          <button className="bg-[#FEC63F]  text-black font-bold px-5 text-xl py-3 rounded-md w-fit transition border-l-14 border-yellow-600">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
