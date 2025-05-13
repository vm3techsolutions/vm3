import Image from 'next/image';
import Link from 'next/link';


export default function UIUXSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-black p-6 sm:p-16 ">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 sm:px-5">
            <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">SERVERLESS COMPUTING</h2>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Innovative Serverless Computing for Agile Businesses
        </h1>
        <p className="text-xl  text-gray-700">
        We offers next-generation serverless computing solutions using AWS Lambda and Amazon S3. Our approach eliminates the need to manage servers, allowing you to focus on building and scaling applications effortlessly. Whether it’s running event-driven tasks or securely storing and delivering data, our solutions are designed to optimize efficiency and reduce costs.
        </p>
       <Link href="/get-started">
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
          src="/assets/Serverless.jpeg"
          alt="UI/UX Design Illustration"
          className=" w-full h-[50vh] sm:h-[90vh]"
        />
      </div>
    </section>
  );
}
