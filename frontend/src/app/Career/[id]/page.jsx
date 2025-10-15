
// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";

// export default function CareerDetailPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const [job, setJob] = useState(null);
//   const [error, setError] = useState(null);

//   const [commentData, setCommentData] = useState({
//     comment: "",
//     name: "",
//     email: "",
//     website: "",
//   });

//   // Helper to safely map strings or arrays
//   const safeMap = (field) => (Array.isArray(field) ? field : field ? [field] : []);

//   useEffect(() => {
//     fetch("/data/CareerDetail.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const foundJob = data.find((j) => j.id === parseInt(id));
//         if (foundJob) setJob(foundJob);
//         else setError("Job not found");
//       })
//       .catch(() => setError("Failed to load job details"));
//   }, [id]);

//   const handleChange = (e) => {
//     setCommentData({ ...commentData, [e.target.name]: e.target.value });
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     console.log("Comment submitted:", commentData);
//     alert("Comment submitted!");
//     setCommentData({ comment: "", name: "", email: "", website: "" });
//   };

//   if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
//   if (!job) return <p className="text-center mt-6">Loading job details...</p>;

//   const showCommentForm = job.id > 2;

//   return (
//     <div className="max-w-6xl mx-auto py-28 px-6 grid md:grid-cols-3 gap-8">
//       {/* Left Section */}
//       <div className="col-span-2">
//         {/* Breadcrumb */}
//         <p className="text-sm text-gray-400 mb-2">
//           <a href=".">Home</a> / {job.type} / {job.title}
//         </p>

//         {/* Title & Meta */}
//         <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
//         <div className="flex text-sm text-gray-500 mb-4 space-x-4">
//           <span>Posted: {job.posted}</span>
//           <span>Type: {job.jobType || job.type}</span>
//           <span>Views: {job.views}</span>
//         </div>

//         {/* About */}
//         <h2 className="text-lg font-semibold mb-2">About The Role</h2>
//         <p className="mb-6 text-gray-700">{job.about}</p>

//         {/* Responsibilities */}
//         {safeMap(job.responsibilities).length > 0 && (
//           <>
//             <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
//             <ul className="list-disc list-inside mb-6 text-gray-700">
//               {safeMap(job.responsibilities).map((r, i) => (
//                 <li key={i}>{r}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* Required Qualifications */}
//         {safeMap(job.requirements).length > 0 && (
//           <>
//             <h2 className="text-lg font-semibold mb-2">Required Qualifications</h2>
//             <ul className="list-disc list-inside mb-6 text-gray-700">
//               {safeMap(job.requirements).map((req, i) => (
//                 <li key={i}>{req}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* Preferred Qualifications */}
//         {safeMap(job.qualification).length > 0 && (
//           <>
//             <h2 className="text-lg font-semibold mb-2">Preferred Qualifications</h2>
//             <ul className="list-disc list-inside mb-6 text-gray-700">
//               {safeMap(job.qualification).map((req, i) => (
//                 <li key={i}>{req}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* What We Offer */}
//         {safeMap(job.Offer).length > 0 && (
//           <>
//             <h2 className="text-lg font-semibold mb-2">What We Offer</h2>
//             <ul className="list-disc list-inside mb-6 text-gray-700">
//               {safeMap(job.Offer).map((req, i) => (
//                 <li key={i}>{req}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* Schedule */}
//         {job.schedule && (
//           <>
//             <h2 className="text-lg font-semibold mb-2">Schedule</h2>
//             <ul className="list-disc list-inside mb-6 text-gray-700">
//               {safeMap(job.schedule).map((req, i) => (
//                 <li key={i}>{req}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* Education */}
//         {safeMap(job.education).length > 0 && (
//           <>
//             <h2 className="text-lg font-semibold mb-2">Education</h2>
//             <ul className="list-disc list-inside mb-6 text-gray-700">
//               {safeMap(job.education).map((req, i) => (
//                 <li key={i}>{req}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* Experience */}
//         {safeMap(job.experience).length > 0 && (
//           <>
//             <h2 className="text-lg font-semibold mb-2">Experience</h2>
//             <ul className="list-disc list-inside mb-6 text-gray-700">
//               {safeMap(job.experience).map((req, i) => (
//                 <li key={i}>{req}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* Employment Type */}
//         {safeMap(job.employmentType).length > 0 && (
//           <>
//             <h2 className="text-lg font-semibold mb-2">Enrollment Type</h2>
//             <ul className="list-disc list-inside mb-6 text-gray-700">
//               {safeMap(job.employmentType).map((req, i) => (
//                 <li key={i}>{req}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* Industry */}
//         {safeMap(job.industry).length > 0 && (
//           <>
//             <h2 className="text-lg font-semibold mb-2">Industry</h2>
//             <ul className="list-disc list-inside mb-6 text-gray-700">
//               {safeMap(job.industry).map((req, i) => (
//                 <li key={i}>{req}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* Contact / Resume */}
//         {safeMap(job.contactEmail).length > 0 && (
//           <>
//             <h2 className="text-lg font-semibold mb-2">Drop your Resume</h2>
//             <ul className="list-disc list-inside mb-6 text-gray-700">
//               {safeMap(job.contactEmail).map((req, i) => (
//                 <li key={i}>{req}</li>
//               ))}
//             </ul>
//           </>
//         )}

