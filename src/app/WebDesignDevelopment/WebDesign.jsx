import Image from 'next/image';
import Link from 'next/link';


export default function UIUXSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-black p-6 sm:p-16 border border-black">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 sm:px-5">
            <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">WEBSITE DEVELOPNMENT</h2>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Web Solutions to Skyrocket your Business
        </h1>
        <p className="text-xl  text-gray-700">
         Your website is arguably your most important marketing asset, and if it isn’t growing your business, it’s time for a new one. We not only design and develop a Website.
We develop Business Growth.
        </p>
       <Link href="/Contact">
          <button className="bg-[#FEC63F]  text-black font-bold px-5 text-xl py-3 rounded-md w-fit transition border-l-14 border-yellow-600">
            Enquire now
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2  flex justify-center sm:pt-0 pt-5">
        <Image
        width={50}
        height={50}
          src="/assets/webDevelopement.jpg"
          alt="UI/UX Design Illustration"
          className=" w-full h-[50vh] sm:h-[90vh]"
        />
      </div>
    </section>
  );
}
