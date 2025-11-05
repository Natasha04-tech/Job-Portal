"use client";

import React from "react";
import Image from "next/image";
import { AuthLayoutProps } from "@/app/utility/props";

export default function AuthLayout({ children, imageSrc, imageAlt }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-10 md:p-0 relative overflow-hidden">

      {/* Background Accent Circles */}
      <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 -top-10 -left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

      {/* Left Side - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        <div className="relative w-4/5 h-[450px]">
          <Image
            src={imageSrc || "/career-illustration.svg"}
            alt={imageAlt || "Authentication Illustration"}
            fill
            priority
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Auth Card */}
      <div className="w-full md:w-1/2 flex justify-center items-center z-10">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md border border-white/50">
          {children}
        </div>
      </div>
    </div>
  );
}
