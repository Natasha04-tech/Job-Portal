export interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export interface JobDescProps {
  title: string;
  company: string;
  location: string;
  description: string;
}


export interface JobI {
  _id: string;
  title: string;
  description: string;
  location: string;
  experience: string; 
  salary: string; 
  companyName: string;
  openings: number;
  keySkills: string[]; 
  applications?: string[]; 
  createdAt?: string;
  updatedAt?: string;
}


export interface JobListProps {
  jobs: JobI[];
}
export interface FeedbackTooltipProps {
  feedback: string;
}

export interface JobApplication {
  _id: string;
  title: string;
  company: string;
  status: "applied" | "1st_round" | "2nd_round" | "selected" | "rejected";
  adminFeedback?: string;
}
export interface JobCardProps {
  job: JobApplication;
}

export interface ProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword?: string;
  skills: string[];
  resume?: string | File;
}

export interface ProfileFormProps {
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}

// export interface JobApplication {
//   _id: string;
//   title: string;
//   company: string;
//   status: "applied" | "1st_round" | "2nd_round" | "selected" | "rejected";
//   adminFeedback?: string;
// }
export interface JobApplication {
  _id: string;
  userId: string;
  jobId: {
    _id: string;
    title: string;
    description: string;
    location: string;
    companyName: string;
    experience: string;
    salary: string;
    openings: number;
    keySkills: string[];
    createdAt: string;
    updatedAt: string;
  };
  status: "applied" | "1st_round" | "2nd_round" | "selected" | "rejected";
  adminFeedback?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateStatusPayload {
  id: string;
  status: JobApplication["status"];
  feedback?: string;
}


export interface UserI {
  id: string;
  _id?:string,
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: string[];
  role: "user" | "admin";
  resume?: string;
}


export interface JobWithApplications {
  _id: string;
  title: string;
  companyName: string;
  location: string;
  description: string;
  experience: string;
  salary: string;
  openings: number;
  keySkills: string[];
  applications: PopulatedApplication[];
  createdAt?: string;
  updatedAt?: string;
}

export interface PopulatedUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface PopulatedApplication {
  _id: string;
  status: "applied" | "1st_round" | "2nd_round" | "selected" | "rejected";
  userId: PopulatedUser;
  user: UserI | null;
}

export interface UserWithSkills {
  _id:string,
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: string[];
  role: "user" | "admin";
  resume?: string;
}
