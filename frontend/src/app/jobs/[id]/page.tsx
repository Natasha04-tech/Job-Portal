"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import {
  MapPin,
  Briefcase,
  IndianRupee,
  Users,
  Building2,
  Star,
} from "lucide-react";
import { useApplyJob, useUserApplications } from "@/app/customHooks/useJobApplication";
import { useJob } from "@/app/customHooks/useJobs";
import toast from "react-hot-toast";

export default function JobDetailsPage() {
  const { id } = useParams();
  const { data: job, isLoading } = useJob(id as string);
  const { data: userApplications = [] } = useUserApplications();
  const applyJobMutation = useApplyJob();

  if (isLoading || !job)
    return (
      <div className="text-center py-20 text-gray-500">Loading job details...</div>
    );

  const hasApplied = userApplications.some(
    (app) => app.jobId?._id?.toString() === job._id.toString()
  );

  const handleApply = async () => {
    await applyJobMutation.mutateAsync(job._id);
    toast.success("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-72 w-full bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <p className="flex items-center justify-center gap-2 mt-2 text-blue-100">
            <Building2 size={18} /> {job.companyName}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl -mt-16 relative z-20 p-8">
        <div className="grid sm:grid-cols-3 gap-6 text-gray-700 text-sm mb-6 border-b pb-4">
          <div className="flex items-center gap-2">
            <MapPin className="text-gray-500" size={16} /> {job.location}
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="text-gray-500" size={16} /> {job.experience}
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee className="text-gray-500" size={16} /> {job.salary}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <Star size={16} className="text-yellow-500" /> Job Description
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">{job.description}</p>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Skills</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {job.keySkills.map((skill: string, i: number) => (
            <span
              key={i}
              className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full border border-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Users size={16} />
            <span>{job.openings} openings</span>
          </div>

          <button
            onClick={handleApply}
            disabled={applyJobMutation.isPending || hasApplied}
            className={`px-8 py-3 rounded-lg font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md ${
              hasApplied
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {hasApplied ? "Applied" : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
