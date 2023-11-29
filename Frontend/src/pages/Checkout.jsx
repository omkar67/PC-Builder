import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  Typography,
  Box,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Stack } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: 'poppins, montserrat, sans-serif',
  },
});
const OrderSummaryItem = ({ name, price }) => (
  <ListItem style={{
    background: 'linear-gradient(90deg, hsla(287, 40%, 29%, 1) 0%, hsla(263, 65%, 35%, 1) 100%)',
    margin:'15px',Width: '800px', maxHeight: '400px',borderRadius:'15px'}}>
    
      <Typography style={{ color: 'white',fontSize:'20px',marginRight:'15%'}}>{name}</Typography>
      <Typography style={{ color: 'white',fontSize:'20px' }}>{price}</Typography>
  </ListItem>
);

const Checkout = () => {
  <Navbar/>
  
  const nav = useNavigate();
  const cpuState = useSelector((state) => state.components.CPU);
  const gpuState = useSelector((state) => state.components.GPU)
  const MOBOState = useSelector((state) => state.components.MOBO)
  const RAMState = useSelector((state) => state.components.RAM)
  const CaseState = useSelector((state) => state.components.Case)
  const PSUState = useSelector((state) => state.components.PSU)
  const StorageState = useSelector((state) => state.components.Storage)
  const [cpudata,setCPUdata]=useState([])
  const [gpudata,setGPUdata]=useState([])
  const [psudata,setPSUdata]=useState([])
  const [ramdata,setRAMdata]=useState([])
  const [casedata,setCASEdata]=useState([])
  const [mobodata,setMOBOdata]=useState([])
  const [storedata,setStoredata]=useState([])
  const [totalPrice, setTotalPrice] = useState([]);
  

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
       
        setTotalPrice(price)
        console.log(price)
        
        
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, [cpuState, gpuState, PSUState, RAMState, CaseState, MOBOState, StorageState]);
  const [paymentOptions, setPaymentOptions] = useState(['Credit Card', 'PayPal', 'Other']);
  const handlePayment = () => {
  
    console.log(`Payment of ₹${totalPrice} made via ${selectedPayment}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: '#373538', minHeight: '100vh', padding: '20px' }}>
      <Box sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ color: 'white', marginBottom: '5px',fontSize:'50px' }}>
            Order Summary
          </Typography>
          <List style={{marginLeft:'30%'}}>
          <ListItem style={{backgroundColor:'rgba(0,0,0,0.6)',margin:'15px',maxWidth: '700px', maxHeight: '100px',borderRadius:'20px'}}>
    <Stack direction="row" spacing={2}>
      <Typography style={{ color: 'white', fontSize:'30px' }}>Name</Typography>
      <Typography style={{ color: 'white', maxWidth: '700px', maxHeight: '100px',fontSize:'30px',marginLeft:'25vw' }}>Price</Typography>
    </Stack>
  </ListItem>
          <OrderSummaryItem name={cpudata[0]?.name} price={cpudata[0]?.price} />
          <OrderSummaryItem name={gpudata[0]?.name} price={gpudata[0]?.price} />
          <OrderSummaryItem name={mobodata[0]?.name} price={gpudata[0]?.price} />
          <OrderSummaryItem name={ramdata[0]?.name} price={gpudata[0]?.price} />
          <OrderSummaryItem name={casedata[0]?.name} price={gpudata[0]?.price} />
          <OrderSummaryItem name={psudata[0]?.name} price={gpudata[0]?.price} />
          <OrderSummaryItem name={storedata[0]?.name} price={gpudata[0]?.price} />

          </List>
          <Typography variant="subtitle1" sx={{ color: 'white', marginTop: '5px',fontSize:'50px',marginLeft:'25%',backgroundColor:'#4c1f93 ',maxWidth:'500px',padding:'15px', borderRadius:'10px' }}>
            Total: ₹{totalPrice}
          </Typography>
        </Box>
        <div className='Details'>
            <Typography variant="h5" sx={{ color: 'white', marginBottom: '10px' }}>
              Enter Your Details
            </Typography>
            <TextField
              id="outlined-multiline-static"
              label="Address"
              multiline
              rows={4}
              defaultValue="Default Value"
              InputLabelProps={{
                style: { color: 'white' }, // change the label color
              }}
              InputProps={{
                style: { color: 'white' }, // change the input text color
              }}
              style={{ backgroundColor: '#373538', marginTop: '15px', height: 'auto' }}
            />
            <TextField
              select
              label="Select Payment Method"
              
              InputLabelProps={{
                style: { color: 'white' },
              }}
              InputProps={{
                style: { color: 'White' },
              }}
              style={{ backgroundColor: '#373538', marginTop: '10px', height: 'auto', width: '100%' ,maxWidth:'500px'}}
            >
              {paymentOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
        </div>
        

        <Button
          variant="contained"
          color="primary"
          onClick={handlePayment}
          style={{
            height: '40px',
            marginTop: '20px',
            borderRadius: '5px',
            backgroundColor: '#4c1f93',
            fontSize: '16px',
          }}
        >
          Make Payment
        </Button>
      </div>
    </ThemeProvider>
  );
};


export default Checkout;
