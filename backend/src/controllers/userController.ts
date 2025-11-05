import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User, { UserInterface } from '../models/user';
import { uploadPDFToCloudinary } from '../utils/uploadToCloudinary';


interface AuthRequest extends Request {
  user?: UserInterface;
   

}


export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findById(id).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, password, skills } = req.body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !password) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
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
      // role defaults to 'user' from schema
    });

    await newUser.save();

    // Remove password before sending response
    const userResponse = newUser.toObject();
    
    res.status(201).json({
      message: "User created successfully",
      user: userResponse,
    });
  } catch (error: any) {
    console.error("Error creating user:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const updateUser = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updatedFields: Record<string, any> = { ...req.body };

    if (req.body?.password) {
      updatedFields.password = await bcrypt.hash(req.body.password, 10);
    }

    if (req.file?.buffer) {
      const result = await uploadPDFToCloudinary(req.file.buffer, "resumes");
      updatedFields.resume = result.url;
      updatedFields.resumePublicId = result.public_id;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatedFields, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error: any) {
    console.error(" Error updating user:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteUser = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Admin only' });
  }

  const user = await User.findByIdAndDelete(id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.json({ message: 'User deleted successfully' });
};


export const getAllUsers = async (req: AuthRequest, res: Response) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
  const users = await User.find().select('-password');
  res.json(users);
};
