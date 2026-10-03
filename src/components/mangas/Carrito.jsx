// Da formato de peso chileno a un número (ej: 8990 -> $8.990)
function formatearPrecio(precio) {
  return precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
}

// Panel del carrito. Props: carrito (lista de items), alQuitar (quita uno por id)
// y alVaciar (borra todo el carrito).
export default function Carrito({ carrito, alQuitar, alVaciar }) {
  // Suma el precio de todos los items (ya guardan el precio de oferta)
  const totalPrecio = carrito.reduce((suma, item) => suma + item.precio, 0);

  return (
    <aside className="caja-comic seccion-carrito">
      <h2 className="titulo-cont titulo-chico">
        <span>Carrito</span> <span className="insignia">{carrito.length}</span>
      </h2>

      {/* Renderizado condicional: mensaje si el carrito está vacío */}
      {carrito.length === 0 ? (
        <p>Aún no has agregado cómics.</p>
      ) : (
        <>
          <ul className="lista-carrito-simple">
            {carrito.map((item) => (
              <li key={item.id} className="item-carrito-simple">
                <div className="item-carrito-texto">
                  <div className="item-carrito-titulo">{item.titulo}</div>
                  <div className="item-carrito-precio">{formatearPrecio(item.precio)}</div>
                </div>
                <button type="button" className="btn-comic btn-secundario btn-sm" onClick={() => alQuitar(item.id)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <div className="total-contenedor-simple">
            Total: <span id="total-precio" className="font-comic">{formatearPrecio(totalPrecio)}</span>
          </div>

          <button type="button" className="btn-comic btn-secundario w-100 mt-2" onClick={alVaciar}>
            Vaciar carrito
          </button>
        </>
      )}
    </aside>
  );
}