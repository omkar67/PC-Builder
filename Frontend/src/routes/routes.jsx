// src/routes/routes.js

import Home from '../pages/Home';
import About from '../pages/About';
import contactUs from '../pages/contactUs';
import Cart from '../pages/Cart';
import customizePC from '../pages/customizePC'

import CPU from '../pages/CPU';
import loginPage from "../pages/loginPage";

import Storage from '../pages/Storage';
import RAM from '../pages/RAM';
import signUpPage from "../pages/signUpPage";
import Case from "../pages/Case"
import Motherboard from '../pages/Motherboard';
import PSU from '../pages/PSU';
import GPU from '../pages/GPU';

import Checkout from '../pages/Checkout'



import customers from '../../Admin/customers';
import orders from '../../Admin/orders';
import products from '../../Admin/products';
import home from '../../Admin/home';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/login',
        component: loginPage
    },
    {
        path: '/signup',
        component: signUpPage
    },
    {

        path: '/About',
        component: About,
    },
    {
        path: '/Cart',
        component: Cart,
    },
    
    {
        path: '/contactUs',
        component: contactUs,
    },
    {
        path: '/customizePC',
        component: customizePC,
    },
    {
        path:'/CPU',
        component: CPU,
    },
    {
        path:"/storage",
        component : Storage,
    },
   
    {
        path:"/Case",
        component : Case,
    },
    {
        path:"/RAM",
        component : RAM
    },
    {
        path:"/MOBO",
        component: Motherboard,
    },
    {
        path:"/PSU",
        component: PSU,
    },
    {
        path:"/GPU",
        component: GPU,

    },{
        path:"/Checkout",
        component: Checkout,
    }

    ,
    {
        path:"/Admin",
        component:home,
    },
    {
        path:"/Admin/products",
        component:products
    },
    {
        path:"/Admin/customers",
        component:customers
        
    },
    {
        path:"/Admin/orders",
        component:orders
    }



    

    
];

export default routes;
