import { Stack } from "@mui/material";
import Navbar from "./Navbar";

function Header() {
  return (
    <Stack spacing={20} direction="row" alignItems={"center"}>
      <h1>Food Facts</h1>
      <Navbar />
    </Stack>
  );
}

export default Header;
