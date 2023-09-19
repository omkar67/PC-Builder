<<<<<<< HEAD
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../Images/img1.jpg'
// Import Swiper styles
import 'swiper/css';
=======
import React from 'react';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img15 from '../Images/img15.jpg';
import img11 from '../Images/img11.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import Carousel from "nuka-carousel";
import './home.css'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from '../components/Navbar';

>>>>>>> main

const StyledCard = styled(Card)(({ theme }) => ({
  height: '400px',
  transition: 'all 0.3s',
  '&:hover': {
    transform: 'scale(1.05)'
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',   // Mobile view: take up the full width of the viewport
  },
  [theme.breakpoints.up('sm')]: {
    width: '80%',    // Tablet view: take up 80% of the viewport width
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',    // Desktop view: take up 70% of the viewport width
  },
}));

const mediaStyles = {
  height: 240  // Increase the image height
};
const cardData = [
  {
    title: "Nimble ",
    description: "Designed for day to day task and light editing and casual gaming. Perfect for the casual user",
    image: img1
  },
  {
    title: "Edge",
    description: "Designed for mild to heavy editing and gaming . Perfect for the user that needs that extra intensity from their PC",
    image: img6
  },
  {
    title: "Titan",
    description: "Designed to handle any editing or game you throw at it. Made for the user that demands the absolute zenith performance from their PC",
    image: img7
  }
];
const GuideSection = () => {
  return (
<<<<<<< HEAD
    <div>
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src= {img1} alt="cpu" style={{width:"100%"}}/></SwiperSlide>
      <SwiperSlide><img src="https://hrc.in.th/wp-content/uploads/2023/08/LIAN-LI-PC-O11-DYNAMIC-EVO-10.jpg" alt="cpu"style={{width:"100%", height: "100%"}}/></SwiperSlide>
      <SwiperSlide><img src="https://hrc.in.th/wp-content/uploads/2023/02/NZXT-H9-ELITE-SUMMON-7.jpg" alt="cpu"style={{width:"100%"}} /></SwiperSlide>
      <SwiperSlide><img src="https://hrc.in.th/wp-content/uploads/2023/05/THERMALTAKE-CORE-P8-TEMPERED-GLASS-BLACK-NN.-4.jpg" alt="cpu"style={{width:"100%"}} /></SwiperSlide>
      ...
    </Swiper>
    </div>
=======
    <Box padding={4} bgcolor="black" color="cyan">
          <Typography variant="h4" gutterBottom align="center">
              How to Build Your PC
          </Typography>
          <Typography variant="h6" gutterBottom>
              1. Preparations
          </Typography>
          <Typography variant="body1" paragraph>
              Before starting, ensure you have all the necessary components: motherboard, processor (CPU), RAM, graphics card (GPU), power supply unit (PSU), storage (HDD/SSD), and any additional components like coolers or Wi-Fi cards.
          </Typography>
          <Typography variant="h6" gutterBottom>
              2. Build the Motherboard
          </Typography>
          <Typography variant="body1" paragraph>
              Start by installing the CPU, RAM, and GPU onto the motherboard. Also, attach any coolers or fans you have for the CPU.
          </Typography>
          <Typography variant="h6" gutterBottom>
              3. Prep the Case
          </Typography>
          <Typography variant="body1" paragraph>
              Lay down your case and start mounting the power supply. Ensure that the location of your cables makes sense for where the motherboard will sit.
          </Typography>
          <Typography variant="h6" gutterBottom>
              4. Install the Motherboard
          </Typography>
          <Typography variant="body1" paragraph>
              Carefully place the motherboard into the case and screw it in place. Make sure it's aligned correctly with the I/O ports.
          </Typography>
          <Typography variant="h6" gutterBottom>
              5. Connect Components
          </Typography>
          <Typography variant="body1" paragraph>
              Begin connecting your components to the power supply and the motherboard. This includes hard drives, SSDs, and any optical drives.
          </Typography>
          <Typography variant="h6" gutterBottom>
              6. Power Up
          </Typography>
          <Typography variant="body1" paragraph>
              Once everything is connected, power up your machine. If everything is set up correctly, you should see the boot screen. Install your preferred operating system, and you're good to go!
          </Typography>
      </Box>
>>>>>>> main
  )
}

