"use client";
import Image from "next/image";
import { RiPlayCircleLine, RiGoogleLine, RiBarChartBoxLine, RiAwardLine, RiGlobalLine, RiFacebookBoxLine, RiMailLine, RiBookOpenLine, RiLineChartLine } from "react-icons/ri";

const certificates = [
  { title: "YouTube Music", image: "/assets/c1.jpg", icon: <RiPlayCircleLine  className="text-3xl"/> },
  { title: "YouTube Creative Essentials", image: "/assets/c2.jpg", icon: <RiPlayCircleLine className="text-3xl"/> },
  { title: "Google My Business", image: "/assets/c3.jpg", icon: <RiGoogleLine className="text-3xl"/> },
  { title: "Google Analytics Power User", image: "/assets/c4.jpg", icon: <RiGoogleLine className="text-3xl"/> },
  { title: " Google Analytics for Beginners", image: "/assets/c5.jpg", icon: <RiGoogleLine className="text-3xl"/> },
  { title: "Google Ads Search", image: "/assets/c6.jpg", icon: <RiGoogleLine className="text-3xl"/> },
  { title: " Google Ads Display", image: "/assets/c7.jpg", icon: <RiGoogleLine className="text-3xl"/> },
  { title: " SEMrush Site Audit", image: "/assets/c8.png", icon: <RiLineChartLine className="text-3xl"/> },
  { title: " SEMrush SEO Toolkit", image: "/assets/c9.png", icon: <RiLineChartLine className="text-3xl"/> },
  { title: " On-Page & Technical SEO", image: "/assets/c10.png", icon: <RiLineChartLine className="text-3xl"/> },
  { title: " Keyword Research", image: "/assets/c11.png", icon: <RiLineChartLine className="text-3xl"/> },
  { title: " Competitive Analysis & Keyword Research", image: "/assets/c12.png", icon: <RiLineChartLine className="text-3xl"/> },
];

export default function CertificateGrid() {
  return (
    <section className=" text-white -mt-16 pb-20 px-6 md:px-20">
     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
  {certificates.map((cert, idx) => (
    <div key={idx} className="flex flex-col items-center">
      <div className="bg-white overflow-hidden w-full h-60 relative group">
        <Image
          src={cert.image}
          alt={cert.title}
          layout="fill"
          objectFit="cover"
          className="transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="h-20 content-center bg-[#181818] px-4 py-2 rounded-lg text-center text-md font-medium w-full shadow-md">
        <span className="flex items-center justify-center gap-1 text-xl hover:text-blue-600">
          {cert.icon}
          {cert.title}
        </span>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
