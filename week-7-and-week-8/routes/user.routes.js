import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { restrictTo } from "../middleware/role.middleware.js";
import validate from "../middleware/validate.middleware.js";
import { updateUserSchema } from "../validators/user.validator.js";
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", protect, validate(updateUserSchema), updateUser);
router.delete("/:id", protect, restrictTo("admin"), deleteUser);

export default router;
