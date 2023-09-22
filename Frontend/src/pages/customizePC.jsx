
import CustList from '../components/custList';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const theme = createTheme({
  typography: {
    fontFamily: 'poppins, montserrat, sans-serif', // Replace with your desired font
  },
  alignItems:'center',
});

const customizePC = () => {
  return (
  
    <>
      
        <ThemeProvider theme={theme}>
        
            {/* Background image container */}
           <style>
           {`
          body {
            background-image: url('https://hrc.in.th/wp-content/uploads/2023/01/IN-WIN-D-FRAME-8.jpg'); /* Replace 'path/to/your/image.jpg' with the actual path to your image file */
            background-size: cover; /* This ensures that the image covers the entire background */
            background-repeat: no-repeat; /* Prevents the image from repeating */
            background-attachment: fixed;
          }
        `}
           </style>
            
              <Typography variant="h1" style={{ fontSize: '5vw', textAlign: 'center',color:'white',marginTop:'2vh',backgroundColor:'rgba(0,0,0,0.7)',width:'45vw',alignItems:'center',marginLeft:'27.5vw',borderRadius:'2vw' }}>
                <b>System Builder</b>
              </Typography>
              <CustList style={{marginTop:'2vh'}}/>
            
    
    
        </ThemeProvider>

        </>
      );
    }

export default customizePC;
