import React from 'react';
import Navbar from './components/Navbar';
import Home from './page/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>

      <Navbar/>
      <Routes>

        <Route
         path="/"
         element={<Home />}
          />

      </Routes>
       
    
    </div>
  )
}

export default App