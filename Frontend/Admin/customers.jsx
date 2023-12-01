import React, { useEffect, useState } from 'react';
import NavBar2 from './NavBar2';
import CustomersTable from './CustomersTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const customers = () => {
  return (
    <ThemeProvider theme={theme}>
       <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

      body {
        margin: 0;
        padding: 0;
        background-color: white;
      `}</style>
      <NavBar2 />
      
        <CustomersTable/> 
    </ThemeProvider>
  );
};

export default customers;
