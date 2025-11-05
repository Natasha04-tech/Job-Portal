"use client";

import React from "react";
import ProgressBar from "./ProgressBar";
import FeedbackTooltip from "./feedbackTooltip";
import { JobCardProps } from "@/app/utility/props";

export default function JobCard({ job }: JobCardProps) {
  const { jobId, status, adminFeedback } = job;

  // Function to truncate long descriptions
  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition relative">
      {/* Job Title and Company */}
      <div className="mb-3">
        <h2 className="text-xl font-semibold text-gray-800">{jobId.title}</h2>
        <p className="text-gray-600">{jobId.companyName}</p>
      </div>

      {/* Job Info */}
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
        <p><span className="font-medium text-gray-800">Location:</span> {jobId.location}</p>
        <p><span className="font-medium text-gray-800">Experience:</span> {jobId.experience}</p>
        <p><span className="font-medium text-gray-800">Salary:</span> {jobId.salary}</p>
        <p><span className="font-medium text-gray-800">Openings:</span> {jobId.openings}</p>
      </div>

      {/* Key Skills */}
      {jobId.keySkills && jobId.keySkills.length > 0 && (
        <div className="mb-3">
          <p className="font-medium text-gray-800 mb-1">Key Skills:</p>
          <div className="flex flex-wrap gap-2">
            {jobId.keySkills.map((skill: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4">
        {truncateText(jobId.description, 180)}
      </p>

      {/* Application Status Progress Bar */}
      <ProgressBar status={status} />

      {/* Feedback Tooltip if Rejected */}
      {status === "rejected" && adminFeedback && (
        <FeedbackTooltip feedback={adminFeedback} />
      )}

      {/* Application Status Label */}
      <div className="absolute top-3 right-3">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === "applied"
              ? "bg-blue-100 text-blue-700"
              : status === "rejected"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
    </div>
  );
}
