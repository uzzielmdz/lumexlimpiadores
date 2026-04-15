import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// 1. IMPORTA LA IMAGEN DEL LOGOTIPO AQUÍ
import logoLumex from '../assets/lumex-logo1.png'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white sticky-top shadow-sm py-2">
      <div className="container">
        {/* 2. REEMPLAZAMOS EL TEXTO POR LA IMAGEN DEL LOGO
           Mantenemos el Link para que redirija a la página de inicio.
           Usamos una clase CSS para controlar el tamaño del logo.
        */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img 
            src={logoLumex} 
            alt="LUMEX - Soluciones de Limpieza" 
            className="logo-navbar"
          />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold small" to="/">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold small" to="/catalogo">CATÁLOGO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold small" to="/contacto">CONTACTANOS</Link>
            </li>
           {/*  <li className="nav-item ms-md-3">
              <Link className="nav-link text-primary" to="/carrito">
                <i className="bi bi-cart3 fs-4"></i>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;