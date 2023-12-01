import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar2 from './NavBar2';
import OrderTable from './orderTable';
const theme = createTheme(); // Create the theme

const orders = () => {
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
    <OrderTable/>
  </ThemeProvider>
  )
}

export default orders
