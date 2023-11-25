import React from 'react';
import { Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MinProductCard from '../components/MinProdCard';
import { Stack, margin } from '@mui/system';



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
  const loginState = useSelector((state)=>state.components.login)
  const [cpudata,setCPUdata]=useState([])
  const [gpudata,setGPUdata]=useState([])
  const [psudata,setPSUdata]=useState([])
  const [ramdata,setRAMdata]=useState([])
  const [casedata,setCASEdata]=useState([])
  const [mobodata,setMOBOdata]=useState([])
  const [storedata,setStoredata]=useState([])
  const [totalPrice, setTotalPrice] = useState([]);
  const [userID,setUserID]=useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        let price=0
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
  
          price += parseInt(data4[0]?.price || 0);
          console.log(data4)
        }
        if (CaseState !== null) {
          const res5 = await fetch(`http://localhost:3000/api/getCase/${CaseState}`);
          const data5 = await res5.json();
          setCASEdata(data5);
          price += parseInt(data5[0]?.price || 0);
        }
        if (MOBOState !== null) {
          const res6 = await fetch(`http://localhost:3000/api/getMOBO/${MOBOState}`);
          const data6 = await res6.json();
          setMOBOdata(data6);
          price += parseInt(data6[0]?.price || 0);
          console.log(data6)
        }
        if (StorageState !== null) {
          const res7 = await fetch(`http://localhost:3000/api/getStorage/${StorageState}`);
          const data7 = await res7.json();
          setStoredata(data7);
          price += parseInt(data7[0]?.price || 0);
          console.log(data7)
        }
        if (loginState !== null) {
          const res = await fetch(`http://localhost:3000/api/getUserID/${loginState}`);
          const data = await res.json();
          setUserID(data[0]?.uid);
        }
        setTotalPrice(price)
        console.log(price)
        
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [cpuState, gpuState, PSUState, RAMState, CaseState, MOBOState, StorageState]);

  const handleBuy = () =>{
    
    if(loginState===null){
      
      alert('Please Login ')
      nav('/login')
     
    }else{
                console.log(loginState)
                const values = [cpudata[0]?.id,gpudata[0]?.id, mobodata[0]?.id, casedata[0]?.id, ramdata[0]?.id, storedata[0]?.id, userID, psudata[0]?.id];

          fetch('http://localhost:3000/api/proceedToCart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then(data => {
              console.log(data);
              alert('Registered successfully');
            })
            .catch(error => {
              console.error('Fetch error:', error);
            });
            nav('/Checkout')

    }
  };
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
            <Box sx={{width:'100%',height:'100%',minHeight:'85vh'}}>
            <Typography variant="h4" gutterBottom style={{color:'white',fontSize:'5vh',marginTop:'',fontFamily:['Montserrat','Poppins']}}>
            <ShoppingCartIcon style={{marginLeft:'40%',color:'white',height:'5vh',width:'auto',marginTop:'20px'}} /> My Cart
            </Typography>
            <div style={{marginLeft:'25%'}}>
            <Stack direction="column">
            <MinProductCard name={cpudata[0]?.name} price={cpudata[0]?.price} image={cpudata[0]?.image} CompName={'CPU'} style={{margin:'25px'}}/>
            <MinProductCard name={mobodata[0]?.name} price={mobodata[0]?.price} image={mobodata[0]?.image} CompName={'MOBO'}/>
            <MinProductCard name={storedata[0]?.name} price={storedata[0]?.price} image={storedata[0]?.image} CompName={'Storage'}/>
            <MinProductCard name={ramdata[0]?.name} price={ramdata[0]?.price} image={ramdata[0]?.image} CompName={'RAM'}/>
            <MinProductCard  name={gpudata[0]?.name} price={gpudata[0]?.price} image={gpudata[0]?.image} CompName={'GPU'}/>
            <MinProductCard  name={psudata[0]?.name} price={psudata[0]?.price} image={psudata[0]?.image} CompName={'PSU'}/>
            <MinProductCard  name={casedata[0]?.name} price={casedata[0]?.price} image={casedata[0]?.image} CompName={'Case'}/>
            </Stack>
            <Stack >
            <Box style={{backgroundColor:'#b2a2ff',maxWidth:'850px',marginLeft:'2%',marginTop:'2%',borderRadius:'30px'}}>
                    <Typography variant="subtitle1" gutterBottom  style={{fontFamily:['Montserrat','Poppins'],color:'white',marginTop:'1%',fontSize:'2.5vw',marginLeft:'15%',color:'#291c67'}}>
                      Your Total is ₹ {
                        (() => {
                          const p1 = parseFloat(cpudata[0]?.price) || 0;
                          const p2 = parseFloat(mobodata[0]?.price) || 0;
                          const p3 = parseFloat(gpudata[0]?.price.replace(/,/g, '')) || 0;
                          const p4 = parseFloat(casedata[0]?.price) || 0;
                          const p5 = parseFloat(psudata[0]?.price) || 0;
                          const p6 = parseFloat(ramdata[0]?.price) || 0;
                          const p7 = parseFloat(storedata[0]?.price) || 0
                          const total = p1 + p2 + p3 + p4 + p5 + p6 + p7;
                          return total;
                        })()
                    }
                    </Typography>
                    </Box>
                 
    <Button
      sx={{
        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
        backgroundColor: '#4c1f93',
        color: 'black',
        borderRadius: '1vw',
        height: '4vw',
        fontSize: '2.5vw',
        marginTop: '1vw',
        marginBottom:'1vw',
        maxWidth:'750px'
      }}
      style={{marginLeft:'5%',width:'auto',fontFamily:['Montserrat','Poppins'],color:'white'}}
      onClick={handleBuy}
    >
      Proceed to Buy 
    </Button>
                    </Stack>


              </div>
            </Box>
        )
    );
}

export default Cart;
