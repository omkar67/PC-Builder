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
import { useGame } from "../context/Filter";
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
  
  const drop_1= [
    [
      'Company',
      ['Intel', 'AMD']
    ],[
    'Socket',
    [    'LGA 1151', 'LGA 1200', 'LGA 1700','AM3', 'AM4','AM5', 'X399','TRX40']],[
      'Form Factor',
      ['ATX', 'MicroATX', 'ITX',]
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
    const {brand , type, socket} = useGame()
   
    useEffect(() => {
      // Fetch data when the component mounts
      async function loadData() {
        try {
          const res = await fetch("http://localhost:3000/api/MOBO");
          const data = await res.json();
          let filteredData = [...data]; 
      
      
          // filteredData = filteredData.filter(item => item.brand === brand || item.type === type );
         
          let brandCondition = brand ? data.filter(item => item.brand === brand) : data;
          let typeCondition = type ? data.filter(item => item.FormFactor === type) : data;
          let socketCondition = socket ? data.filter(item => item.socket === socket) : data;
  
          filteredData = [...brandCondition, ...typeCondition, ...socketCondition];
      
         
          setMbList(filteredData);
        } catch (error) {
          console.log(error);
        }
      }
  
      loadData();
    }, [brand , type , socket]);
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