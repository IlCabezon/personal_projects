import { Router } from 'express';
import UserRouter from './UserRouter';
import PostsRouter from './PostsRouter';

const router = Router();

router.use('/users', UserRouter)
router.use('/posts', PostsRouter)

export default router
