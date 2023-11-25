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
            <MenuItem value="CPU">cpu</MenuItem>
            <MenuItem value="GPU">gpu</MenuItem>
            <MenuItem value="MOBO">Mother Board</MenuItem>
            <MenuItem value="RAM">ram</MenuItem>
            <MenuItem value="storage">storage</MenuItem>
            <MenuItem value="PSU">psu</MenuItem>
            <MenuItem value="case">pccase</MenuItem>
          </Select>
        </FormControl>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Image</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Price</TableCell>
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
                    <TableCell>{product.name}</TableCell>
                    <TableCell>Rs {product.price}</TableCell>
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
