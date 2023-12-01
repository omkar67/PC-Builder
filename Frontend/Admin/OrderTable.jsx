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
       <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

      body {
        margin: 0;
        padding: 0;
        background-color: white;
      `}</style>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>Order ID</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>CPU ID</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>GPU ID</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>MOBO ID</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>CASE ID</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>RAM ID</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}> STORAGE ID</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>USER ID</TableCell>
            <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>PSU ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers?.map((customer) => (
            <TableRow key={customer.orderid}>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.orderid}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.cpu_id}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.gpu_id}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.moboid}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.case_id}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.ram_id}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.storage_id}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.user_id}</TableCell>
              <TableCell style={{fontSize:'2vh',fontFamily:'Poppins',color:'black'}}>{customer.psu_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
