import React from 'react';
import AllCats from './Pages/AllCats';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='allcats' element={ <AllCats /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
