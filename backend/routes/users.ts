import { Request, Response } from "express";
import express from "express";

const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next) {
  res.send('this is users route api');
});

export default router;