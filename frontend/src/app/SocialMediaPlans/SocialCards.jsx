// "use client";
// import { useRouter } from 'next/navigation'; // ✅ Import
// import React, { useState } from "react";

// const baseProductPrice = 3000;
// const platformHandlingCharge = 3000;
// const postRate = 300;
// const blogRate = 600;
// const caseRate = 600;
// const jobPostRate = 600;
// const videoReelRate = 600;

// const socialPlans = [
//   { name: "Monthly Plan", duration: "1 Month", multiplier: 1 },
//   { name: "Quarterly Plan", duration: "3 Months", multiplier: 3 },
//   { name: "Half-Yearly Plan", duration: "6 Months", multiplier: 6 },
//   { name: "Yearly Plan", duration: "12 Months", multiplier: 12 }
// ];

// const platforms = ["Facebook", "Instagram", "LinkedIn", "Twitter", "YouTube"];

// function SocialPlanCard({ plan }) {
//   const [selectedPlatforms, setSelectedPlatforms] = useState([]);
//   const [posts, setPosts] = useState(0);
//   const [blogs, setBlogs] = useState(0);
//   const [caseStudies, setCaseStudies] = useState(0);
//    const [videoReels, setVideoReels] = useState(0);
//     const [jobPosts, setJobPosts] = useState(0);
    

//   const togglePlatform = (platform) => {
//     setSelectedPlatforms((prev) =>
//       prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
//     );
//   };

//   const calculatePrice = () =>
//     (baseProductPrice +
//       selectedPlatforms.length * platformHandlingCharge +
//       posts * postRate +
//       blogs * blogRate +
//       caseStudies * caseRate +
//       jobPosts * jobPostRate +
//       videoReels * videoReelRate ) * plan.multiplier;

//         const router = useRouter(); // ✅ Initialize
//       const handleClick = () => {
//   router.push({
//     pathname: "/checkout",
//     query: {
//       plan: plan.name,
//       duration: plan.duration,
//       multiplier: plan.multiplier,
//       platforms: selectedPlatforms.join(","),
//       posts,
//       blogs,
//       caseStudies,
//       videoReels,
//       jobPosts,
//       total: calculatePrice(),
//     }
//   });
// };

