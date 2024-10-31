import Home from './pages/Home/Home';
import Uploads from './pages/Uploads/Uploads';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<Home />} />
      <Route path ="/uploads" element = {<Uploads />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App;
