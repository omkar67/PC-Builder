import React, { useState, useEffect } from 'react';
import NavBar2 from './NavBar2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const theme = createTheme();

const products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/${selectedCategory}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          console.error('Invalid content type. Headers:', response.headers);
          throw new Error('Invalid content type');
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(`Error fetching ${selectedCategory}:`, error);
        setLoading(false);
      }
    };

    if (selectedCategory) {
      fetchData();
    } else {
      setProducts([]);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar2 />
      <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

      body {
        margin: 0;
        padding: 0;
        background-color: white;
      `}</style>
      <div style={{ padding: '20px', display: 'flex', gap: '20px' }}>
        <FormControl style={{ minWidth: '200px' }}>
          <InputLabel id="category-label">Select Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={selectedCategory}
            label="Select Category"
            onChange={handleCategoryChange}
          >
            <MenuItem value="CPU" style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>CPU</MenuItem>
            <MenuItem value="GPU" style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>GPU</MenuItem>
            <MenuItem value="MOBO" style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>MotherBoard</MenuItem>
            <MenuItem value="RAM" style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>RAM</MenuItem>
            <MenuItem value="storage" style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Storage</MenuItem>
            <MenuItem value="PSU" style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>PSU</MenuItem>
            <MenuItem value="case" style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Case</MenuItem>
          </Select>
        </FormControl>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Product Image</TableCell>
                <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Product Name</TableCell>
                <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={3}>Loading...</TableCell>
                </TableRow>
              ) : (
                products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                    </TableCell>
                    <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{product.name}</TableCell>
                    <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Rs {product.price}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </ThemeProvider>
  );
};

export default products;
