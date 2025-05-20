import Image from 'next/image';
import Link from 'next/link';


export default function UIUXSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-black p-6 sm:p-16 border border-black">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 sm:px-5">
            <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">UI/UX</h2>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Crafting Intuitive Designs, Elevating User Experiences
        </h1>
        <p className="text-xl  text-gray-700">
          Our UI/UX Design services create intuitive, engaging, and visually compelling digital
          experiences tailored to meet your users&apos; needs. We transform your ideas into
          designs that captivate and enhance user journeys across platforms. From the initial
          research to interactive prototypes and final interfaces, we craft each element to reflect
          your brand&apos;s essence and elevate user satisfaction.
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
          src="/assets/uiux.jpg"
          alt="UI/UX Design Illustration"
          className=" w-full h-[50vh] sm:h-[95vh]"
        />
      </div>
    </section>
  );
}
