"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import MyJob from "@/app/components/myJob/MyJob";

export default function MyJobsPage() {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700 text-lg font-medium">
        Login first to view your jobs.
      </div>
    );
  }

  return <MyJob />;
}
