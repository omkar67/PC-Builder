import React from 'react';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img15 from '../Images/img15.jpg';
import img11 from '../Images/img11.jpg';
import img5 from '../Images/img5.jpg';
import Carousel from "nuka-carousel";
import './home.css'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const useStyles = styled({
  card: {
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  media: {
    height: 140,
  },
});
const Home = () => {
  const classes = useStyles();
  return (
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
          Lorem Ipsum Placeholder Title
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus in ante sagittis varius. Curabitur eu metus urna.
        </Typography>
      </div>

      {/* Cards Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        {[1, 2, 3].map((item) => (
          <Card key={item} className={classes.card}>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/150" // Placeholder image. Replace with your image path.
              title="Placeholder Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Card {item} Title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default Home;
