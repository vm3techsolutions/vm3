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
    title: 'AWS Lambda Development',
    desc: 'Deploy and run code in response to events without provisioning servers. Integrate with other AWS services for seamless operations.',
  },
  {
    icon: <MdApi size={40} />,
    title: 'Cost Optimization',
    desc: 'Pay only for the compute and storage you use, with no idle resource costs.',
  },
  {
    icon: <FaChartLine size={40} />,
    title: 'API Management',
    desc: 'Develop robust serverless APIs using AWS API Gateway and Lambda.',
  },
  {
    icon: <FaCogs size={40} />,
    title: 'AWS S3 Storage Solutions',
    desc: 'Scalable, durable, and secure object storage for all your data needs. Content delivery via S3 with integrated CDN for global reach.',
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: 'Event-Driven Architecture',
    desc: 'Build applications that respond in real-time to triggers like data uploads, database updates, or API calls.',
  },
  {
    icon: <FaDesktop size={40} />,
    title: 'Data Processing Pipelines',
    desc: 'Automate workflows for processing large data sets stored in S3 using Lambda functions.',
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
          <h2 className="text-[#FEC63F] text-2xl font-semibold mb-4">BENEFITS</h2>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-20 text-white">
            Unlocking Growth Through Smart Cloud Solutions
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
                <h3 className="text-xl font-semibold mb-2 sm:pr-16">{service.title}</h3>
                <p className="text-gray-300 text-lg">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
