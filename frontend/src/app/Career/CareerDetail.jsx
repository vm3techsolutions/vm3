
// "use client";
// import React from "react";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function CareerDetailPage() {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);

//   // Form state
//   const [commentData, setCommentData] = useState({
//     comment: "",
//     name: "",
//     email: "",
//     website: ""
//   });

//   useEffect(() => {
//     fetch("/data/CareerDetail.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((j) => j.id === parseInt(id));
//         setJob(found);
//       });
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

//   if (!job) return <p className="text-center mt-6">Loading...</p>;

//   // 🔹 Helper to render array or string safely
//   const renderList = (data) => {
//     if (!data) return null;
//     if (Array.isArray(data)) {
//       return (
//         <ul className="list-disc list-inside mb-6 text-gray-700">
//           {data.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       );
//     }
//     return <p className="mb-6 text-gray-700">{data}</p>;
//   };

//   return (
//     <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto py-10 px-6">
//       {/* Left Section */}
//       <div className="col-span-2">
//         {/* Breadcrumb */}
//         <p className="text-sm text-gray-400 mb-2">
//           Home / {job.type} / {job.title}
//         </p>

//         {/* Title & Meta */}
//         <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
//         <div className="flex text-sm text-gray-500 mb-4 space-x-4">
//           <span>{job.posted}</span>
//           <span>{job.type}</span>
//           <span>{job.views}</span>
//         </div>

//         {/* About */}
//         <h2 className="text-lg font-semibold mb-2">About the Role</h2>
//         <p className="mb-6 text-gray-700">{job.about}</p>

//         {/* Responsibilities */}
//         <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
//         {renderList(job.responsibilities)}

//         {/* Requirements */}
//         <h2 className="text-lg font-semibold mb-2">Requirements & Skills</h2>
//         {renderList(job.requirements)}

//         {/* Preferred Qualifications */}
//         <h2 className="text-lg font-semibold mb-2">Preferred Qualifications</h2>
//         {renderList(job.qualification)}

//         {/* What We Offer */}
//         <h2 className="text-lg font-semibold mb-2">What We Offer</h2>
//         {renderList(job.Offer)}

//         {/* Schedule */}
//         <h2 className="text-lg font-semibold mb-2">Schedule</h2>
//         {renderList(job.schedule)}

//         {/* Education */}
//         <h2 className="text-lg font-semibold mb-2">Education</h2>
//         {renderList(job.education)}

//         {/* Experience */}
//         <h2 className="text-lg font-semibold mb-2">Experience</h2>
//         {renderList(job.experience)}

//         {/* Employment Type */}
//         <h2 className="text-lg font-semibold mb-2">Employment Type</h2>
//         {renderList(job.employmentType)}

//         {/* Industry */}
//         <h2 className="text-lg font-semibold mb-2">Industry</h2>
//         {renderList(job.industry)}

//         {/* Contact Email */}
//         <h2 className="text-lg font-semibold mb-2">Drop your Resume</h2>
//         {renderList(job.contactEmail)}

//         {/* Apply button */}
//         <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mb-8">
//           Apply Now
//         </button>

//         {/* Leave a Comment Form */}
//         <div className="border-t pt-8">
//           <h2 className="text-2xl font-bold mb-2">Leave a comment</h2>
//           <p className="text-gray-500 mb-4">
//             Your email address will not be published. Required fields are marked *
//           </p>
//           <form onSubmit={handleCommentSubmit} className="space-y-4">
//             <div>
//               <label className="block font-semibold mb-1">Comment *</label>
//               <textarea
//                 name="comment"
//                 value={commentData.comment}
//                 onChange={handleChange}
//                 required
//                 className="w-full border rounded-lg p-2"
//                 rows={4}
//                 placeholder="Write your comment here..."
//               />
//             </div>
//             <div>
//               <label className="block font-semibold mb-1">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={commentData.name}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2"
//                 placeholder="Your name"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={commentData.email}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2"
//                 placeholder="Your email"
//               />
//             </div>
//             <div>
//               <label className="block font-semibold mb-1">Website</label>
//               <input
//                 type="text"
//                 name="website"
//                 value={commentData.website}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg p-2"
//                 placeholder="Your website (optional)"
//               />
//             </div>
//             <button
//               type="submit"
//               className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//             >
//               Post Comment
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Right Section: Contact Sidebar */}
//       <div className="col-span-1 border rounded-lg p-4 bg-gray-50">
//         <h3 className="font-bold text-lg mb-3">Contact</h3>
//         <p className="mb-2">
//           <strong>Location:</strong> Techsolaries HQ
//         </p>
//         <p>
//           <strong>Contact Number:</strong> +91 9876543210
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { EyeIcon } from "@heroicons/react/24/solid"; // npm install @heroicons/react

