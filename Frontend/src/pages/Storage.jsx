import React, { useEffect, useRef, useState } from 'react';
import SideBar from '../components/SideBar';
import ProductCard from '../components/productCard';
import { Stack } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { setStorage } from "../redux/actions";
import { useNavigate } from "react-router-dom";
const Storage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const updateStorage = (id) => {
    // Call the Redux action to update the CPU state with the provided ID
    dispatch(setStorage(id));
    nav('/CustomizePC')
  };
  const [storageList, setStorageList] = useState([]);
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const d1 = {
    label: 'Manufacturer',
    dropOpt: {
      0: 'Corsar',
      1: 'GSkill',
      2: 'Samsung',
      3:"Trident",
    },
  };
    const d2={
          label:'Type',
          dropOpt:{
                0:'SSD',
                1: 'HHD',
                2:'Hybrid',
                }
        }
      
    const drop_1={
      0:d1,
      1:d2,
    }
    const Capacity={
        title:'Capacity',
        min:256,
        max:2048,
        step:256,
        marks:[
          {value:256,label:'256 GB'},
          {value:512,label:'512 GB'},
          {value:1024,label:'1 TB'},
          {value:2048,label:'2 TB'},
      ]
       
    }
  
    
      const price={
        title:'Price',
        marks:[
          {value:500,label:'500'},

          {value:10000,label:'10K'},
        ],
        min:500,
        max:10000,
        step:500,
      }
    

    const slider_Num=2;
    const main_slider={
        0:price,
        1:Capacity,
      
    }
    const checkbox = {
      0: {
        title: 'NvME',
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
    const totalPages = Math.ceil(storageList.length / itemsPerPage);

 
  const calculateRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return storageList.slice(startIndex, endIndex);
  };
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };
 
  useEffect(() => {
    // Fetch data when the component mounts
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3000/api/storage");
        const data = await res.json();
        setStorageList(data);
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
        {calculateRange().map((storage, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              key={storage.id}
              style={{
                margin: "15px", // Adjust this value to control spacing between cards
              }}
              price={`₹${storage.price}`}
              image={storage.image}
              name={storage.name}
              feat1={storage.part_type}
              feat2={`Type: ${storage.type}`}
              feat3={`Storage: ${storage.space} GB`}
              brand={storage.brand}
              updateFunct={() =>updateStorage(storage.id)}
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


export default Storage