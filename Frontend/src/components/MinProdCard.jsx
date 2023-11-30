import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif', // Replace 'Your Desired Font' with the actual font you want to use
  },
  marginLeft: '2vw',
  height: "380px"
});

export default function MinProductCard(props) {
  const nav = useNavigate()
  const UpdateButton = (str) =>{
    nav(`/${str}`)
  }
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width:'1200px',
          maxHeight:'250px',
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.4)',
          margin: '5px',
          marginLeft:'10px',
          height:'100%'
          
        }}
      >
        {/* Background image container */}
        <div
          style={{
            backgroundColor:'#ff0090',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width:'100%',
            height:'100%',
            paddingTop: '75%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <Box sx={{ my: '1rem', mx: '2%'}} style={{marginTop:''}}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing="1vw">
                <img
                  src={props.image}
                  alt="test img here"
                  style={{ marginTop: '5px',width: 'auto', height: '120px',marginLeft:'5px' }}
                />
                
                <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '1vw', marginLeft:'1vw', fontSize: '1vw',  marginRight:'5px',}} sx={{ mt: '1.125rem', width: '100%', }}>
                {props.name}
                </Typography>
                <Button style={{ backgroundColor: 'rgba(0,0,0,0)', color: 'white', borderRadius: '10px', fontSize: '2rem',padding:'5px',maxWidth:'100px',height:'100%',marginTop:'0.7vw', marginLeft:'5px',textDecoration: 'underline',marginRight:'20px' }}
                onClick={() => UpdateButton(props.CompName) }
                >Update</Button>
                <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '1vw', marginLeft:'1vw', fontSize: '1.5vw',maxWidth:'220px',paddingLeft:'',marginRight:'0px',paddingBottom:'50px' }} sx={{ mt: '1.125rem', width: '200%', }}>
                  ₹{props.price}
                </Typography>
              </Stack>

        </Box>
      </Box>
    </ThemeProvider>
  );
}
