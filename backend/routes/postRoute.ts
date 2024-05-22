import express from "express";
import * as db from './posts';

const router = express.Router();

router.get('/', db.getPosts)
router.post('/', db.postPost)
router.get('/:id', db.getPost)
router.put('/:id', db.putPost)
router.delete('/:id', db.deletePost)

export default router;