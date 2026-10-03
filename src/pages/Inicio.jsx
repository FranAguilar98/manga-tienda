import Carrusel from '../components/layout/Carrusel';
import ListaComics from '../components/mangas/ListaComics';

export default function Inicio({ comics, cargando, carrito, alAgregar, alQuitar, irAProducto }) {
  return (
    <>
      <div className="caja-comic">
        <Carrusel />
      </div>

      <section className="caja-comic">
        <h2 className="titulo-cont"><span>Destacados</span></h2>
        {/* Se pasan carrito y alQuitar para que cada tarjeta pueda alternar su botón */}
        <ListaComics
          comics={comics}
          cargando={cargando}
          maximo={3}
          carrito={carrito}
          alAgregar={alAgregar}
          alQuitar={alQuitar}
        />
        <button type="button" className="btn-comic btn-secundario mt-2" onClick={() => irAProducto('todos')}>
          Ver todos los cómics
        </button>
      </section>
    </>
  );
}