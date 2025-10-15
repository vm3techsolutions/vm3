import CareerBanner from "./CareerBanner";
import CareerDetail from "./CareerDetail";
import CareerGrid from "./CareerGrid";
import VM3Tech from "./VM3Tech";

export default function CareerPage() {
  return (
    <div>
      <CareerBanner />
      <CareerGrid />
      {/* <VM3Tech />
      <CareerDetail /> */}
    </div>
  );
}


// import CareerDetail from "./carrerDetail";
// import CareerSection from "./carrerPage";
// import CareerGrid from "./carrerGrid";
// import VM3Tech from "./VM3Tech";
// import careerBanner from "./careerBanner";

// export default function Home() {
//   return (
//     <div>
//       {/* Top Banner */}
//       <carrerBanner />

//       {/* Job Listings Grid */}
//       <CareerGrid />

//       {/* Job Detail Section (could be conditional or route-based) */}
//       <CareerDetail />

//       {/* Company / Why Join Us */}
//       <VM3Tech />
//     </div>
//   );
// }
// "use client";
// import { useEffect, useState } from "react";
// import CareerGrid from "./CareerGrid";
// import CareerBanner from "./CareerBanner";

// export default function CareerPage() {
//   const [features, setFeatures] = useState([]);
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("/Data/CareerDetail.json")
//       .then(res => res.json())
//       .then(data => {
//         setJobs(data);
//         setFeatures([
//           {
//             title: "Grow Yourself",
//             description: "Take your career to a successive level with the best learning opportunities.",
//             icon: "/assets/grow.png",
//           },
//           {
//             title: "Get Mentorship",
//             description: "We mentor all our employees to resolve problems and make sound decisions.",
//             icon: "/assets/mentorship.png",
//           },
//           {
//             title: "Opportunities",
//             description: "Endless opportunities for learning & growth.",
//             icon: "/assets/opportunity.png",
//           },
//         ]);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p className="text-center mt-6">Loading career data...</p>;

//   return (
//     <div className="py-12">
//       <CareerBanner />
//       <CareerGrid features={features} jobs={jobs} />
//     </div>
//   );
// }
