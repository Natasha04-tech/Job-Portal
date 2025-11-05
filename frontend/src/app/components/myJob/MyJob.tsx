"use client";

import React from "react";
import JobCard from "./JobCard";
import {  useUserApplications } from "@/app/customHooks/useJobApplication";
import { JobApplication } from "@/app/utility/props";


export default function MyJob() {
  const { data: applications, isLoading, error } = useUserApplications();
 console.log("applications are",applications)
  if (isLoading) return <p>Loading your applications...</p>;
  if (error) return <p>Failed to load applications.</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">My Jobs</h1>

      {!applications || applications.length === 0 ? (
        <p className="text-gray-600">You haven’t applied to any jobs yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((job: JobApplication) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
