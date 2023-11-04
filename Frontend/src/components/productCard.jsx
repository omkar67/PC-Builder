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
    fontFamily: 'Your Desired Font, sans-serif', // Replace 'Your Desired Font' with the actual font you want to use
  },
  marginLeft: '2vw',
  height: "380px"
});

export default function ProductCard(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          maxWidth: '700px',
          maxHeight:'750px',
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
                <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '2vw', marginLeft: '0.5vw', fontSize: '1.5vw' }} sx={{ mt: '1.125rem', width: '100%', }}>
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
          <Typography gutterBottom variant="body1">
            Key features are
          </Typography>
          <Stack style={{ display: 'flex', flexWrap: 'wrap' }} direction={'row'}>
            <Chip label={props.feat1} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '1rem', marginRight: '0.5rem' }} />
            <Chip label={props.feat2} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '1rem', marginRight: '0.5rem' }} />
            <Chip label={props.feat3} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '1rem', marginRight: '0.5rem' }} />
            <Chip label={props.feat4} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '1rem', marginRight: '0.5rem' }} />
            <Chip label={props.brand} sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '1rem', marginRight: '0.5rem',marginTop:'0.5rem' }} />
          </Stack>
        </Box>
        <Box sx={{ mt: '2rem', ml: '1%', mb: '1.5rem', maxHeight:'50px',maxWidth:'200px' }}>
          <Button sx={{ backgroundColor: '#6600CC', color: 'white', borderRadius: '10px', fontSize: '1.5rem' }}>Add to cart</Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
