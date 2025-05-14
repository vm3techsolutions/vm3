// components/DesignProcess.tsx

import {
  FaSearch,
  FaProjectDiagram,
  FaPalette,
  FaVial,
  FaCommentDots,
} from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch size={30} />,
    title: 'Consultation & Strategy',
    description:
      'We assess your business needs to recommend a cloud strategy, selecting the ideal platforms, architecture, and services.',
  },
  {
    icon: <FaProjectDiagram size={30} />,
    title: 'Infrastructure Design & Setup',
    description:
      'Design secure and optimized infrastructure with cloud resources, from EC2 and VMs to serverless functions and storage.',
  },
  {
    icon: <FaPalette size={30} />,
    title: 'CI/CD Pipeline & DevOps Implementation',
    description:
      'Build and configure CI/CD pipelines to automate deployments and ensure quick, reliable code delivery.',
  },
  {
    icon: <FaVial size={30} />,
    title: 'Migration & Integration',
    description:
      'Seamlessly migrate existing systems and data to the cloud, with minimal downtime and data integrity checks',
  },
  {
    icon: <FaCommentDots size={30} />,
    title: 'Testing & Monitoring',
    description:
      'Implement rigorous testing and monitoring tools to ensure systems operate optimally, with alerts for any potential issues',
  },
  {
    icon: <FaCommentDots size={30} />,
    title: 'Support & Optimization',
    description:
      'Provide continuous monitoring, support, and adjustments to keep your cloud environment efficient and aligned with business goals',
  },
];

export default function DesignProcess() {
  return (
    <section className="py-20 px-2 md:px-5 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-[#FEC63F] text-2xl font-semibold mb-2 text-center">OUR APPROACH</h2>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-12 text-black text-center">
         Strategic, Scalable & Secure Cloud <br/> Solutions
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.slice(0, 6).map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 py-8 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.25)] text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-yellow-400 flex items-center justify-center text-yellow-400">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-md">{step.description}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
