import React, { useEffect, useRef, useState } from 'react';
import SideBar from '../components/SideBar';
import ProductCard from '../components/productCard';
import { Stack } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { setRAM } from "../redux/actions";
import { useNavigate } from "react-router-dom";
const RAM = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const updateRAM = (id) => {
    // Call the Redux action to update the CPU state with the provided ID
    dispatch(setRAM(id));
    nav('/CustomizePC')
  };
  

  const [ramList, setRamList] = useState([]);
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const d1 = {
    label: 'Manufacturer',
    dropOpt: {
      0: 'Acer',
      1: 'AMD',
      2: 'Dell',
    },
  };
    const d2={
          label:'Type',
          dropOpt:{
                0:'DDR',
                1: 'DDR2',
                2:'DDR3',
                3: 'DDR4'
                }
        }
      
    const drop_1={
      0:d1,
      1:d2,
    }
    const Capacity={
        title:'RAM in GB',
        min:2,
        max:64,
        step:2,
       
    }
    const Speed={
        title:'Speed',
        min:333,
        max:8400,
        step:30,
       
    }
    
      const price={
        title:'Price in Rs',
        marks:[],
        min:50,
        max:20000,
        step:5,
      }
    

    const slider_Num=3;
    const main_slider={
        0:price,
        1:Capacity,
        2:Speed,
      
    }
    const checkbox = {
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
    const totalPages = Math.ceil(ramList.length / itemsPerPage);

 
  const calculateRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ramList.slice(startIndex, endIndex);
  };
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };
 
  useEffect(() => {
    // Fetch data when the component mounts
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3000/api/RAM");
        const data = await res.json();
        setRamList(data);
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
          checkboxCategories={checkbox}
        />
        <div style={{}}>

        <Grid container spacing={3} columnSpacing={3} rowSpacing={2} rowGap={2}>
        {calculateRange().map((ram, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              key={ram.id}
              style={{
                margin: "15px", // Adjust this value to control spacing between cards
              }}
              price={`₹${ram.price}`}
              image={ram.image}
              name={ram.name}
              feat1={`RAM`}
              feat2={`Type: ${ram.type}`}
              feat4={`Memory: ${ram.memory} GB` }
              brand={ram.brand}
              updateFunct={() =>updateRAM(ram.id)}
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


export default RAM