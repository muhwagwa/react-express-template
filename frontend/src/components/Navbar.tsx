import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
    <Stack spacing={2} direction="row">
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
    </Stack>
    );
  }
  
  export default Navbar;
  