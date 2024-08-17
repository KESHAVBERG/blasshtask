import SideBar from "./components/SideBar.jsx";
import React, { useState } from "react";
import {
  CssBaseline,
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
} from "@mui/material";
import { Search as SearchIcon, Menu as MenuIcon } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "./assests/logo.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PlayList from "./components/PlayList.jsx";
const drawerWidth = 242; // Width of the Sidebar

const styles = {
  search: {
    position: "relative",
    borderRadius: "4px",
    backgroundColor: "#f0f0f0",
    marginLeft: 0,
    width: "100%",
    maxWidth: "300px",
  },
  searchIconWrapper: {
    padding: "0 16px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputBase: {
    color: "inherit",
    paddingLeft: "40px",
    width: "100%",
  },
};
function App() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "#fff" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "#fff",
            color: "#000",
            width: `calc(100% - ${open ? drawerWidth : 0}px)`, // Adjust width based on sidebar
            marginLeft: open ? `${drawerWidth}px` : "0px", // Shift AppBar when sidebar is open
          }}
        >
          <Toolbar>
            {!open && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {open ? (
              <Box sx={{}}>
                <IconButton onClick={handleToggle}>
                  <ChevronLeftIcon />
                </IconButton>
              </Box>
            ) : (
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
               {!isMobile&&<img src={logo} alt="" width={100} />}
              </Typography>
            )}
            {
              <div style={styles.search}>
                <div style={styles.searchIconWrapper}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={styles.inputBase}
                />
              </div>
            }
          </Toolbar>
        </AppBar>
        <SideBar open={open} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            transition: "margin 0.3s",
            marginLeft: open ? `${drawerWidth}px` : "0px",
          }}
        >
          <Toolbar />
          <PlayList />
        </Box>
      </Box>
      {/* <div className="App">
      <SideBar />
      <Appbar />
    </div> */}
    </>
  );
}

export default App;
