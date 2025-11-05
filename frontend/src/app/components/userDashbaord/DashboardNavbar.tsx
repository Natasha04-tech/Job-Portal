"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Briefcase, FileText, UserCircle2 } from "lucide-react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function DashboardNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.user.user);

  const isActive = (path: string) =>
    pathname === path
      ? "text-blue-600 border-b-2 border-blue-600"
      : "text-gray-600 hover:text-blue-600";

  const handleProfileClick = () => {
    if (user?.id) router.push(`/profile/${user.id}`);
    else router.push("/login");
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 h-16 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        <Image src="/jobLogo.png" alt="Logo" width={36} height={36} />
        <span className="text-lg font-semibold text-gray-800">JobPortal</span>
      </div>

      {/* Center Links */}
      <div className="flex items-center gap-8">
        {/* Jobs Button */}
        <button
          onClick={() => (user ? router.push("/dashboard") : router.push("/login"))}
          className={`flex items-center gap-1 text-sm font-medium transition ${isActive(
            "/dashboard"
          )}`}
        >
          <Briefcase size={18} />
          Jobs
        </button>

        {/* My Jobs Button */}
        <button
          onClick={() => (user ? router.push("/dashboard/my-jobs") : router.push("/login"))}
          className={`flex items-center gap-1 text-sm font-medium transition ${isActive(
            "/dashboard/my-jobs"
          )}`}
        >
          <FileText size={18} />
          My Jobs
        </button>
      </div>

      {/* Profile / Placeholder (maintains height consistency) */}
      <div className="flex items-center">
        {user ? (
          <div
            onClick={handleProfileClick}
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100 transition"
          >
            <UserCircle2 size={28} className="text-gray-700" />
          </div>
        ) : (
          // Invisible placeholder to keep same layout height/width
          <div className="w-10 h-10"></div>
        )}
      </div>
    </nav>
  );
}
