import React, { useEffect, useRef, useState } from 'react';
import SideBar from '../components/SideBar';
import ProductCard from '../components/productCard';
import { Stack } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { setMOBO } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Motherboard = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const updateMOBO = (id) => {
    // Call the Redux action to update the CPU state with the provided ID
    dispatch(setMOBO(id));
    nav('/CustomizePC')
  };
  
  const [mbList, setMbList] = useState([]);
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  
  const d1 = {
    label: 'Manufacturer',
    dropOpt: {
      0: 'MSI',
      1: 'Intel',
      2: 'ECS',
      3:'ASRock',
    },
  };
    const d2={
          label:'Socket',
          dropOpt:{
                0:'TRX40',
                1: 'X399',
                2: 'AM3',
                3: 'AM4',
                4:'AM5',
                5: 'LGA 1700',
            6:'LGA 1151',
        7:'LGA 1200'}
        }
        const d3 ={
            label:'Form Factor',
            dropOpt:{
                0:'ATX',
                1: 'MicroATX',
                2: 'ITX',
            
            }
        }
      
    const drop_1={
      0:d1,
      1:d2,
      2:d3
    }
    const Slots={
        title:'Slots',
        min:1,
        max:4,
        
      
    }
    const Max_Memory={
        title:'Max Memory',
        min:2,
        max:2048,
        step:10,
       
    }
    
      const price={
        title:'Price',
        marks:[],
        min:500,
        max:50000,
        step:5,
      }
    
   
    const slider_Num=3;
    const main_slider={
        0:price,
        1:Slots,
        2:Max_Memory,

    }
    /* const checkbox = {
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
   
    const totalPages = Math.ceil(mbList.length / itemsPerPage);
  
   
    const calculateRange = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return mbList.slice(startIndex, endIndex);
    };
    
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      window.scrollTo(0, 0);
    };
   
    useEffect(() => {
      // Fetch data when the component mounts
      async function loadData() {
        try {
          const res = await fetch("http://localhost:3000/api/MOBO");
          const data = await res.json();
          setMbList(data);
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
          {calculateRange().map((motherboard, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProductCard
                key={motherboard.id}
                style={{
                  margin: "15px", // Adjust this value to control spacing between cards
                }}
                price={`₹${motherboard.price}`}
                image={motherboard.image}
                name={motherboard.name}
                feat1={motherboard.part_type}
                feat2={`socket: ${motherboard.socket}`}
                feat4={`Manufacturer: ${motherboard.manufacturer}`}
                feat3={`Memory Slots: ${motherboard.memory_slots}`}
                feat5={`Form Factor: ${motherboard.FormFactor}`}
                brand={motherboard.brand}
                updateFunct={() => updateMOBO(motherboard.id)}
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


export default Motherboard