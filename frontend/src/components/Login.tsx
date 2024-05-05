import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, TextField } from '@mui/material';


function Login() {
  return (
    <Stack spacing={2} direction="column">
        <h3>Sign in</h3>
          <form className="form" noValidate>
            <Stack spacing={1} direction="column">
            <TextField
                variant="outlined"
                required
                id="username"
                label="Username"
                name="username"
                autoFocus
            />
            <TextField
                variant="outlined"
                required
                name="password"
                label="Password"
                type="password"
                id="password"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className="submit"
            >
                Sign In
            </Button>
            <Button
                variant="outlined"
                type="submit"
            >
                Register</Button>
            <Link href="#" variant="body2">
                {"Don't remember your password?"}
            </Link>
            </Stack>
          </form>
    </Stack>
  );
}

export default Login;