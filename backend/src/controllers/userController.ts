import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User, { UserInterface } from '../models/user';
import JobApplication from '../models/jobApplication';
import { uploadPDFToCloudinary } from '../utils/uploadToCloudinary';

interface AuthRequest extends Request {
  user?: UserInterface;
}

// GET single user by ID
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// ADD new user
export const addUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, password, skills } = req.body;

    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User with this email already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      skills: Array.isArray(skills)
        ? skills
        : typeof skills === "string"
        ? skills.split(",").map((s) => s.trim())
        : [],
    });

    await newUser.save();

    const userResponse = newUser.toObject();
    

    res.status(201).json({ message: "User created successfully", user: userResponse });
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// UPDATE user
export const updateUser = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updatedFields: Record<string, any> = { ...req.body };

    if (req.body?.password) {
      updatedFields.password = await bcrypt.hash(req.body.password, 10);
    }

    if (req.file?.buffer) {
      const existingUser = await User.findById(id);
      
      const result = await uploadPDFToCloudinary(req.file.buffer, "resumes");
      updatedFields.resume = result.url;
      updatedFields.resumePublicId = result.public_id;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, { new: true }).select('-password');
    if (!updatedUser) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error: any) {
    console.error("Error updating user:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// DELETE user and their job applications
export const deleteUser = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Admin only' });

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Delete resume from Cloudinary if exists
    

    // Delete all job applications of this user
    await JobApplication.deleteMany({ applicant: id });

    // Delete the user
    await User.findByIdAndDelete(id);

    res.json({ message: 'User and all associated job applications deleted successfully' });
  } catch (error: any) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET all users (admin only)
export const getAllUsers = async (req: AuthRequest, res: Response) => {
  try {
    if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Admin only' });

    const users = await User.find().select('-password');
    res.json(users);
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
