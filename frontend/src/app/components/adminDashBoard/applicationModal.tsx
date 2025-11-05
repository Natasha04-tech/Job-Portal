"use client";

import React from "react";
import { X } from "lucide-react";
import { JobWithApplications } from "@/app/utility/props";
import ApplicationTable from "./ApplicationTable";

interface ApplicantsModalProps {
  job: JobWithApplications;
  onClose: () => void;
}

export default function ApplicantsModal({ job, onClose }: ApplicantsModalProps) {
  const capitalizeFirst = (text: string) =>
    text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-[92%] md:w-[75%] lg:w-[60%] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/60 overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between p-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Applicants for{" "}
            <span className="text-blue-600">{capitalizeFirst(job.title)}</span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {job.applications?.length ? (
            <ApplicationTable
              title={capitalizeFirst(job.title)}
              applications={job.applications}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-600 py-12">
              <p className="text-center text-base">No applications yet for this job.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
