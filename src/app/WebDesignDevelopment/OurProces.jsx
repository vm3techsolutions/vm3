import {
  FaSearch,
  FaTrophy,
  FaInfoCircle,
  FaFileAlt,
  FaPaintBrush,
  FaDesktop,
  FaCode,
  FaCogs,
  FaRocket,
  FaUsers,
  FaHeadset,
} from 'react-icons/fa';

export default function ProcessSteps() {
  const steps = [
    { icon: <FaSearch size={40} />, title: 'Project Preview' },
    { icon: <FaTrophy size={40} />, title: 'Goal & Scope Definition' },
    { icon: <FaInfoCircle size={40} />, title: 'Information Architecture' },
    { icon: <FaDesktop size={40} />, title: 'Wireframe Creation' },
    { icon: <FaFileAlt size={40} />, title: 'Content Creation' },
    { icon: <FaPaintBrush size={40} />, title: 'Building Design Guidelines' },
    { icon: <FaDesktop size={40} />, title: 'Prototyping' },
    { icon: <FaCode size={40} />, title: 'Development' },
    { icon: <FaCogs size={40} />, title: 'Testing' },
    { icon: <FaRocket size={40} />, title: 'Launching' },
    { icon: <FaUsers size={40} />, title: 'Knowledge Transfer' },
    { icon: <FaHeadset size={40} />, title: 'Maintenance & Support' },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-blue-950 text-white flex flex-col items-center justify-center px-4 py-10"
      // style={{ backgroundImage: `url('/assets/OurProcess.png')` }}
    >
      {/* Section Title */}
      <h2 className="text-[#FEC63F] text-2xl font-semibold mb-2 text-center">
        OUR PROCESS
      </h2>
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-12 text-white  text-center">
        We develop business <br/> growth.
      </h1>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full sm:space-y-14 px-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="bg-[#FEC63F] text-gray-700 p-4 rounded-md">
              {step.icon}
            </div>
            <h3 className="font-bold text-2xl px-6">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
