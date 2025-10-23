import Image from 'next/image';
import Link from 'next/link';


export default function UIUXSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-black p-6 sm:p-16 ">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 sm:px-5">
            <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">HOSTING</h2>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Scalable, Secure, and Efficient Cloud Hosting Solutions
        </h1>
        <p className="text-xl  text-gray-700">
         We empower your business with cutting-edge cloud hosting services leveraging Amazon EC2 and Virtual Machines (VMs). Whether you’re looking to migrate to the cloud, optimize infrastructure, or deploy secure and scalable applications, our tailored solutions ensure your business thrives in today’s digital landscape.
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
        height={650}
          src="/assets/Hosting.jpeg"
          alt="UI/UX Design Illustration"
          className="h-[300px] sm:h-[300px] lg:h-[400px]"
        />
      </div>
    </section>
  );
}
