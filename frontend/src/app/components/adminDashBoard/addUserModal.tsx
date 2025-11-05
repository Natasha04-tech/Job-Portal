"use client";

import React, { useState } from "react";
import { X, PlusCircle } from "lucide-react";
import { useAddUser } from "@/app/customHooks/useUser";

interface AddUserModalProps {
  onClose: () => void;
}

export default function AddUserModal({ onClose }: AddUserModalProps) {
  const { mutate: addUser, isPending } = useAddUser();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    skills: [] as string[],
  });
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser(formData, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-[90%] sm:w-[420px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={22} />
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New User</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full border p-2 rounded-md focus:outline-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full border p-2 rounded-md focus:outline-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border p-2 rounded-md focus:outline-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border p-2 rounded-md focus:outline-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full border p-2 rounded-md focus:outline-blue-500"
            required
          />

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Add Skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="border p-2 rounded-md flex-1 focus:outline-blue-500"
            />
            <button
              type="button"
              onClick={handleAddSkill}
              className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-all"
            >
              <PlusCircle size={18} />
            </button>
          </div>


          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, i) => (
              <span
                key={`add-skill-${i}`}
                className="bg-gray-100 border px-2 py-1 rounded-full text-sm flex items-center gap-1"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition-all"
          >
            {isPending ? "Adding..." : "Add User"}
          </button>
        </form>
      </div>
    </div>
  );
}
