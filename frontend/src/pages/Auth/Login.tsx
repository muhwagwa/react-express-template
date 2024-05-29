import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';


function Login() {
    const { login } = useAuth();

    const navigate = useNavigate();
    const toRegister=()=>{
        navigate("/register");
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log(username)
        console.log(password)
        axios.post('http://localhost:3000/login', {
            username: username,
            password: password,
        })
        .then(resp => {
            console.log("Login Success")
            login({
                username: username,
            });
            navigate("/");
        })
        .catch(error => {
            console.log(error);
            navigate("/login");
        });
    }

    return (
    <Stack spacing={2} direction="column">
        <h3>Sign in</h3>
          <form className="form" noValidate onSubmit={handleSubmit}>
            <Stack spacing={1} direction="column">
            <TextField
                variant="outlined"
                required
                id="username"
                label="Username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
            />
            <TextField
                variant="outlined"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className="submit"
            >
                Sign In
            </Button>
            </Stack>
            </form>
            <Button variant='outlined' onClick={toRegister}>Register</Button>
            <Link href="register" variant="body2">
            {"Don't remember your password?"}
            </Link>
    </Stack>
  );
}

export default Login;