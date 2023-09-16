
import CustList from '../components/custList';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from '../components/Footer';
const theme = createTheme({
  typography: {
    fontFamily: 'poppins, montserrat, sans-serif', // Replace with your desired font
  },
});
const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundImage: 'url("https://hrc.in.th/wp-content/uploads/2023/01/IN-WIN-D-FRAME-8.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  
};
const contentStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  color: 'white',
  
};
const systemBuilderStyle = {
  fontSize: '5vw',
  textAlign: 'center',
  color: 'white',
  marginTop: '3vh', // Adjust the marginTop here to reduce spacing
  
};
const customizePC = () => {
  return (
  
        <ThemeProvider theme={theme}>
        
            {/* Background image container */}
            <div style={backgroundStyle}/>
            <div style={contentStyle}>
              <Typography variant="h1" style={{ fontSize: '5vw', textAlign: 'center',color:'white',marginTop:'7vh' }}>
                <b>System Builder</b>
              </Typography>
              <CustList style={{marginTop:'0vh'}}/>
              <Footer style={{ zIndex: 2 , marginTop:'5vh'}}/>
            </div>
    
    
        </ThemeProvider>
      );
    }

export default customizePC;
