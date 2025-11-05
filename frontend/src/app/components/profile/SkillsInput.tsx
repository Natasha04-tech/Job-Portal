import React, { useState } from "react";
import { ProfileData } from "@/app/utility/props";
import { Plus, X } from "lucide-react";

interface Props {
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
}

export default function SkillsInput({ profile, setProfile }: Props) {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile({ ...profile, skills: [...profile.skills, newSkill.trim()] });
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((s) => s !== skill),
    });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>

      <div className="flex gap-3 mb-5">
        <input
          type="text"
          placeholder="Enter a skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="border border-gray-300 rounded-xl px-4 py-3 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <button
          type="button"
          onClick={addSkill}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 flex items-center gap-2 transition-all"
        >
          <Plus size={18} /> Add
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {profile.skills.length > 0 ? (
          profile.skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm"
            >
              <span className="font-medium">{skill}</span>
              <button
                onClick={() => removeSkill(skill)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={16} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No skills added yet.</p>
        )}
      </div>
    </div>
  );
}
