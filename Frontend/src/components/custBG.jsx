import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'poppins,montserrat,sans-serif', // Replace with your desired font
    zIndex:-1
  },
});

const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url("https://hrc.in.th/wp-content/uploads/2021/08/INWIN-925-PARADISE-GAMING-PRO-7.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex:-1 
};

const contentStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  zIndex:-1
};

export default function CustBG() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100%',
        maxWidth: 2560,
        height: 1850,
        position: 'relative', // Change to 'relative'
        borderRadius: '20px',
        overflow: 'hidden',
        color: 'white',
        zIndex:-1
      }}>
        {/* Background image container */}
        <div style={backgroundStyle}></div>
        <div style={contentStyle}>
          <Typography variant="h1" style={{ fontSize: '70px', textAlign: 'center' }}>
            <b>System Builder</b>
          </Typography>
        </div>
      </Box>
    </ThemeProvider>
  );
}
