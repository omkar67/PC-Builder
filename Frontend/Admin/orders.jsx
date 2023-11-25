import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar2 from './NavBar2';
import OrderTable from './orderTable';
const theme = createTheme(); // Create the theme

const orders = () => {
  return (
    <ThemeProvider theme={theme}>
    <NavBar2 />
    <OrderTable/>
  </ThemeProvider>
  )
}

export default orders
