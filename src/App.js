import * as React from 'react';
import Appbar  from "./components/Appbar.jsx";
import SideBar from './components/SideBar.jsx';
import { Sidebar, Menu, MenuItem, Submenu, Logo } from "react-mui-sidebar";
import { Container } from '@mui/material';

function App() {
  return (
    <>
    <div className="App">
      <SideBar />
    </div>
    </>
  );
}

export default App;
