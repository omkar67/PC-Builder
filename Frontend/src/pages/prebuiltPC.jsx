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
  
   // Define the marks for RAM slider
   const step_16_gb = [
    { value: 0, label: '0GB' },
    { value: 16, label: '16GB' },
    { value: 32, label: '32GB' },
    { value: 48, label: '48GB' }
  ];

  // Define the marks for SSD slider
  const ssd_marks = [
    { value: 500, label: '0.5TB' },
    { value: 1000, label: '1TB' },
    { value: 1500, label: '1.5TB' },
    { value: 2000, label: '2TB' },
    { value: 2500, label: '<2.5TB' }
  ];

  // Define the marks for Price slider
  const price = [
    { value: 500, label: '500$' },
    { value: 1000,label: ' ' },
    { value: 1500,label: ' ' },
    { value: 2000,label: ' ' },
    { value: 2500, label: '<2500$' }
  ];

  // Define the marks for VRAM slider
  const vram_marks = [
    { value: 2, label: '2GB' },
    { value: 4, label: ' ' },
    { value: 6, label: ' ' },
    { value: 8, label: ' ' },
    { value: 12, label: '12GB' }
  ];
  
  const ram={
    title:'RAM',
    marks:step_16_gb,
    min:0,
    max:48,
    step:16
  }
  const vram={
    title:'VRAM',
    marks:vram_marks,
    min:2,
    max:12,
    step:12
  }
  const price_det={
    title:'Price',
    marks:price,
    min:500,
    max:2500,
    step:500,
  }
  const ssd={
    title:'Storage',
    marks:ssd_marks,
    min:500,
    max:2500,
    step:500,
  }

  const cat_titles=['Nimble','Edge','Titan']
  const categories='Model'
  const Cpu={
    label:'CPU',
    opt1:'Intel',
    opt2:'AMD',
  }
  const gpu={
    label:'GPU',
    opt1:'Ge Force RTX',
    opt2:'Radeon RX',
  }
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
        <SideBar label1={price_det} label2={ram} label3={vram} label4={ssd} dropdown1={Cpu} dropdown2={gpu} categories={categories} cat_titles={cat_titles}/>
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
