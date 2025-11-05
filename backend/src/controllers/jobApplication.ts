import { Request, Response } from 'express';
import JobApplication, { JobApplicationInterface } from '../models/jobApplication';
import Job from '../models/job';
import User, { UserInterface } from '../models/user';

interface AuthRequest extends Request {
  user?: UserInterface;
}


export const applyJob = async (req: AuthRequest, res: Response) => {
  const { jobId } = req.params;
  const user = req.user!;
  
 if (!user.resume) return res.status(400).json({ message: 'Upload resume before applying' });

  const existing = await JobApplication.findOne({ userId: user._id, jobId });
  if (existing) return res.status(400).json({ message: 'Already applied to this job' });

  const application = await JobApplication.create({ userId: user._id, jobId });
  await Job.findByIdAndUpdate(jobId, { $push: { applications: application._id } });
  await User.findByIdAndUpdate(user._id, { $push: { appliedJobs: application._id } });

  res.status(201).json(application);
};


export const getUserApplications = async (req: AuthRequest, res: Response) => {
 
  if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: No user found" });
    }
  const user = req.user;
  const applications = await JobApplication.find({  userId: user._id }).populate('jobId');
  res.json(applications);
};


export const updateApplicationStatus = async (req: AuthRequest, res: Response) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Admin only' });

  const { status, adminFeedback } = req.body;
  const application = await JobApplication.findByIdAndUpdate(
    req.params.id,
    { status, adminFeedback },
    { new: true }
  );

  if (!application) return res.status(404).json({ message: 'Application not found' });

  res.json(application);
};
