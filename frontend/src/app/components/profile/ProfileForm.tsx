"use client";

import React from "react";
import { ProfileData, ProfileFormProps } from "@/app/utility/props";
import { User, Mail, Phone, Lock } from "lucide-react";

export default function ProfileForm({ profile, setProfile }: ProfileFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const inputClass =
    "border border-gray-300 rounded-xl px-4 py-3 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all";

  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { name: "firstName", placeholder: "First Name", icon: User },
          { name: "lastName", placeholder: "Last Name", icon: User },
          { name: "phone", placeholder: "Phone Number", icon: Phone },
          { name: "email", placeholder: "Email Address", icon: Mail },
          { name: "password", placeholder: "Password", icon: Lock, type: "password" },
          { name: "confirmPassword", placeholder: "Confirm Password", icon: Lock, type: "password" },
        ].map((field) => (
          <div className="relative" key={field.name}>
            <field.icon className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              value={(profile as any)[field.name]}
              onChange={handleChange}
              className={`${inputClass} pl-10`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
