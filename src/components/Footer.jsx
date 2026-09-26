import React from 'react';

export default function Footer() {
  return (
    <footer className="caja-comic pie-comic">
      <div className="pie-columna">
        <h4>Nosotros</h4>
        <p>Tienda de cómics y manga en Santiago.</p>
      </div>

      <div className="pie-columna">
        <h4>Contacto</h4>
        <p>contacto@comicmania.cl</p>
        <p>+56 9 1234 5678</p>
      </div>

      <div className="pie-columna">
        <h4>Síguenos</h4>
        <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        <p><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></p>
      </div>
    </footer>
  );
}
