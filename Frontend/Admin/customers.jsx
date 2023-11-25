import React, { useEffect, useState } from 'react';
import NavBar2 from './NavBar2';
import CustomersTable from './CustomersTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const customers = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar2 />
      
        <CustomersTable/> 
    </ThemeProvider>
  );
};

export default customers;
