import { Router } from "express";
import PostsController from "../controllers/PostsController";

const router = Router();

router.get('/getPosts', PostsController.getPosts)

export default router;