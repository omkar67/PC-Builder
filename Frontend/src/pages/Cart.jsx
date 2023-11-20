import React from 'react';
import { Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MinProductCard2 from '../components/MinProdCard';
import { Stack } from '@mui/system';
const Cart = () => {
    const nav = useNavigate();
  const cpuState = useSelector((state) => state.components.CPU);
  const gpuState = useSelector((state) => state.components.GPU)
  const MOBOState = useSelector((state) => state.components.MOBO)
  const RAMState = useSelector((state) => state.components.RAM)
  const CaseState = useSelector((state) => state.components.Case)
  const PSUState = useSelector((state) => state.components.PSU)
  const StorageState = useSelector((state) => state.components.Storage)
  const itemState = useSelector((state) => state.components.item)
  const [cpudata,setCPUdata]=useState([])
  const [gpudata,setGPUdata]=useState([])
  const [psudata,setPSUdata]=useState([])
  const [ramdata,setRAMdata]=useState([])
  const [casedata,setCASEdata]=useState([])
  const [mobodata,setMOBOdata]=useState([])
  const [storedata,setStoredata]=useState([])

  useEffect(() => {
    async function loadData() {
      try {
        if (cpuState != null) {
          const res1 = await fetch(`http://localhost:3000/api/getCPU/${cpuState}`);
          const data1 = await res1.json();
          setCPUdata(data1);
        }
        if (gpuState !== null) {
          const res2 = await fetch(`http://localhost:3000/api/getGPU/${gpuState}`);
          const data2 = await res2.json();
          setGPUdata(data2);
        }
        if (PSUState !== null) {
          const res3 = await fetch(`http://localhost:3000/api/getPSU/${PSUState}`);
          const data3 = await res3.json();
          setPSUdata(data3);
        }
        if (RAMState !== null) {
          const res4 = await fetch(`http://localhost:3000/api/getRAM/${RAMState}`);
          const data4 = await res4.json();
          setRAMdata(data4);
        }
        if (CaseState !== null) {
          const res5 = await fetch(`http://localhost:3000/api/getCase/${CaseState}`);
          const data5 = await res5.json();
          setCASEdata(data5);
        }
        if (MOBOState !== null) {
          const res6 = await fetch(`http://localhost:3000/api/getMOBO/${MOBOState}`);
          const data6 = await res6.json();
          setMOBOdata(data6);
        }
        if (StorageState !== null) {
          const res7 = await fetch(`http://localhost:3000/api/getStorage/${StorageState}`);
          const data7 = await res7.json();
          setStoredata(data7);
        }

        // All data loaded, you can perform any callback here
        console.log('All data loaded:', {
          cpudata,
          gpudata,
          psudata,
          ramdata,
          casedata,
          mobodata,
          storedata,
        });

      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [cpuState, gpuState, PSUState, RAMState, CaseState, MOBOState, StorageState]);

    return (
        itemState === null ? (
            <>
            <Box sx={{width:'100%',backgroundColor:'#373538',height:'100%',minHeight:'85vh'}}>
            <Typography variant="h4" gutterBottom style={{color:'white',fontSize:'5vh',marginTop:'',fontFamily:['Montserrat','Poppins']}}>
            <ShoppingCartIcon style={{marginLeft:'40%',color:'white',height:'5vh',width:'auto',marginTop:'20px'}} /> My Cart
            </Typography>
            <Typography style={{marginLeft:'40%',color:'white',height:'5vh',width:'auto',marginTop:'4%',fontSize:'3vh',fontFamily:['Montserrat','Poppins']}}>Your Cart is Empty :( <br/> Do U want to build ur PC?</Typography>
            <Button variant="contained" color="primary" style={{height:'15vh',width:'20vw',marginLeft:'37.5%',marginTop:'10%',borderRadius:'50px',backgroundColor:'#4c1f93',fontSize:'5vh'}}
            onClick={() => {nav('/CustomizePC')}}
            >
            Build PC
            </Button>
            </Box>
            </>
        ) : (   
            <Box sx={{width:'100%',backgroundColor:'#373538',height:'100%',minHeight:'85vh'}}>
            <Typography variant="h4" gutterBottom style={{color:'white',fontSize:'5vh',marginTop:'',fontFamily:['Montserrat','Poppins']}}>
            <ShoppingCartIcon style={{marginLeft:'40%',color:'white',height:'5vh',width:'auto',marginTop:'20px'}} /> My Cart
            </Typography>
            <Stack direction="column">
            <MinProductCard2 name={cpudata[0]?.name} price={cpudata[0]?.price} image={cpudata[0]?.image} CompName={'CPU'}/>
            <MinProductCard2 name={mobodata[0]?.name} price={mobodata[0]?.price} image={mobodata[0]?.image} CompName={'MOBO'}/>
            <MinProductCard2 name={storedata[0]?.name} price={storedata[0]?.price} image={storedata[0]?.image} CompName={'Storage'}/>
            <MinProductCard2 name={ramdata[0]?.name} price={ramdata[0]?.price} image={ramdata[0]?.image} CompName={'RAM'}/>
            <MinProductCard2  name={gpudata[0]?.name} price={gpudata[0]?.price} image={gpudata[0]?.image} CompName={'GPU'}/>
            <MinProductCard2  name={psudata[0]?.name} price={psudata[0]?.price} image={psudata[0]?.image} CompName={'PSU'}/>
            <MinProductCard2  name={casedata[0]?.name} price={casedata[0]?.price} image={casedata[0]?.image} CompName={'Case'}/>
            
            </Stack>
            </Box>
        )
    );
}

export default Cart;
