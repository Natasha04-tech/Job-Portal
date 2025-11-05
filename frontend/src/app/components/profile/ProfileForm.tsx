import { ProfileFormProps } from "@/app/utility/props";
import React from "react";
import { Mail, Phone, User, Lock } from "lucide-react";

export default function ProfileForm({ profile, setProfile }: ProfileFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const inputClass =
    "border border-gray-300 rounded-xl px-4 py-3 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition-all";

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="relative">
          <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={profile.firstName}
            onChange={handleChange}
            className={`${inputClass} pl-10`}
          />
        </div>

        <div className="relative">
          <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={profile.lastName}
            onChange={handleChange}
            className={`${inputClass} pl-10`}
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={profile.phone}
            onChange={handleChange}
            className={`${inputClass} pl-10`}
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={profile.email}
            onChange={handleChange}
            className={`${inputClass} pl-10`}
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={profile.password}
            onChange={handleChange}
            className={`${inputClass} pl-10`}
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={profile.confirmPassword}
            onChange={handleChange}
            className={`${inputClass} pl-10`}
          />
        </div>
      </div>
    </div>
  );
}
