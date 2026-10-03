// Pie de página con tres columnas: información de la tienda, contacto y redes sociales.
// Es un componente estático: no recibe props ni maneja estado.
export default function Footer() {
  return (
    <footer className="caja-comic pie-comic">
      {/* Columna: descripción de la tienda */}
      <div className="pie-columna">
        <h4>Nosotros</h4>
        <p>Tienda de cómics y manga en Santiago.</p>
      </div>

      {/* Columna: datos de contacto */}
      <div className="pie-columna">
        <h4>Contacto</h4>
        <p>contacto@comicmania.cl</p>
        <p>+56 9 1234 5678</p>
      </div>

      {/* Columna: enlaces a redes sociales (se abren en una pestaña nueva) */}
      <div className="pie-columna">
        <h4>Síguenos</h4>
        <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        <p><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></p>
      </div>
    </footer>
  );
}