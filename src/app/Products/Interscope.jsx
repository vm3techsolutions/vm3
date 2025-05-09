'use client';

import Image from "next/image";
import Link from 'next/link';
 

export default function DureghiSection() {
  return (
    <div className="w-full px-5 sm:px-16 py-12 bg-white ">
      {/* First Row: Title, Description, Button */}
      <div className="space-y-4 ">
        <h1 className="text-5xl font-bold">Internscope</h1>
        <p className="text-xl">
        Streamline your hiring process with Internscope. Connect with a diverse pool of qualified job seekers, post job listings, and search our resume database with ease. Our employer branding tools help you stand out and attract the best talent. Discover our recruitment tips to make the hiring process efficient and successful.
        </p>
       
        <p className="text-xl">
        Looking for your next career move? Internscope offers a wide range of job opportunities across various industries. Create a profile today to get personalized job recommendations, and upload your resume to get noticed by top employers. Check out our resume and interview tips to enhance your job application process.
        </p>
        <Link href="https://www.internscope.com/">
          <button className="bg-[#FEC63F]  text-black font-bold px-5 text-xl py-3 rounded-md w-fit transition border-l-14 border-yellow-600">
          Visit internscope.com
          </button>
        </Link>
      </div>

      {/* Second Row: Image */}
      <div className="mt-10 w-full">
        <Image
          src="/assets/Internscope.png"
          width={400}
          height={400}
          alt="Bookshelf"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
