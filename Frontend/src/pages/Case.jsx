import React, { useEffect, useRef, useState } from 'react';
import SideBar from '../components/SideBar';
import ProductCard from '../components/productCard';
import { Stack } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { setCase } from "../redux/actions";
import { useNavigate } from "react-router-dom";
const Case = () => {
  const nav = useNavigate();
  const [caseList, setCaseList] = useState([]);
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const updateCase = (id) => {
    // Call the Redux action to update the CPU state with the provided ID
    dispatch(setCase(id));
    nav('/CustomizePC')
  };
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
    const totalPages = Math.ceil(caseList.length / itemsPerPage);

 
    const calculateRange = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return caseList.slice(startIndex, endIndex);
    };
    
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      window.scrollTo(0, 0);
    };
   
    useEffect(() => {
      // Fetch data when the component mounts
      async function loadData() {
        try {
          const res = await fetch("http://localhost:3000/api/Case");
          const data = await res.json();
          setCaseList(data);
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
          {calculateRange().map((pccase, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ProductCard
                key={pccase.id}
                
                style={{
                  margin: "15px", // Adjust this value to control spacing between cards
                }}
                price={`₹${pccase.price}`}
                image={pccase.image}
                name={pccase.name}
                feat1={pccase.part_type}
                feat2={`Type: ${pccase.type}`}
                feat3={`Manufacturer: ${pccase.brand}`}
                updateFunct={() => updateCase(pccase.id)}
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


export default Case