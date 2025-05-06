'use client';
import { FaGraduationCap, FaIndustry, FaHeartbeat, FaGlobe, FaCode, FaLeaf } from 'react-icons/fa';

const verticals = [
  {
    title: "Education",
    icon: <FaGraduationCap className="text-yellow-400 text-3xl" />,
    description: "Pre-primary, Primary and Secondary Schools, Professional Colleges and Training Institutes"
  },
  {
    title: "Manufacturing & Engineering",
    icon: <FaIndustry className="text-yellow-400 text-3xl" />,
    description: "Steel, Energy and Electronics Industries, Engineering Services"
  },
  {
    title: "Pharma & Healthcare",
    icon: <FaHeartbeat className="text-yellow-400 text-3xl" />,
    description: "Manufacturer & distributors of Pharmaceutical & Chemical products"
  },
  {
    title: "Agro Industry",
    icon: <FaLeaf className="text-yellow-400 text-3xl" />,
    description: "Farmers, manufacturers of agricultural equipment as well as importers and exporters of agricultural goods"
  },
  {
    title: "SaaS Product",
    icon: <FaGlobe className="text-yellow-400 text-3xl" />,
    description: "Services in the areas of banking, manufacturing, retail, housekeeping, and driver management."
  },
  {
    title: "Coach & Consultant",
    icon: <FaCode className="text-yellow-400 text-3xl" />,
    description: "Business coach, career coach, finance coach, management consulting, human resource consulting"
  }
];

export default function VerticalsSection() {
  return (
    <section
      className="bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: "url('/assets/Verticle.jpg')" }} // replace with your image path
    >
      <div className="max-w-7xl mx-auto text-center">
      <h3 className="text-[#FEC63F] font-semibold text-xl">VERTICALS WE SERVE</h3>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4 text-white py-5">
        We Exist For A Bigger Reason
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-10">
          {verticals.map((item, idx) => (
            <div
              key={idx}
              className="bg-black/40 bg-opacity-30 rounded-xl p-6 px-10 text-left hover:shadow-lg transition duration-300"
            >
              <div className="w-10 h-10 bg-[#FEC63F] flex items-center justify-center rounded-md mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-2xl my-6">{item.title}</h3>
              <p className="text-white text-lg ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
