import React, { useEffect, useRef, useState } from 'react';
import SideBar from '../components/SideBar';
import ProductCard from '../components/productCard';
import { Stack } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const prebuiltPC = () => {
  const containerRef = useRef(null);

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
    marginLeft: '6vh',
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
  const num=4;
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
    step:8
  }
  const vram={
    title:'VRAM',
    marks:vram_marks,
    min:2,
    max:12,
    step:2
  };
  const price_det={
    title:'Price',
    marks:price,
    min:500,
    max:2500,
    step:500,
  };
  const ssd={
    title:'Storage',
    marks:ssd_marks,
    min:500,
    max:2500,
    step:500,
  };

  const chk_main={
          0:{
            title:'Model',
            options:{
              0:'Nimble',
              1:'Edge',
              2:'Titan',
            }
          },
    };
  const Cpu={
    label:'CPU',
    dropOpt:{
      0:'Intel',
      1: 'AMD',
            }
  }
  const gpu={
    label:'GPU',
    dropOpt:{
      0:'RTX Series',
      1: 'GTX Series',
      2:'RXT Series',
      3: 'TI series',}
  }
  const dropmain={
    0:Cpu,
    1:gpu,
  }
  const slider_count=4
  const main_list={
    0:price_det,
    1:ram,
    2:vram,
    3:ssd, 
  }
  const maxProductCardsPerStack = 3;

  // Calculate the number of product cards per stack based on screen width
  const calculateProductCardsPerStack = () => {
    const screenWidth = window.innerWidth;

    let productCardsPerStack = maxProductCardsPerStack;

    if (screenWidth < 1000) {
      productCardsPerStack = 1; // Adjust this based on your desired breakpoint
    } else if (screenWidth < 1400) {
      productCardsPerStack = 2; // Adjust this based on your desired breakpoint
    }

    return productCardsPerStack;
  };
  const totalProductCards = 9;
  // Calculate the number of stacks based on the number of product cards
  const calculateStacks = () => {
    let productCardsPerStack = calculateProductCardsPerStack();
     // Total number of product cards
    let totalStacks = Math.ceil(totalProductCards / productCardsPerStack);
    if((totalStacks*productCardsPerStack)<totalProductCards){
      totalStacks+=1;
    }
    return totalStacks;
  };

  // Initialize state to hold the number of product cards per stack and the number of stacks
  const [productCardsPerStack, setProductCardsPerStack] = useState(calculateProductCardsPerStack());
  const [totalStacks, setTotalStacks] = useState(calculateStacks());

  // Update the number of product cards per stack and the number of stacks when the screen is resized
  const handleResize = () => {
    setProductCardsPerStack(calculateProductCardsPerStack());
    setTotalStacks(calculateStacks());
  };
  useEffect(() => {
    // Listen for window resize events and update the layout
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <SideBar drop={dropmain} checkboxCategories={chk_main} slider={main_list} sliderNum={slider_count}/>
        <div style={productCardStyle}>
          {[...Array(totalStacks)].map((_, stackIndex) => {
            // Determine how many product cards should be in this stack
            const curr_stack=stackIndex+1;
            let num=curr_stack*productCardsPerStack
            const cardsInThisStack = stackIndex === totalStacks - 1 && num > totalProductCards ? 1 : productCardsPerStack;

            // Render a stack with the appropriate number of product crds
            return (
              <Stack key={stackIndex} direction="row" spacing={'0.5vw'} style={stackStyle}>
                {[...Array(cardsInThisStack)].map((_, cardIndex) => (
                  // Render a product card with spacing
                  <ProductCard key={cardIndex} style={{ marginTop: cardIndex > 0 ? '1vh' : '0' }} />
                ))}
              </Stack>
            );
          })}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default prebuiltPC;
