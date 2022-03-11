import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/App.css'

import Home from './pages/Home'
import Generator from './pages/Generator'
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route path='/generator' element={ <Generator />} />
          <Route path='/generator/*' element={ <Generator />} />
          <Route path='*' element={ <NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

