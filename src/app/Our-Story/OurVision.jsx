'use client';
import Image from 'next/image';

export default function VisionCard() {
  return (
    <div className="w-full px-4 py-12 flex justify-center items-center bg-white">
      <div className="relative group w-full max-w-2xl border-t-6 border-[#FEC63F]  shadow-2xl overflow-hidden">
        {/* Background sliding overlay */}
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:scale-y-0 before:origin-bottom before:transition-transform before:duration-500 group-hover:before:scale-y-100 z-0"></div>

        {/* Content */}
        <div className="relative z-10 p-8 flex flex-col items-center transition-colors duration-500 group-hover:text-white">
          <div className="bg-gray-100 rounded-full h-24 w-24 p-4 mb-4">
            <Image
              src="/assets/vision-icon.png" // replace with your actual icon path
              alt="Vision Icon"
              width={50}
              height={50}
            />
          </div>
          <h2 className="text-2xl  text-[#FEC63F] mb-2 group-hover:text-white transition-colors duration-500">
            Our Vision
          </h2>
          <p className="p-5 text-black group-hover:text-white transition-colors duration-500">
            The vision of VM3 Tech Solutions LLP is to empower the growth of 50,000 businesses through our comprehensive services and enterprise expertise.
          </p>
        </div>
      </div>
    </div>
  );
}
