import { Router } from 'express';
import {
  applyJob,
  getUserApplications,
  updateApplicationStatus,
} from '../controllers/jobApplication';
import { authMiddleware } from '../middleware/authMiddleware';
import { adminMiddleware } from '../middleware/roleMiddleware';

const router = Router();


router.post('/:jobId/apply', authMiddleware, applyJob);


router.get('/my', authMiddleware, getUserApplications);



router.put('/:id/status', authMiddleware, adminMiddleware, updateApplicationStatus);

export default router;
