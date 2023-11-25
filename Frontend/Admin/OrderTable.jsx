// CustomersTable.jsx
import React, { useEffect, useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const OrderTable = () => {
  const [customers, setCustomers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/orders');
      
          if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
      
          const data = await response.json();
          setCustomers(data);
         
          console.log(data)
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>CPU ID</TableCell>
            <TableCell>GPU ID</TableCell>
            <TableCell>MOBO ID</TableCell>
            <TableCell>CASE ID</TableCell>
            <TableCell>RAM ID</TableCell>
            <TableCell>STORAGE ID</TableCell>
            <TableCell>USER ID</TableCell>
            <TableCell>PSU ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers?.map((customer) => (
            <TableRow key={customer.orderid}>
              <TableCell>{customer.orderid}</TableCell>
              <TableCell>{customer.cpu_id}</TableCell>
              <TableCell>{customer.gpu_id}</TableCell>
              <TableCell>{customer.moboid}</TableCell>
              <TableCell>{customer.case_id}</TableCell>
              <TableCell>{customer.ram_id}</TableCell>
              <TableCell>{customer.storage_id}</TableCell>
              <TableCell>{customer.user_id}</TableCell>
              <TableCell>{customer.psu_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
