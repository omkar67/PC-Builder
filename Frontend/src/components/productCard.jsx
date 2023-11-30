import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight:'bold',
  },
  marginLeft: '2vw',
  height: "500px"
});

export default function ProductCard(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          maxWidth: '750px',
          maxHeight:'900px',
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.4)',
          margin: '0rem',
          marginLeft:'10px',
          height:'100%'
          
        }}
      >
        {/* Background image container */}
        <div
          style={{
            backgroundColor:'#7b68ee',
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
        <Box sx={{ my: '1rem', mx: '2%', marginLeft: '' }}>
          <Grid container sx={{ marginTop: '1rem', marginLeft: '0.5vw' }}>
            <Grid item xs>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing="1vw">
                <img
                  src={props.image}
                  height="200rem"
                  alt="test img here"
                  style={{ marginTop: '1vw',width: '100%', height: 'auto', maxWidth: '150px'  }}
                />
                <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '2vw', marginLeft: '0.5vw', fontSize: '1.5vw',fontFamily:'Poppins' }} sx={{ mt: '1.125rem', width: '100%', }}>
                  {props.name}
                </Typography>
              </Stack>
            </Grid>
            <Grid item></Grid>
          </Grid>
          <div style={{ color: 'white', marginTop: '1.5rem',marginLeft:'1.0.rem' }}>
            <div>
            <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '2.2vw', marginLeft: '0.7vw', fontSize: '2vw' }} sx={{ mt: '1.125rem', width: '100%' }}>
                  {props.price}
                </Typography>
            </div>
          </div>
        </Box>
        <Divider variant="middle" color="white" />
        <Box sx={{ m: '2%', width: '20vw' }}>
          <Typography gutterBottom variant="body1" style={{fontSize:'35px',fontWeight:'bold'}}>
            Key features are
          </Typography>
          <Stack style={{ display: 'flex', flexWrap: 'wrap' }} direction={'row'}>
            <Chip label={props.feat1} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '2rem', marginRight: '0.5rem' ,height:'100%' ,marginTop:'0.5rem'}} />
            <Chip label={props.feat2} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '2rem', marginRight: '0.5rem',height:'100%' ,marginTop:'0.5rem'}} />
            <Chip label={props.feat3} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '2rem', marginRight: '0.5rem' ,height:'100%',marginTop:'0.5rem'}} />
            <Chip label={props.feat4} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '2rem', marginRight: '0.5rem' ,height:'100%',marginTop:'0.5rem'}} />
            <Chip label={props.feat5} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '2rem', marginRight: '0.5rem' ,height:'100%',marginTop:'0.5rem'}} />
            <Chip label={props.brand} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '2rem', marginRight: '0.5rem',marginTop:'0.5rem',height:'100%' }} />
          </Stack>
        </Box>
        <Box sx={{ mt: '2rem', ml: '1%', mb: '1.5rem', maxHeight:'200px',maxWidth:'400px' }}>
          <Button sx={{ backgroundColor: '#6600CC', color: 'white', borderRadius: '10px', fontSize: '2rem',height:'100px' }} onClick={() => props.updateFunct(props.id)}>Add to Build</Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
