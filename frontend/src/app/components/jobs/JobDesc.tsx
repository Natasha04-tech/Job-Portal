"use client";

import React from "react";
import { MapPin, Building2 } from "lucide-react";

interface JobDescFullProps {
  id: string;
  title: string;
  companyName: string;
  location: string;
  description: string;
  experience: string;
  salary: string;
  openings: number;
  keySkills: string[];
}

export default function JobDesc({
  id,
  title,
  companyName,
  location,
  description,
  experience,
  salary,
  openings,
  keySkills,
}: JobDescFullProps) {
  const capitalizeFirst = (text: string) =>
    text ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() : "";

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-md border border-gray-100 p-5
                 flex flex-col justify-between cursor-pointer
                 hover:shadow-xl focus:shadow-2xl hover:border-blue-200 focus:border-blue-300
                 hover:scale-[1.02] focus:scale-[1.02] transform transition-all duration-300 ease-out"
    >
      {/* Card Content */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
          {capitalizeFirst(title)}
        </h2>

        <div className="flex flex-col gap-1 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-blue-600" />
            <span>{capitalizeFirst(companyName)}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-red-500" />
            <span>{capitalizeFirst(location)}</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-3 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {keySkills?.slice(0, 4).map((skill, i) => (
            <span
              key={i}
              className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-md border border-blue-100 group-hover:bg-blue-100 transition-all"
            >
              {skill}
            </span>
          ))}
          {keySkills?.length > 4 && (
            <span className="text-xs text-gray-500">+{keySkills.length - 4} more</span>
          )}
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>💼 {experience || "N/A"}</span>
          <span>💰 {salary || "N/A"}</span>
        </div>
      </div>

      {/* Optional Overlay (for hover effect border glow) */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-blue-200 group-focus:ring-blue-300 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}
