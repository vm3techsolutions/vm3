// 'use client';
// import Image from 'next/image';
// import { useState } from 'react';
// import { PenTool, Code, Cloud, ShieldCheck, Rocket } from 'lucide-react';

// export default function ServiceSection() {
//   const services = [
//     {
//       img: '/assets/OS1.jpg',
//       title: 'UI/UX',
//       description: 'Emphasizes the overall user journey, usability, and satisfaction, ensuring seamless interaction and achieving user goals effectively.',
//       icon: <PenTool size={18} />,
//     },
//     {
//       img: '/assets/OS2.jpg',
//       title: 'Software Development',
//       description: 'We build a highly interactive and mobile responsive website with best SEO practices.',
//       icon: <Code size={18} />,
//     },
//     {
//       img: '/assets/OS3.jpg',
//       title: 'Cloud Solution',
//       description: 'End-to-end Cloud Solutions to help businesses streamline operations, reduce infrastructure costs, and scale seamlessly.',
//       icon: <Cloud size={18} />,
//     },
//     {
//       img: '/assets/OS4.jpg',
//       title: 'Digital Marketing',
//       description: 'Marketize your brand through SEO, Search Engine Marketing, Social Media Marketing, Ads, PPC & video marketing.',
//       icon: <ShieldCheck size={18} />,
//     },
//     {
//       img: '/assets/OS5.jpg',
//       title: 'Business Consulting',
//       description: 'Identify growth opportunities and analyze trends to create a competitive advantage. Process optimization & resource management',
//       icon: <Rocket size={18} />,
//     },
//   ];

//   return (
//     <div className="bg-[url('/assets/ourservicesbg.jpg')] bg-cover bg-center py-20 px-4 text-center">
//       <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">OUR SERVICES</h2>
//       <h1 className="text-white text-4xl sm:text-5xl font-bold mb-12">Greatness Runs Through Us</h1>

//       <div className="flex flex-wrap justify-center gap-8">
//         {services.map((service, index) => (
//           <Card key={index} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function Card({ img, title, description, icon }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="relative w-full sm:w-[45vh] md:w-[55vh] lg:w-[65vh] overflow-visible group"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//      <div className="overflow-hidden  relative group">
//   <Image
//     src={img}
//     alt={title}
//     width={400}
//     height={300}
//     className="w-full h-[220px] object-cover  transform transition-transform duration-500 group-hover:scale-110 text-white hover:text-yellow-400"
//   />
// </div>


//       {/* Text box overlapping image and going beyond */}
//       <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[90%] bg-black  rounded-xl p-4 z-10 transition-all duration-300 ease-in-out mb-20 text-white hover:text-[#FEC63F]">
//         <h3 className=" font-bold text-lg flex justify-center items-center gap-2">
//           {icon} {title}
//         </h3>
//         <p
//           className={`text-sm mt-2 text-center transition-all duration-300 ease-in-out ${
//             hovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
//           } overflow-hidden`}
//         >
//           {description}
//         </p>
//       </div>

//       {/* Spacer to prevent cut-off */}
//       <div className="h-20"></div>
//     </div>
//   );
// }

'use client';
import Image from 'next/image';
import { useState } from 'react';
import { PenTool, Code, Cloud, ShieldCheck, Rocket } from 'lucide-react';

export default function ServiceSection() {
  const services = [
    {
      img: '/assets/OS1.jpg',
      title: 'UI/UX',
      description: 'Emphasizes the overall user journey, usability, and satisfaction, ensuring seamless interaction and achieving user goals effectively.',
      icon: <PenTool size={18} />,
    },
    {
      img: '/assets/OS2.jpg',
      title: 'Software Development',
      description: 'We build a highly interactive and mobile responsive website with best SEO practices.',
      icon: <Code size={18} />,
    },
    {
      img: '/assets/OS3.jpg',
      title: 'Cloud Solution',
      description: 'End-to-end Cloud Solutions to help businesses streamline operations, reduce infrastructure costs, and scale seamlessly.',
      icon: <Cloud size={18} />,
    },
    {
      img: '/assets/OS4.jpg',
      title: 'Digital Marketing',
      description: 'Marketize your brand through SEO, Search Engine Marketing, Social Media Marketing, Ads, PPC & video marketing.',
      icon: <ShieldCheck size={18} />,
    },
    {
      img: '/assets/OS5.jpg',
      title: 'Business Consulting',
      description: 'Identify growth opportunities and analyze trends to create a competitive advantage. Process optimization & resource management.',
      icon: <Rocket size={18} />,
    },
  ];

  // Split into two groups — 3 on top, 2 below
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <div className="bg-[url('/assets/ourservicesbg.jpg')] bg-cover bg-center py-20 px-4 text-center">
      <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">OUR SERVICES</h2>
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-12">Greatness Runs Through Us</h1>

      {/* First row - 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mb-12">
        {firstRow.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>

      {/* Second row - 2 cards centered */}
      <div className="flex flex-wrap justify-center gap-10">
        {secondRow.map((service, index) => (
          <Card key={index + 3} {...service} />
        ))}
      </div>
    </div>
  );
}

function Card({ img, title, description, icon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full sm:w-[40vh] md:w-[45vh] lg:w-[55vh] overflow-visible group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="overflow-hidden relative group">
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className="w-full h-[250px] object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Text box */}
      <div className="
        absolute 
        left-1/2 
        -translate-x-1/2 
        -bottom-10 
        w-[90%] 
        bg-black 
        rounded-xl 
        p-4 
        z-10 
        transition-all 
        duration-300 
        ease-in-out 
        mb-20 
        text-white 
        hover:text-[#FEC63F]
      ">
        <h3 className="font-bold text-lg flex justify-center items-center gap-2">
          {icon} {title}
        </h3>
        <p
          className={`text-sm mt-2 text-center transition-all duration-300 ease-in-out ${
            hovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
          } overflow-hidden`}
        >
          {description}
        </p>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>
    </div>
  );
}
