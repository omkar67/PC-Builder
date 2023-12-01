// CustomersTable.jsx
import React, { useEffect, useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const CustomersTable = () => {
  const [customers, setCustomers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/getUser');
      
          if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
      
          const data = await response.json();
          setCustomers(data);
         
          console.log(data)
        } catch (error) {
          console.error('Error fetching customers:', error);
        }
      };
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table style={{fontSize:'1vh',fontFamily:'Poppins',color:'black'}}  >
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>CID</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Name</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Mobile Number</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Pin Code</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Address</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Email</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Username</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers?.map((customer) => (
            <TableRow key={customer.uid}>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.uid}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.name}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.mobile_number}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.pin_code}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.address}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.email}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomersTable;
