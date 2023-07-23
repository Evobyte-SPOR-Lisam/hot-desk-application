import { Typography, Link, Container, CssBaseline, Stack, IconButton, Tooltip, Avatar, Menu, MenuItem } from "@mui/material";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/500.css";
import React from "react";
import TodayIcon from "@mui/icons-material/Today";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Logout from "./logout";


export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const defaultTheme = createTheme();

  const settings = ["My Profile", "Settings"];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
        <AppBar position="fixed">
        <Toolbar disableGutters>
          <TodayIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: 40,
              marginLeft: 5,
            }}
          />{" "}
          <Typography
            variant="h4"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            My Reservations
          </Typography>
          <TodayIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, fontSize: 40 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            My Reservations
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0, marginRight: 10 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MoreVertIcon sx={{ fontSize: 30 }}></MoreVertIcon>
                </IconButton>
              </Tooltip>

              <Avatar
                alt="User Name"
                src="/static/images/avatar/1.jpg"
                sx={{ marginLeft: 5, marginRight: -6 }}
              />

              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "roboto",
                  fontWeight: 700,
                  letterSpacing: ".0rem",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  marginLeft: 2,
                  marginTop: 0,
                  padding: 1,
                }}
              >
                User Name
              </Typography>
            </Stack>
            <Box
              margin={1}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
              sx={{
                top: 100,
                right: "60%",
                marginRight: -100,
                position: "absolute",
              }}
            >
              <Button sx={{ mt: 3, mb: 2, backgroundColor: "#EC7329" }}>
                <Link
                  style={{ textDecoration: "none" }}
                  href={"/reserve-a-desk"}
                  color="#FFFFFF"
                >
                  Make a reservation
                </Link>
              </Button>
            </Box>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
             <MenuItem>
              <Link onClick={Logout}  underline="none" color="black"  href={"/login-page"}>Logout</Link>
             </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
        </Container>
      </ThemeProvider>
    </>
  );
}
