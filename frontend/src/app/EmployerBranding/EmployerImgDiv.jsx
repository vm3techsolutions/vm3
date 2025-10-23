// // components/FiveGridLayout.tsx
// import Image from 'next/image';

// const data = [
//   { id: 1, img: '/assets/EB1.jpg', text: 'Employer Brand Positioning' },
//   { id: 2, img: '/assets/EB2.jpg', text: 'Reputation Management' },
//   { id: 3, img: '/assets/EB3.jpg', text: 'University Relation' },
//   { id: 4, img: '/assets/EB4.jpg', text: 'Employee Survey' },
//   { id: 5, img: '/assets/EB5.jpg', text: 'Employee Advocacy Program' },
//   { id: 6, img: '/assets/EB6.jpg', text: 'Employee Engagement' },
// ];

// const FiveGridLayout = () => {
//   return (
//     <div className="  p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6 -mt-40 px-20 bg-white mx-[100px]">
//       {data.map((item, index) => (
//         <div
//           key={item.id}
//           className="border p-5 overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 z-10"
//         >
//           <div className="w-full h-50 relative">
//             <Image
//               src={item.img}
//               alt={item.text}
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="p-4 text-center font-semibold text-gray-700 mt-5 text-2xl">
//             {item.text}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FiveGridLayout;


import Image from 'next/image';

const data = [
  { id: 1, img: '/assets/EB1.jpg', text: 'Employer Brand Positioning' },
  { id: 2, img: '/assets/EB2.jpg', text: 'Reputation Management' },
  { id: 3, img: '/assets/EB3.jpg', text: 'University Relation' },
  { id: 4, img: '/assets/EB4.jpg', text: 'Employee Survey' },
  { id: 5, img: '/assets/EB5.jpg', text: 'Employee Advocacy Program' },
  { id: 6, img: '/assets/EB6.jpg', text: 'Employee Engagement' },
];

const FiveGridLayout = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 -mt-40 px-20 bg-white mx-[100px] mb-[50px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="border p-5 overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 z-10"
        >
          <div className="relative aspect-[3/2] w-full">
            <Image
              src={item.img}
              alt={item.text}
              fill
              className="object-cover "
            />
          </div>
          <div className="p-2 text-center font-semibold text-gray-700 mt-5 text-2xl">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FiveGridLayout;

