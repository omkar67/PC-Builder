import React, { useEffect, useRef, useState } from 'react';
import SideBar from '../components/SideBar';
import ProductCard from '../components/productCard';
import { Stack } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const PSU = () => {
  const [psuList, setPsuList] = useState([]);
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const d1 = {
    label: 'Manufacturer',
    dropOpt: {
      0: 'ABS',
      1: 'Apex',
      2: 'Corsair',
      3: 'Evga',
      4: 'Fractal Design',
    },
  };
    const d2={
          label:'Type',
          dropOpt:{
                0:'ATX',
                1: 'Flex ATX',
                2:'Mini ITX',
                3: 'SFX',
            4:'TFX'}
        }
      
    const drop_1={
      0:d1,
      1:d2,
    }
    const wattage={
        title:'Wattage (W)',
        min:200,
        max:2050,
        step:100,
       
    }
   
    
      const price={
        title:'Price',
        marks:[],
        min:50,
        max:500,
        step:5,
      }
    
   
    const slider_Num=2;
    const main_slider={
        0:price,
        1:wattage,
        
    }
   /*  const checkbox = {
      0: {
        title: 'Integrated Graohics',
        options: {
          0: 'Yes',
          1: 'No',
          // Add more options as needed
        },
      },
      1: {
        title: 'Overclockable',
        options: {
          0: 'Yes',
          1: 'No',
          // Add more options as needed
        },
      },
      // Add more categories as needed
    }; */
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
    const totalPages = Math.ceil(psuList.length / itemsPerPage);

 
  const calculateRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return psuList.slice(startIndex, endIndex);
  };
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };
 
  useEffect(() => {
    // Fetch data when the component mounts
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3000/api/PSU");
        const data = await res.json();
        setPsuList(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (
    <>
    <ThemeProvider theme={theme}>
        <style>
        {`
          body {
            background-color: #373538; /* Set your desired background color here */
          }
        `}
      </style>
      <div style={containerStyle}>
        <SideBar
          drop={drop_1}
          slider={main_slider}
          sliderNum={slider_Num}
    
        />
        <div style={{}}>

        <Grid container spacing={3} columnSpacing={3} rowSpacing={2} rowGap={2}>
        {calculateRange().map((psu, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              key={psu.id}
              style={{
                margin: "15px", // Adjust this value to control spacing between cards
              }}
              price={`₹${psu.price}`}
              image={psu.image}
              name={psu.name}
              feat1={psu.part_type}
              feat2={`power: ${psu.power}`}
              feat4={`Type:${psu.type}`}
              feat3={`Manufacturer: ${psu.brand}`}
            
            />
          </Grid>
        ))}
            </Grid> 

          <div style={{ display: "flex", justifyContent: "center", marginTop: "1vh" }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{backgroundColor:'#BB84EC',color:'white',fontSize:'3vh', fontFamily: 'poppins, montserrat, sans-serif',height:'100px',width:'200px',margin:'10px',borderRadius:'10px',border:'Solid',borderColor:'rgba(53, 14, 88, 0.5)'}}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{backgroundColor:'rgba(53, 14, 88, 0.5)',color:'white',fontSize:'3vh', fontFamily: 'poppins, montserrat, sans-serif',height:'100px',width:'200px',margin:'10px',borderRadius:'10px',border:'Solid',borderColor:'#BB84EC'}}
            >
              Next
            </button>
          </div>
        </div>
      </div>
         
        </ThemeProvider>
    </>
  );
}


export default PSU