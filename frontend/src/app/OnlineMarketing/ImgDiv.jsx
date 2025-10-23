// // components/FiveGridLayout.tsx
// import Image from 'next/image';

// const data = [
//   { id: 1, img: '/assets/OM1.jpg', text: 'Brand Registration' },
//   { id: 2, img: '/assets/OM2.jpg', text: 'Product Listing' },
//   { id: 3, img: '/assets/OM3.jpg', text: 'Product Brochure' },
//   { id: 4, img: '/assets/OM4.jpg', text: 'Product Video' },
//   { id: 5, img: '/assets/OM5.jpg', text: 'Paid Advertisement' },
// ];

// const FiveGridLayout = () => {
//   return (
//     <div className=" mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-14 -mt-40 px-20 bg-white">
//       {data.map((item, index) => (
//         <div
//           key={item.id}
//           className="border p-5 overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 h-[65vh]"
//         >
//           <div className="w-full h-48 relative">
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
  { id: 1, img: '/assets/OM1.jpg', text: 'Brand Registration' },
  { id: 2, img: '/assets/OM2.jpg', text: 'Product Listing' },
  { id: 3, img: '/assets/OM3.jpg', text: 'Product Brochure' },
  { id: 4, img: '/assets/OM4.jpg', text: 'Product Video' },
  { id: 5, img: '/assets/OM5.jpg', text: 'Paid Advertisement' },
];

const FiveGridLayout = () => {
  return (
    <div className=" p-4 px-10 bg-white z-10 mt-[-140px] mx-[100px] mb-[50px]">
      {/* First row — 3 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {data.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="border p-5 overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 z-10"
          >
            <div className="w-full h-50 relative">
              <Image
                src={item.img}
                alt={item.text}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center font-semibold text-gray-700 mt-5 text-2xl">
              {item.text}
            </div>
          </div>
        ))}
      </div>

      {/* Second row — 2 items centered */}
      <div className="flex justify-center gap-6">
        {data.slice(3).map((item) => (
          <div
            key={item.id}
            className="border p-5 overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300 w-full sm:w-1/2 lg:w-1/3"
          >
            <div className="w-full h-50 relative">
              <Image
                src={item.img}
                alt={item.text}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center font-semibold text-gray-700  text-2xl">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveGridLayout;
