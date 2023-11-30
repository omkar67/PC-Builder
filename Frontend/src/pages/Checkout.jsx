import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Avatar from '@mui/material/Avatar';
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
import Logo from '../Images/Logo.png'

const theme = createTheme({
  typography: {
    fontFamily: 'poppins, montserrat, sans-serif',
  },
});
const OrderSummaryItem = ({ name, price }) => (
  <ListItem style={{
    background: '#880085',
    margin:'15px',maxWidth: '1200px', maxHeight: '400px',borderRadius:'15px'}}>
      <Stack direction={'row' } spacing={5}>
      <Typography style={{ color: 'white',fontSize:'40px',overflow:'auto ',marginRight:'0%',maxWidth:'1000px'}}>{name}</Typography>
      <Typography style={{ color: 'white',fontSize:'45px',paddingleft:'25px' ,margintop:'25px'}}>{price}</Typography>
      </Stack>
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
  const loginState = useSelector((state) => state.components.login)
  const [cpudata,setCPUdata]=useState([])
  const [gpudata,setGPUdata]=useState([])
  const [psudata,setPSUdata]=useState([])
  const [ramdata,setRAMdata]=useState([])
  const [casedata,setCASEdata]=useState([])
  const [mobodata,setMOBOdata]=useState([])
  const [storedata,setStoredata]=useState([])
  const [totalPrice, setTotalPrice] = useState([]);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [pin,setPin]=useState(null)

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handlePinChange = (event) => {
    setPin(event.target.value);
  };
  const handlePayment = () => {
    const data = {
      address: address,
  
      pin_code: pin,
      username:loginState
    };
  
    fetch('http://localhost:3000/api/makePayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
        alert('Sucess!!')
      })
      .catch(error => {
        console.error('Error:', error);
        alert('failure')
      });
  };
  
  

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
  const handlePayment_option = () => {
  
    console.log(`Payment of ₹${totalPrice} made via ${selectedPayment}`);
  };
  const ImageIcon = () => {
    return (
      
      <Avatar alt="Your Image" src={Logo} style={{height:'100px',width:'400px',marginLeft:'0px'}} onClick={()=>{nav('/')}} />
     
    );
  };

  return (
    <ThemeProvider theme={theme}>
      
      <div style={{ backgroundColor: '#373538', minHeight: '100vh', padding: '20px' }}>
      
        <Stack direction={'row'} marginTop='15px'>
          <Typography variant="h6" sx={{ color: 'white', marginBottom: '5px',fontSize:'80px',marginTop:'15px' }}>
            Order Summary
          </Typography>
        </Stack>
      <Box sx={{ mt: 0.5 }}>
          <List style={{marginLeft:'30%',marginTop:'0%'}}>
          <ListItem style={{backgroundColor:'rgba(0,0,0,0.6)',margin:'15px',maxWidth: '1200px', maxHeight: '100px',borderRadius:'20px'}}>
    <Stack direction="row" spacing={2}>
      <Typography style={{ color: 'white', fontSize:'70px' }}>Name</Typography>
      <Typography style={{ color: 'white', maxWidth: '700px', maxHeight: '100px',fontSize:'70px',marginLeft:'26vw' }}>Price</Typography>
    </Stack>
  </ListItem>
          <OrderSummaryItem name={cpudata[0]?.name} price={cpudata[0]?.price} />
          <OrderSummaryItem name={gpudata[0]?.name} price={cpudata[0]?.price} />
          <OrderSummaryItem name={mobodata[0]?.name} price={mobodata[0]?.price} />
          <OrderSummaryItem name={ramdata[0]?.name} price={ramdata[0]?.price} />
          <OrderSummaryItem name={casedata[0]?.name} price={casedata[0]?.price} />
          <OrderSummaryItem name={psudata[0]?.name} price={psudata[0]?.price} />
          <OrderSummaryItem name={storedata[0]?.name} price={storedata[0]?.price} />

          </List>
          <Typography variant="subtitle1" sx={{ color: 'white', marginTop: '5px',fontSize:'70px',marginLeft:'40%',backgroundColor:'#4c1f93 ',maxWidth:'500px',padding:'15px', borderRadius:'10px',padding:'1.5%' }}>
            Total: ₹{totalPrice}
          </Typography>
        </Box>
        <div className='Details' style={{marginLeft:'12%',marginTop:'2%'}}>
            <Typography variant="h5" sx={{ color: 'white', marginBottom: '10px',fontSize:'50px' }}>
              Enter Your Details
            </Typography>
            <TextField
              id="outlined-multiline-static"
              label="Address"
              multiline
             
              onChange={handleAddressChange}  
              rows={3}
              defaultValue=" "
              InputLabelProps={{
                style: { color: 'white',fontSize:'40px',marginLeft:'' }, 
              }}
              InputProps={{
                style: { color: 'white',fontSize:'20px',marginTop:'25px' }, 
              }}
              style={{ backgroundColor: '#373538', marginTop: '15px', height: 'auto',width:'700px' }}
            />
             <TextField
              id="outlined-multiline-static"
              label=" Pin Code "
              multiline
              rows={1}
              defaultValue=" "
              onChange={handlePinChange}
              InputLabelProps={{
                style: { color: 'white',fontSize:'40px',marginLeft:'' },
              }}
              InputProps={{
                style: { color: 'white',fontSize:'20px',marginTop:'35px' },
                inputProps: {
                  pattern: "[0-9]*", 
                  inputMode: "numeric", 
                }
              }}
              style={{ backgroundColor: '#373538', marginTop: '25px', height: 'auto',width:'700px',marginLeft:'20px' }}
            />
            <TextField
              label="Select Payment Method"
              select
              InputLabelProps={{
                style: { color: 'white',fontSize:'40px' },
              }}
              InputProps={{
                style: { color: 'White',fontSize:'40px' },
              }}
              style={{ backgroundColor: '#373538', marginTop: '10px', height: 'auto', width: '100%' ,maxWidth:'600px',fontSize:'40px',marginLeft:'30px',marginTop:'2%',borderColor:'white'}}
            >
            
              {paymentOptions.map((option) => (
                <MenuItem key={option} value={option} style={{fontSize:'40px'}}>
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
            height: '200px',
            marginTop: '3%',
            borderRadius: '30px',
            backgroundColor: '#4c1f93',
            padding:'50px',
            fontSize: '60px',
            marginLeft:'25%'
          }}
        >
          Make Payment
        </Button>
      </div>
    </ThemeProvider>
  );
};


export default Checkout;
