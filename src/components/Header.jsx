import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import { useNavigate } from "react-router-dom";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent" sx={{ backdropFilter: "blur(20px)", backgroundColor: "#001c36" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, height: "100px", m: "5px" }}>
            <Logo />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/story");
                }}
              >
                <Typography textAlign="center">Story</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/category");
                }}
              >
                <Typography textAlign="center">Products</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/contact-us");
                }}
              >
                <Typography textAlign="center">Contact us</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, height: "50px", m: "5px" }}>
            <Logo />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                navigate("/story");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Story
            </Button>
            <Button
              onClick={() => {
                navigate("/category");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Products
            </Button>
            <Button
              onClick={() => {
                navigate("/contact-us");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact us
            </Button>
          </Box>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
