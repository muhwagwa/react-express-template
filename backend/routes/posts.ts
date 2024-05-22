import { Request, Response, request } from "express";
import express from "express";
import pool from '../db';


const router = express.Router();

// GET all posts
router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM public.posts')
    res.status(200).send(result.rows)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
});

// POST a new post
router.post("/", async (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  const date = new Date().toISOString();
  try {
      await pool.query('INSERT INTO public.posts (title, content, author, date) VALUES ($1, $2, $3, $4)', [title, content, author, date])
      res.status(200).send({ message: "Successfully added a post" })
  } catch (err) {
      console.log(err)
      res.sendStatus(500)
  }
});

// GET a specific post by id
router.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  try{
    const result = await pool.query('SELECT * FROM public.posts WHERE id = $1', [id])
    res.status(200).send(result.rows)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
});

// PUT update a specific post by providing the post id
router.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const { title, content, author } = req.body
  try {
    const result = await pool.query('UPDATE public.posts SET title = $1, content = $2, author = $3 WHERE id = $4', [title, content, author, id])
    res.status(200).send(result)
  } catch (err) {
    res.sendStatus(500)
  }
});

// DELETE a specific post by providing the post id
router.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  try {
    const result = await pool.query('DELETE FROM public.posts WHERE id = $1', [id])
    res.status(200).send(result)
  } catch (err) {
    res.sendStatus(500)
  }
});

export default router;