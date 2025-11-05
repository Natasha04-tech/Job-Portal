import axiosInstance from "@/app/lib/axiosInstance";
import { JobApplication, JobI, LoginData, SignupData, UpdateStatusPayload, UserI, UserWithSkills } from "./props";



export const fetchUserApplications = async (): Promise<JobApplication[]> => {
  const res = await axiosInstance.get("/applications/my");
  console.log("11",res)
  return res.data;
};

export const applyForJob = async (jobId: string): Promise<{ message: string }> => {
    console.log("job id is",jobId)
  const res = await axiosInstance.post(`/applications/${jobId}/apply`);
  return res.data;
};


export const loginUser = async (data: LoginData) => {
  const res = await axiosInstance.post("/auth/login", data);
  return res.data;
};

export const signupUser = async (data: SignupData) => {
  const res = await axiosInstance.post("/auth/signup", data);
  return res.data;
};

export const fetchJobs = async (): Promise<JobI[]> => {
  const res = await axiosInstance.get("/jobs");
  return res.data;
};


export const fetchJobById = async (id: string): Promise<JobI> => {
  const res = await axiosInstance.get(`/jobs/${id}`);
  return res.data;
};

export const createJob = async (job: Omit<JobI, "_id">) => {
  const res = await axiosInstance.post("/jobs", job);
  return res.data;
};

export const updateJob = async ({ _id, ...data }: JobI) => {
  const res = await axiosInstance.put(`/jobs/${_id}`, data);
  return res.data;
};

export const deleteJob = async (id: string) => {
  const res = await axiosInstance.delete(`/jobs/${id}`);
  return res.data;
};


export const addUser = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  skills: string[] | string;
}) => {

  const payload = {
    ...data,
    skills:
      typeof data.skills === "string"
        ? data.skills.split(",").map((s) => s.trim())
        : data.skills,
  };

  const res = await axiosInstance.post("/users/add", payload);
  return res.data;
};



export const fetchUsers = async (): Promise<UserWithSkills[]> => {
  const res = await axiosInstance.get("/users");
  return res.data;
};

export const fetchUserById = async (id: string): Promise<UserI> => {
  const res = await axiosInstance.get(`/users/${id}`);
  return res.data;
};

export const updateUser = async (id: string, data: any) => {
  let payload = data;
  let headers = {};

  // If resume file exists, send FormData
  if (data.resume instanceof File) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "skills" && Array.isArray(value)) {
        value.forEach((skill) => formData.append("skills[]", skill));
      } else {
        formData.append(key, value as any);
      }
    });
    payload = formData;
    headers = { "Content-Type": "multipart/form-data" };
  }

  const res = await axiosInstance.put(`/users/update/${id}`, payload, { headers });
  return res.data;
};

export const deleteUser = async (id: string) => {
  const res = await axiosInstance.delete(`/users/delete/${id}`);
  return res.data;
};

export const getMe = async (): Promise<UserI> => {
  const res = await axiosInstance.get("/auth/me");
  return res.data;
};


export const updateApplicationStatus = async ({
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

export const fetchJobsforAdmin = async (): Promise<JobI[]> => {
  const res = await axiosInstance.get("/api/jobs/getjobs");
  return res.data;
};
