import { AppBar, Button, IconButton, InputBase, Toolbar } from '@mui/material'
import React from 'react'
import FlexBetween from './FlexBetween';
import { Menu, Search, SettingsOutlined } from '@mui/icons-material';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Navbar({isSidebarOpen, setIsSidebarOpen }) {
  return (
    <AppBar
      sx={{
        position: "static",
        background: "#635BFF",
        boxShadow: "none",
        color: "white",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <FlexBetween>
          <FlexBetween>
            <IconButton
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              sx={{ color: "white" }}
            >
              <Menu />
            </IconButton>
          </FlexBetween>
          <FlexBetween borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
            <InputBase placeholder="Search..." sx={{ color: "white" }} />
            <IconButton sx={{ color: "white" }}>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        <FlexBetween gap="1.5rem">
          <IconButton sx={{ color: "white" }}>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
          </IconButton>
          <FlexBetween>
            <Button
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <AccountCircleIcon sx={{ color: "white" }} />
            </Button>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar