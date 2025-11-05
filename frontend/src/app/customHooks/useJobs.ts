"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createJob, deleteJob, fetchJobById, fetchJobs, fetchJobsforAdmin, updateJob } from "../utility/axiosApi";
import axios from "axios";
import { JobWithApplications } from "../utility/props";
import axiosInstance from "../lib/axiosInstance";




export const useJobs = () =>
  useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  
export const useJobsforAdmin = () =>
  useQuery<JobWithApplications[]>({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axiosInstance.get("/jobs/getjobs");
      return res.data?? [];
    },
  });
export const useJob = (id: string) =>
  useQuery({
    queryKey: ["jobs", id],
    queryFn: () => fetchJobById(id),
    enabled: !!id,
  });

export const useCreateJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });
};

export const useUpdateJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });
};

export const useDeleteJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    },
  });
};
