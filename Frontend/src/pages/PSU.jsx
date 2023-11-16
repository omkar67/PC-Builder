import React, { useEffect, useRef, useState } from 'react';
import SideBar from '../components/SideBar';
import ProductCard from '../components/productCard';
import { Stack } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { setPSU } from "../redux/actions";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/Filter";
const PSU = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const updatePSU = (id) => {
    // Call the Redux action to update the CPU state with the provided ID
    dispatch(setPSU(id));
    nav('/CustomizePC')
  };
  const [psuList, setPsuList] = useState([]);
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const drop_1= [
    [
      'Company',
      ['Silverstone', 'be' , 'Fractal' , 'FSP' ,'Corsair', 'EVGA', 'Lian']
    ],
    [
      'Type',
      ['SFX' ,'ATX']
    ],[
      'power',
      [400, 450, 500 ,550, 600 , 650 , 700,750 ,800 ,1000, 1200 ,2000]
    ]
  ];


 
      
   
   
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

  const {type, socket , brand} = useGame()
  useEffect(() => {
    // Fetch data when the component mounts
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3000/api/PSU");
        const data = await res.json();
        let filteredData = [...data]; 
        //const filteredData = brand ? data.filter(item => item.brand === brand) : data;
        let brandCondition = brand ? data.filter(item => item.brand === brand) : data;
        let typeCondition = type ? data.filter(item => item.type === type) : data;
        let socketCondition = socket ? data.filter(item => item.power === socket) : data;
        filteredData = [...brandCondition, ...typeCondition , ...socketCondition];
    
        setPsuList(filteredData);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [brand , type, socket]);
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
              updateFunct={() => updatePSU(psu.id)}
            
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