export default function CareerDetailPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [views, setViews] = useState(0);

  // Form state
  const [commentData, setCommentData] = useState({
    comment: "",
    name: "",
    email: "",
    website: ""
  });

  useEffect(() => {
    fetch("/data/CareerDetails.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((j) => j.id === parseInt(id));
        if (found) {
          setJob(found);

          // Handle view count with localStorage
          const viewedJobs = JSON.parse(localStorage.getItem("viewedJobs") || "[]");
          if (!viewedJobs.includes(found.id)) {
            setViews(found.views + 1);
            viewedJobs.push(found.id);
            localStorage.setItem("viewedJobs", JSON.stringify(viewedJobs));
          } else {
            setViews(found.views);
          }
        }
      });
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

  if (!job) return <p className="text-center mt-6">Loading...</p>;

  // 🔹 Helper to render array or string safely
  const renderList = (data) => {
    if (!data) return null;
    if (Array.isArray(data)) {
      return (
        <ul className="list-disc list-inside mb-6 text-gray-700">
          {data.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p className="mb-6 text-gray-700">{data}</p>;
  };

  return (
    <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto py-10 px-6">
      {/* Left Section */}
      <div className="col-span-2">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 mb-2">
          Home / {job.type} / {job.title}
        </p>

        {/* Title & Meta */}
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <div className="flex text-sm text-gray-500 mb-4 space-x-4 items-center">
          <span>{job.posted}</span>
          <span>{job.type}</span>
          <span className="flex items-center gap-1">
            <EyeIcon className="w-4 h-4" /> {views}
          </span>
        </div>

        {/* About */}
        <h2 className="text-lg font-semibold mb-2">About the Role</h2>
        <p className="mb-6 text-gray-700">{job.about}</p>

        {/* Responsibilities */}
        <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
        {renderList(job.responsibilities)}

        {/* Requirements */}
        <h2 className="text-lg font-semibold mb-2">Requirements & Skills</h2>
        {renderList(job.requirements)}

        {/* Preferred Qualifications */}
        <h2 className="text-lg font-semibold mb-2">Preferred Qualifications</h2>
        {renderList(job.qualification)}

        {/* What We Offer */}
        <h2 className="text-lg font-semibold mb-2">What We Offer</h2>
        {renderList(job.Offer)}

        {/* Schedule */}
        <h2 className="text-lg font-semibold mb-2">Schedule</h2>
        {renderList(job.schedule)}

        {/* Education */}
        <h2 className="text-lg font-semibold mb-2">Education</h2>
        {renderList(job.education)}

        {/* Experience */}
        <h2 className="text-lg font-semibold mb-2">Experience</h2>
        {renderList(job.experience)}

        {/* Employment Type */}
        <h2 className="text-lg font-semibold mb-2">Employment Type</h2>
        {renderList(job.employmentType)}

        {/* Industry */}
        <h2 className="text-lg font-semibold mb-2">Industry</h2>
        {renderList(job.industry)}

        {/* Contact Email */}
        <h2 className="text-lg font-semibold mb-2">Drop your Resume</h2>
        {renderList(job.contactEmail)}

        {/* Apply button */}
        <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition mb-8">
          Apply Now
        </button>

        {/* Leave a Comment Form */}
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
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>

      {/* Right Section: Contact Sidebar */}
      <div className="col-span-1 border rounded-lg p-4 bg-gray-50">
        <h3 className="font-bold text-lg mb-3">Contact</h3>
        <p className="mb-2">
          <strong>Location:</strong> Techsolaries HQ
        </p>
        <p>
          <strong>Contact Number:</strong> +91 9876543210
        </p>
      </div>
    </div>
  );
}

