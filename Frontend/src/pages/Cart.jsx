import React from 'react';
import { Button, List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
    // Sample cart items data
    const cartItems = [
        { id: 1, name: 'Laptop', price: 1000, quantity: 2, img: '/path/to/image.jpg' },
        //... more items
    ];

    const getTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                <ShoppingCartIcon /> My Cart
            </Typography>
            
            <List>
                {cartItems.map(item => (
                    <ListItem key={item.id} divider>
                        <ListItemAvatar>
                            <Avatar variant="square" src={item.img} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={`Price: $${item.price} | Quantity: ${item.quantity}`}
                        />
                        <Typography variant="body1">
                            Total: ${item.price * item.quantity}
                        </Typography>
                        <IconButton edge="end" color="error">
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            
            <Box display="flex" justifyContent="space-between" mt={3}>
                <Typography variant="h6">
                    Total Price: ${getTotalPrice()}
                </Typography>
                <Button variant="contained" color="primary">
                    Proceed to Checkout
                </Button>
            </Box>
        </Box>
    );
}

export default Cart;