//         {/* Apply button */}
//         <button
//           className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mb-8"
//           onClick={() =>
//             router.push(
//               `/Career/${id}/apply?title=${encodeURIComponent(job.title)}`
//             )
//           }
//         >
//           Apply Now
//         </button>

//         {/* Leave a Comment Form */}
//         {showCommentForm && (
//           <div className="border-t pt-8">
//             <h2 className="text-2xl font-bold mb-2">Leave a comment</h2>
//             <p className="text-gray-500 mb-4">
//               Your email address will not be published. Required fields are marked *
//             </p>
//             <form onSubmit={handleCommentSubmit} className="space-y-4">
//               <div>
//                 <label className="block font-semibold mb-1">Comment *</label>
//                 <textarea
//                   name="comment"
//                   value={commentData.comment}
//                   onChange={handleChange}
//                   required
//                   className="w-full border rounded-lg p-2"
//                   rows={4}
//                   placeholder="Write your comment here..."
//                 />
//               </div>
//               <div>
//                 <label className="block font-semibold mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={commentData.name}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg p-2"
//                   placeholder="Your name"
//                 />
//               </div>
//               <div>
//                 <label className="block font-semibold mb-1">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={commentData.email}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg p-2"
//                   placeholder="Your email"
//                 />
//               </div>
//               <div>
//                 <label className="block font-semibold mb-1">Website</label>
//                 <input
//                   type="text"
//                   name="website"
//                   value={commentData.website}
//                   onChange={handleChange}
//                   className="w-full border rounded-lg p-2"
//                   placeholder="Your website (optional)"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mb-8"
//               >
//                 Post Comment
//               </button>
//             </form>
//           </div>
//         )}
//       </div>

//       {/* Right Section: Contact Sidebar */}
//       <div className="mt-28 bg-gray-100 h-80 p-9 rounded-lg">
//         <h3 className="font-bold text-lg mb-3">Contact</h3>
//         <p className="mb-2"><strong>Location:</strong> Techsolaries HQ</p>
//         <p><strong>Contact Number:</strong> +91 9876543210</p>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { EyeIcon } from "@heroicons/react/24/solid"; // Install heroicons: npm install @heroicons/react

