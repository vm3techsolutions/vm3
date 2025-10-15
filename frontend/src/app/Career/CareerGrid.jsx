"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Component to render Features section
function Features({ features }) {
  return (
    <div className="grid md:grid-cols-3 gap-8 px-6 md:px-16 mb-12">
      {features.map((feature) => (
        <Link key={feature.id} href={`/Career`}>
          <div
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer group"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mb-4"
            />
            <h4
              className="text-xl font-bold mb-2 text-gray-700 group-hover:text-black"
            >
              {feature.title}
            </h4>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Component to render Jobs section
function Jobs({ jobs }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-6 md:px-16">
      {jobs.map((job) => (
        <Link key={job.id} href={`/Career/${job.id}`}>
          <div
            className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer"
          >
            <p className="text-sm text-gray-500 mb-1">{job.type}</p>
            <h4 className="text-lg font-bold mb-1">{job.title}</h4>
            <p className="text-sm text-gray-500">{job.category}</p>
            <p className="text-xs text-gray-400 mt-2">{job.posted}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function CareerPage() {
  const [features, setFeatures] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/CareerGrid.json") // ✅ must be lowercase "data" in public folder
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch career data");
        return res.json();
      })
      .then((data) => {
        setFeatures(data.features || []);
        setJobs(data.jobs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-6">Loading career data...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">Error: {error}</p>;

  return (
    <div className="py-12">
      {/* Heading */}
      <h3 className="text-center font-bold text-2xl text-yellow-400">
        Key Features
      </h3>
      <h2 className="text-4xl sm:text-6xl font-bold text-center mb-12">
        Become a part of our family and take your career to the next level
      </h2>

      {/* Features Section */}
      <Features features={features} />

      <h3 className="text-center font-bold text-2xl text-yellow-400">
        Career
      </h3>
      <h2 className="text-4xl sm:text-6xl font-bold text-center mb-12">
        Latest Job Openings
      </h2>

      {/* Jobs Section */}
      <Jobs jobs={jobs} />
    </div>
  );
}
