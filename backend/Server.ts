import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import usersRouter from './routes/users';
import postsRouter from './routes/postRoute';
import * as path from "path";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import pool from './db';
import * as authFunc from './auth';
import bcrypt from "bcrypt";


export const app = express();
const port = 3000;

//middleware
app.use(express.static(path.resolve("./") + "/build/frontend"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: "BLAHBLAH",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 10
    }
    })
);

app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.get("/", (req: Request, res: Response): void => {
    res.send("You have reached the API!");
    console.log(process.env.PG_PASSWORD)
});

app.post("/register", authFunc.registerUser);
app.post('/login',
    passport.authenticate('local', { failureRedirect: '/', successRedirect: '/posts' }),
);


passport.use(new Strategy(async function(username, password, cb) {
    try {
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [username,]);
        if (result.rows.length > 0) {
            const user = result.rows[0];
            const storedHashedPassword = user.password;
            bcrypt.compare(password, storedHashedPassword, (err, result) => {
                if (err) {
                    return cb(err);
                } else {
                    if (result) {
                        return cb(null, user)
                    } else {
                        return cb(null, false)
                    }
                }
            });
        } else {
            return cb("User not found")
        }
    } catch (err) {
        return cb(err);
    }
}
  ));

passport.serializeUser((user, cb) => {
    cb(null, user);
})

passport.deserializeUser((user, cb) => {
    cb(null, user);
})

app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });