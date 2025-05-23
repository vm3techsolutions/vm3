'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative w-full sm:h-[85vh] h-[70vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/BannerBG.jpg"
        alt="Business Woman"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2E2903]/60 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-8 sm:px-16 md:px-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-lg">
          <Link href="/" className="hover:underline text-white">Home</Link> <span className="text-orange-400">» Gallery</span>
        </p>
      </div>
    </div>
  );
}
