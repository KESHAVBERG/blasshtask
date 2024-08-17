import React,{useState} from 'react'
import {Drawer, List, ListItem, ListItemIcon, IconButton, Divider, ListItemText, Box} from '@mui/material'
import {
  ExpandLess, ExpandMore
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo from "../assests/logo.png"
const drawerWidth = 240;

const SideBar = ({open}) => {
    // const [open, setOpen] = useState();
    // const handeToggle = ()=>{
    //     setOpen(!open);
    // }
    const [dropdownopen, setdropdown] =useState(false);

  const handleDropdownClick = () => {
    setdropdown(!dropdownopen);
  };
  const CustomListItem = styled(ListItem)(({ theme }) => ({
    color: '#000',
    '&.Mui-selected': {
      backgroundColor: '#f0f0f0',
      '&:hover': {
        backgroundColor: '#e0e0e0',
      },
    },
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  }));

  return (
    <Drawer
    variant="permanent"
    sx={{
      pt:3,
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
      <IconButton>
        <ChevronLeftIcon sx={{pl:10}}/>
      </IconButton>
    </Box>:<Box>
      <IconButton>
        <ChevronRightIcon />
      </IconButton>
    </Box>}
    <Divider />
    <List>
      <ListItem>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        {open && <ListItemText primary="Home" />}
      </ListItem>
      <ListItem>
        <ListItemIcon><InfoIcon /></ListItemIcon>
        {open && <ListItemText primary="About" />}
      </ListItem>
      <ListItem>
        <ListItemIcon><ContactMailIcon /></ListItemIcon>
        {open && <ListItemText primary="Contact" />}
      </ListItem>
      <CustomListItem onClick={handleDropdownClick}>
        {open?<ListItemText primary="Manage Playlist"/>:<ListItemIcon><PlaylistPlayIcon></PlaylistPlayIcon></ListItemIcon>}
        {dropdownopen ? <ExpandLess sx={{ color: '#000' }} /> : <ExpandMore sx={{ color: '#000' }} />}

      </CustomListItem>
    </List>
  </Drawer>
  )
}

export default SideBar