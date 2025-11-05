import { Router } from 'express';
import {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
  getAllJobsforAdmin,
} from '../controllers/jobController';
import { authMiddleware } from '../middleware/authMiddleware';
import { adminMiddleware } from '../middleware/roleMiddleware';

const router = Router();


router.post('/', authMiddleware, adminMiddleware, createJob);
router.put('/:id', authMiddleware, adminMiddleware, updateJob);
router.delete('/:id', authMiddleware, adminMiddleware, deleteJob);
router.get("/getjobs",authMiddleware, adminMiddleware,getAllJobsforAdmin)

router.get('/', authMiddleware, getAllJobs);
router.get('/:id', authMiddleware, getJobById);

export default router;
