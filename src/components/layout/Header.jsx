// Encabezado con logo, botón del carrito y menú de navegación.
// Props: vista (página actual), setVista (cambia de página),
// irAProducto (va al catálogo) y totalCarrito (cantidad de productos).
export default function Header({ vista, setVista, irAProducto, totalCarrito }) {
  return (
    <>
      <header className="caja-comic header-comic">
        {/* Logo: vuelve a la página de inicio */}
        <button type="button" className="logo-link" onClick={() => setVista('inicio')}>
          <div className="logo-cm" aria-hidden="true"></div>
          <div className="logo-texto">ComicMania</div>
        </button>

        <div className="header-acciones">
          {/* Botón del carrito: lleva al catálogo y muestra el contador */}
          <button type="button" className="btn-carrito-header" onClick={() => irAProducto('todos')}>
            Carrito <span className="badge-contador">{totalCarrito}</span>
          </button>
        </div>
      </header>

      {/* Menú principal: la clase "activo" marca la página actual */}
      <nav className="caja-comic navbar-comic" aria-label="Menú principal">
        <ul className="nav-links">
          <li>
            <button
              type="button"
              className={`nav-link-comic ${vista === 'inicio' ? 'activo' : ''}`}
              onClick={() => setVista('inicio')}
            >
              <span>Inicio</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`nav-link-comic ${vista === 'producto' ? 'activo' : ''}`}
              onClick={() => irAProducto('todos')}
            >
              <span>Producto</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`nav-link-comic ${vista === 'contacto' ? 'activo' : ''}`}
              onClick={() => setVista('contacto')}
            >
              <span>Contacto</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}