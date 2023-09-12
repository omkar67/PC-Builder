import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../Images/Logo.png'
import Box from '@mui/material/Box';
import '../App.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'black', borderRadius: '20px' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>

          <Drawer anchor="left" open={open} onClose={handleDrawerClose}
            PaperProps={{
              sx: {
                backgroundColor: 'black', // Set the background color of the drawer's Paper component
                color: '#BB84EC' // Optional: If you want text inside the drawer to be white
              }
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Center items vertically in the column
                alignItems: 'center',     // Center items horizontally
                height: '100%'            // Take full height of the drawer
              }}
            >
              <List>
                <ListItem ListItemButton component={Link} to="/" style={{ color: 'inherit', textDecoration: 'none'}} onClick={handleDrawerClose}>
                  <ListItemText primary="Home" />
                </ListItem>

                <ListItem ListItemButton  component={Link} to="/prebuiltPC " style={{ color: 'inherit', textDecoration: 'none'}} onClick={handleDrawerClose}>
                  <ListItemText primary="Pre Built PC's" />
                </ListItem>

                <ListItem component={Link} to="/customizePC" style={{ color: 'inherit', textDecoration: 'none'}} onClick={handleDrawerClose}>
                  <ListItemText primary="Build PC" />
                </ListItem>


                <ListItem ListItemButton  component={Link} to="/About" style={{ color: 'inherit', textDecoration: 'none'}} onClick={handleDrawerClose}>
                  <ListItemText primary="About Us" />
                </ListItem>
               

                <ListItem ListItemButton component={Link} to="/contactUs" style={{ color: 'inherit', textDecoration: 'none'}} onClick={handleDrawerClose}>
                  <ListItemText primary="Contact Us" />
                </ListItem>
              </List>


            </Box>
          </Drawer>



          {/* Centered Box containing both the logo and the text */}
          <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
            <img src={Logo} alt="Virtue Tech Logo" style={{ height: '70px', marginRight: '0px' }} />
            <Typography variant="h6" component="div" sx={{ color: '#BB84EC', fontFamily: "poppins" }}>
              VirtuTech
            </Typography>
          </Box>

          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            sx={{

              marginRight: 4,
              backgroundColor: '#f5f5f5',
              borderRadius: '50px',  // Set this to give it fully rounded ends
              '&:hover': { backgroundColor: '#e0e0e0' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#f5f5f5',
                  borderRadius: '50px'  // Ensure the border follows the same rounding
                },
                '&:hover fieldset': {
                  borderColor: '#e0e0e0'
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d0d0d0'
                }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Link to="/Cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit" sx={{ marginRight: 3 }}>
            <ShoppingCartIcon />
          </IconButton>
          </Link>

          <IconButton color="inherit" onClick={handleMenuOpen}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>



        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
// <Button color="inherit" to="/login">Login</Button>