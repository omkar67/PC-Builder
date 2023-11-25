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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>CID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Mobile Number</TableCell>
            <TableCell>Pin Code</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Username</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers?.map((customer) => (
            <TableRow key={customer.uid}>
              <TableCell>{customer.uid}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.mobile_number}</TableCell>
              <TableCell>{customer.pin_code}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomersTable;
