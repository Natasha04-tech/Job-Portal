"use client";

import React from "react";
import JobList from "./JobList";
import { useJobs } from "@/app/customHooks/useJobs";

export default function JobPage() {
  const { data: jobs, isLoading, error } = useJobs();

  if (isLoading) return <p>Loading jobs...</p>;
  if (error) return <p>Failed to load jobs.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Available Jobs
      </h1>
      {jobs && jobs.length > 0 ? (
        <JobList jobs={jobs} />
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
}
