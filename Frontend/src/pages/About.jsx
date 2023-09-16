import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function AboutUs() {
  return (
    <Container sx={{ background: '#CBC3E3', padding: '24px' }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our high-spec PC store, where your dream computer becomes a reality. We offer a wide range of options to cater to your unique needs and preferences.
      </Typography>
      <Typography variant="body1" paragraph>
        Whether you are a PC enthusiast looking for full-scale customizability or someone seeking tailored recommendations, we've got you covered.
      </Typography>
      <Typography variant="body1" paragraph>
        Our services include:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={5} sx={{ padding: '24px', backgroundColor: '#F5F5F5' }}>
            <Typography variant="h6" color="primary">
              1. Full-Scale Customization
            </Typography>
            <img
              src="https://media.istockphoto.com/id/1314343964/photo/top-end-system-unit-for-gaming-computer-close-up.jpg?s=612x612&w=0&k=20&c=d_xKRis8Ccy90gbqCjScpuAEVOvpQN0kdnBxA_H9zRs="
              alt="Custom PC"
              style={{ width: '100%', height: 'auto' }}
            />
            <Typography variant="body2" paragraph>
              Customize every part of your PC to your heart's content. Choose the perfect CPU, GPU, RAM, storage, and more.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={5} sx={{ padding: '24px', backgroundColor: '#F5F5F5' }}>
            <Typography variant="h6" color="primary">
              2. Pre-Built Models
            </Typography>
            <img
              src="https://www.kreedon.com/wp-content/uploads/2022/10/high-gaming-pc.jpg"
              alt="Pre-Built PC"
              style={{ width: '100%', height: 'auto' }}
            />
            <Typography variant="body2" paragraph>
              Not sure what you need? Visit the Pre-Built PC's section and get a wide range of custom-built PCs.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="body1" paragraph>
        Additionally, if you have specific demands, such as a preferred brand or model of CPU, we can accommodate those requests.
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our pre-built PC models designed for various categories and goals, from gaming rigs to professional workstations.
      </Typography>
      <Typography variant="body1" paragraph>
        We are committed to providing you with top-notch PCs and exceptional customer service. Your satisfaction is our priority.
      </Typography>
    </Container>
  );
}

export default AboutUs;
