import React, { useEffect, useRef } from 'react';
import { Box, Typography, Slider, FormControl, Select, MenuItem, Checkbox, FormControlLabel, FormGroup,InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a theme
const theme = createTheme({
  typography: {
    fontFamily: 'poppins, montserrat, sans-serif',
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          backgroundColor: 'white',
        },
        track: {
          backgroundColor: '#BB84EC',
        },
        rail: {
          backgroundColor: 'white',
        },
        label: {
          color: 'white',
        },
        markLabel: {
          color: 'white',
          marginLeft: '1vw',
          marginTop: '2vw',
        },
      },
    },
  },
});

const SideBar = () => {
  const styleBoxRef = useRef(null);

  useEffect(() => {
    const setMinHeight = () => {
      if (styleBoxRef.current) {
        const viewportHeight = window.innerHeight;
        styleBoxRef.current.style.minHeight = `${viewportHeight}px`;
      }
    };

    setMinHeight();
    window.addEventListener('resize', setMinHeight);

    return () => {
      window.removeEventListener('resize', setMinHeight);
    };
  }, []);

  const categories = ['Nimble', 'Edge', 'Titan'];

  // Define the style for the sidebar container
  const style_box = {
    width: '25vw',
    minHeight: '90vh',
    backgroundColor: 'rgba(53, 14, 88, 0.5)',
    color: 'white',
    marginTop: '1vh',
    borderRadius: '15px'
  };

  // Define the marks for RAM slider
  const ram_marks = [
    { value: 0, label: '0GB' },
    { value: 16, label: '16GB' },
    { value: 32, label: '32GB' },
    { value: 48, label: '48GB' }
  ];

  // Define the marks for SSD slider
  const ssd_marks = [
    { value: 500, label: '0.5TB' },
    { value: 1000, label: '1TB' },
    { value: 1500, label: '1.5TB' },
    { value: 2000, label: '2TB' },
    { value: 2500, label: '<2.5TB' }
  ];

  // Define the marks for Price slider
  const price = [
    { value: 500, label: '500$' },
    { value: 1000 },
    { value: 1500 },
    { value: 2000 },
    { value: 2500, label: '<2500$' }
  ];

  // Define the marks for VRAM slider
  const vram_marks = [
    { value: 2, label: '2GB' },
    { value: 4 },
    { value: 6 },
    { value: 8 },
    { value: 12, label: '12GB' }
  ];

  function valuetext(value) {
    return `${value}GB`;
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={style_box} ref={styleBoxRef}>
        <Box sx={{ height: '100%', color: 'white', borderRadius: '15px' }}>
          <Typography variant="h3" style={{ textAlign: 'center', marginTop: '0.5vh' }}>Filters</Typography>

          <FormControl fullWidth margin="normal" style={{ marginTop: '1vh' }}>
            <InputLabel style={{ color: 'white' }}>CPU</InputLabel>
            <Select
              sx={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)', menuProps: { style: { backgroundColor: 'rgba(53, 14, 88, 0.5)' } }, borderBlockColor: 'white', '& .MuiSelect-icon': { color: 'white' }, '& fieldset': { borderColor: 'white' } }}
            >
              <MenuItem value="Intel" style={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)' }}>INTEL</MenuItem>
              <MenuItem value="AMD" style={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)' }}>AMD</MenuItem>
              {/* Add more CPU options here */}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel style={{ color: 'white' }}>GPU</InputLabel>
            <Select
              sx={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)', menuProps: { style: { backgroundColor: 'rgba(53, 14, 88, 0.5)' } }, borderBlockColor: 'white', '& .MuiSelect-icon': { color: 'white' }, '& fieldset': { borderColor: 'white' } }}
            >
              <MenuItem value="gpu1" style={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)', textAlign: 'center' }}>GeForce RTX Series</MenuItem>
              <MenuItem value="gpu2" style={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)', textAlign: 'center' }}>AMD RX series</MenuItem>
              {/* Add more GPU options here */}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" style={{ marginLeft: '1.5vw' }}>
            <Slider defaultValue={2} getAriaValueText={valuetext} step={16} min={0} max={48} valueLabelDisplay="auto" marks={ram_marks} style={{ width: '20vw', '& .MuiSlider-markLabel': { color: 'white' } }} />
            <InputLabel
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}
            >
              RAM
            </InputLabel>
          </FormControl>
          <FormControl fullWidth margin="normal" style={{ marginLeft: '1.5vw', marginTop: '4vh' }}>
            <Slider defaultValue={500} getAriaValueText={valuetext} step={500} min={500} max={2500} valueLabelDisplay="auto" marks={ssd_marks} style={{ width: '20vw', '& .MuiSlider-markLabel': { color: 'white' } }} />
            <InputLabel
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}
            >
              Storage
            </InputLabel>
          </FormControl>

          <FormControl fullWidth margin="normal" style={{ marginLeft: '1.5vw', marginTop: '4vh' }}>
            <Slider defaultValue={2} getAriaValueText={valuetext} step={500} min={500} max={2500} valueLabelDisplay="auto" marks={price} style={{ width: '20vw', '& .MuiSlider-markLabel': { color: 'white' } }} />
            <InputLabel
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}
            >
              Price
            </InputLabel>
          </FormControl>

          <FormControl fullWidth margin="normal" style={{ marginLeft: '1.5vw', marginTop: '4vh' }}>
            <Slider defaultValue={2} getAriaValueText={valuetext} step={2} min={2} max={12} valueLabelDisplay="auto" marks={vram_marks} style={{ width: '20vw', '& .MuiSlider-markLabel': { color: 'white' } }} />
            <InputLabel
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}
            >
              VRAM
            </InputLabel>
          </FormControl>

          <FormGroup style={{ marginLeft: '2vw', marginTop: '5vh', fontSize:'2rem' }}>
            <Typography variant="subtitle1" style={{ color: 'white',fontSize:'2rem'  }}>Categories</Typography>
            {categories.map((category) => (
              <FormControlLabel key={category} control={<Checkbox name={category} style={{ color: '#BB84EC',fontSize:'2rem' }} />} label={category} />
            ))}
          </FormGroup>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default SideBar; // Remove the colon after SideBar
