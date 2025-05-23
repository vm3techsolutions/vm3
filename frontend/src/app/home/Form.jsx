'use client';

import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="bg-[#18191c] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Left: Form */}
        <form className="flex-1 w-full max-w-lg space-y-5 px-10 ml-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name*"
              className="bg-black text-white p-3 rounded border border-gray-600 focus:outline-none focus:ring-2"
            />
            <input
              type="email"
              placeholder="Enter Email*"
              className="bg-black text-white p-3 rounded border border-gray-600 focus:outline-none focus:ring-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Subject"
              className="bg-black text-white p-3 rounded border border-gray-600 focus:outline-none focus:ring-2"
            />
            <input
              type="text"
              placeholder="Phone"
              className="bg-black text-white p-3 rounded border border-gray-600 focus:outline-none focus:ring-2"
            />
          </div>

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full bg-black text-white p-3 rounded border border-gray-600 focus:outline-none focus:ring-2"
          />

<button className="bg-[#FEC63F]  text-black font-bold px-8 text-xl py-2 rounded-md w-fit transition border-l-14 border-yellow-600">
            Send Message
          </button>
        </form>

        {/* Right: Image Section */}
        <div className="flex-1 w-full relative mb-10 lg:mb-0">
          <div className="relative w-full h-72 sm:h-96 rounded overflow-hidden">
            <Image
              src="/assets/Form-img.png"
              alt="contact"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            {/* Yellow and white shape overlay */}
            <div className="absolute top-0 right-0 h-full w-full pointer-events-none">
              <div className="absolute top-0 right-0 w-32 sm:w-48 h-full bg-white transform skew-x-[30deg] origin-left opacity-70"></div>
              <div className="absolute top-0 right-0 w-20 sm:w-32 h-full bg-yellow-500 transform skew-x-[30deg] origin-left opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
