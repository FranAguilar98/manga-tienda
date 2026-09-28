function formatearPrecio(precio) {
  return precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
}

export default function TarjetaManga({ producto, alAgregar }) {
  const descuento = Math.round(
    ((producto.precio - producto.precioOferta) / producto.precio) * 100
  );

  return (
    <article className="card-comic" aria-label={`Producto: ${producto.titulo}`}>
      <div className="card-imagen-wrapper">
        <img className="card-img-top" src={`${import.meta.env.BASE_URL}img/${producto.img}`} alt={`Portada de ${producto.titulo}`} />
        {descuento > 0 && <span className="badge-descuento">-{descuento}%</span>}
      </div>

      <div className="card-cuerpo">
        <div className="card-categoria-autor">
          <span className="etiqueta-categoria">{producto.categoria}</span>
          <span className="card-autor">{producto.autor}</span>
        </div>

        <h3 className="card-title font-comic">{producto.titulo}</h3>
        <p className="card-descripcion">{producto.descripcion}</p>

        <div className="precios-contenedor">
          <span className="precio-normal">{formatearPrecio(producto.precio)}</span>
          <span className="precio-oferta font-comic">{formatearPrecio(producto.precioOferta)}</span>
        </div>

        <button type="button" className="btn-comic btn-primary w-100" onClick={() => alAgregar(producto)}>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}