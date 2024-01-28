import React, { useState ,useEffect} from 'react'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';


function App() {

  
  return (
    <>

    <div className="main-container">
      <Navbar/>
      <Routes>
        <Route path = "/" element ={<Home/>}></Route>
        <Route path = "/cart" element ={<Cart/>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
