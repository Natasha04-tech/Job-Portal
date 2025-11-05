import { Request, Response } from "express";
import Job, { JobInterface } from "../models/job";

export const getAllJobs = async (req: Request, res: Response) => {

  const jobs = await Job.find();
  res.json(jobs);
};

export const getAllJobsforAdmin = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find()
      .populate({
        path: "applications",
        populate: {
          path: "userId",
          select: "firstName lastName email",
        },
      })
      .lean();
  

    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getJobById = async (req: Request, res: Response) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
};

export const createJob = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      location,
      companyName,
      experience,
      salary,
      openings,
      keySkills,
    } = req.body;

    
    if (
      !title ||
      !description ||
      !location ||
      !companyName ||
      !experience ||
      !salary ||
      !openings ||
      !keySkills
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

   
    const job = await Job.create({
      title,
      description,
      location,
      companyName,
      experience,
      salary,
      openings,
      keySkills,
    });

    res.status(201).json({
      message: "Job created successfully",
      job,
    });
  } catch (error: any) {
    console.error("Error creating job:", error);
    res.status(500).json({
      message: "Failed to create job",
      error: error.message || error,
    });
  }
};

export const updateJob = async (req: Request, res: Response) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
};

export const deleteJob = async (req: Request, res: Response) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json({ message: "Job deleted successfully" });
};
