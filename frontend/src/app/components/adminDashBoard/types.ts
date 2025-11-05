export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: string[];
}

export interface Job {
  id: number;
  title: string;
  description: string;
  applicants: Applicant[];
}

export interface Applicant {
  userId: number;
  name: string;
  email: string;
  status: "Applied" | "1st Round" | "2nd Round" | "Selected" | "Rejected";
  feedback?: string;
}
