import { Schema, model, Document ,Types} from 'mongoose';

export interface UserInterface extends Document {
 _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  resume?: string;
  skills: string[];
  role: 'user' | 'admin';
  appliedJobs: Schema.Types.ObjectId[];
}

const userSchema = new Schema<UserInterface>({
  firstName:
   { type: String,
     required: true },
  lastName: 
  { type: String, 
    required: true },
  email:
   { type: String, 
    required: true, 
    unique: true },
  phone:
   { type: String, 
    required: true },
  password:
   { type: String, 
    required: true },
  resume: 
  { type: String },
  skills: 
  [{ type: String }],
  role: 
  { type: String, 
    enum: ['user', 'admin'], 
    default: 'user' },
  appliedJobs: 
  [{ type: Schema.Types.ObjectId, 
    ref: 'JobApplication' }]
}, { timestamps: true });

export default model<UserInterface>('UserofJobPortal', userSchema);