//   return (
//     <div className="bg-white rounded-2xl shadow-md border border-[#EDBA3C] flex flex-col justify-between p-6 w-full transition hover:shadow-xl hover:scale-[1.02] duration-200">
//       <div>
//         <h2 className="text-2xl font-bold mb-2 text-[#EDBA3C]">{plan.name}</h2>
//         <p className="text-sm text-gray-600 mb-4">{plan.duration}</p>
//         <div className="mb-4">
//           <p className="text-sm font-semibold mb-2 text-gray-800">Select Platforms:</p>
//           <div className="flex flex-wrap gap-2">
//             {platforms.map((p) => (
//               <label key={p} className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={selectedPlatforms.includes(p)}
//                   onChange={() => togglePlatform(p)}
//                   className="accent-[#EDBA3C] w-4 h-4"
//                 />
//                 {p}
//               </label>
//             ))}
//           </div>
//         </div>
//         <div className="space-y-2 mb-6">
//           <label className="block text-sm font-medium text-gray-800">
//             Number of Posts:
//             <input
//               type="number"
//               className="ml-2 border border-gray-300 px-3 py-1 rounded w-20 focus:ring-2 focus:ring-[#EDBA3C] focus:outline-none"
//               value={posts}
//               min={0}
//               onChange={(e) => setPosts(Number(e.target.value))}
//             />
//           </label>
//           <label className="block text-sm font-medium text-gray-800">
//             Number of Blogs:
//             <input
//               type="number"
//               className="ml-2 border border-gray-300 px-3 py-1 rounded w-20 focus:ring-2 focus:ring-[#EDBA3C] focus:outline-none"
//               value={blogs}
//               min={0}
//               onChange={(e) => setBlogs(Number(e.target.value))}
//             />
//           </label>
//           <label className="block text-sm font-medium text-gray-800">
//             Case Studies:
//             <input
//               type="number"
//               className="ml-2 border border-gray-300 px-3 py-1 rounded w-20 focus:ring-2 focus:ring-[#EDBA3C] focus:outline-none"
//               value={caseStudies}
//               min={0}
//               onChange={(e) => setCaseStudies(Number(e.target.value))}
//             />
//           </label>
//            <label className="block text-sm font-medium text-gray-800">
//             Video/Reels:
//             <input
//               type="number"
//               className="ml-2 border border-gray-300 px-3 py-1 rounded w-20 focus:ring-2 focus:ring-[#EDBA3C] focus:outline-none"
//               value={videoReels}
//               min={0}
//               onChange={(e) => setVideoReels(Number(e.target.value))}
//             />
//           </label>
//            <label className="block text-sm font-medium text-gray-800">
//            Job Posts: 
//             <input
//               type="number"
//               className="ml-2 border border-gray-300 px-3 py-1 rounded w-20 focus:ring-2 focus:ring-[#EDBA3C] focus:outline-none"
//               value={jobPosts}
//               min={0}
//               onChange={(e) => setJobPosts(Number(e.target.value))}
//             />
//           </label>
//         </div>
//       </div>
//       <div>
//         <div className="text-2xl font-bold mb-4 text-[#EDBA3C]">
//           Total Price: ₹{calculatePrice()}
//         </div>
//         <button
//           className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold text-lg transition hover:bg-yellow-500 border " onClick={handleClick}
//         >
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function SocialMediaPlans() {
//   return (
//     <div className="max-w-7xl mx-auto py-14 px-4 bg-white min-h-screen">
//       <h1 className="text-4xl font-extrabold text-center mb-12 text-black drop-shadow">
//         Social Media Marketing Packages
//       </h1>

//       <div className="flex flex-wrap justify-center gap-6">
//         {socialPlans.map((plan, index) => (
//           <div key={index} className="flex-1 min-w-[280px] max-w-[320px]">
//             <SocialPlanCard plan={plan} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const baseProductPrice = 3000;
const platformHandlingCharge = 3000;
const postRate = 300;
const blogRate = 600;
const caseRate = 600;
const jobPostRate = 600;
const videoReelRate = 600;

const socialPlans = [
  { name: "Monthly Plan", duration: "1 Month", multiplier: 1 },
  { name: "Quarterly Plan", duration: "3 Months", multiplier: 3 },
  { name: "Half-Yearly Plan", duration: "6 Months", multiplier: 6 },
  { name: "Yearly Plan", duration: "12 Months", multiplier: 12 },
];

const platforms = ["Facebook", "Instagram", "LinkedIn", "Twitter", "YouTube"];

function SocialPlanCard({ plan }) {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [posts, setPosts] = useState(0);
  const [blogs, setBlogs] = useState(0);
  const [caseStudies, setCaseStudies] = useState(0);
  const [videoReels, setVideoReels] = useState(0);
  const [jobPosts, setJobPosts] = useState(0);

  const togglePlatform = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  const calculateOriginalPrice = () =>
    (baseProductPrice +
      selectedPlatforms.length * platformHandlingCharge +
      posts * postRate +
      blogs * blogRate +
      caseStudies * caseRate +
      jobPosts * jobPostRate +
      videoReels * videoReelRate) * plan.multiplier;

  const calculatePrice = () => {
    const total = calculateOriginalPrice();
    if (plan.name === "Half-Yearly Plan" || plan.name === "Yearly Plan") {
      return total * 0.9; // Apply 10% discount
    }
    return total;
  };

  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/checkout",
      query: {
        plan: plan.name,
        duration: plan.duration,
        multiplier: plan.multiplier,
        platforms: selectedPlatforms.join(","),
        posts,
        blogs,
        caseStudies,
        videoReels,
        jobPosts,
        total: calculatePrice(),
      },
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-[#EDBA3C] flex flex-col justify-between p-6 w-full transition hover:shadow-xl hover:scale-[1.02] duration-200 relative">
      {/* Optional ribbon badge */}
      {(plan.name === "Half-Yearly Plan" || plan.name === "Yearly Plan") && (
        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg font-semibold">
          10% OFF
        </div>
      )}

      <div>
        <h2 className="text-2xl font-bold mb-2 text-[#EDBA3C]">{plan.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{plan.duration}</p>

        {(plan.name === "Half-Yearly Plan" || plan.name === "Yearly Plan") && (
          <p className="text-sm font-semibold text-green-600 mb-2">
           
          </p>
        )}

        <div className="mb-4">
          <p className="text-sm font-semibold mb-2 text-gray-800">Select Platforms:</p>
          <div className="flex flex-wrap gap-2">
            {platforms.map((p) => (
              <label
                key={p}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedPlatforms.includes(p)}
                  onChange={() => togglePlatform(p)}
                  className="accent-[#EDBA3C] w-4 h-4"
                />
                {p}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <label className="block text-sm font-medium text-gray-800">
            Number of Posts:
            <input
              type="number"
              className="ml-2 border border-gray-300 px-3 py-1 rounded w-20 focus:ring-2 focus:ring-[#EDBA3C] focus:outline-none"
              value={posts}
              min={0}
              onChange={(e) => setPosts(Number(e.target.value))}
            />
          </label>
          <label className="block text-sm font-medium text-gray-800">
            Number of Blogs:
            <input
              type="number"
              className="ml-2 border border-gray-300 px-3 py-1 rounded w-20 focus:ring-2 focus:ring-[#EDBA3C] focus:outline-none"
              value={blogs}
              min={0}
              onChange={(e) => setBlogs(Number(e.target.value))}
            />
          </label>
          <label className="block text-sm font-medium text-gray-800">
            Case Studies:
            <input
              type="number"
              className="ml-2 border border-gray-300 px-3 py-1 rounded w-20 focus:ring-2 focus:ring-[#EDBA3C] focus:outline-none"
              value={caseStudies}
              min={0}
              onChange={(e) => setCaseStudies(Number(e.target.value))}
            />
          </label>
          <label className="block text-sm font-medium text-gray-800">
            Video/Reels:
            <input
              type="number"
              className="ml-2 border border-gray-300 px-3 py-1 rounded w-20 focus:ring-2 focus:ring-[#EDBA3C] focus:outline-none"
              value={videoReels}
              min={0}
              onChange={(e) => setVideoReels(Number(e.target.value))}
            />
          </label>
          <label className="block text-sm font-medium text-gray-800">
            Job Posts:
            <input
              type="number"
              className="ml-2 border border-gray-300 px-3 py-1 rounded w-20 focus:ring-2 focus:ring-[#EDBA3C] focus:outline-none"
              value={jobPosts}
              min={0}
              onChange={(e) => setJobPosts(Number(e.target.value))}
            />
          </label>
        </div>
      </div>

      <div>
        {(plan.name === "Half-Yearly Plan" || plan.name === "Yearly Plan") && (
          <p className="text-sm text-gray-600 mb-2">
            You save ₹{(calculateOriginalPrice() - calculatePrice()).toFixed(0)} with 10% off!
          </p>
        )}
        <div className="text-2xl font-bold mb-4 text-[#EDBA3C]">
          Total Price: ₹{calculatePrice().toFixed(0)}
        </div>
        <button
          className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold text-lg transition hover:bg-yellow-500 border"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default function SocialMediaPlans() {
  return (
    <div className="max-w-7xl mx-auto py-14 px-4 bg-white min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-black drop-shadow">
        Social Media Marketing Packages
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {socialPlans.map((plan, index) => (
          <div key={index} className="flex-1 min-w-[280px] max-w-[320px]">
            <SocialPlanCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
}

