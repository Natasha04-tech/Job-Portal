"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { useCreateJob } from "@/app/customHooks/useJobs";

interface JobFormProps {
  onClose: () => void;
}

export default function JobForm({ onClose }: JobFormProps) {
  const { mutate: createJob } = useCreateJob();

  const [newJob, setNewJob] = useState({
    title: "",
    companyName: "",
    location: "",
    description: "",
    experience: "",
    salary: "",
    openings: "",
    keySkills: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedJob = {
      ...newJob,
      openings: Number(newJob.openings),
      keySkills: newJob.keySkills.split(",").map((s) => s.trim()),
    };

    createJob(formattedJob);
    onClose();
  };

  return (
    <div className="bg-white w-[90%] sm:w-[500px] rounded-2xl shadow-2xl border border-gray-200 p-6 relative animate-fadeInUp">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        <X size={22} />
      </button>

      <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
        🧾 Post a New Job
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={newJob.title}
          onChange={handleChange}
          className="border px-3 py-2 rounded-md focus:outline-blue-500"
          required
        />

        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={newJob.companyName}
          onChange={handleChange}
          className="border px-3 py-2 rounded-md focus:outline-blue-500"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newJob.location}
          onChange={handleChange}
          className="border px-3 py-2 rounded-md focus:outline-blue-500"
          required
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience (e.g. 2–4 years)"
          value={newJob.experience}
          onChange={handleChange}
          className="border px-3 py-2 rounded-md focus:outline-blue-500"
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary (e.g. ₹6–10 LPA)"
          value={newJob.salary}
          onChange={handleChange}
          className="border px-3 py-2 rounded-md focus:outline-blue-500"
        />

        <input
          type="number"
          name="openings"
          placeholder="Openings"
          value={newJob.openings}
          onChange={handleChange}
          className="border px-3 py-2 rounded-md focus:outline-blue-500"
          required
        />

        <input
          type="text"
          name="keySkills"
          placeholder="Key Skills (comma separated)"
          value={newJob.keySkills}
          onChange={handleChange}
          className="border px-3 py-2 rounded-md focus:outline-blue-500"
          required
        />

        <textarea
          name="description"
          placeholder="Job Description"
          value={newJob.description}
          onChange={handleChange}
          className="border px-3 py-2 rounded-md focus:outline-blue-500 h-28 resize-none"
          required
        />

        <div className="flex justify-end gap-3 mt-2">
          <button
            type="button"
            onClick={onClose}
            className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition shadow"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
