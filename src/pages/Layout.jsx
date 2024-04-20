import React, { useState } from 'react'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

function Layout() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box
      display="flex"
      height="100%"
      width="100%"
      
      
    >
      <Box >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </Box>
      <Box
        flexGrow={1}
        display="flex"
        sx={{  flexDirection: "column" ,}}
      >
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout