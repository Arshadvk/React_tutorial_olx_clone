import React from 'react';
import {  BrowserRouter , Route, Routes } from 'react-router-dom';

import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes  >


        <Route exact path='/' element={<Home />}/>
        <Route exact path='/signup' element={<Signup />}/>
        
        
        
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
