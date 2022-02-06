import express from 'express';
import {  getPost, getPosts, createPost, updatePost, deletePost, likePost, getPostsBySearch, commentPost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/allPost', getPosts);
router.get('/getDetails/:id', getPost);
router.get('/search', getPostsBySearch);
router.post('/post', auth, createPost);
 router.patch('/update/:id', auth, updatePost);
 router.delete('/delete/:id', auth, deletePost);
router.patch('/likePost/:id/likePost', auth, likePost);
router.post('/comment/:id/commentPost', auth, commentPost);

export default router;