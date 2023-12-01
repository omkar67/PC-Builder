import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const NavBar2 = () => {
  const classes = useStyles();
  const nav = useNavigate(); // Move useNavigate inside the functional component

  return (
    <AppBar position="static" style={{backgroundColor:'#4c1f93'}}>
      <Toolbar className={classes.toolbar}>
        <Button className={classes.button} color="inherit" onClick={() => nav('/Admin')}>
          Home
        </Button>
        <Button className={classes.button} color="inherit" onClick={() => nav('/Admin/orders')}>
          Orders
        </Button>
        <Button className={classes.button} color="inherit" onClick={() => nav('/Admin/customers')}>
          Customers
        </Button>
        <Button className={classes.button} color="inherit" onClick={() => nav('/Admin/products')}>
          Products
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar2;
