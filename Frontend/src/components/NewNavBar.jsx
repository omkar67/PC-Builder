import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import Logo from '../Images/Logo.png'
import { useSelector,useDispatch } from 'react-redux';
import { setLogin } from '../redux/actions';
function NewNavBar() {
  const dispatch=useDispatch()
  const loginState = useSelector((state)=>state.components.login)
    const nav = useNavigate();
    const ImageIcon = () => {
      return (
        <Avatar alt="Your Image" src={Logo} style={{height:'100px'}} />
      );
    };
  return (
    <AppBar position="fixed" style={{backgroundColor:'#4c1f93',borderRadius:'15px',position:'relative'}}>
      <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

      body {
        margin: 0;
        padding: 0;
      }

      .customTypography {
        font-family: 'Montserrat','Roboto','Poppins', sans-serif;
        font-weight: bold;
        color: white;
        text-decoration: none;
        font-size: 30px;
        font-style: thin;
}`
}
        `

      </style>

      <Container maxWidth="xl" style={{marginLeft:'20vw'}}>
        <Toolbar disableGutters style={{justifyContent:'space-between'}}>
          <MenuItem  onClick={()=>{nav('/')}}>
          <IconButton sx={{ display: { xs: 'none', md: 'flex' } }} >
            <ImageIcon/>
          <Typography
            className="customTypography"
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
           
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
             
              fontWeight: 200,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              fontSize:'4vw',
              marginLeft:'5px',
              
            }}
          >
            VirtuTech 
          </Typography>
          </IconButton>
          </MenuItem>
          <MenuItem style={{marginLeft:'7.5%',marginRight:'7.5%'}} onClick={()=>{nav('/customizePC')}}>
          <Typography
           className="customTypography"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
          
            fontWeight: 200,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
           
            fontSize:'3vw',
            marginRight:'25'
            
          }}
          >
            Build PC
          </Typography>
          </MenuItem>
          <MenuItem style={{marginLeft:'7.5%',marginRight:'7.5%'}} onClick={()=>{nav('/Cart')}}>
          <Typography
           className="customTypography"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
    
            fontWeight: 200,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
            
            fontSize:'3vw',
            
            
          }}
          >
             Cart 
          </Typography>
          </MenuItem>
          {loginState === null ?(
          <MenuItem style={{marginLeft:'7.5%',marginRight:'7.5%'}} onClick={()=>{nav('/login')}}>
          <Typography
           className="customTypography"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            
            fontWeight: 100,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
         
            fontSize:'3vw'
          }}
          >
            Login
          </Typography>
          </MenuItem>
          ):(
            <MenuItem style={{marginLeft:'7.5%',marginRight:'7.5%'}} onClick={()=>
            {
            dispatch(setLogin(null))  
            window.location.reload(); 
            }}
            >
            <Typography
             className="customTypography"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              
              fontWeight: 100,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
           
              fontSize:'3vw'
            }}
            >
              Logout
            </Typography>
            </MenuItem>
          )

        }
          <MenuItem style={{marginLeft:'7.5%',marginRight:'7.5%'}} onClick={()=>{ 
            nav('/signup')}}>
          <Typography
           className="customTypography"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
         
            fontWeight: 100,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
            
            fontSize:'30px'
          }}
          >
            Signup
          </Typography>
          </MenuItem>
          <MenuItem style={{marginLeft:'7.5%',marginRight:'7.5%'}} onClick={()=>{ 
            nav('/contactUs')}}>
          <Typography
           className="customTypography"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 100,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
            fontSize:'3vw'
          }}
          >
            Contact Us
          </Typography>
          </MenuItem>
          
  
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NewNavBar;