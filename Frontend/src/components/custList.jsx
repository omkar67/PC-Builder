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
    fontFamily: 'poppins,montserrat,sans-serif', // Replace 'Your Desired Font' with the actual font you want to use
  },
});
const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://hrc.in.th/wp-content/uploads/2022/11/LIAN-LI-ODYSSEY-X-SKY.EYE-14.jpg")',
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
export default function CustList() {
  return (
    
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
         // Optional: Adjust the height to center vertically as well
      }}>
    <ThemeProvider theme={theme}>
    <Box sx={{
      width: '100%',
      maxWidth: 1440,
      height: 1600,
      position: 'absolute',
      borderRadius: '45px',
      overflow: 'hidden', // Ensure the nested elements don't overflow
      color: 'white',
      backgroundColor:"rgba(0,0,0,0.4)",
      alignItems:'center',
      marginTop:'105px',
      zIndex: 1,
    }}
  >
      {/* Background image container */}
      <div style={backgroundStyle}></div>
      
      <Box sx={{ my: 2, mx: 2 }}>
        <div style={contentStyle}>
        <Grid container alignItems="center" sx={{marginTop:5}}>
          <Grid item xs sx={{backgroundColor:'rgba( 75, 0, 130,0.5)',height:'85px',color:'white',borderRadius:'15.5px'}}>
          <Stack direction="row">
         
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'15px',marginTop: '15.5px',fontSize: '45px', }} sx={{ mt: 45, width: '280px', whiteSpace: 'nowrap' }}>
              COMPONENT
            </Typography>
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'70px',marginTop: '15.5px',fontSize: '45px', }} sx={{ mt: 45, width: '210px', whiteSpace: 'nowrap' }}>
              PRODUCT
            </Typography>
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'600px',marginTop: '15.5px',fontSize: '45px', }} sx={{ mt: 45, width: '120px', whiteSpace: 'nowrap' }}>
              COST
            </Typography>
            </Stack>
          </Grid>
          <Grid item xs sx={{height:'170px',color:'white',borderRadius:'15.5px',marginTop:'5px',fontSize:'60px'}}>
          <Stack direction="row">
         
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'15px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '280px', whiteSpace: 'nowrap' }}>
              PROCESSOR
            </Typography>
  
            <Button sx={{ '&:hover': {backgroundColor: 'rgba(176,216,230,0.5)'},backgroundColor:'#00008b', color: 'white',borderRadius:'10px',height:'70px',width:'200px',fontSize:'45px',marginLeft:'170px',marginTop:'50px' }}>+Add</Button>
        
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'500px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '120px', whiteSpace: 'nowrap' }}>
              0.00$
            </Typography>
            </Stack>
          </Grid>
          <Grid item xs sx={{height:'170px',color:'white',borderRadius:'15.5px',marginTop:'5px',fontSize:'60px'}}>
          <Stack direction="row">
         
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'15px',marginTop: '65px',fontSize: '45px', }} sx={{ mt: 45, width: '280px', whiteSpace: 'nowrap' }}>
              MOTHERBOARD
            </Typography>
  
            <Button sx={{ '&:hover': {backgroundColor: 'rgba(176,216,230,0.5)'}, backgroundColor:'#00008b', color: 'white',borderRadius:'10px',height:'70px',width:'200px',fontSize:'45px',marginLeft:'170px',marginTop:'60px' }}>+Add</Button>
        
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'500px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '120px', whiteSpace: 'nowrap' }}>
              0.00$
            </Typography>
            </Stack>
          </Grid>
          <Grid item xs sx={{height:'170px',color:'white',borderRadius:'15.5px',marginTop:'5px',fontSize:'60px'}}>
          <Stack direction="row">
         
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'15px',marginTop: '55px',fontSize: '55px'}} sx={{ mt: 45, width: '280px', whiteSpace: 'nowrap' }}>
              STORAGE
            </Typography>
  
            <Button sx={{'&:hover': {backgroundColor: 'rgba(176,216,230,0.5)'}, backgroundColor:'#00008b', color: 'white',borderRadius:'10px',height:'70px',width:'200px',fontSize:'45px',marginLeft:'170px',marginTop:'60px' }}>+Add</Button>
        
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'500px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '120px', whiteSpace: 'nowrap' }}>
              0.00$
            </Typography>
            </Stack>
          </Grid>
          <Grid item xs sx={{height:'170px',color:'white',borderRadius:'15.5px',marginTop:'5px',fontSize:'60px'}}>
          <Stack direction="row">
         
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'15px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '280px', whiteSpace: 'nowrap' }}>
              RAM
            </Typography>
  
            <Button sx={{ '&:hover': {backgroundColor: 'rgba(176,216,230,0.5)'},backgroundColor:'#00008b', color: 'white',borderRadius:'10px',height:'70px',width:'200px',fontSize:'45px',marginLeft:'170px',marginTop:'60px' }}>+Add</Button>
        
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'500px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '120px', whiteSpace: 'nowrap' }}>
              0.00$
            </Typography>
            </Stack>
          </Grid>
  
          <Grid item xs sx={{height:'170px',color:'white',borderRadius:'15.5px',marginTop:'5px',fontSize:'60px'}}>
          <Stack direction="row">
         
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'15px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '280px', whiteSpace: 'nowrap' }}>
              GPU
            </Typography>
  
            <Button sx={{ '&:hover': {backgroundColor: 'rgba(176,216,230,0.5)'},backgroundColor:'#00008b', color: 'white',borderRadius:'10px',height:'70px',width:'200px',fontSize:'45px',marginLeft:'170px',marginTop:'60px' }}>+Add</Button>
        
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'500px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '120px', whiteSpace: 'nowrap' }}>
              0.00$
            </Typography>
            </Stack>
          </Grid>
          <Grid item xs sx={{height:'170px',color:'white',borderRadius:'15.5px',marginTop:'5px',fontSize:'60px'}}>
          <Stack direction="row">
         
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'15px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '280px', whiteSpace: 'nowrap' }}>
              CASE
            </Typography>
  
            <Button sx={{'&:hover': {backgroundColor: 'rgba(176,216,230,0.5)'}, backgroundColor:'#00008b', color: 'white',borderRadius:'10px',height:'70px',width:'200px',fontSize:'45px',marginLeft:'170px',marginTop:'60px' }}>+Add</Button>
        
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'500px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '120px', whiteSpace: 'nowrap' }}>
              0.00$
            </Typography>
            </Stack>
          </Grid>
          <Grid item xs sx={{height:'170px',color:'white',borderRadius:'15.5px',marginTop:'5px',fontSize:'60px'}}>
          <Stack direction="row">
         
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'15px',marginTop: '65px',fontSize: '45px', }} sx={{ mt: 45, width: '280px', whiteSpace: 'nowrap' }}>
              POWER SUPPLY
            </Typography>
  
            <Button sx={{'&:hover': {backgroundColor: 'rgba(176,216,230,0.5)'}, backgroundColor:'#00008b', color: 'white',borderRadius:'10px',height:'70px',width:'200px',fontSize:'45px',marginLeft:'170px',marginTop:'60px' }}>+Add</Button>
        
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'500px',marginTop: '55px',fontSize: '55px', }} sx={{ mt: 45, width: '120px', whiteSpace: 'nowrap' }}>
              0.00$
            </Typography>
            </Stack>
          </Grid>
          <Divider variant="middle" color="white"/>
          <Grid item xs sx={{backgroundColor:'rgba(2, 6, 50, 0.55)',width: '500px',height:'140px',color:'white',borderRadius:'15.5px',marginTop:'45px',fontSize:'60px',marginLeft:'25px'}}>
          <Stack direction="row">
         
            <Typography  gutterBottom variant="h4" component="div" style={{marginLeft:'15px',marginTop: '35px',fontSize: '65px', textDecoration: 'bold'}} sx={{ mt: 45, width: '130px', whiteSpace: 'nowrap' }}>
              TOTAL
            </Typography>
            <Typography  gutterBottom variant="h4" component="div" style={{ marginLeft:'200px',marginTop: '35px',fontSize: '75px',marginRight:'' }} sx={{ mt: 45, width: '120px', whiteSpace: 'nowrap' }}>
              0.00$
            </Typography>
            <Button sx={{ color: 'white',borderRadius:'10px',height:'95px',width:'600px',fontSize:'55px',marginLeft:'150px',marginTop:'32.5px',marginRight:'5px', '&:hover': {backgroundColor: 'rgba(176,216,230,0.5)'} }}>
            <span style={{ textDecoration: 'underline' }}>Proceed to Cart</span></Button>          
            </Stack>
          </Grid>
        </Grid>
    </div>
      </Box>

    
    </Box>
    </ThemeProvider>
    </div>
  );
}
