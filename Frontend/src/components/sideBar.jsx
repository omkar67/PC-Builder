import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Slider, FormControl, Select, MenuItem, Checkbox, FormControlLabel, FormGroup, InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// import store from './yourStorePath';
// import { setPSU } from './yourActionsPath';
import store from  "../redux/store"
import { setManufacturer} from '../redux/actions';



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
          marginLeft: '0.25vw',
          marginTop: '1vw',
          visibility: true,
          display: true,
        },
      },
    },
  },
});

const SideBar = (props) => {
  const dispatch = useDispatch();
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

  // Define the style for the sidebar container
  const style_box = {
    width: '22vw',
    minHeight: '90vh',
    backgroundColor: 'rgba(53, 14, 88, 0.5)',
    color: 'white',
    marginTop: '1vh',
    borderRadius: '15px',
    maxWidth:'400px'
    
  };

  function valuetext(value) {
    return `${value}`;
  }

  const [selectedDropdownValues, setSelectedDropdownValues] = useState({});

   

  return (
    <ThemeProvider theme={theme}>
      <div style={style_box} ref={styleBoxRef}>
        <Box sx={{ height: '100%', color: 'white', borderRadius: '15px',width:'350px' }}>
          <Typography variant="h3" style={{ textAlign: 'center', marginTop: '0.5vh' }}>Filters</Typography>
          {/* DROPDOWNS START HERE */}
          <div id='dropdowns'>
            {props.drop && Object.keys(props.drop).map((dropIndex) => {
              return (
                <FormControl fullWidth margin="normal" style={{ marginTop: '1vh', width: '90%', marginLeft: '1vw' }} key={dropIndex}>
                  <InputLabel style={{ color: 'white' }}>{props.drop[dropIndex].label} </InputLabel>
                  <Select
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(53, 14, 88, 0.5)',
                      menuProps: { style: { backgroundColor: 'rgba(53, 14, 88, 0.5)' } },
                      borderBlockColor: 'white',
                      '& .MuiSelect-icon': { color: 'white' },
                      '& fieldset': { borderColor: 'white' },
                    }}
                    value={selectedDropdownValues[dropIndex] || ''}
                    onChange={(event) => {
                      const value = event.target.value;
                    
                      setSelectedDropdownValues((prevValues) => ({
                        ...prevValues,
                        [dropIndex]: value,
                      }));

      
                    }}
                  >
                    {props.drop[dropIndex].dropOpt && Object.keys(props.drop[dropIndex].dropOpt).map((dropOptIndex) => {
                      return (
                        <MenuItem value={dropOptIndex} style={{ color: 'white', backgroundColor: 'rgba(53, 14, 88, 2)' }} key={dropOptIndex}>
                          {props.drop[dropIndex].dropOpt[dropOptIndex]}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              );
            })}
          </div>
          {/* DROPDOWNS END HERE */}

          {/* SLIDERS START HERE */}
          <div id='sliders'>
            {props.slider && [...Array(props.sliderNum)].map((_, currIndex) => {
              return (
                <FormControl fullWidth margin="normal" style={{ marginLeft: '1vw' }} key={currIndex}>
                  <Slider
                    defaultValue={props.slider[currIndex].min}
                    getAriaValueText={valuetext}
                    step={props.slider[currIndex].step}
                    min={props.slider[currIndex].min}
                    max={props.slider[currIndex].max}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => {
                      return `${value}`;
                    }}
                    marks={props.slider[currIndex].marks}
                    style={{ width: '86%' }}
                  />
                  <InputLabel
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      fontSize: '1.5rem'
                    }}
                  >
                    {props.slider[currIndex].title}
                  </InputLabel>
                </FormControl>
              );
            })}
          </div>
          {/* SLIDERS END HERE */}
          {/* CHECKBOXES START HERE */}
          <div id='checkboxes'>
            {props.checkboxCategories &&
              Object.keys(props.checkboxCategories).map((index) => {
                const category = props.checkboxCategories[index];
                return (
                  <FormGroup style={{ marginLeft: '1vw', marginTop: '5vh', fontSize: '2rem' }} key={category.title}>
                    <Typography variant="subtitle1" style={{ color: 'white', fontSize: '2rem' }}>{category.title}</Typography>
                    {category.options && Object.keys(category.options).map((optionIndex) => {
                      const option = category.options[optionIndex];
                      return (
                        <FormControlLabel key={option} control={<Checkbox name={option} style={{ color: '#BB84EC', fontSize: '2rem' }} />} label={option} />
                      );
                    })}
                  </FormGroup>
                );
              })}
          </div>
          {/* CHECKBOXES END HERE */}
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default SideBar;
