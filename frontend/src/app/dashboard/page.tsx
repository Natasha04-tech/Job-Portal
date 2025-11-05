"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import AdminDashboard from "../components/adminDashBoard/AdminDashboard";
import MyJobsPage from "./my-jobs/page";
import JobPage from "../components/jobs/JobPage";

export default function DashboardPage() {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) return <div>Loading...</div>;

  return user.role === "admin" ? <AdminDashboard /> : <JobPage />;
}
