import React, { useEffect, useRef, useState } from "react";
//import SideBar from "../components/SideBar";
import SideBar from "../components/SideBar";
import ProductCard from "../components/productCard";
import { Stack } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { setGPU } from "../redux/actions";
import { useNavigate } from 'react-router-dom';
import NewNavBar from "../components/NewNavBar";
//
import { useGame } from "../context/Filter";

const GPU = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const updateGPU = (id) => {
    // Call the Redux action to update the CPU state with the provided ID
    dispatch(setGPU(id));
    nav('/CustomizePC')
  };
  const [gpuList, setGpuList] = useState([]);
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  
  const drop_1= [
    [
      'Company',
      ['NVIDIA', 'AMD']
    ],
    [
      'Vram',
      [2, 4,6,8,11,12,16, 24]
    ],[
    'Resolution',
    ['1080p', '1080p/1440p', '1440p', '1440p/4K', '4K']]
  ];




  
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const stackStyle = {
    marginTop: "1vh",
  };
  const theme = createTheme({
    typography: {
      fontFamily: "poppins, montserrat, sans-serif",
    },
    backgroundColor: "#373538",
  });
  const totalPages = Math.ceil(gpuList.length / itemsPerPage);

 
  const calculateRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return gpuList.slice(startIndex, endIndex);
  };
  
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  //
  const {brand,type, socket} = useGame()
  // console.log("Value change :---",brand)

 
  useEffect(() => {
    // Fetch data when the component mounts
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3000/api/GPU");
        const data = await res.json();
        let filteredData = [...data]; 

       // const brandCondition = brand ? data.filter(item => item.brand === brand) : data;
        let brandCondition = brand ? data.filter(item => item.brand === brand) : data;
        let typeCondition = type ? data.filter(item => item.vram === type) : data;
        let socketCondition = socket ? data.filter(item => item.resolution === socket) : data;
        filteredData = [...brandCondition, ...typeCondition, ...socketCondition];
        setGpuList(filteredData);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [brand,type, socket]);
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
      <NewNavBar/>
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
        {calculateRange().map((gpu, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              key={gpu.id}
              
              style={{
                margin: "15px", // Adjust this value to control spacing between cards
              }}
              price={`₹${gpu.price}`}
              image={gpu.image}
              name={gpu.name}
              feat1={gpu.part_type}
              feat2={`power: ${gpu.power}`}
              feat4={`resolution:${gpu.resolution}`}
              feat3={`vram:${gpu.vram}`}
              brand={gpu.brand}
              updateFunct={() => updateGPU(gpu.id)}

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
};

export default GPU;
