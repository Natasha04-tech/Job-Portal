"use client";

import React, { useRef } from "react";
import { FileText, UploadCloud, Eye } from "lucide-react";
import { ProfileData } from "@/app/utility/props";

interface Props {
  profile: ProfileData;
  onFileChange: (file: File) => void;
}

export default function ResumeUpload({ profile, onFileChange }: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileChange(file);
  };

  const resume = profile.resume;
  const isStringResume = typeof resume === "string" && resume.trim() !== "";
  const isFileResume = resume instanceof File;

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Resume</h2>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-300 rounded-xl p-5 shadow-sm gap-4">
        {/* Resume Info */}
        <div className="flex items-center gap-3">
          <FileText size={24} className="text-blue-600" />
          <div>
            <p className="text-gray-700 font-medium">
              {isStringResume
                ? "Resume Uploaded Successfully"
                : isFileResume
                ? "Resume ready to upload"
                : "No resume uploaded yet"}
            </p>
            {isStringResume && (
              <p className="text-sm text-gray-500 truncate max-w-xs">
                {resume.split("/").pop()}
              </p>
            )}
            {isFileResume && (
              <p className="text-sm text-gray-500 truncate max-w-xs">
                {resume.name}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {isStringResume && (
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all font-medium shadow-sm"
            >
              <Eye size={18} />
              View Resume
            </a>
          )}
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm"
          >
            <UploadCloud size={18} />
            {resume ? "Replace" : "Upload"}
          </button>
        </div>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleFileChange}
      />

      <p className="text-sm text-gray-500 mt-2">
        Only PDF files allowed (max size 5MB).
      </p>
    </div>
  );
}
