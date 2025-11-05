"use client";

import React from "react";
import JobDesc from "./JobDesc";
import { useRouter } from "next/navigation";

interface Job {
  _id: string;
  title: string;
  description: string;
  location: string;
  companyName: string;
  experience: string;
  salary: string;
  openings: number;
  keySkills: string[];
}

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  const router = useRouter();

  if (!jobs?.length) {
    return (
      <div className="text-center text-gray-500 mt-20 text-sm min-h-[60vh] flex items-center justify-center">
        No jobs available at the moment.
      </div>
    );
  }

  return (
    <div className="min-h-[70vh] px-6 py-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job._id}
            onClick={() => router.push(`/jobs/${job._id}`)}
            className="cursor-pointer hover:scale-[1.01] transition-transform"
          >
            <JobDesc
              id={String(job._id)}
              title={job.title}
              description={job.description}
              location={job.location}
              companyName={job.companyName}
              experience={job.experience}
              salary={job.salary}
              openings={job.openings}
              keySkills={job.keySkills}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
