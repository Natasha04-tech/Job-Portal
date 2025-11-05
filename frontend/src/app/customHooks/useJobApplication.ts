"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/app/lib/axiosInstance";
import { JobApplication, UpdateStatusPayload } from "../utility/props";
import { applyForJob, fetchUserApplications } from "../utility/axiosApi";


const updateApplicationStatus = async ({
  id,
  status,
  feedback,
}: UpdateStatusPayload): Promise<JobApplication> => {
  const res = await axiosInstance.put(`/applications/${id}/status`, {
    status,
    adminFeedback: feedback,
  });
  return res.data;
};


export const useUserApplications = () =>
  useQuery<JobApplication[]>({
    queryKey: ["userApplications"],
    queryFn: fetchUserApplications,
  });


export const useApplyJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: applyForJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userApplications"] });
    },
  });
};


export const useUpdateApplicationStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateApplicationStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userApplications"] });
    },
  });
};
