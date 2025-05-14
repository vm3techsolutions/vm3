import { FaServer, FaDesktop, FaCloudUploadAlt, FaChartLine, FaTools } from 'react-icons/fa';

const deploymentServices = [
  {
    icon: <FaServer className=" w-8 h-8" />,
    title: 'Increased Brand Awareness',
    desc: 'Consistent, impactful social media presence builds awareness and familiarity with your brand.',
  },
  {
    icon: <FaDesktop className=" w-8 h-8" />,
    title: 'Enhanced Customer Engagement:',
    desc: 'Interacting with your audience fosters loyalty, encourages feedback, and creates a positive brand image.',
  },
  {
    icon: <FaCloudUploadAlt className=" w-8 h-8" />,
    title: 'Higher Conversion Rates',
    desc: 'Targeted social media ads and engaging content increase the likelihood of converting followers into customers.',
  },
  {
    icon: <FaChartLine className=" w-8 h-8" />,
    title: 'Data-Driven Insights',
    desc: 'Analytics allow you to make informed decisions and optimize campaigns for higher engagement and ROI.',
  },
  {
    icon: <FaTools className=" w-8 h-8" />,
    title: 'Improved Customer Loyalty',
    desc: 'A well-managed social presence keeps your brand top of mind and builds lasting relationships with customers.',
  },
];

export default function DeploymentServices() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-6 md:px-10 mb-10"
      style={{ backgroundImage: 'url("/assets/benefitsbg.jpg")' }}
    >
      <div className="absolute inset-0 bg-[#0d0230] opacity-90 z-0" />
      <div className="relative z-10">
        <div className="mx-auto text-center">
          <h2 className="text-[#FEC63F] text-2xl font-semibold mb-4">BENEFITS</h2>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-20 text-white">
 Our Social Media Solutions
          </h1>
        </div>

        {/* Top 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 space-y-16">
          {deploymentServices.slice(0, 3).map((service, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="bg-black text-[#FEC63F] rounded-full p-4">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 pr-16">{service.title}</h3>
                <p className="text-gray-300 text-lg">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center mt-12 max-w-4xl mx-auto">
          {deploymentServices.slice(3).map((service, index) => (
            <div key={index + 3} className="flex items-start gap-6 justify-center">
              <div className="bg-black text-[#FEC63F] rounded-full p-4">
                {service.icon}
              </div>
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
