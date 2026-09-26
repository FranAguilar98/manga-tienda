import { useState, useEffect } from 'react';
import ListaComics from '../components/ListaComics';
import Carrito from '../components/Carrito';

const CATEGORIAS = ['todos', 'Acción', 'Comedia', 'Ciencia ficción'];

export default function Producto({ comics, cargando, categoriaInicial, alAgregar, carrito, alQuitar, alVaciar }) {
  const [categoria, setCategoria] = useState(categoriaInicial);
  const [busquedaInput, setBusquedaInput] = useState('');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    setCategoria(categoriaInicial);
  }, [categoriaInicial]);

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

        <ListaComics comics={comics} cargando={cargando} categoria={categoria} busqueda={busqueda} alAgregar={alAgregar} />
      </section>

      <Carrito carrito={carrito} alQuitar={alQuitar} alVaciar={alVaciar} />
    </div>
  );
}