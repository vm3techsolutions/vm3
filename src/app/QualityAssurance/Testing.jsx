import {
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaMobileAlt,
  FaDesktop,
} from 'react-icons/fa';
import { MdApi } from 'react-icons/md';

const services = [
  {
    icon: <FaLightbulb size={40} />,
    title: 'Functional Testing',
    desc: 'Ensure every feature works as intended.',
  },
  {
    icon: <MdApi size={40} />,
    title: 'Automation Testing',
    desc: 'Accelerate testing cycles using advanced automation tools.',
  },
  {
    icon: <FaChartLine size={40} />,
    title: 'Performance Testing',
    desc: 'Assess and optimize app speed, stability, and scalability under various loads.',
  },
  {
    icon: <FaCogs size={40} />,
    title: 'Security Testing',
    desc: 'Protect your software against vulnerabilities and threats.',
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: 'Mobile App Testing',
    desc: 'Deliver flawless experiences across iOS and Android platforms.',
  },
  {
    icon: <FaDesktop size={40} />,
    title: 'User Acceptance Testing (UAT):',
    desc: 'Validate your product’s readiness from an end-user perspective.',
  },
];

export default function TestingServices() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-6 md:px-10 mb-10"
      style={{ backgroundImage: 'url("/assets/benefitsbg.jpg")' }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#0d0230] opacity-90 z-0" />

      {/* Content on top of overlay */}
      <div className="relative z-10">
        <div className="mx-auto text-center">
          <h2 className="text-[#FEC63F] text-2xl font-semibold mb-4">TESTING</h2>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-20 text-white">
            Comprehensive QA & Testing Solutions
          </h1>
        </div>

        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 space-y-16">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-6">
              {/* Icon Circle */}
              <div className="bg-black rounded-full p-4 text-[#FEC63F]">
                {service.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 text-lg">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
