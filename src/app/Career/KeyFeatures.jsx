// components/CareerSection.jsx
import { FiBarChart2 } from "react-icons/fi";
import { FaHandshake, FaTrophy } from "react-icons/fa";

const CareerSection = () => {
  const cards = [
    {
      icon: <FiBarChart2 size={40} />,
      title: "Grow Yourself",
      description:
        "Take your career to a successive level with the best learning opportunities. We always advise our employees on how to develop themselves and their careers.",
    },
    {
      icon: <FaHandshake size={40} />,
      title: "Get Mentorship",
      description:
        "We mentor all our employees and evoke them to develop better career, resolve troublesome problems and make them able to take sound decisions.",
    },
    {
      icon: <FaTrophy size={40} />,
      title: "Opportunities",
      description:
        "If you are captivated with technology and zeal of learning there are endless opportunities at VM3. We also encourage diverse work force & equal employee opportunities.",
    },
  ];

  return (
    <section className="py-16 px-4 text-center bg-white">
              <h2 className="text-[#FEC63F] text-xl font-semibold mb-2"> Key Features</h2>
      <h2 className="text-5xl font-bold mb-12">
        Become a part of our family and take your <br /> career to the next level
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white hover:bg-black hover:text-white transition-all duration-300 p-8 border-t-8 border-[#FEC63F] flex-1"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full">
                {card.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-lg text-gray-500">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
