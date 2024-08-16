import React,{useState} from 'react'
import {Drawer, List, ListItem, ListItemIcon, IconButton, Divider, ListItemText, Box} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo from "../assests/logo.png"
const drawerWidth = 240;

const SideBar = () => {
    const [open, setOpen] = useState();
    const handeToggle = ()=>{
        setOpen(!open);
    }

  return (
    <Drawer
    variant="permanent"
    sx={{
      width: open ? drawerWidth : 60,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      [`& .MuiDrawer-paper`]: {
        width: open ? drawerWidth : 60,
        transition: 'width 0.3s',
        overflowX: 'hidden',
      },
    }}
  >
    {open?<Box  display="flex"
  justifyContent="center"
  alignItems="center"
  sx={{width:240, pl:2, pt:1}}>
        <img src={logo} alt="" width={100}/>
      <IconButton onClick={handeToggle}>
        <ChevronLeftIcon sx={{pl:10}}/>
      </IconButton>
    </Box>:<Box>
      <IconButton onClick={handeToggle}>
        <ChevronRightIcon />
      </IconButton>
    </Box>}
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        {open && <ListItemText primary="Home" />}
      </ListItem>
      <ListItem button>
        <ListItemIcon><InfoIcon /></ListItemIcon>
        {open && <ListItemText primary="About" />}
      </ListItem>
      <ListItem button>
        <ListItemIcon><ContactMailIcon /></ListItemIcon>
        {open && <ListItemText primary="Contact" />}
      </ListItem>
    </List>
  </Drawer>
  )
}

export default SideBar