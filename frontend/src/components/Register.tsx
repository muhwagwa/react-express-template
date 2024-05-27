import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(username)
    console.log(password)
    axios.post('http://localhost:3000/register', {
        username: username,
        password: password,
    })
    .then(resp => {
        navigate("/");
    })
    .catch(error => {
        console.log(error);
        navigate("/register");
    });
  }

  return (
    <Stack spacing={2} direction="column">
        <h3>Register</h3>
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
            <TextField
                variant="outlined"
                required
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className="submit"
            >
                Register
            </Button>
            </Stack>
          </form>
          <Link href="login" variant="body2">
            {"Already have an account? Sign in"}
          </Link>
    </Stack>
  );
}

export default Register;