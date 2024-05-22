import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import usersRouter from './routes/users';
import postsRouter from './routes/postRoute';
import * as path from "path";


export const app = express();
const port = 3000;

//middleware
app.use(express.static(path.resolve("./") + "/build/frontend"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.get("/", (req: Request, res: Response): void => {
    res.send("You have reached the API!");
})


app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });