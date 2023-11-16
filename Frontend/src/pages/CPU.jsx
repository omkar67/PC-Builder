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
// import { useSelector } from 'react-redux';

//
import { useGame } from "../context/Filter";
const CPU = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const updateCPU = (id) => {
    // Call the Redux action to update the CPU state with the provided ID
    dispatch(setCPU(id));
    nav('/CustomizePC')
  };
  
  const [cpuList, setCpuList] = useState([]);
  const [manufacturerFilter, setManufacturerFilter] = useState("AMD");
  const [coresFilter, setCoresFilter] = useState({ min: 2, max: 64 });
  const [speedFilter, setSpeedFilter] = useState({ min: 1.1, max: 4.7 });
  const [powerFilter, setPowerFilter] = useState({ min: 20, max: 280 });

  const itemsPerPage = 15; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const drop_1= [
    [
      'Company',
      ['Intel', 'AMD']
    ],[
      'Cores',
      [2 , 3, 4, 6 ,8 , 10 , 12 , 16 , 24 ,32, 64]
    ],[
      'Threads',
      [4 , 6, 8 ,12, 16, 20 ,24, 32, 48 ,64 , 128]
    ],[
      'Socket',
      ["LGA 1151" , "LGA 1200", "LGA 1700","AM3","AM4" , "AM5"]
    ]
   
  ];


 

 
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

  const {brand,socket,coreCount , threadCount} = useGame()

  useEffect(() => {
    // Fetch data when the component mounts
    async function loadData() {
      try {
        const res = await fetch("http://localhost:3000/api/CPU");
        const data = await res.json();

        let filteredData = [...data]; 
      
      
        // filteredData = filteredData.filter(item => item.brand === brand || item.type === type );
       
        let brandCondition = brand ? data.filter(item => item.brand === brand) : data;
        let typeCondition = socket ? data.filter(item => item.socket === socket) : data;
        let coreCondition = coreCount ? data.filter(item => item.coreCount === coreCount) : data;
        let threadCondition = threadCount ? data.filter(item => item.threadCount === threadCount) : data;
        filteredData = [...brandCondition, ...typeCondition, ...coreCondition, ...threadCondition];
    
        setCpuList(filteredData);
      

      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [brand , socket, coreCount, threadCount]);


  

  


  function updatemanufacturer(name) { setManufacturerFilter(name) }

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
           
            manufacturerFilter={manufacturerFilter}
            coresFilter={coresFilter}
            speedFilter={speedFilter}
            powerFilter={powerFilter}
            onManufacturerFilterChange={(value) => setManufacturerFilter(value)}
            onCoresFilterChange={(value) => setCoresFilter(value)}
            onSpeedFilterChange={(value) => setSpeedFilter(value)}
            onPowerFilterChange={(value) => setPowerFilter(value)}
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
                style={{ backgroundColor: '#BB84EC', color: 'white', fontSize: '3vh', fontFamily: 'poppins, montserrat, sans-serif', height: '100px', width: '200px', margin: '10px', borderRadius: '10px', border: 'Solid', borderColor: 'rgba(53, 14, 88, 0.5)' }}
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{ backgroundColor: 'rgba(53, 14, 88, 0.5)', color: 'white', fontSize: '3vh', fontFamily: 'poppins, montserrat, sans-serif', height: '100px', width: '200px', margin: '10px', borderRadius: '10px', border: 'Solid', borderColor: '#BB84EC' }}
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
