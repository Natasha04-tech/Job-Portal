"use client";

import React, { useState } from "react";
import {
  useUsers,
  useDeleteUser,
  useUpdateUser,
} from "@/app/customHooks/useUser";
import { useAddUser } from "@/app/customHooks/useUser";
import { X, Phone, Mail, UserRound, PlusCircle, Trash2 } from "lucide-react";
import { UserWithSkills } from "@/app/utility/props";

export default function UsersList() {
  const { data: users, isLoading, error } = useUsers();
  const { mutate: addUser } = useAddUser();
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: updateUser } = useUpdateUser();

  const [editingUser, setEditingUser] = useState<UserWithSkills | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    skills: [] as string[],
  });

  const [newSkill, setNewSkill] = useState("");

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      skills: [],
    });
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({ ...formData, skills: [...formData.skills, newSkill.trim()] });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const handleSaveUser = () => {
    if (editingUser) {
      updateUser({ id: editingUser._id, data: formData });
      setEditingUser(null);
    } else {
      addUser(formData);
      setShowAddModal(false);
    }
    resetForm();
  };

  if (isLoading) return <p className="text-center py-6">Loading users...</p>;
  if (error) return <p className="text-center text-red-500 py-6">Failed to load users.</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Manage Users</h1>
        <button
          onClick={() => {
            setShowAddModal(true);
            resetForm();
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200 active:scale-95"
        >
          <PlusCircle size={18} /> Add User
        </button>
      </div>

      {/* Users Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users?.map((user: UserWithSkills) => (
          <div
            key={user._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 text-blue-700 rounded-full p-2">
                  <UserRound size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {user.firstName} {user.lastName}
                  </h2>
                </div>
              </div>

              <div className="text-sm text-gray-700 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-500" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-500" />
                  <span>{user.phone || "N/A"}</span>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {user.skills && user.skills.length > 0 ? (
                    user.skills.map((skill: string, i: number) => (
                      <span
                        key={`${user._id}-skill-${i}`}
                        className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500 text-sm">No skills added</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-5">
              <button
                onClick={() => {
                  setEditingUser(user);
                  setFormData({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phone: user.phone || "",
                    password: "",
                    skills: user.skills || [],
                  });
                }}
                className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Edit
              </button>
              <button
                onClick={() => deleteUser(user._id)}
                className="text-sm text-red-600 border border-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      {(showAddModal || editingUser) && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] sm:w-[400px] relative">
            <button
              onClick={() => {
                setShowAddModal(false);
                setEditingUser(null);
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={22} />
            </button>

            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              {editingUser ? "Edit User" : "Add User"}
            </h3>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="First Name"
                className="border p-2 rounded-md focus:outline-blue-500"
              />
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Last Name"
                className="border p-2 rounded-md focus:outline-blue-500"
              />
              {!editingUser && (
                <>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="border p-2 rounded-md focus:outline-blue-500"
                  />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Password"
                    className="border p-2 rounded-md focus:outline-blue-500"
                  />
                </>
              )}
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Phone"
                className="border p-2 rounded-md focus:outline-blue-500"
              />

              {/* Skills */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add Skill"
                  className="border p-2 rounded-md flex-1 focus:outline-blue-500"
                />
                <button
                  onClick={handleAddSkill}
                  className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-all"
                >
                  <PlusCircle size={18} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {formData.skills.map((skill, i) => (
                  <span
                    key={`edit-skill-${i}`}
                    className="bg-gray-100 border px-2 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {skill}
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={14} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setEditingUser(null);
                }}
                className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUser}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
              >
               {isLoading ? "saving" :"save"} 
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
