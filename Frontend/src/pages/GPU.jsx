import React, { useEffect, useRef, useState } from "react";
import SideBar from "../components/SideBar";
import ProductCard from "../components/productCard";
import { Stack } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const GPU = () => {
  const [gpuList, setGpuList] = useState([]);
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  
  const d1 = {
    label: "Company",
    dropOpt: {
      0: "AMD",
      1: "Nvidia",
    },
  };
  const d2 = {
    label: "Family",
    dropOpt: {
      0: "GeForce RTX 3000",
      1: "GeForce RTX 4000",
      2: "GeForce RTX 2000",
      3: "GeForce GTX",
      4: "Radeon RX",
      5: "GeForce GT",
    },
  };

  const drop_1 = {
    0: d1,
    1: d2,
  };
  const VRAM = {
    title: "VRAM",
    min: 4,
    max: 12,
    step: 2,
    marks: [
      { value: 2, label: "2" },
      { value: 4, label: "" },
      { value: 6, label: " " },
      { value: 8, label: " " },
      { value: 10, label: " " },
      { value: 12, label: "12" },
    ],
  };

  const price = {
    title: "Price",
    marks: [
      { value: 500, label: "500" },
      { value: 20000, label: "20K" },
    ],
    min: 500,
    max: 20000,
    step: 500,
  };

  const slider_Num = 2;
  const main_slider = {
    0: VRAM,
    1: price,
  };

  const checkbox = {
    0: {
      title: "Manufacturer",
      options: {
        0: "Asus",
        1: "AsRock",
        2: "Acer",
        3: "GigaByte",
        4: "MSi",
        5: "Zotac",
        // Add more options as needed
      },
    },
    1: {
      title: "Memory Type",
      options: {
        0: "GDDR4",
        1: "GDDR5",
        2: "GDDR5X",
        3: "GDDR6",
        4: "GDDR6X",
        // Add more options as needed
      },
    },
    // Add more categories as needed
  };
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
 
  useEffect(() => {
    // Fetch data when the component mounts
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3000/api/GPU");
        const data = await res.json();
        setGpuList(data);
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
