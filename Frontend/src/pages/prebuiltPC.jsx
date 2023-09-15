import React, { useEffect, useRef } from 'react';
import SideBar from '../components/SideBar';
import ProductCard from '../components/productCard';
import { Stack } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const prebuiltPC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Adjust the container's minHeight based on its content's height
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      containerRef.current.style.minHeight = `${containerHeight}px`;
    }
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  const sidebarWrapperStyle = {
    flex: '1',
    marginRight: '20px',
    backgroundColor: 'red',
    width: '20%',
  };

  const productCardStyle = {
    flex: '2',
    marginLeft: '1vh',
  };

  const stackStyle = {
    marginTop: '1vh',
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'poppins, montserrat, sans-serif',
    },
    backgroundColor:'#373538',
  });
  
  
  

  return (
    <ThemeProvider theme={theme}>
      {/* Background image container */}
      <style>
        {`
          body {
            background-color: #373538; /* Set your desired background color here */
          }
        `}
      </style>
      <div style={containerStyle}>
        <SideBar />
        <div style={productCardStyle}>
          <Stack direction="row" spacing={'0.5vw'} style={stackStyle}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Stack>
          <Stack direction="row" spacing={'0.5vw'} style={stackStyle}>
            <ProductCard style={{ marginTop: '1vh' }} />
            <ProductCard />
            <ProductCard />
          </Stack>
          <Stack direction="row" spacing={'0.5vw'} style={stackStyle}>
            <ProductCard style={{ marginTop: '1vh' }} />
            <ProductCard />
            <ProductCard />
          </Stack>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default prebuiltPC;
