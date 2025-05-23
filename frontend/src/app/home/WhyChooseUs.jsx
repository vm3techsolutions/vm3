'use client';

import Image from 'next/image';
import { FaMoneyCheckAlt, FaChartLine, FaCogs, FaTools } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row bg-[#18191c] text-white">
      {/* Left Content */}
      <div className="sm:w-3/5 px-5 py-16 flex flex-col justify-center">
        <h3 className="text-[#FEC63F] font-semibold text-xl">WHY CHOOSE US</h3>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
          Don't Get Disappear In The Crowd. <br />
          See What It Takes To Be #1 In The Digital World
        </h1>
        <p className="text-xl mb-8">
          We provide a systematic approach and customized solution to brand your business and product.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 sm:px-10 px-5 space-y-20 mt-5">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#FEC63F] p-3 rounded-full">
              <FaMoneyCheckAlt className="text-black w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xl">Business Study</h4>
              <p className="text-lg text-gray-300">
                Understand business model, product, services and competition.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#FEC63F] p-3 rounded-full">
              <FaChartLine className="text-black w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xl">Achieve Business Success</h4>
              <p className="text-lg text-gray-300">
                Tracking success parameters such as reach to market, lead generation & working on gaps.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#FEC63F] p-3 rounded-full">
              <FaCogs className="text-black w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xl">Seamless Design</h4>
              <p className="text-lg text-gray-300">
                A design approach that ensures smooth, intuitive interactions & cohesive aesthetics across all elements, creating a unified user experience.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#FEC63F] p-3 rounded-full">
              <FaTools className="text-black w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xl">Cutting Edge Technology</h4>
              <p className="text-lg text-gray-300">
                It empowers industries to stay ahead with groundbreaking efficiency & transformative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="sm:w-2/5 relative h-[60vh] lg:h-auto">
        <Image
          src="/assets/WhyChoose.jpg"
          alt="People"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay box */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white w-[90%] md:w-[70%] lg:w-[60%]">
          <h3 className="text-4xl font-bold mb-2 sm:p-16 p-5">Engineering Excellence, Every Day</h3>
          <div className="bg-[#FEC63F] py-4 text-black font-bold text-center text-xl">
            Top Quality Solution
          </div>
        </div>
      </div>
    </section>
  );
}
