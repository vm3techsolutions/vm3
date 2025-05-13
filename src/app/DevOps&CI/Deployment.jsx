import { FaNetworkWired, FaCode, FaServer, FaUsers } from 'react-icons/fa';
import { MdMonitor } from 'react-icons/md';

const deploymentServices = [
  {
    icon: <FaNetworkWired size={40} />,
    title: 'Continuous Integration and Continuous Deployment',
    desc: 'Automate code integration, testing, and deployment to ensure rapid, error-free delivery.',
  },
  {
    icon: <FaCode size={40} />,
    title: 'Infrastructure as Code',
    desc: 'Set up automated infrastructure management, making it easy to replicate, modify, and scale environments.',
  },
  {
    icon: <MdMonitor size={40} />,
    title: 'Monitoring and Logging',
    desc: 'Implement monitoring tools for real-time insights, ensuring your systems perform at peak efficiency.',
  },
  {
    icon: <FaUsers size={40} />,
    title: 'Collaborative Development',
    desc: 'Enabling cross-functional teams to work together efficiently, minimizing delays and enhancing the development lifecycle.',
  },
];

export default function DeploymentServices() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-6 md:px-10 mb-10"
      style={{ backgroundImage: 'url("/assets/benefitsbg.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d0230] opacity-90 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto text-center">
          <h2 className="text-[#FEC63F] text-2xl font-semibold mb-4">DEPLOYMENT</h2>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-20 text-white">
            Innovation Deployed, Progress Delivered
          </h1>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">
          {deploymentServices.map((service, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="bg-black rounded-full p-4 text-[#FEC63F]">
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
