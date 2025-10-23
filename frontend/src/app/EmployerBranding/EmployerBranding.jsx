import Image from 'next/image';
import Link from 'next/link';


export default function UIUXSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-black p-6 sm:p-16 ">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 sm:px-5">
            <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">EMPLOYER BRANDING</h2>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Develop a brand that every employee love
        </h1>
        <p className="text-xl  text-gray-700">
    We are pioneer of Employer Branding building a strong reputation between employer & internal staff and external job seekers. Employer branding is one of the most important components in Employee engagement strategies. We helps to build a reputation for yourself, your company, products & services.
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
        width={550}
        height={550}
          src="/assets/EmployerBranding.jpeg"
          alt="UI/UX Design Illustration"
          className=" h-[300px] lg:h-[400px]"
        />
      </div>
    </section>
  );
}
