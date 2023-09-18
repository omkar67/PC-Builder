import { React, useState } from 'react'
import routes from './routes/routes';
import Navbar from './components/Navbar';

import './App.css'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//const liksArray = ["Home", "Prebuild Pc", "Build Pc", "About","contactUs"]
function App() {
  
  return (
    <>


    {  <Router>
            <Routes>
              {routes.map((route, index)=>(
                <Route key={index} path= { route.path } element={<route.component />} />
              ))}
            </Routes>
        </Router>}
    </>
  )
}

export default App
