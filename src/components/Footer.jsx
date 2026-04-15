import React from 'react';
import './Footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="footer-clean bg-light mt-5">
      <div className="container">
        {/* --- FILA DE REDES SOCIALES --- */}
        <div className="row py-4 justify-content-center text-center">
          <div className="col-12 mb-3">
            <h6 className="text-muted fw-bold small">SÍGUENOS EN NUESTRAS REDES</h6>
          </div>
          <div className="col-auto">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon fb">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
          <div className="col-auto">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon ig">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* --- FILA DE INFORMACIÓN (LA QUE TENÍAS EN HOME) --- */}
        <div className="row py-4 border-top text-muted small align-items-center text-center text-md-start">
          <div className="col-md-4 mb-3 mb-md-0">
            Lumex © 2026
          </div>
          <div className="col-md-4 text-center mb-3 mb-md-0">
            Created by<br/>
            <strong className="text-dark">Developer David Uzziel Mendez Daza</strong>
          </div>
          <div className="col-md-4 text-md-end text-center">
            Contacto: <br/>
            <strong className="text-dark">dumendez.bid@gmail.com</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;