const Home = () => {
  const classes = StyledCard;
  return (
    <>
    
    <Box bgcolor="black" color="white" style={{ minHeight: '100vh' }}>
      <div>
        <Carousel
          autoplay={true}
          autoplayInterval={3000}
          wrapAround={true}
        >
          <div className="slide-content">
            <img src={img1} alt="Slide 1" className="carousel-image" />
            <div className="overlay-text">
              <p>Welcome to VirtuTech pc's</p>
              <p>Allow Us to be your gateway <br />to PC Building and Buying</p>
              <Link to="/customizePC">
                <button className="left-btn">Start Building</button>
              </Link>
              <Link to="/prebuiltPC">
                <button className="right-btn">Pre-Builts</button>
              </Link>
            </div>
          </div>

          {/* You can repeat this structure for each image */}
          <div className="slide-content">
            <img src={img2} alt="Slide 2" className="carousel-image" />
            <div className="overlay-text">
              <p>Welcome to VirtuTech pc's</p>
              <p>Allow Us to be your gateway <br />to PC Building and Buying</p>
              <Link to="/customizePC">
                <button className="left-btn">Start Building</button>
              </Link>
              <Link to="/prebuiltPC">
                <button className="right-btn">Pre-Builts</button>
              </Link>
            </div>
          </div>

          <div className="slide-content">
            <img src={img15} alt="Slide 3" className="carousel-image" />
            <div className="overlay-text">
              <p>Welcome to VirtuTech pc's</p>
              <p>Allow Us to be your gateway <br />to PC Building and Buying</p>
              <Link to="/customizePC">
                <button className="left-btn">Start Building</button>
              </Link>
              <Link to="/prebuiltPC">
                <button className="right-btn">Pre-Builts</button>
              </Link>
            </div>
          </div>

          <div className="slide-content">
            <img src={img11} alt="Slide 4" className="carousel-image" />
            <div className="overlay-text">
              <p>Welcome to VirtuTech pc's</p>
              <p>Allow Us to be your gateway <br />to PC Building and Buying</p>
              <Link to="/customizePC">
                <button className="left-btn">Start Building</button>
              </Link>
              <Link to="/prebuiltPC">
                <button className="right-btn">Pre-Builts</button>
              </Link>
            </div>
          </div>

          <div className="slide-content">
            <img src={img5} alt="Slide 5" className="carousel-image" />
            <div className="overlay-text">
              <p>Welcome to VirtuTech pc's</p>
              <p>Allow Us to be your gateway <br />to PC Building and Buying</p>
              <Link to="/customizePC">
                <button className="left-btn">Start Building</button>
              </Link>
              <Link to="/prebuiltPC">
                <button className="right-btn">Pre-Builts</button>
              </Link>
            </div>
          </div>
        </Carousel>
        <div>

          {/* Your Carousel code here... */}

          {/* Random Text Section */}
          <div style={{ padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
              Look at previous customer build to

              help guide yourself through this

              world which  may seem complicated,

              the builds have been categorised as

              per performance and goals



            </Typography>
            <Typography variant="body1">
              We have 3 broad categories for the Builds


              Choose as per your needs and wants
            </Typography>
          </div>

          {/* Cards Section */}
          {/* Cards Section */}
          <Grid container spacing={4} style={{ padding: '20px' }}>
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardMedia
                    style={mediaStyles}
                    image={card.image}
                    title={`Image for ${card.title}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {card.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
          <GuideSection />
        </div>
        
      </div>
    </Box>
  
    </>

  )
}

export default Home;
