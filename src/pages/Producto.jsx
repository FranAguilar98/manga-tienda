import { useState, useEffect } from 'react';
import ListaComics from '../components/mangas/ListaComics';
import Carrito from '../components/mangas/Carrito';

// Categorías disponibles para filtrar el catálogo
const CATEGORIAS = ['todos', 'Acción', 'Comedia', 'Ciencia ficción'];

export default function Producto({ comics, cargando, categoriaInicial, alAgregar, carrito, alQuitar, alVaciar }) {
  // Estados: categoría activa, texto del input y búsqueda aplicada
  const [categoria, setCategoria] = useState(categoriaInicial);
  const [busquedaInput, setBusquedaInput] = useState('');
  const [busqueda, setBusqueda] = useState('');

  // useEffect: sincroniza la categoría cuando llega una nueva desde fuera
  useEffect(() => {
    setCategoria(categoriaInicial);
  }, [categoriaInicial]);

  // Aplica la búsqueda solo al enviar el formulario
  function manejarBusqueda(evento) {
    evento.preventDefault();
    setBusqueda(busquedaInput.trim());
  }

  return (
    <div className="layout-productos-carrito">
      <section className="caja-comic">
        <h2 className="titulo-cont">
          <span>{categoria === 'todos' ? 'Todos los cómics' : categoria}</span>
        </h2>

        <div className="filtros-barra">
          <form onSubmit={manejarBusqueda} className="buscador-input-group">
            <input
              type="search"
              className="input-comic"
              placeholder="Buscar por título..."
              value={busquedaInput}
              onChange={(e) => setBusquedaInput(e.target.value)}
            />
            <button type="submit" className="btn-comic btn-primary">Buscar</button>
          </form>

          <div className="categorias-pills">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn-pill ${categoria === cat ? 'activa' : ''}`}
                onClick={() => setCategoria(cat)}
              >
                {cat === 'todos' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Se pasan carrito y alQuitar para que cada tarjeta alterne su botón */}
        <ListaComics
          comics={comics}
          cargando={cargando}
          categoria={categoria}
          busqueda={busqueda}
          carrito={carrito}
          alAgregar={alAgregar}
          alQuitar={alQuitar}
        />
      </section>

      {/* Panel del carrito: lista, total y botón para vaciar */}
      <Carrito carrito={carrito} alQuitar={alQuitar} alVaciar={alVaciar} />
    </div>
  );
}