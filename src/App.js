import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home'
import Generator from './pages/Generator'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/generator' element={<Generator/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
