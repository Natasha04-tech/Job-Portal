"use client";

import React from "react";

interface ProgressBarProps {
  status: "applied" | "1st_round" | "2nd_round" | "selected" | "rejected"
}

export default function ProgressBar({ status }: ProgressBarProps) {
  const getProgress = (status: ProgressBarProps["status"]) => {
    switch (status) {
      case "1st_round":
        return 25;
      case "2nd_round":
        return 60;
      case "selected":
        return 100;
      case "rejected":
        return 100;
      default:
        return 0;
    }
  };

  const getProgressColor = (status: ProgressBarProps["status"]) => {
    switch (status) {
      case "selected":
        return "bg-green-500";
      case "rejected":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="mb-2">
      <div className="flex justify-between text-sm text-gray-500 mb-1">
        <span>Progress</span>
        <span>{status}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${getProgressColor(status)} h-2 rounded-full`}
          style={{ width: `${getProgress(status)}%` }}
        ></div>
      </div>
    </div>
  );
}
