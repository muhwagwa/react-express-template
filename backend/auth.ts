import bcrypt from "bcrypt";
import pool from './db';


const saltRounds = 10;

export const registerUser = async (req, res) => {
    const email = req.body.username;
    const password = req.body.password;

    try {
        const checkResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (checkResult.rows.length > 0) {
            res.send("Email already exists. Try logging in");
        } else {
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                if (err) {
                    console.log("Error hashing passport:", err);
                } else {
                    const result = await pool.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *", [email, hash]);
                    const user = result.rows[0];
                    req.login(user, (err) => {
                        console.log(err)
                        res.status(200).send(result);
                    })
                }
            })
        }
    } catch (err) {
        console.log(err);
    }
};

export const loginUser = async (username, password, cb) => {
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
};