export default function CareerDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);
  const [views, setViews] = useState(0); // view counter

  const [commentData, setCommentData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
  });

  const safeMap = (field) => (Array.isArray(field) ? field : field ? [field] : []);

  useEffect(() => {
    fetch("/data/CareerDetails.json")
      .then((res) => res.json())
      .then((data) => {
        const foundJob = data.find((j) => j.id === parseInt(id));
        if (foundJob) {
          setJob(foundJob);

          // Handle view count
          const viewedJobs = JSON.parse(localStorage.getItem("viewedJobs") || "[]");
          if (!viewedJobs.includes(foundJob.id)) {
            setViews(foundJob.views + 1);
            viewedJobs.push(foundJob.id);
            localStorage.setItem("viewedJobs", JSON.stringify(viewedJobs));
          } else {
            setViews(foundJob.views);
          }
        } else {
          setError("Job not found");
        }
      })
      .catch(() => setError("Failed to load job details"));
  }, [id]);

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", commentData);
    alert("Comment submitted!");
    setCommentData({ comment: "", name: "", email: "", website: "" });
  };

  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
  if (!job) return <p className="text-center mt-6">Loading job details...</p>;

  const showCommentForm = job.id > 2;

  return (
    <div className="max-w-6xl mx-auto py-28 px-6 grid md:grid-cols-3 gap-8">
      {/* Left Section */}
      <div className="col-span-2">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-2">
          <a href=".">Home</a> / {job.type} / {job.title}
        </p>

        {/* Title & Meta */}
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <div className="flex text-sm text-gray-500 mb-4 space-x-4 items-center">
          <span>Posted: {job.posted}</span>
          <span>Type: {job.jobType || job.type}</span>
          <span className="flex items-center gap-1">
            <EyeIcon className="w-4 h-4" /> {views}
          </span>
        </div>

        {/* About */}
        <h2 className="text-lg font-semibold mb-2">About The Role</h2>
        <p className="mb-6 text-gray-700">{job.about}</p>

        {/* Responsibilities */}
        {safeMap(job.responsibilities).length > 0 && (
          <>
            <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {safeMap(job.responsibilities).map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </>
        )}

        {/* Required Qualifications */}
        {safeMap(job.requirements).length > 0 && (
          <>
            <h2 className="text-lg font-semibold mb-2">Required Qualifications</h2>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {safeMap(job.requirements).map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </>
        )}

        {/* Preferred Qualifications */}
        {safeMap(job.qualification).length > 0 && (
          <>
            <h2 className="text-lg font-semibold mb-2">Preferred Qualifications</h2>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {safeMap(job.qualification).map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </>
        )}

        {/* What We Offer */}
        {safeMap(job.Offer).length > 0 && (
          <>
            <h2 className="text-lg font-semibold mb-2">What We Offer</h2>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {safeMap(job.Offer).map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </>
        )}

        {/* Schedule */}
        {job.schedule && (
          <>
            <h2 className="text-lg font-semibold mb-2">Schedule</h2>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {safeMap(job.schedule).map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </>
        )}

        {/* Apply Button */}
        <button
          className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mb-8"
          onClick={() =>
            router.push(
              `/Career/${id}/apply?title=${encodeURIComponent(job.title)}`
            )
          }
        >
          Apply Now
        </button>

        {/* Comment Form */}
        {showCommentForm && (
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-2">Leave a comment</h2>
            <p className="text-gray-500 mb-4">
              Your email address will not be published. Required fields are marked *
            </p>
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Comment *</label>
                <textarea
                  name="comment"
                  value={commentData.comment}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-2"
                  rows={4}
                  placeholder="Write your comment here..."
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={commentData.name}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={commentData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Website</label>
                <input
                  type="text"
                  name="website"
                  value={commentData.website}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-2"
                  placeholder="Your website (optional)"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mb-8"
              >
                Post Comment
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Right Section: Contact Sidebar */}
      <div className="mt-28 bg-gray-100 h-80 p-9 rounded-lg">
        <h3 className="font-bold text-lg mb-3">Contact</h3>
        <p className="mb-2"><strong>Location:</strong> Techsolaries HQ</p>
        <p><strong>Contact Number:</strong> +91 9876543210</p>
      </div>
    </div>
  );
}
