import TarjetaManga from './TarjetaManga';
import Cargando from '../../Cargando';

export default function ListaComics({
  comics,
  cargando,
  maximo,
  categoria = 'todos',
  busqueda = '',
  carrito,
  alAgregar,
  alQuitar,
}) {
  // Renderizado condicional: mientras carga, muestra el indicador
  if (cargando) return <Cargando />;

  let lista = comics;

  if (maximo) {
    // En Inicio: solo los primeros N cómics destacados
    lista = lista.slice(0, maximo);
  } else {
    // En Producto: filtra por categoría y por texto de búsqueda
    lista = lista.filter((comic) => {
      const coincideCategoria = categoria === 'todos' || comic.categoria === categoria;
      const coincideBusqueda = comic.titulo.toLowerCase().includes(busqueda.toLowerCase());
      return coincideCategoria && coincideBusqueda;
    });
  }

  // Renderizado condicional: mensaje si no hay resultados
  if (lista.length === 0) {
    return <p>No encontramos cómics con esos criterios. Prueba con otra búsqueda o categoría.</p>;
  }

  return (
    <div className="cont-tarjetas">
      {lista.map((producto) => (
        // Cada tarjeta recibe el carrito para alternar su botón agregar / quitar
        <TarjetaManga
          key={producto.id}
          producto={producto}
          carrito={carrito}
          alAgregar={alAgregar}
          alQuitar={alQuitar}
        />
      ))}
    </div>
  );
}