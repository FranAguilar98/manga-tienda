import { useState } from 'react';

const slides = [
  { src: '/img/comicmania_welcome.jpg', alt: 'Bienvenido a ComicMania' },
  { src: '/img/comicmania_descuento.jpg', alt: 'Descuentos en ComicMania' },
  { src: '/img/comicmania_social_media.jpg', alt: 'ComicMania en redes sociales' },
];

export default function Carrusel() {
  const [indice, setIndice] = useState(0);

  function anterior() {
    setIndice((actual) => (actual === 0 ? slides.length - 1 : actual - 1));
  }

  function siguiente() {
    setIndice((actual) => (actual === slides.length - 1 ? 0 : actual + 1));
  }

  return (
    <div className="carrusel-contenedor">
      <img className="carrusel-slide" src={slides[indice].src} alt={slides[indice].alt} />

      <button type="button" className="carrusel-btn prev" onClick={anterior} aria-label="Anterior">‹</button>
      <button type="button" className="carrusel-btn next" onClick={siguiente} aria-label="Siguiente">›</button>

      <div className="carrusel-indicadores">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`indicador-punto ${i === indice ? 'activo' : ''}`}
            onClick={() => setIndice(i)}
            aria-label={`Diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}