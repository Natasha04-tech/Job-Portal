"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function AdminNavbar() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);

  const handleProfileClick = () => {
    if (user?.id) {
      router.push(`/profile/${user.id}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        <Image src="/jobLogo.png" alt="Logo" width={40} height={40} />
        <span className="font-bold text-xl text-gray-800">Admin Panel</span>
      </div>
      <div onClick={handleProfileClick} className="cursor-pointer">
        <Image
          src="/profile.png"
          alt="Admin"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </nav>
  );
}
