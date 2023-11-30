import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import MinProductCard from './MinProdCard';
import { useSelector,useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { setItem } from '../redux/actions';

const theme = createTheme({
  typography: {
    fontFamily: 'poppins, montserrat, sans-serif',
  },
});


const backgroundStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage:
    'url("https://hrc.in.th/wp-content/uploads/2022/11/LIAN-LI-ODYSSEY-X-SKY.EYE-14.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  
};

const contentStyle = {
  height:'auto',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(93, 46, 170, 0.2)',
  color: 'white',
};

export default function CustList() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cpuState = useSelector((state) => state.components.CPU);
  const gpuState = useSelector((state) => state.components.GPU)
  const MOBOState = useSelector((state) => state.components.MOBO)
  const RAMState = useSelector((state) => state.components.RAM)
  const CaseState = useSelector((state) => state.components.Case)
  const PSUState = useSelector((state) => state.components.PSU)
  const StorageState = useSelector((state) => state.components.Storage)
  const itemState = useSelector((state) => state.components.items)
  const [cpudata,setCPUdata]=useState([]);
  const [gpudata,setGPUdata]=useState([]);
  const [psudata,setPSUdata]=useState([]);
  const [ramdata,setRAMdata]=useState([]);
  const [casedata,setCASEdata]=useState([]);
  const [mobodata,setMOBOdata]=useState([]);
  const [storedata,setStoredata]=useState([]); 
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

  
  
  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop:'1vh'
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height:'auto',
            width: '90%',
            maxWidth: '75vw',
            minHeight: '80vh',
            position: 'relative',
            borderRadius: '4.5vw',
            
            color: 'white',
            marginTop: '0.5vh',
           
          }}
        >
          <Box sx={{ my: '2vw', mx: '2vw', height:'auto' }}>
            <div style={contentStyle }>
                {/* Header */}
                <Grid item xs style={{marginTop:'1.5vw'}}>
                  <Stack direction="row" spacing={'0.5vw'}>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{ mt: '2vw', fontSize: '2vw' }}
                  >

                    Compnonent
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{ mt: '2vw', fontSize: '2vw', }}
                    style={{marginLeft:'4vw'}}
                  >
                    Product
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{ mt: '2vw', fontSize: '2vw' }}
                    style={{marginLeft:'30vw'}}
                  >

                    Price
                  </Typography>
                  </Stack>
                  </Grid>
                {/* Grid Item 1 - CPU */}
                {cpuState === null ? ( // Check if the CPU state is in its initial state (null)
        <Grid item xs style={{ marginTop: '.5vw' }}>
          <Stack direction="row" spacing={'0.5vw'}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ mt: '2vw', fontSize: '2vw' }}
              style={{
                marginLeft: '2vw',
                width: '7vw',
                marginRight: '2vw',
                
              }}
            >
              CPU
            </Typography>
            <Button
              sx={{
                '&:hover': { backgroundColor: 'rgba(176, 216, 230, 0.5)' },
                backgroundColor: '#d3c0f2',
                color: 'black',
                borderRadius: '1vw',
                height: '3vw',
                fontSize: '2.5vw',
                marginTop: '1vw',
                
              }}
              style={{
                marginLeft: '11.5vw',
                width: '15vw',
              }}
              onClick={() => nav('/CPU')}
            >
              +Add
            </Button>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{
                mt: '1vw',
                width: '10vw',
                whiteSpace: 'nowrap',
                fontSize: '2vw',
              }}
              style={{
                marginLeft: '17vw',
                width: '5vw',
              }}
            >
              $0.00
            </Typography>
          </Stack>
        </Grid>
      ) : (
        <Grid item xs style={{ marginTop: '0.5vw' }}>
          <Stack direction="row" spacing={'0.5vw'}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ mt: '2vw', fontSize: '2vw' }}
              style={{
                marginLeft: '0vw',
                width: '7vw',
                marginRight: '5.5vw',
                marginTop:'3.5vw',
                marginLeft:'3vw',
        
              }}
            >
              CPU
            </Typography>
            <MinProductCard name={cpudata[0]?.name} price={cpudata[0]?.price} image={cpudata[0]?.image} CompName={'CPU'}/>
          </Stack>
        </Grid>
      )}
{/* Grid Item 2 - MOBO */}
{ MOBOState===null ? (
                <Grid item xs style={{marginTop:'1vw',}}>
                <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '1.5vw' }}
                      style={{marginLeft:'2vw',width:'15.5vw'}}
                    >
                      MOTHERBOARD
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                      style={{marginLeft:'5vw',width:'15vw'}}
                      onClick={()=>nav('/MOBO')}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid> 
    ):(
      <Grid item xs style={{marginTop:'1vw',}}>
      <Stack direction="row"spacing={'0.5vw'}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ mt: '2vw', fontSize: '1.5vw' }}
            style={{marginLeft:'0.5vw',width:'15.5vw',marginRight:'0vw',marginTop:'3.5vw'}}
          >
            MOTHERBOARD
          </Typography>
          <MinProductCard name={mobodata[0]?.name} price={mobodata[0]?.price} image={mobodata[0]?.image} CompName={'MOBO'} style={{maxwidth:'100px'}}/>
          </Stack>
          </Grid>
    )}
        {/* item 3 storage */}
  {StorageState===null?(
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '1.5vw' }}
                      style={{marginLeft:'2vw',width:'8vw'}}
                    >
                      STORAGE
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                      style={{marginLeft:'12.5vw',width:'15vw'}}
                      onClick={()=>nav('/storage')}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                     
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
          ):(
            <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '1.5vw' }}
                      style={{width:'8vw',marginRight:'5.5vw',marginLeft:'2vw',marginTop:'3.5vw'}}
                    >
                      STORAGE
                    </Typography>
                    <MinProductCard name={storedata[0]?.name} price={storedata[0]?.price} image={storedata[0]?.image} CompName={'Storage'}/>
                  </Stack>
                  </Grid>
          )

    }
                {/* Ram - 4  */}
{RAMState===null?(
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'2vw',width:'5vw'}}
                    >
                      RAM
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                     style={{marginLeft:'15.5vw',width:'15vw'}}
                     onClick={()=>nav('/RAM')}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
):(
  <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'4vw',width:'5vw',marginRight:'6.5vw',marginTop:'3.5vw'}}
                    >
                      RAM
                    </Typography>
                    <MinProductCard name={ramdata[0]?.name} price={ramdata[0]?.price} image={ramdata[0]?.image} CompName={'RAM'}></MinProductCard>
                    </Stack>
                    </Grid>
)
    }

