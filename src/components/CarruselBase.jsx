import React, { useState } from 'react';
import './Catalogo.css';

const CarruselBase = ({ titulo, imagenes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const getClassName = (index) => {
    if (index === currentIndex) return "carru-item img_center";
    const leftIndex = currentIndex === 0 ? imagenes.length - 1 : currentIndex - 1;
    if (index === leftIndex) return "carru-item img_left";
    const rightIndex = currentIndex === imagenes.length - 1 ? 0 : currentIndex + 1;
    if (index === rightIndex) return "carru-item img_rigth";
    return "carru-item img_hidden"; // Clase para ocultar el resto
  };

  return (
    <div className="seccion-carrusel">
      <h3 className="titulo-categoria">{titulo}</h3>
      
      <div className="container_carru">
        {/* BOTONES EN LOS EXTREMOS */}
        <button className="btn-arrow left" onClick={prevSlide}>
          <span className="arrow-icon"></span>
        </button>

        <div id="items">
          {imagenes.map((url, index) => (
            <div key={index} className={getClassName(index)}>
                <img src={url} alt="producto" draggable="false" />
                {/* Capa de brillo para la imagen central */}
                {index === currentIndex && <div className="reflection-overlay"></div>}
            </div>
          ))}
        </div>

        <button className="btn-arrow right" onClick={nextSlide}>
          <span className="arrow-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default CarruselBase;