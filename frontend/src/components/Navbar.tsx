import { Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
    const { logout } = useAuth();

    return (
    <Stack spacing={2} direction="row">
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Button onClick={logout}>Logout</Button>
    </Stack>
    );
  }
  
  export default Navbar;
  