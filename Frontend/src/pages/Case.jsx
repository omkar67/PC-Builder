import React, { useEffect, useRef, useState } from 'react';
import SideBar from '../components/SideBar';
import ProductCard from '../components/productCard';
import { Stack } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Case = () => {
  const d1 = {
    label: 'Manufacturer',
    dropOpt: {
      0: 'Corsair',
      1: 'Deepcooll',
      2: 'NZHT',
      3: 'Lian',
      4: 'Fractal',
    },
  };
    const d2={
          label:'Type',
          dropOpt:{
                0:' ATX Mid Tower',
                1: 'ATX Full Tower',
                2:'ATX mini Tower',
                3: 'ATX Desktop',
                4: 'MicroATX Slim',
                5: 'Mini ITX Desktop',}
        };
        const d3={
          label:'Color',
          dropOpt:{
                0:' Black',
                1: 'Silver / Black',
                2:'White',
                3: 'Blue / Black',
                4: 'Blue / Red',
                5: 'Black / Gold',
                6:' Gunmetal',
                7: 'Pink / Black',
                8:'Yellow / Red',}
        };
        const d4={
          label:'Side Panel',
          dropOpt:{
                0:' Acrylic',
                1: 'Mesh',
                2:'Tinted Acrylic',
                3: 'Tempered Glass',
                4: 'Tinted Tempered Glass',}
        }
        const d5={
          label:'Front Panel USB',
          dropOpt:{
                0:' USB 3.2 Gen 2x2 Type-C',
                1: 'USB 3.2 Gen 2 Type-C',
                2:'USB 3.2 Gen 1 Type-C',
                3: 'USB 3.2 Gen 1 Type-A',
                4: 'USB 2.0 Type-A',}
        }
    const drop_1={
      0:d1,
      1:d2,
      2:d3,
      3:d4,
      4:d5,
    }
    const powersupply={
        title:'Power Supply',
        min:60 ,
        max:1375 ,
        step:10,
        marks:[
            {value:60 ,label:'60 W'},
            {value:275 ,label:'275 W '},
            {value:750 ,label:'750 W '},
            {value:1375 ,label:'1375 W'},
        ]
    }
    const ExternalVolume={
      title:'External Volume',
      min:2.890,
      max:257.347,
        step:0.231,
        marks:[
            {value:2.890,label:'2.890'},
            {value:84.456,label:'84.456 '},
            {value:192.7,label:'192.7 '},
            {value:257.347,label:'257.347'},
          ],
    }
    
      const price={
        title:'Price',
        marks:[],
        min:50,
        max:700,
        step:5,
      }
    
    const FullHeightExpansionSlots={
        title:'Full Height Expansion Slots',
        min:0,
        max:11,
        step:1,
        marks:[
            {value:1,label:'1'},
            {value:4 ,label:'4'},
            {value:6 ,label:'6'},
            {value:9 ,label:'9'},
            {value:11 ,label:'11'},
        ]
    }
      const slider_Num=4;
      const main_slider={
        0:price,
        1:powersupply,
        2:ExternalVolume,
        3:FullHeightExpansionSlots,
    }
    const checkbox = {
      0: {
        title: 'POWER SUPPLY SHROUD',
        options: {
          0: 'Yes',
          1: 'No',
         
        },
      },
      
    };
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
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
    <style>
        {`
          body {
            background-color: #373538; /* Set your desired background color here */
          }
        `}
      </style>
      <div style={containerStyle}>
      <SideBar drop={drop_1} slider={main_slider} sliderNum={slider_Num} checkboxCategories={checkbox}></SideBar>
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
  )
}


export default Case