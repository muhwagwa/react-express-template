import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import usersRouter from './routes/users';
import postsRouter from './routes/posts';

import * as path from "path";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static(path.resolve("./") + "/build/frontend"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/posts', postsRouter);


// Route to render the main page
app.get("/", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    console.log(response);
    res.render("index.ejs", { posts: response.data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});

app.get("/api", (req: Request, res: Response): void => {
    res.send("You have reached the API!");
})

app.get("*", (req: Request, res: Response): void => {
    res.sendFile(path.resolve("./") + "/build/frontend/index.html");
});

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });