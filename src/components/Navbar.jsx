import React from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar({ vistaActual, cambiarVista, setCategoriaFiltro }) {
  const { totalCount } = useCart();

  const handleIrAProductos = (cat = 'Todos') => {
    if (setCategoriaFiltro) {
      setCategoriaFiltro(cat);
    }
    cambiarVista('producto');
  };

  return (
    <div className="caja-comic" style={{ padding: '8px 12px', margin: '0 0 10px 0' }}>
      <nav className="navbar-comic" aria-label="Menú principal">
        <ul className="nav-links">
          <li>
            <button
              type="button"
              className={`nav-link-comic ${vistaActual === 'inicio' ? 'activo' : ''}`}
              onClick={() => cambiarVista('inicio')}
            >
              <span>Inicio</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`nav-link-comic ${vistaActual === 'producto' ? 'activo' : ''}`}
              onClick={() => handleIrAProductos('Todos')}
            >
              <span>Producto</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`nav-link-comic ${vistaActual === 'contacto' ? 'activo' : ''}`}
              onClick={() => cambiarVista('contacto')}
            >
              <span>Contacto</span>
            </button>
          </li>
        </ul>

        {/* Categorías */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#881337' }}>Categorías:</span>
          {['Acción', 'Comedia', 'Ciencia ficción'].map((cat) => (
            <button
              key={cat}
              type="button"
              className="btn-pill"
              style={{ fontSize: '0.8rem', padding: '3px 10px' }}
              onClick={() => handleIrAProductos(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
