import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalogo from './components/Catalogo';

import Contacto from './components/Contacto';
import Footer from './components/Footer';

 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* <Route path="/carrito" element={<Pedidos />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