{/* GPU-5  */}
  {gpuState===null?(
                
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'2vw',width:'5vw'}}
                     
                    >
                      GPU
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                      style={{marginLeft:'15.5vw',width:'15vw'}}
                      onClick={()=>nav('/GPU')}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
                ):(
                  <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'4vw',width:'5vw',marginRight:'6.5vw',marginTop:'3.5vw'}}
                     
                    >
                      GPU
                    </Typography>
                    
                    
                      <MinProductCard  name={gpudata[0]?.name} price={gpudata[0]?.price} image={gpudata[0]?.image} CompName={'GPU'}/>
                   
                    </Stack>
                    </Grid>

                )
}
                {/* Power Supply - 6  */}
  {PSUState===null?(
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '1.5vw' }}
                      style={{marginLeft:'2vw',width:'13vw'}}
                    >
                      POWER SUPPLY
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                      style={{marginLeft:'7.5vw',width:'15vw'}}
                      onClick={()=>nav('/PSU')}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
  ):(
    <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '1.5vw',width:'13vw' }}
                      style={{marginLeft:'2vw',width:'5vw',marginRight:'0.5vw',marginTop:'3.5vw',width:'13vw'}}
                    >
                      POWER SUPPLY
                    </Typography>
                  <MinProductCard  name={psudata[0]?.name} price={psudata[0]?.price} image={psudata[0]?.image} CompName={'PSU'}/>
                </Stack>
                </Grid>
  )

}

  {/* CASE - 7  */}
      { CaseState===null?( 
                <Grid item xs style={{marginTop:'.5vw',}}>
                  <Stack direction="row"spacing={'0.5vw'}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'2vw',width:'7vw'}}
                    >
                      CASE
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        backgroundColor: '#d3c0f2',
                        color: 'black',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '2.5vw',
                        marginTop: '1vw',
                      }}
                      style={{marginLeft:'13.5vw',width:'15vw'}}
                      onClick={()=>nav('/Case')}
                    >
                      +Add
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'17vw',width:'5vw'}}
                    >
                      $0.00
                    </Typography>
                  </Stack>
                </Grid>
      ):(
        <Grid item xs style={{marginTop:'.5vw',}}>
        <Stack direction="row"spacing={'0.5vw'}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ mt: '2vw', fontSize: '2vw' }}
            style={{marginLeft:'2vw',width:'7vw',marginRight:'3vw',marginTop:'3.5vw'}}
          >
            CASE
          </Typography>
          <MinProductCard  name={casedata[0]?.name} price={casedata[0]?.price} image={casedata[0]?.image} CompName={'Case'}/>
        </Stack>
        </Grid>
      )}
                <Grid item xs style={{marginTop:'0vw',backgroundColor:'#4c1f93',borderRadius:'5vw',marginLeft:'4vw',marginTop:'30px'}}>
                  <Stack direction="row"spacing={'0.5vw'} style={{marginTop:'1vw'}}>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ mt: '2vw', fontSize: '2vw' }}
                      style={{marginLeft:'5vw'}}
                    >
                      Total
                    </Typography>
                    <Button
                      sx={{
                        '&:hover': { backgroundColor: 'rgba(176,216,230,0.5)' },
                        color: 'white',
                        borderRadius: '1vw',
                        height: '3vw',
                        fontSize: '1.5vw',
                      
                      }}
                     style={{marginLeft:'7vw', textDecoration:'underline', marginTop: '-0.5vw',}}
                     onClick={() => {
                      if (
                        cpuState !== null &&
                        gpuState !== null &&
                        PSUState !== null &&
                        RAMState !== null &&
                        CaseState !== null &&
                        MOBOState !== null &&
                        StorageState !== null 
                        
                      ) {
                        // Dispatch the action to set itemState to 1
                        dispatch(setItem(1));
                        
                        nav('/Cart');
                      } else {
                        console.log('Conditions not met');
                      }
                    }}>
                      Proceed to Cart
                    </Button>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{
                        mt: '1vw',
                        width: '10vw',
                        whiteSpace: 'nowrap',
                        fontSize: '2vw',
                      }}
                      style={{marginLeft:'10vw'}}
                    >
                     ₹ {
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
                  </Stack>
                </Grid>
                <Grid item xs style={{marginTop:'0vw',backgroundColor:'rgb(0,47,108)',borderRadius:'5vw'}}>
              </Grid>
            </div>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}