// Home.jsx

import React from 'react';
import NavBar2 from './NavBar2';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme();

const home = () => {
  // Hard-coded data for the sales graph
  

  return (
    <ThemeProvider theme={theme}>
      <NavBar2 />

    </ThemeProvider>
  );
};

export default home;
