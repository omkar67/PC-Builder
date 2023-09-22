import React from 'react'
import {Input,FormControl,IconButton , InputAdornment, Box, Button, ThemeProvider, Typography , createTheme} from '@mui/material';
import {styled} from '@mui/material/styles'
import SignUpImage from '../Images/SignUpImage.jpg'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Visibility from '@mui/icons-material/Visibility'; 
import VisibilityOff from '@mui/icons-material/VisibilityOff';  

const signUpPage = () => {


  
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
  document.body.style.margin = '0'
  document.body.style.padding = '0px'
  document.body.style.backgroundImage = `url(${SignUpImage})`
  document.body.style.backgroundSize = "cover"
  document.body.style.backgroundRepeat = "no-repeat"
  
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <>
      <ThemeProvider theme={theme}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />

        <Box className="container"
          sx={{
            width: '100%',
            maxHeight: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: "space-between",
            flexWrap: 'nowrap',
            alignItems: 'flex-start',
            alignContent: 'flex-end',
            padding : '0px',
          }}>


        <Box className="banner">
          <Typography variant= 'h2' sx ={{mt:11, ml: 10,color: '#FFFFFD'}} > Welcome to VirtuTech </Typography>
          <Typography variant= 'subtitle1' sx ={{ml: 10,color: '#FFFFFD'}} > One stop place for Ultimate Builders </Typography>
        </Box>
        
        <Box sx = {{width: "40%", backgroundColor: 'transparent', height: "100vh"}}>
          <Box className="signupBOX"
            sx = {{backgroundColor: '#1C1D21',
            display: "flex",
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            borderRadius: "30px",
            margin: "40px",
            marginRight: "150px",
            marginLeft: "-50px",
            height: "90%"
            }}
            >

              <Box className="heading">
              <Typography variant = "h3" sx ={{color: '#FFFFFD' , paddingLeft: "10%"}}> Hey, Lets get you Started </Typography>
              <Typography variant = "h6" sx ={{ mt: 2 ,color: '#FFFFFD' , textAlign: "center"}}> Welcome, fill in the details below. </Typography>
              </Box>

              
              

              <Box className="FormBox" sx = {{paddingLeft: "10%"}}>
                <FormControl sx={{ mt: 1, width: '50ch',input : { color: 'white'} }} variant="standard">
                    <Typography htmlFor="standard-adornment-password" sx = {{color:  "#FFFFFD", opacity: "50%"}}> Enter your name here </Typography>
                    <Input
                      id="filled-basic"
                    />
                    
                </FormControl>
                <FormControl sx={{ mt : 1, width: '50ch',input : { color: 'white'} }} variant="standard">
                    <Typography htmlFor="standard-adornment-password" sx = {{color:  "#FFFFFD", opacity: "50%"}}> Enter Mobile Number </Typography>
                    <Input
                      id="standard-basic"
                    />
                    
                </FormControl>
                <FormControl sx={{ mt : 1, width: '50ch',input : { color: 'white'} }} variant="standard">
                    <Typography htmlFor="standard-adornment-password" sx = {{color:  "#FFFFFD", opacity: "50%"}}> Enter your Email </Typography>
                    <Input
                      id="standard-basic"
                    />
                    
                </FormControl>
                <FormControl sx={{ mt : 1, width: '50ch',input : { color: 'white'} }} variant="standard">
                    <Typography htmlFor="standard-adornment-password" sx = {{color:  "#FFFFFD", opacity: "50%"}}> Create Username </Typography>
                    <Input
                      id="standard-basic"
                    />
                    
                </FormControl>
                <FormControl sx={{ mt: 1, width: '50ch',input : { color: 'white'} }} variant="standard">
                  <Typography htmlFor="standard-adornment-password" sx = {{color : "#FFFFFD", opacity: "50%"}}>Create Password</Typography>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          sx = {{color: "#fff"}}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                      }
                    />
                </FormControl>
                
                
                <Typography variant = "h6" sx ={{ mb: 0,mt: 2 , mr: 8,color: '#FFFFFD' , textAlign: "center"}}> or </Typography>
              </Box>

              

              <Box className="SocialLinks" sx = {{display: "flex", width:"100%" , justifyContent: "space-evenly"}}>
                <Button variant = "contained" 
                startIcon = {<img width="21" height="21" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>}
                sx= {{backgroundColor: "#FFFFFD" , color: "Black"}}> Continue with Google </Button>
                <Button variant = "contained" startIcon ={<FacebookRoundedIcon/>}> Continue with Facebook </Button>
              </Box>
              
              <Box sx={{width: "100%", textAlign: "center"}}>
                <StyledButton variant="contained" sx ={{mb : 1,mt: 2, width: '45ch', backgroundColor: "#08A9E9" , borderRadius: "15px" , }}> Sign Up</StyledButton>
              </Box>
              
              

          </Box>
        </Box>
          

        </Box>
      


      </ThemeProvider>
    </>
  )
}

export default signUpPage
