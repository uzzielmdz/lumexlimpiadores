import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


// Imágenes de Assets
import heroBanner from "../assets/hero-banner.jpg"; 
import prodCloro from "../assets/cloro20lt.png";
import prodcloro4 from "../assets/cloro4lt.png";
import prodMulti20 from "../assets/multiusos20.png";
import prodMulti4 from "../assets/multiusos4.png";
import prodMuria20 from "../assets/muriatico20.png";
import prodSarri from "../assets/sarricida20.png";
import prodMuria4 from "../assets/muriatico4.png";
import prodSarri4 from "../assets/sarricida4.png";
import prodLimpiavidrios from "../assets/limpiavidrios20.png";
import prodLimpiavidrios4 from "../assets/limpiavidrios4.png";
import prodlimpiamanos from "../assets/jabonmanos20.png";
import prodlimpiamanos4 from "../assets/jabonmanos4.png";
import proddESENGRASANTE2 from "../assets/desengrasante20.png";
import proddESENGRASANTE4 from "../assets/desengrasante4.png";
import prodLvatrastes20 from "../assets/lavatrastes20.png";
import prodLvatrastes4 from "../assets/lavatrastes4.png";
import prodDesenCocina from "../assets/desengrasantecocina.png";


const Home = () => {
  return (
    <div className="lumex-site-container" id="home">
      
      {/* --- BANNER HERO --- */}
      <section className="hero-banner-static" style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className="container h-100 d-flex align-items-center">
          <div className="hero-content">
            <h1 className="hero-title">.</h1>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN QUIÉNES SOMOS --- */}
<section id="quienes-somos" className="quienes-somos-section py-5">
  <div className="container">
    <div className="row justify-content-center"> 
      <div className="col-md-10 col-lg-8 text-center">
        <h2 className="fw-bold quienes-somos-title">¿Quiénes Somos?</h2>
        
        {/* Primer Párrafo */}
        <p className="quienes-somos-text mb-4">
          Somos un proveedor de productos de limpieza con <strong>7 años de experiencia</strong> en el mercado,
          enfocado en ofrecer soluciones confiables y de calidad para empresas y negocios.
        </p>

        {/* Segundo Párrafo separado */}
        <p className="quienes-somos-text">
          Más que un proveedor, somos un aliado estratégico que brinda
          respaldo, eficiencia y productos que garantizan espacios 
          limpios, seguros y en óptimas condiciones.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* --- CATEGORÍAS (REDIRECCIÓN) --- */}
      <section className="container mt-5" id="catalogo-links">
        <h5 className="fw-bold mb-4 text-center">Categorías de Productos</h5>
        <div className="row g-3 mb-5 justify-content-center">
          {['Institucional', 'Cocina'].map((cat) => (
            <div className="col-6 col-md-3" key={cat}>
              <Link to="/catalogo" className="text-decoration-none">
                <div className="category-pill shadow-sm">
                  <span className="fw-bold text-dark">{cat}</span>
                  <div className="cat-icon-box">
                    <i className={`bi ${cat.trim() === 'Cocina' ? 'bi-house-door' : 'bi-building'}`}></i>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN PRODUCTOS: VISTA RÁPIDA --- */}
      <section className="container mb-5">
        {/* SUB-SECCIÓN: INSTITUCIONAL */}
        <h5 className="fw-bold mb-4">Institucional</h5>
        <div className="row row-cols-1 row-cols-md-5 g-3 mb-5">
          <ProductCard img={prodCloro} name="CLORO 20 LITROS" desc="Desinfecta y elimina gérmenes." cap="20L" />
          <ProductCard img={prodcloro4} name="CLORO 4 LITROS" desc="Limpieza efectiva en superficies." cap="4L" />
          <ProductCard img={prodMulti20} name="MULTIUSOS 20 LITROS" desc="Limpieza eficaz en múltiples superficies." cap="20L" />
          <ProductCard img={prodMulti4} name="MULTIUSOS 4 LITROS" desc="Fórmula concentrada de alto rendimiento." cap="4L" />
          <ProductCard img={prodMuria20} name="ACIDO MURIATICO 20 LITROS" desc="Potente limpiador y desincrustante." cap="20L" />
          <ProductCard img={prodMuria4} name="ACIDO MURIATICO 4 LITROS" desc="Potente limpiador y desincrustante." cap="4L" />
          <ProductCard img={prodSarri} name="SARRICIDA 20 LITROS" desc="Eliminador eficaz de sarro y residuos minerales." cap="20L" />          
          <ProductCard img={prodSarri4} name="SARRICIDA 4 LITROS" desc="Eliminador eficaz de sarro y residuos minerales." cap="4L" />
          <ProductCard img={prodLimpiavidrios} name="LIMPIAVIDRIOS 20 LITROS" desc="Fórmula que limpia y desengrasa sin esfuerzo." cap="20L" />
          <ProductCard img={prodLimpiavidrios4} name="LIMPIAVIDRIOS 4 LITROS" desc="Fórmula que limpia y desengrasa sin esfuerzo." cap="4L" />
          <ProductCard img={prodlimpiamanos} name="JABON PARA MANOS 20 LITROS" desc="Elimina bacterias y gérmenes eficazmente." cap="20L" />
          <ProductCard img={prodlimpiamanos4} name="JABON PARA MANOS 4 LITROS" desc="Elimina bacterias y gérmenes eficazmente." cap="4L" />
          
          </div>
        
        {/* SUB-SECCIÓN: COCINA */}
        <h5 className="fw-bold mt-5 mb-4">Cocina</h5>
        <div className="row row-cols-1 row-cols-md-5 g-3 mb-5">
          <ProductCard img={proddESENGRASANTE2} name="DESENGRASANTE INDUSTRIAL 20 LITROS" desc="Potente fórmula para eliminar grasa pesada." cap="20L" />
          <ProductCard img={proddESENGRASANTE4} name="DESENGRASANTE INDUSTRIAL 4 LITROS" desc="Máximo poder contra grasa." cap="4L" />
          <ProductCard img={prodLvatrastes20} name="LAVATRASTES 20L" desc="Limpieza profunda de utensilios y vajilla." cap="20L" />
          <ProductCard img={prodLvatrastes4} name="LAVATRASTES 4L" desc="Limpieza profunda de utensilios y vajilla." cap="4L" />
          <ProductCard img={prodDesenCocina} name="DESENGRASANTE 4 LITROS" desc="Su acción rápida facilita la limpieza diaria y profunda en áreas donde se manipulan alimentos" cap="20L" />
        </div>
      </section>
    </div>
  );
};

// Componente Card para Reutilizar
const ProductCard = ({ img, name, desc, cap }) => (
  <div className="col">
    <div className="card product-card-clean custom-border-blue shadow-sm rounded-4 h-100 p-3">
      <img src={img} className="card-img-top mx-auto mb-3 product-img-fixed" alt={name} />
      
      {/* El card-body ahora es un contenedor flex que empuja el botón */}
      <div className="card-body p-0 text-center d-flex flex-column">
        <h6 className="fw-bold mb-1" style={{ fontSize: '0.8rem' }}>{name}</h6>
        <p className="text-muted mb-2 flex-grow-1" style={{ fontSize: '0.7rem' }}>{desc}</p>
        
        <p className="fw-bold mb-3 fs-6">
          Presentación: <span className="text-secondary">{cap}</span>
        </p>
        
        <Link to="/catalogo" className="btn btn-azul-marino w-100 btn-sm rounded-3 py-2 mt-auto">
          Ver en Catálogo
        </Link>
      </div>
    </div>
  </div>
);

export default Home;