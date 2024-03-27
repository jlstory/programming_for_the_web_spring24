import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home'; 
import { Llamas } from './views/Llamas';
import { Alpaca } from './views/Alpaca';
import './App.css'


function App() {
  return (
    <>
     {/* Navigation Here */}
     <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/llamas">Llamas</Link></li>
        <li><Link to="/alpaca">Alpacas</Link></li>
     </ul>
     {/* Routes Here */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/llamas" element={<Llamas />} />
        <Route path="/alpaca" element={<Alpaca />} />
     </Routes>
    </>
  )
}

export default App
