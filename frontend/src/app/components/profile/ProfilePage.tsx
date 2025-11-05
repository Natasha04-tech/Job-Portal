"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProfileForm from "./ProfileForm";
import SkillsInput from "./SkillsInput";
import ResumeUpload from "./UploadResume";
import { ProfileData } from "@/app/utility/props";
import { useUpdateUser } from "@/app/customHooks/useUser";
import { useGetMe } from "@/app/customHooks/useApi";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";

interface ProfilePageProps {
  id: string;
}

export default function ProfilePage({ id }: ProfilePageProps) {
  const router = useRouter();
  const { data: user, isLoading, error } = useGetMe();
  const updateUserMutation = useUpdateUser();

  const [profile, setProfile] = useState<ProfileData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    skills: [],
    resume: "",
  });

  // Preload user data
  useEffect(() => {
    if (user) {
      setProfile({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phone: user.phone || "",
        email: user.email || "",
        password: "",
        confirmPassword: "",
        skills: user.skills || [],
        resume: user.resume || "",
      });
    }
  }, [user]);

  const handleSave = async () => {
    try {
      await updateUserMutation.mutateAsync({ id, data: profile });
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update profile");
    }
  };

  const handleResumeChange = (file: File) => {
    setProfile({ ...profile, resume: file });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (isLoading)
    return <p className="text-center mt-10 text-gray-600">Loading profile...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-600">Failed to load profile.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-500 mt-2 md:text-lg">
            Update your personal info, skills, and resume
          </p>
        </div>

        {/* Forms */}
        <div className="space-y-10">
          <ProfileForm profile={profile} setProfile={setProfile} />
          <SkillsInput profile={profile} setProfile={setProfile} />
          <ResumeUpload profile={profile} onFileChange={handleResumeChange} />
        </div>

        {/* Save Button */}
        <div className="text-center mt-10">
          <button
            onClick={handleSave}
            disabled={updateUserMutation.isPending}
            className="bg-blue-600 text-white font-semibold px-10 py-3 rounded-2xl hover:bg-blue-700 shadow-md hover:shadow-lg transition-all disabled:opacity-70"
          >
            {updateUserMutation.isPending ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Logout Button at Bottom */}
        <div className="text-center mt-6">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-red-700 transition-all mx-auto"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}
