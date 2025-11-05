import { Schema, model, Document } from 'mongoose';

export interface JobApplicationInterface extends Document {
  userId: Schema.Types.ObjectId;
  jobId: Schema.Types.ObjectId;
  status: 'applied' | '1st_round' | '2nd_round' | 'selected' | 'rejected';
  adminFeedback?: string;
}

const jobApplicationSchema = new Schema<JobApplicationInterface>({
  userId:
   { type: Schema.Types.ObjectId, 
    ref: 'UserofJobPortal', required: true 
},
  jobId: 
  { type: Schema.Types.ObjectId,
     ref: 'Job', required: true 
    },
  status:
   { type: String, enum: ['applied','1st_round','2nd_round','selected','rejected'],
     default: 'applied' 
    },
  adminFeedback: 
  { type: String }
}, { timestamps: true });

export default model<JobApplicationInterface>('JobApplication', jobApplicationSchema);
