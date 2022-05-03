import React from 'react';
import AllCats from './Pages/AllCats';
import Initial from './Pages/Initial';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Initial /> } />
          <Route path='allcats' element={ <AllCats /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
