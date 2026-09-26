import TarjetaManga from './TarjetaManga';
import Cargando from './Cargando';

export default function ListaComics({ comics, cargando, maximo, categoria = 'todos', busqueda = '', alAgregar }) {
  if (cargando) return <Cargando />;

  let lista = comics;

  if (maximo) {
    lista = lista.slice(0, maximo);
  } else {
    lista = lista.filter((comic) => {
      const coincideCategoria = categoria === 'todos' || comic.categoria === categoria;
      const coincideBusqueda = comic.titulo.toLowerCase().includes(busqueda.toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
  }

  if (lista.length === 0) {
    return <p>No encontramos cómics con esos criterios. Prueba con otra búsqueda o categoría.</p>;
  }

  return (
    <div className="cont-tarjetas">
      {lista.map((producto) => (
        <TarjetaManga key={producto.id} producto={producto} alAgregar={alAgregar} />
      ))}
    </div>
  );
}