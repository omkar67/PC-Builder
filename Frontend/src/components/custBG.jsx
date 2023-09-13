import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'poppins, montserrat, sans-serif', // Replace with your desired font
  },
});
const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url("https://hrc.in.th/wp-content/uploads/2023/01/IN-WIN-D-FRAME-8.jpg")',
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
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  color: 'white',
  zIndex:-1
};
export default function CustBG() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100%',
        maxWidth: '100vw', // 100% of the viewport width
        height: '100vh', // 100% of the viewport height
        position: 'relative',
        borderRadius: '2vw', // 2% of the viewport width
        overflow: 'hidden',
        color: '#BB84EC ',
        zIndex: -1,
        backgroundColor:'#373538'
      }}>
        {/* Background image container */}
        <div style={backgroundStyle}></div>
        <div style={contentStyle}>
          <Typography variant="h1" style={{ fontSize: '5vw', textAlign: 'center',color:'white' }}>
            <b>System Builder</b>
          </Typography>
        </div>
      </Box>

    </ThemeProvider>
  );
}
