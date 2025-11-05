import { Schema, model, Document } from "mongoose";

export interface JobInterface extends Document {
  title: string;
  description: string;
  location: string;
  companyName: string;
  experience: string; 
  salary: string; 
  openings: number;
  keySkills: string[];
  applications: Schema.Types.ObjectId[];
}

const jobSchema = new Schema<JobInterface>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    experience: {
      type: String,
      required: true,
      trim: true,
    },

    salary: {
      type: String,
      required: true,
      trim: true,
    },

    openings: {
      type: Number,
      required: true,
      min: 1,
    },

    keySkills: {
      type: [String],
      required: true,
      default: [],
    },

    applications: [
      {
        type: Schema.Types.ObjectId,
        ref: "JobApplication",
      },
    ],
  },
  { timestamps: true }
);

export default model<JobInterface>("Job", jobSchema);
