import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box, createTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import {FormControl , Input, InputLabel, InputAdornment , IconButton } from '@mui/material';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility'; 
import VisibilityOff from '@mui/icons-material/VisibilityOff';  
import LoginImage from '../Images/LoginImage.jpg'

const StyledButton = styled(Button)({
  // Add your custom styles here
  backgroundColor: 'blue',
  color: 'white',
});

const theme = createTheme({

  typography:{
    fontFamily: [ 'Poppins', 'sans-serif'
    ].join(',')
  }
}
)




const LoginForm = () => {
  document.body.style.margin = '0'
  document.body.style.padding = '0px'
  document.body.style.backgroundImage = `url(${LoginImage})`
  document.body.style.backgroundSize = "cover"
  document.body.style.backgroundRepeat = "no-repeat"
  
  
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const FadeIn = styled('div')`
    animation: fadeInAnimation 1s ease-out;
    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  
  return (
    <>
    <ThemeProvider theme = {theme}>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
      {/* Code for the Login Page */}
      <Box className="container"
      
      sx={{
           width: '100%',
           maxHeight: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'stretch',
            alignContent: 'stretch',
            padding : '0px',
          }}
      >

      
        <Box className="LoginBox" 
         sx = {{backgroundColor: '#1C1D21', height : '100vh', width: "40%",
                display: "flex",
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                alignItems: 'flex-start',
                alignContent: 'flex-start' }}
        >

        
          <Box sx = {{paddingLeft: "20%" , m :0}}>
            <Typography variant = 'h3' sx ={{fontWeight: 'BOLD', color: '#FFFFFD'}}> Login </Typography>
            <Typography variant = 'subtitle1' sx ={{color: '#FFFFFD' , opacity: "50%"}}> Enter your Account Details</Typography>
          </Box>
          
          <Box sx = {{ mb: 5 ,display :"flex", flexDirection : "column" ,paddingLeft: "20%"}}>
            <FormControl sx={{ m: 0, width: '40ch',input : { color: 'white'} }} variant="standard">
                  <Typography htmlFor="standard-adornment-password" sx = {{color:  "#FFFFFD", opacity: "50%"}}>Username</Typography>
                  <Input
                    id="standard-basic"
                  />
                  
            </FormControl>
                
            <FormControl sx={{ m: 0, width: '40ch',input : { color: 'white'} }} variant="standard">
              <Typography htmlFor="standard-adornment-password" sx = {{color : "#FFFFFD", opacity: "50%"}}>Password</Typography>
              <Input
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                  }
                />
            </FormControl>
            <Typography><a href="#" style = {{ color: "#FFFFFD" , opacity: "50%"}}> Forgot Password? </a> </Typography>
            <StyledButton variant="contained" sx ={{mt : 3, width: '40ch', backgroundColor: "#08A9E9" , borderRadius: "15px"}}>Login</StyledButton>

          </Box>

          
          
          <Box className="bottom" sx = {{ mt : 3,paddingLeft: "20%" , display: "flex" , justifyContent : "space-between" , alignItems: "center"}}>
            <Typography variant ='subtitle1' sx ={{color: '#FFFFFD' ,opacity: "50%"}}> Don't have an Account? </Typography>
            <Button variant = "outlined" sx = {{ml: 10 ,backgroundColor: "#333437" , border: "none" , color: "#FFFFFD" }}> Sign Up </Button>
          </Box>
        </Box>

        <Box className="banner"
        sx={{
        }}>
          <FadeIn>
            <Typography variant= 'h2' sx ={{color: '#FFFFFD', ml : 27 , mb : 0 , mt : 20 , animation: `${FadeIn} 2s`}} > Welcome Again! </Typography>
          </FadeIn>
          <Typography variant = 'subtitle1' sx ={{color: '#FFFFFD' , mt : 0, ml : 28}}> Login to access your account </Typography>
        </Box>
      </Box>

    </ThemeProvider>
      
    </>
  );
};

export default LoginForm;
