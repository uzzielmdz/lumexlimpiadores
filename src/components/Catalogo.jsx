import React from 'react';
import CarruselBase from './CarruselBase';

// Importaciones confirmadas (Asegúrate de que existan en src/assets)
import imgInst1 from '../assets/institucional1.png';
import imgInst2 from '../assets/institucional2.png';
import imgInst3 from '../assets/institucional3.png';
import imgInst4 from '../assets/institucional4.png';
import imgInst5 from '../assets/institucional5.png';
import imgInst6 from '../assets/institucional6.png';
import imgInst7 from '../assets/institucional7.png';
import imgInst8 from '../assets/institucional8.png';
import imgInst9 from '../assets/institucional9.png';
import imgInst10 from '../assets/institucional10.png';
import imgInst11 from '../assets/institucional11.png';
import imgInst12 from '../assets/institucional12.png';
import imgCocina1 from '../assets/cocina1.png'; // Ejemplo para la sección de cocina
import imgCocina2 from '../assets/cocina2.png';
import imgCocina3 from '../assets/cocina3.png';
import imgCocina4 from '../assets/cocina4.png';
import imgCocina5 from '../assets/cocina5.png';


const Catalogo = () => {
  // Array de prueba con las imágenes importadas
  const productosInstitucionales = [
    imgInst1,
    imgInst2,
    imgInst3,
    imgInst4,
    imgInst5,
    imgInst6,
    imgInst7,
    imgInst8,
    imgInst9,
    imgInst10,
    imgInst11,
    imgInst12
  ];

  // Array de prueba para la segunda sección (puedes reemplazar los strings luego)
  const productosCocina = [
    imgCocina1,
    imgCocina2,
    imgCocina3,
    imgCocina4,
    imgCocina5
  ];

  return (
    <div className="catalogo-total">
      {/* Título principal con clases de Bootstrap (suponiendo que las usas por el text-white) */}
      <h1 className="text-center my-5 text-white font-weight-bold">
        Nuestro Catálogo
      </h1>

      {/* SECCIÓN 1: CARRUSEL INSTITUCIONAL */}
      <section className="mb-5">
        <CarruselBase 
          titulo="Productos Institucionales" 
          imagenes={productosInstitucionales} 
        />
      </section>

      <hr className="divisor-seccion" style={{ borderTop: '1px solid rgba(255,255,255,0.2)', margin: '40px 0' }} />

      {/* SECCIÓN 2: LÍNEA DE COCINA */}
      <section className="mb-5">
        <CarruselBase 
          titulo="Línea de Cocina" 
          imagenes={productosCocina} 
        />
      </section>
    </div>
  );
};

export default Catalogo;