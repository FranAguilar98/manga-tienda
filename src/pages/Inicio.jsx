import Carrusel from '../components/Carrusel';
import ListaComics from '../components/ListaComics';

export default function Inicio({ comics, cargando, alAgregar, irAProducto }) {
  return (
    <>
      <div className="caja-comic">
        <Carrusel />
      </div>

      <section className="caja-comic">
        <h2 className="titulo-cont"><span>Destacados</span></h2>
        <ListaComics comics={comics} cargando={cargando} maximo={3} alAgregar={alAgregar} />
        <button type="button" className="btn-comic btn-secundario mt-2" onClick={() => irAProducto('todos')}>
          Ver todos los cómics
        </button>
      </section>
    </>
  );
}