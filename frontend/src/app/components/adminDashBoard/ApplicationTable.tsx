"use client";

import React, { useState } from "react";
import { PopulatedApplication } from "@/app/utility/props";
import { useUpdateApplicationStatus } from "@/app/customHooks/useJobApplication";
import { useQueryClient } from "@tanstack/react-query";

interface ApplicationTableProps {
  title: string;
  applications: PopulatedApplication[];
}

export default function ApplicationTable({ title, applications }: ApplicationTableProps) {
  const queryClient = useQueryClient();
  const { mutate: updateStatus } = useUpdateApplicationStatus();
  console.log(applications);
  const [feedbackModal, setFeedbackModal] = useState<{
    open: boolean;
    appId: string | null;
  }>({ open: false, appId: null });

  const [feedback, setFeedback] = useState("");
const handleStatusChange = (
  appId: string,
  status: "applied" | "1st_round" | "2nd_round" | "selected" | "rejected"
) => {
  if (status === "rejected") {
    setFeedbackModal({ open: true, appId });
  } else {
    // Optimistic update
    queryClient.setQueryData(["userApplications"], (oldData: any) => {
      if (!oldData) return oldData;
      return oldData.map((job: any) => ({
        ...job,
        applications: job.applications.map((app: any) =>
          app._id === appId ? { ...app, status } : app
        ),
      }));
    });

    updateStatus(
      { id: appId, status, feedback: "" },
      {
        onSettled: () => {
          queryClient.invalidateQueries({ queryKey: ["userApplications"] });
        },
      }
    );
  }
};

const handleFeedbackSubmit = () => {
  if (!feedbackModal.appId) return;


  queryClient.setQueryData(["userApplications"], (oldData: any) => {
    if (!oldData) return oldData;
    return oldData.map((job: any) => ({
      ...job,
      applications: job.applications.map((app: any) =>
        app._id === feedbackModal.appId
          ? { ...app, status: "rejected", feedback }
          : app
      ),
    }));
  });

  updateStatus(
    { id: feedbackModal.appId, status: "rejected", feedback },
    {
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["userApplications"] });
      },
    }
  );

  setFeedbackModal({ open: false, appId: null });
  setFeedback("");
};

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-6">
      <h3 className="font-semibold text-lg mb-3 text-gray-800">
        Applications for <span className="text-blue-600">{title}</span>
      </h3>

      {applications.length ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border-b p-3">Applicant</th>
                <th className="border-b p-3">Email</th>
                <th className="border-b p-3">Status</th>
                <th className="border-b p-3">Change Status</th>
              </tr>
            </thead>
         <tbody>
  {applications.map((app) => (
    
    <tr key={app._id} className="hover:bg-gray-50 transition">
      <td className="p-3">
        {app.userId ? `${app.userId.firstName} ${app.userId.lastName}` : "Unknown User"}
      </td>
      <td className="p-3">{app.userId?.email ?? "N/A"}</td>
      <td className="p-3 capitalize">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            app.status === "selected"
              ? "bg-green-100 text-green-700"
              : app.status === "rejected"
              ? "bg-red-100 text-red-700"
              : app.status === "applied"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {app.status.replace("_", " ")}
        </span>
      </td>
      <td className="p-3">
        <select
          value={app.status}
          onChange={(e) =>
            handleStatusChange(
              app._id,
              e.target.value as
                | "applied"
                | "1st_round"
                | "2nd_round"
                | "selected"
                | "rejected"
            )
          }
          className="border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="applied">Applied</option>
          <option value="1st_round">1st Round</option>
          <option value="2nd_round">2nd Round</option>
          <option value="selected">Selected</option>
          <option value="rejected">Rejected</option>
        </select>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-sm">No applications yet.</p>
      )}

      {/* Feedback Modal */}
      {feedbackModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h4 className="text-lg font-semibold mb-3 text-gray-800">Provide Rejection Feedback</h4>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              placeholder="Enter feedback for the applicant..."
              className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setFeedbackModal({ open: false, appId: null })}
                className="px-3 py-1 rounded-md border text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleFeedbackSubmit}
                className="px-4 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
