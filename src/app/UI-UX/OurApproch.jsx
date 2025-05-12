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
    title: 'Discovery & Research',
    description:
      'Conduct thorough research to understand your brand, target audience, and business goals. Create user personas and journey maps to guide design decisions.',
  },
  {
    icon: <FaProjectDiagram size={30} />,
    title: 'Wireframing & Prototyping',
    description:
      'Develop low- and high-fidelity wireframes and prototypes, enabling feedback loops with stakeholders and users for optimal design alignment.',
  },
  {
    icon: <FaPalette size={30} />,
    title: 'Visual Design & Branding',
    description:
      'Build a cohesive visual style, incorporating UI elements, color schemes, and typography to represent your brand and enhance usability.',
  },
  {
    icon: <FaVial size={30} />,
    title: 'Usability Testing & Iteration',
    description:
      'Conduct user testing to gather insights and iterate on the design, ensuring it aligns with user expectations and functions seamlessly.',
  },
  {
    icon: <FaCommentDots size={30} />,
    title: 'Launch & Feedback Integration',
    description:
      'Once approved, the final designs are handed off to development. We remain engaged to gather post-launch feedback and continuously refine user experiences.',
  },
];

export default function DesignProcess() {
  return (
    <section className="py-20 px-2 md:px-5 bg-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-[#FEC63F] text-2xl font-semibold mb-2 text-center">OUR APPROACH</h2>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-12 text-black text-center">
          Redefining Experiences with UI/UX Design
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
