import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import TodayIcon from "@mui/icons-material/Today";
import { Link } from "react-router-dom";
import { Button, Stack, Divider } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditReservation from "./edit-reservation";
import Logout from "./logout";
import MyProfile from "./my-profile";
import ReserveDesk from "./reserve-a-desk";
import Settings from "./settings";
import { blue, grey, orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReservationView } from "../models/reservationView";
const settings = ["My Profile", "Settings", "Logout"];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

const styleSettings = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 5,
  borderRadius: 1,
  p: 3,
};

function ReservationOverview() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  // pt deschiderea meniului
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

  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);
  const [confirmation, setConfirmation] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleNo = () => {
    setConfirmation(false);
    setOpenDelete(false);
    setOpenEdit(false);
    navigate("/reservationoverview");
  };
  
  const handleYes = () => {
    setConfirmation(true);
    setOpenDelete(false);
    setOpenEdit(false);
    navigate("/reservationoverview");
  };

  const [openReservation, setOpenReservation] = React.useState(false);
  const handleOpenReservation = () => {
    setOpenReservation(true);
  };
  const handleCloseReservation = () => {
    setOpenReservation(false);
  };

  const [openMyProfile, setOpenMyProfile] = React.useState(false);
  const handleOpenMyProfile = () => {
    setOpenMyProfile(true);
  };
  const handleCloseMyProfile = () => {
    setOpenMyProfile(false);
  };

  const [openSettings, setOpenSettingsModal] = React.useState(false);
  const handleOpenSettingsModal = () => {
    setOpenSettingsModal(true);
  };
  const handleCloseSettingsModal = () => {
    setOpenSettingsModal(false);
  };

  const [reservationViews,setReservationViews] = useState<ReservationView[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (!token) {
          throw new Error("Authentication token not found in localStorage");
        }
          const response = await fetch("https://localhost:7156/api/Reservation/GetAllProfileReservations", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          setReservationViews(data);
        } catch (error) {
          console.error('Unknown error occurred:', error);
        }
      };
      fetchData();
  }, []);
  const handleLogout = () => {
    navigate("/login");
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[700],
      },
      secondary: {
        main: orange[500],
      },
    },
    typography: {
      fontSize: 15,
    },
  });
  // const base64String = Buffer.from(data).toString('base64');
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Modal
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
          >
            <Box sx={style}>
              <EditReservation />
            </Box>
          </Modal>

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
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}
            ></Box>
            <Box sx={{ flexGrow: 0, marginRight: 10 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <MoreVertIcon
                      sx={{ fontSize: 30, color: "white" }}
                    ></MoreVertIcon>
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
            <Modal
              open={openSettings}
              onClose={handleCloseSettingsModal}
              aria-labelledby="modal-modal-title"
            >
              <Box sx={styleSettings}>
                <Settings />
              </Box>
            </Modal>
            <Modal
              open={openMyProfile}
              onClose={handleCloseMyProfile}
              aria-labelledby="modal-modal-title"
            >
              <Box sx={styleSettings}>
                <MyProfile />
              </Box>
            </Modal>
            <Avatar
              alt="User Name"
              src="/static/images/avatar/1.jpg"
              sx={{ marginLeft: -9, marginRight: -1 }}
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
              Profile Name
            </Typography>
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
              <Button
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#EC7329",
                  textDecoration: "none",
                  color: "white",
                }}
                onClick={handleOpenReservation}
              >
                Make a reservation
              </Button>
              <Modal
                open={openReservation}
                onClose={handleCloseReservation}
                aria-labelledby="modal-modal-title"
              >
                <Box sx={style}>
                  <ReserveDesk />
                </Box>
              </Modal>
            </Box>
           
            <Modal
              open={openSettings}
              onClose={handleCloseSettingsModal}
              aria-labelledby="modal-modal-title"
            >
              <Box sx={styleSettings}>
                <Settings />
              </Box>
            </Modal>
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
                <MenuItem
                  key={setting}
                  onClick={
                    setting === "Settings"
                      ? handleOpenSettingsModal
                      : setting === "Logout"
                      ? handleLogout
                      : setting === "My Profile"
                      ? handleOpenMyProfile
                      : handleCloseUserMenu
                  }
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1, marginTop: 35, marginLeft: 20 }}>
        {reservationViews?.map((reservationView : ReservationView) => (
          <> 
          <Box marginTop={6}>
          <Stack
            direction="row"
            spacing={5}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
             < Avatar src ={`data:image/png;base64,${reservationView.avatar}`}/>
              <Stack direction="column">
                <Typography variant="h6" marginRight={60} alignItems="center">
                  {reservationView.profileName}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: 13,
                    marginRight: 72,
                  }}
                >
                  {reservationView.profileRole}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Stack direction="column" gap={2}>
                <Typography variant="h6" sx={{ fontSize: 15, marginTop: 2 }}>
                  Date: 
                  {new Date(reservationView.arrivalTime).getDay()}.
                  {new Date (reservationView.arrivalTime).getMonth()}.
                  { new Date (reservationView.arrivalTime).getFullYear()}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: 15, marginTop: 2 }}>
                  Office: {reservationView.officaName}
                </Typography>
              </Stack>
              <Stack direction="column" gap={2}>
                <Typography variant="h6" sx={{ fontSize: 15, marginTop: 2 }}>
                  Interval: 
                  {new Date(reservationView.arrivalTime).getHours()}.{new Date(reservationView.arrivalTime).getMinutes()} - 
                  {new Date(reservationView.leavingTime).getHours()}.{new Date(reservationView.leavingTime).getMinutes()}.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: 15,
                    marginTop: 2,
                  }}
                >
                  Floor: {reservationView.floorName}
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center" gap={2}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: 15, marginTop: 2 }}
                ></Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: 15,
                    marginTop: 5,
                  }}
                >
                  Desk: {reservationView.deskName}
                </Typography>
              </Stack>
              <Stack direction="column" alignItems="center" gap={3}>
                <Button onClick={handleOpenEdit}>
                  <CreateIcon
                    sx={{
                      marginTop: 2,
                      fontSize: 18,
                    }}
                  ></CreateIcon>
                </Button>

                <Button onClick={handleOpenDelete}>
                  <DeleteIcon
                    sx={{
                      fontSize: 18,
                    }}
                  ></DeleteIcon>
                </Button>
                <Modal
                  open={openDelete}
                  onClose={handleCloseDelete}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h5"
                      component="h2"
                    >
                      My Reservations
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                      Are you sure you want to delete this record?
                    </Typography>
                    <Box sx={{ marginTop: 2, marginLeft: 100 }}>
                      <Button onClick={handleNo}>Cancel</Button>
                      <Button onClick={handleYes}>Confirm</Button>
                    </Box>
                  </Box>
                </Modal>
              </Stack>
            </Stack>
          </Stack>
          </Box>
          </>
          ))}
        </Box>
        
      </ThemeProvider>
    </>
  );
}
export default ReservationOverview;
