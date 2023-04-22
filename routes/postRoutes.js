import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/postControllers.js";
import { verifyToken } from "../middlewares/authMiddle.js";
const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId", verifyToken, getUserPosts);
/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
export default router;
