"use client";
import { useState } from "react";

export default function ApplyForm({ jobTitle }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    jobTitle: jobTitle || "", // Pre-fill with prop if passed
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted for:", jobTitle);
    console.log("Form Data:", formData);

    setSubmitted(true);
  };

  if (submitted)
    return (
      <p className="text-green-600 mt-24 font-semibold ">
        Your application for "{jobTitle}" has been submitted!
      </p>
    );

  return (
   <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-2xl">
  <h3 className="text-xl font-bold mb-2">Apply for {jobTitle}</h3>

  {/* Full Name & Email side by side */}
  <div className="flex gap-4">
    <div className="flex-1">
      <label className="block text-sm font-medium mb-1">Full Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Enter full Name"
        className="w-full border p-2 rounded"
      />
    </div>

    <div className="flex-1">
      <label className="block text-sm font-medium mb-1">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
    </div>
  </div>

  {/* Phone & City side by side */}
  <div className="flex gap-4">
    <div className="flex-1">
      <label className="block text-sm font-medium mb-1">Phone</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
    </div>

    <div className="flex-1">
      <label className="block text-sm font-medium mb-1">City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
    </div>
  </div>

  {/* Rest of the fields (Address, State, Job Title, Resume) can stay full width */}
  <div>
    <label className="block text-sm font-medium mb-1">Address</label>
    <input
      type="text"
      name="address"
      value={formData.address}
      onChange={handleChange}
      required
      className="w-full border p-2 rounded"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">State</label>
    <input
      type="text"
      name="state"
      value={formData.state}
      onChange={handleChange}
      required
      className="w-full border p-2 rounded"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Job Title</label>
    <input
      type="text"
      name="jobTitle"
      value={formData.jobTitle}
      readOnly
      className="w-full border p-2 rounded bg-gray-100"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1">Resume</label>
    <input
      type="file"
      name="resume"
      accept=".pdf,.doc,.docx"
      onChange={handleChange}
      required
      className="w-full"
    />
  </div>
        {/* Submit */}
      <button
        type="submit"
        className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
      >
        Submit Application
      </button>
    </form>
  );
}
