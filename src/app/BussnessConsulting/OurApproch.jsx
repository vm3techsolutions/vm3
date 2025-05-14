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
    title: 'Discovery & Analysis',
    description:
      'We start by understanding your business’s unique needs, objectives, and pain points through thorough research and assessment',
  },
  {
    icon: <FaProjectDiagram size={30} />,
    title: 'Strategic Planning',
    description:
      'Based on our findings, we craft a tailored strategy that focuses on addressing challenges and achieving specific business goals.',
  },
  {
    icon: <FaPalette size={30} />,
    title: 'Implementation & Execution',
    description:
      'We work closely with your team to execute strategies, optimize processes, and ensure alignment with organizational priorities.',
  },
  {
    icon: <FaVial size={30} />,
    title: 'Monitoring & Optimization',
    description:
      'Using key performance metrics, we monitor progress, making adjustments as needed to stay on track toward desired outcomes.',
  },
  {
    icon: <FaCommentDots size={30} />,
    title: 'Ongoing Support & Growth',
    description:
      'Our consultants remain engaged, providing continuous guidance and support to help you adapt and thrive in market.',
  },
];

export default function DesignProcess() {
  return (
    <section className="py-20 px-2 md:px-5 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-[#FEC63F] text-2xl font-semibold mb-2 text-center">OUR APPROACH</h2>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-12 text-black text-center">
         Your Pathway to Smarter, Scalable Solutions
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.slice(0, 3).map((step, index) => (
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

        {/* Centered bottom row */}
        <div className="mt-10 flex justify-center flex-wrap gap-10">
          {steps.slice(3).map((step, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[32%] bg-white p-6 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.25)] text-center py-8"
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
