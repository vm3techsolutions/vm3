import Image from 'next/image';
import Link from 'next/link';


export default function UIUXSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-black p-6 sm:p-16 ">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 sm:px-5">
            <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">CLOUD SOLUTIONS</h2>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      Empowering Businesses with Seamless Cloud Solutions
        </h1>
        <p className="text-xl  text-gray-700">
 We offers end-to-end Cloud Solutions to help businesses streamline operations, reduce infrastructure costs, and scale seamlessly. By leveraging powerful platforms like AWS and Azure, we enable your business to stay agile, secure, and efficient in a competitive digital landscape. From cloud hosting and serverless computing to DevOps and CI/CD pipeline setups, our solutions are tailored to drive your cloud transformation.
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
          src="/assets/CloudSolutions.jpg"
          alt="UI/UX Design Illustration"
          className=" w-full h-[50vh] sm:h-[90vh]"
        />
      </div>
    </section>
  );
}
