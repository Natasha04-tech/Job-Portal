"use client";

import React from "react";
import { FeedbackTooltipProps } from "@/app/utility/props";

export default function FeedbackTooltip({ feedback }: FeedbackTooltipProps) {
  return (
    <div className="absolute top-4 right-4 group relative">
      <span className="text-red-500 text-sm font-medium cursor-help">ⓘ</span>
      <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-3 py-2 w-56 right-0 top-6 shadow-md">
        {feedback}
      </div>
    </div>
  );
}
