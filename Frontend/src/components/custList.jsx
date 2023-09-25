import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'poppins, montserrat, sans-serif',
  },
});


const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage:
    'url("https://hrc.in.th/wp-content/uploads/2022/11/LIAN-LI-ODYSSEY-X-SKY.EYE-14.jpg")',
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
  alignItems: 'center',
  backgroundColor: 'rgba(93, 46, 170, 0.2)',
  color: 'white',
};

export default function CustList() {
  const nav = useNavigate();
  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop:'1vh'
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: '90%',
            maxWidth: '75vw',
            minHeight: '80vh',
            position: 'relative',
            borderRadius: '4.5vw',
            overflow: 'hidden',
            color: 'white',
            marginTop: '0.5vh',
           
          }}
        >
          <Box sx={{ my: '2vw', mx: '2vw' }}>
            <div style={contentStyle}>
                {/* Header */}
                <Grid item xs style={{marginTop:'1.5vw'}}>
                  <Stack direction="row" spacing={'0.5vw'}>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{ mt: '2vw', fontSize: '2vw' }}
                  >

                    Compnonent
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{ mt: '2vw', fontSize: '2vw', }}
                    style={{marginLeft:'4vw'}}
                  >
                    Product
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{ mt: '2vw', fontSize: '2vw' }}
                    style={{marginLeft:'30vw'}}
                  >

                    Price
                  </Typography>
                  </Stack>
                  </Grid>
                {/* Grid Item 1 - CPU */}
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'2vw',width:'7vw'}}
                    >
                      CPU
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                     style={{marginLeft:'13.5vw',width:'15vw'}}
                     onClick={()=>nav('/CPU')}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                        
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>

                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '1.5vw' }}
                      style={{marginLeft:'2vw',width:'15.5vw'}}
                    >
                      MOTHERBOARD
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                      style={{marginLeft:'5vw',width:'15vw'}}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
                {/* item 3 storage */}
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '1.5vw' }}
                      style={{marginLeft:'2vw',width:'8vw'}}
                    >
                      STORAGE
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                      style={{marginLeft:'12.5vw',width:'15vw'}}
                    
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                     
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
                {/* Ram - 4  */}
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'2vw',width:'5vw'}}
                    >
                      RAM
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                     style={{marginLeft:'15.5vw',width:'15vw'}}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
                {/* GPU- 5  */}
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'2vw',width:'5vw'}}
                    >
                      GPU
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                      style={{marginLeft:'15.5vw',width:'15vw'}}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
                {/* Power Supply - 6  */}
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '1.5vw' }}
                      style={{marginLeft:'2vw',width:'13vw'}}
                    >
                      POWER SUPPLY
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                      style={{marginLeft:'7.5vw',width:'15vw'}}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
                {/* CASE - 7  */}
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'2vw',width:'7vw'}}
                    >
                      CASE
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                      style={{marginLeft:'13.5vw',width:'15vw'}}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
                {/* GPU- 5  */}
                <Grid item xs style={{marginTop:'0vw',backgroundColor:'#4c1f93',borderRadius:'5vw',marginLeft:'4vw'}}>
                  <Stack direction="row"spacing={'0.5vw'} style={{marginTop:'1vw'}}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'5vw'}}
                    >
                      Total
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        color: 'white',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '1.5vw',
                      
                      }}
                     style={{marginLeft:'7vw', textDecoration:'underline', marginTop: '-0.5vw',}}
                     onClick={()=>nav('/Cart')}
                    >
                      Proceed to Cart
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'10vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs style={{marginTop:'0vw',backgroundColor:'rgb(0,47,108)',borderRadius:'5vw'}}>
              </Grid>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}