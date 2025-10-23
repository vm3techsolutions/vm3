import { FaDesktop, FaThumbsUp } from "react-icons/fa";

const services = [
  {
    icon: <FaDesktop className=" text-3xl" />,
    title: "Website Development",
    features: [
      {
        heading: "Custom Website Design & Development",
        description:
          "Crafting unique websites tailored to your brand identity, user needs, and industry requirements",
      },
      {
        heading: "E-commerce Solutions",
        description:
          "Developing secure and efficient e-commerce platforms with seamless payment integration and inventory management",
      },
      {
        heading: "Content Management Systems",
        description:
          "Implementing easy-to-manage CMS platforms that empower your team to update content effortlessly",
      },
      {
        heading: "Responsive Design",
        description:
          "Ensuring that your website is optimized for all devices, from desktops to mobile",
      },
       {
        heading: "SEO and Performance Optimization",
        description:
          "Enhancing visibility and loading speed for an optimal user experience and higher search engine rankings",
      },
    ],
  },
  {
    icon: <FaThumbsUp className=" text-3xl" />,
    title: "Quality Assurance & Testing",
    features: [
      {
        heading: "Manual Testing",
        description:
          "Conducting comprehensive manual testing for functional and usability assessments",
      },
      {
        heading: "Automation Testing",
        description:
          "Streamlining testing processes with automated scripts to improve accuracy and efficiency",
      },
      {
        heading: "Performance & Load Testing",
        description:
          "Ensuring systems perform smoothly under high traffic and usage",
      },
      {
        heading: "Security Testing",
        description:
          "Identifying vulnerabilities to protect your application from potential threats",
      },
      {
        heading: "Cross-Platform Testing",
        description:
          "Testing applications across multiple devices, browsers, and operating systems to ensure consistent functionality",
      },
    ],
  },
];

export default function ServiceSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 px-20 mb-[50px]">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="border border-black rounded-xl  lg:w-1/2 "
        >
          <div className="bg-black p-6 flex items-center gap-4 ">
            <div className="bg-[#FEC63F] p-4 rounded-full text-black">
              {service.icon}
            </div>
            <h2 className="text-white text-2xl font-bold hover:text-[#FEC63F]">{service.title}</h2>
          </div>
          <div className="bg-white p-6">
            <ul className="space-y-4 list-disc list-inside">
              {service.features.map((feature, index) => (
                <li key={index}>
                  <strong className="text-lg">{feature.heading}</strong>
                  <p className="text-gray-600">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
