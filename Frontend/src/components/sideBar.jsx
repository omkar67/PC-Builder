import React, { useEffect, useRef } from 'react';
import { Box, Typography, Slider, FormControl, Select, MenuItem, Checkbox, FormControlLabel, FormGroup,InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
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
          visibility:true,
          display:true,
        },
      },
    },
  },
});

const SideBar = (props) => {
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

 

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={style_box} ref={styleBoxRef}>
        <Box sx={{ height: '100%', color: 'white', borderRadius: '15px' }}>
          <Typography variant="h3" style={{ textAlign: 'center', marginTop: '0.5vh' }}>Filters</Typography>

          <FormControl fullWidth margin="normal" style={{ marginTop: '1vh' }}>
            <InputLabel style={{ color: 'white' }}>{props.dropdown1.label}</InputLabel>
            <Select
              sx={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)', menuProps: { style: { backgroundColor: 'rgba(53, 14, 88, 0.5)' } }, borderBlockColor: 'white', '& .MuiSelect-icon': { color: 'white' }, '& fieldset': { borderColor: 'white' } }}
            >
              <MenuItem value="Intel" style={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)' }}>{props.dropdown1.opt1}</MenuItem>
              <MenuItem value="AMD" style={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)' }}>{props.dropdown1.opt2}</MenuItem>
              {/* Add more CPU options here */}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel style={{ color: 'white' }}>{props.dropdown2.label}</InputLabel>
            <Select
              sx={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)', menuProps: { style: { backgroundColor: 'rgba(53, 14, 88, 0.5)' } }, borderBlockColor: 'white', '& .MuiSelect-icon': { color: 'white' }, '& fieldset': { borderColor: 'white' } }}
            >
              <MenuItem value="gpu1" style={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)', textAlign: 'center' }}> {props.dropdown2.opt1}</MenuItem>
              <MenuItem value="gpu2" style={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 0.5)', textAlign: 'center' }}>{props.dropdown2.opt2}</MenuItem>
              {/* Add more GPU options here */}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" style={{ marginLeft: '1.5vw' }}>
            <Slider defaultValue={2} getAriaValueText={valuetext} step={props.label1.step} min={props.label1.min} max={props.label1.max} valueLabelDisplay="auto" markLabel='visible' marks={props.label1.mark} style={{ width: '20vw', '& .MuiSlider-markLabel': { color: 'white' } }} />
            <InputLabel
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}
            >
              {props.label1.title}
            </InputLabel>
          </FormControl>
          <FormControl fullWidth margin="normal" style={{ marginLeft: '1.5vw', marginTop: '4vh' }}>
            <Slider defaultValue={500} getAriaValueText={valuetext} step={props.label2.step} min={props.label2.min} max={props.label2.max} valueLabelDisplay="off" marks={props.label2.mark} style={{ width: '20vw', '& .MuiSlider-markLabel': { color: 'white' } }} />
            <InputLabel
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}
            >
              {props.label2.title}
            </InputLabel>
          </FormControl>

          <FormControl fullWidth margin="normal" style={{ marginLeft: '1.5vw', marginTop: '4vh' }}>
            <Slider defaultValue={2} getAriaValueText={valuetext} step={props.label3.step} min={props.label3.min} max={props.label3.max} valueLabelDisplay="auto" marks={props.label3.mark} style={{ width: '20vw', '& .MuiSlider-markLabel': { color: 'white' } }} />
            <InputLabel
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}
            >
              {props.label3.title}
            </InputLabel>
          </FormControl>

          <FormControl fullWidth margin="normal" style={{ marginLeft: '1.5vw', marginTop: '4vh' }}>
            <Slider defaultValue={2} getAriaValueText={valuetext} step={props.label4.step} min={props.label4.min} max={props.label4.max} valueLabelDisplay="auto" marks={props.label4.mark} style={{ width: '20vw', '& .MuiSlider-markLabel': { color: 'white' } }} />
            <InputLabel
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize: '1.5rem'
              }}
            >
              {props.label4.title}              
            </InputLabel>
          </FormControl>

          <FormGroup style={{ marginLeft: '2vw', marginTop: '5vh', fontSize:'2rem' }}>
            <Typography variant="subtitle1" style={{ color: 'white',fontSize:'2rem'  }}>{props.categories}</Typography>
            {props.cat_titles.map((category) => (
              <FormControlLabel key={category} control={<Checkbox name={category} style={{ color: '#BB84EC',fontSize:'2rem' }} />} label={category} />
            ))}
          </FormGroup>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default SideBar; // Remove the colon after SideBar

SideBar.propTypes={
  label1: PropTypes.object.isRequired,
  label2: PropTypes.object.isRequired,
  label3: PropTypes.object.isRequired,
  label4: PropTypes.object.isRequired,
  categories: PropTypes.string.isRequired,
  cat_titles: PropTypes.array.isRequired,
  dropdown1: PropTypes.object.isRequired,
  dropdown2: PropTypes.object.isRequired,
}


