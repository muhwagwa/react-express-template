import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import usersRouter from './routes/users';
import postsRouter from './routes/posts';
import * as path from "path";


const app = express();
const port = 3000;

//middleware
app.use(express.static(path.resolve("./") + "/build/frontend"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);


/*
app.get("/", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    console.log(response);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});
*/
app.get("/", (req: Request, res: Response): void => {
    res.send("You have reached the API!");
})

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });