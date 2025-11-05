"use client";

import React, { useState } from "react";
import { useDeleteJob, useJobsforAdmin } from "@/app/customHooks/useJobs";
import { JobWithApplications } from "@/app/utility/props";
import JobForm from "./JobForm";
import { useRouter } from "next/navigation";
import ApplicationTable from "./ApplicationTable";
import { X, MapPin, Building2, PlusCircle } from "lucide-react";

export default function JobsList() {
  const router = useRouter();
  const { data, isLoading, error } = useJobsforAdmin();
  const jobs = data as JobWithApplications[];
  const { mutate: deleteJob } = useDeleteJob();

  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobWithApplications | null>(null);

  if (isLoading) return <p className="text-center py-6">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-500 py-6">Failed to load jobs.</p>;

  const capitalizeFirst = (text: string) =>
    text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";

  return (
    <div className="p-6 bg-gray-50 min-h-screen transition-colors duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Manage Jobs</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 active:scale-95"
        >
          <PlusCircle size={18} /> Add Job
        </button>
      </div>

      {/* Jobs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs?.map((job) => (
          <div
            key={job._id}
            tabIndex={0}
            onClick={() => router.push(`/jobs/${job._id}`)}
            className="group relative bg-white rounded-2xl shadow-md border border-gray-100 p-5 
                       flex flex-col justify-between cursor-pointer
                       hover:shadow-xl focus:shadow-2xl hover:border-blue-200 focus:border-blue-300
                       hover:scale-[1.02] focus:scale-[1.02] transform transition-all duration-300 ease-out"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                {capitalizeFirst(job.title)}
              </h2>

              <div className="flex flex-col gap-1 mb-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-blue-600" />
                  <span>{capitalizeFirst(job.companyName)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-red-500" />
                  <span>{capitalizeFirst(job.location)}</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-3 line-clamp-3">{job.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {job.keySkills?.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-md border border-blue-100 group-hover:bg-blue-100 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>💼 {job.experience || "N/A"}</span>
                <span>💰 {job.salary || "N/A"}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedJob(job);
                }}
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:shadow-md transition-all active:scale-95"
              >
                View Applicants
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteJob(job._id);
                }}
                className="text-sm text-red-600 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-50 hover:shadow-sm active:scale-95 transition-all"
              >
                Delete
              </button>
            </div>

            <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-blue-200 group-focus:ring-blue-300 transition-all duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Job Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <JobForm onClose={() => setShowForm(false)} />
        </div>
      )}

      {/* Applicants Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-[92%] md:w-[75%] lg:w-[60%] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/60 overflow-hidden animate-slideUp">
            <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                Applicants for{" "}
                <span className="text-blue-600">
                  {capitalizeFirst(selectedJob.title)}
                </span>
              </h2>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {selectedJob.applications?.length ? (
                <ApplicationTable
                  title={capitalizeFirst(selectedJob.title)}
                  applications={selectedJob.applications}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-600 py-12">
                  <p className="text-center text-base">
                    No applications yet for this job.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
