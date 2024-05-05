import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, TextField } from '@mui/material';


function Register() {
  return (
    <Stack spacing={2} direction="column">
        <h3>Register</h3>
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
            <TextField
                variant="outlined"
                required
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className="submit"
            >
                Register
            </Button>
            <Link href="#" variant="body2">
                {"Already have an account? Sign in"}
            </Link>
            </Stack>
          </form>
    </Stack>
  );
}

export default Register;