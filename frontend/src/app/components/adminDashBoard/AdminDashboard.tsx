"use client";
import React, { useState } from "react";
import UsersList from "./userList";
import JobsList from "./jobList";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"users" | "jobs">("jobs");

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-6 py-2 rounded-full shadow-sm transition font-medium ${
              activeTab === "users"
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-50"
            }`}
          >
            Manage Users
          </button>
          <button
            onClick={() => setActiveTab("jobs")}
            className={`px-6 py-2 rounded-full shadow-sm transition font-medium ${
              activeTab === "jobs"
                ? "bg-blue-600 text-white"
                : "bg-white border hover:bg-gray-50"
            }`}
          >
            Manage Jobs
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          {activeTab === "users" ? <UsersList /> : <JobsList />}
        </div>
      </div>
    </div>
  );
}
