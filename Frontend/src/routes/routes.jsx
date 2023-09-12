// src/routes/routes.js

import Home from '../pages/Home';
import About from '../pages/About';
import contactUs from '../pages/contactUs';
import Cart from '../pages/Cart';
import prebuitPC from '../pages/prebuiltPC';
import customizePC from '../pages/customizePC'
import prebuiltPC from '../pages/prebuiltPC';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
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
        path: '/prebuiltPC',
        component: prebuiltPC,
    },
    {
        path: '/contactUs',
        component: contactUs,
    },
    {
        path: '/customizePC',
        component: customizePC,
    },
    
];

export default routes;
