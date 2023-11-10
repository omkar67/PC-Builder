import React, { useEffect, useRef, useState } from "react";
import SideBar from "../components/SideBar";
import ProductCard from "../components/productCard";
import { Stack } from "@mui/system";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { setCPU } from "../redux/actions";
import { useNavigate } from "react-router-dom";
const CPU = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const updateCPU = (id) => {
    // Call the Redux action to update the CPU state with the provided ID
    dispatch(setCPU(id));
    nav('/CustomizePC')
  };
  
  const [cpuList, setCpuList] = useState([]);
  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const d1 = {
    label: "Manufacturer",
    dropOpt: {
      0: "AMD",
      1: "Intel",
    },
  };
  const d2 = {
    label: "Generation",
    dropOpt: {
      0: "14 NM",
      1: "12 NM",
      2: "12th Gen",
      3: "13th Gen",
    },
  };

  const drop_1 = {
    0: d1,
    1: d2,
  };
  const cores = {
    title: "Cores",
    min: 2,
    max: 64,
    step: 2,
    marks: [
      { value: 2, label: "2" },
      { value: 4, label: " " },
      { value: 6, label: " " },
      { value: 8, label: " " },
      { value: 64, label: "64" },
    ],
  };
  const MaxFrequency = {
    title: "Max Frequency",
    min: 1.1,
    max: 4.7,
    step: 0.3,
    marks: [
      { value: 1.1, label: "1 GHz" },
      { value: 1.4, label: " " },
      { value: 1.7, label: " " },
      { value: 2.0, label: "2 GHz" },
      { value: 2.3, label: "" },
      { value: 2.6, label: " " },
      { value: 2.9, label: " " },
      { value: 3.2, label: " " },
      { value: 3.5, label: " " },
      { value: 3.8, label: " " },
      { value: 4.1, label: "4 GHz" },
      { value: 4.4, label: " " },
      { value: 4.7, label: " " },
    ],
  };

  const price = {
    title: "Price",
    marks: [],
    min: 50,
    max: 500,
    step: 5,
  };

  const tdp = {
    title: "TDP",
    min: 20,
    max: 280,
    step: 20,
    marks: [
      { value: 20, label: "20W " },
      { value: 40, label: " " },
      { value: 60, label: " " },
      { value: 100, label: " " },
      { value: 160, label: " " },
      { value: 280, label: "280W" },
    ],
  };
  const slider_Num = 4;
  const main_slider = {
    0: price,
    1: cores,
    2: MaxFrequency,
    3: tdp,
  };
  const checkbox = {
    0: {
      title: "Integrated Graohics",
      options: {
        0: "Yes",
        1: "No",
        // Add more options as needed
      },
    },
    1: {
      title: "Overclockable",
      options: {
        0: "Yes",
        1: "No",
        // Add more options as needed
      },
    },
    // Add more categories as needed
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
  };
  const productCardStyle = {
    flex: "2",
    marginLeft: "6vh",
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
 

  const totalPages = Math.ceil(cpuList.length / itemsPerPage);

 
  const calculateRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return cpuList.slice(startIndex, endIndex);
  };
  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };
 
  useEffect(() => {
    // Fetch data when the component mounts
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3000/api/CPU");
        const data = await res.json();
        setCpuList(data);
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
        {calculateRange().map((cpu, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard
              key={cpu.id}
              
              style={{
                margin: "15px", // Adjust this value to control spacing between cards
              }}
              price={`₹${cpu.price}`}
              image={cpu.image}
              name={cpu.name}
              feat1={`Core: ${cpu.coreCount}`}
              feat2={`power: ${cpu.power}`}
              feat4={`speed: ${cpu.speed}`}
              feat3={`socket: ${cpu.socket}`}
              feat5={`Thread: ${cpu.threadCount}`}
              brand={cpu.brand}
              updateFunct={() =>updateCPU(cpu.id)}
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

export default CPU;
