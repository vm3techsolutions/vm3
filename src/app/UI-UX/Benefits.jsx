import {
  FaDesktop,
  FaIdBadge,
  FaNetworkWired,
  FaCode,
  FaUniversalAccess,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaDesktop size={30} className="text-yellow-400" />,
    title: 'Enhanced User Engagement',
    description:
      'User-centered designs ensure that visitors have an enjoyable and intuitive experience, encouraging longer site visits and repeat engagement.',
  },
  {
    icon: <FaIdBadge size={30} className="text-yellow-400" />,
    title: 'Stronger Brand Perception',
    description:
      'Our unique and consistent designs convey a professional, trustworthy brand image, setting you apart from competitors.',
  },
  {
    icon: <FaNetworkWired size={30} className="text-yellow-400" />,
    title: 'Increased Conversions',
    description:
      'Optimized user journeys, clear calls-to-action, and accessible interfaces lead to higher conversion rates and satisfied users.',
  },
  {
    icon: <FaCode size={30} className="text-yellow-400" />,
    title: 'Reduced Development Costs',
    description:
      'Early-stage prototyping and usability testing help identify potential issues, reducing the need for costly changes post-launch.',
  },
  {
    icon: <FaUniversalAccess size={30} className="text-yellow-400" />,
    title: 'Increased Accessibility & Inclusivity',
    description:
      'Our commitment to accessible design broadens your audience reach and improves your brand’s reputation for inclusivity.',
  },
];

export default function UIUXBenefits() {
  return (
    <section
      className="bg-cover bg-center text-white py-20 px-6 md:px-16"
      style={{ backgroundImage: 'url("/assets/benefitsbg.jpg")' }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[#FEC63F] text-2xl font-semibold mb-4">BENEFITS</h2>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-12 text-white">
          Designing Interfaces, Shaping Experiences
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 space-y-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 text-left"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

