import { Router } from "express";
import { getAllUsers ,getUserById,updateUser,deleteUser,addUser} from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";
import { adminMiddleware } from "../middleware/roleMiddleware";
const router= Router();

router.get('/',authMiddleware,adminMiddleware,getAllUsers);
router.get('/:id',authMiddleware,adminMiddleware,getUserById);
router.delete('/delete/:id',authMiddleware, deleteUser)
router.put('/update/:id',authMiddleware,updateUser)
router.post('/add',authMiddleware,adminMiddleware, addUser)
export default router;

