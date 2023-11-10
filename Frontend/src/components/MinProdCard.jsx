import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Your Desired Font, sans-serif', // Replace 'Your Desired Font' with the actual font you want to use
  },
  marginLeft: '2vw',
  height: "380px"
});

export default function MinProductCard(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '120%',
          maxWidth: '900px',
          maxHeight:'150px',
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
            backgroundImage: 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHEA4gMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAgAGBf/EABkQAQEBAQEBAAAAAAAAAAAAAAABETESIf/EABsBAQEBAQEBAQEAAAAAAAAAAAMBAgAHBAYF/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAIRARL/2gAMAwEAAhEDEQA/APJZmeiv1zMzOczHDiM9oSGRWGRNFViQ4YZE0NWJFSGQ4zoKsQmRUiaKrTIqQyHE0NWMMhkVGdDViQyGQ4miqxhkVIZGdBVjDIZFSIKrTIqQyFnQ1YxUhMTvQ1YxjhTWPbn2aKx/Qeh9oYcMhkTRVYkVhw4mhqxhkVIcZ0NWJDIZDiaKrGKkMOM96GrGGQyGRNDViRWGQyJoasSGQyKkZ0NWJDIcMTRVYxWHDjPehqxhwyGRA1YkMipDIgasYZFSHEDVpxlM5j256QyKwyPv16JVjDisMZ0NWmRWNipEDVjDIcOJoasSKwyGRnRVYkMhkViaGrEhkMVIzoasYcbFSODViQ4ZFSM6GrTIqQyHE0VWMMisLIasYZDhxNDVtjSKkMiaGrGHDisZ0NWnGVhdrHtzuKxsVI+96J2xhw4U0NWMVIcMjOiqxIZDhxA1YVhkOJoasSGQyKkTQ1acVIZDIzoasSKwyGRNDViRUjYZE0VWMVDIZGdDVjDIrCmhqxhkMhkTvQ1YkVI2KxnQ1Yw4ZFYneiq0heMmj9ueww4ZH9DXolWMOKkMjPQ1Yw4qQyIGrTipDIqRNFVpkVIcOM6GrEhwnE6GrEhkVIZE0NWMMipDIzoasSHDisTRVaZFYZDImh7YhhkPlkNWMMipDImhqxhkU0jOhq2wyfVZGxA1YwnKztZ9uewyKwyPv16HViQyHDImhqxhhxUjOhq04qQyGRNDViQyKkMiaKrGGRWGM6GrTiocMiaGrGKjSKkTQ1acVIZFYzoatOKkMhkTRVYkOGGRnQ1YOKkOIGrTipDIrE0VWmRWMyC73vWZmcjwcMisMj79egdtMipDIqRnvQ1aZDhxUiaGrBkOGRnRVYw4rDI7Q1YkMhkVIzoatMipCYyGrGKxpFYgqsSEyGRNDVjDipDiBqxIZDhxnQ9seVSMyaPtazMzmWZmc5mZnOeLFMz7X7rrTqmZBUTGZA0qFmQNGFmQNKhhZjoaE6sMgqKozIGiYWQPTFTjMgaNaMyC6zMyJxmZnOZmZzmZmc5//9k=")',
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
                  style={{ marginTop: '5px',width: 'auto', height: '100px',marginLeft:'5px' }}
                />
                
                <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '1.5vw', marginLeft:'1vw', fontSize: '1vw',  marginRight:'0px',}} sx={{ mt: '1.125rem', width: '100%', }}>
                {props.name}
                </Typography>
                <Button style={{ backgroundColor: 'rgba(0,0,0,0)', color: 'white', borderRadius: '10px', fontSize: '1rem',padding:'5px',maxWidth:'100px',height:'100%',marginTop:'1.7vw', marginLeft:'5px',textDecoration: 'underline',marginRight:'20px' }}>Update</Button>
                <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '1.5vw', marginLeft:'1vw', fontSize: '1.5vw',maxWidth:'220px',paddingLeft:'',marginRight:'-3vw' }} sx={{ mt: '1.125rem', width: '200%', }}>
                  {props.price}
                </Typography>
              </Stack>

        </Box>
      </Box>
    </ThemeProvider>
  );
}
