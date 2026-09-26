import { useState } from 'react';

const CAMPOS_INICIALES = { nombre: '', correo: '', motivo: '', detalle: '' };

function correoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

export default function Contacto() {
  const [campos, setCampos] = useState(CAMPOS_INICIALES);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(evento) {
    const { id, value } = evento.target;
    setCampos((anteriores) => ({ ...anteriores, [id]: value }));
  }

  function manejarEnvio(evento) {
    evento.preventDefault();
    const nuevosErrores = {};

    if (campos.nombre.trim() === '') nuevosErrores.nombre = 'Debe ingresar un nombre';
    if (!correoValido(campos.correo.trim())) nuevosErrores.correo = 'Debe ingresar un correo válido';
    if (campos.motivo === '') nuevosErrores.motivo = 'Debe seleccionar un motivo';
    if (campos.detalle.trim() === '') nuevosErrores.detalle = 'Debe ingresar el detalle de su mensaje';

    setErrores(nuevosErrores);
    setEnviado(false);

    if (Object.keys(nuevosErrores).length > 0) return;

    setEnviado(true);
    setCampos(CAMPOS_INICIALES);
  }

  return (
    <div className="contacto-grid">
      <section className="caja-comic">
        <h2 className="titulo-cont"><span>Contacto</span></h2>

        {enviado && <div className="alerta-exito">¡Hemos enviado su requerimiento!</div>}

        <form onSubmit={manejarEnvio} noValidate>
          <div className="form-grupo">
            <label className="form-label" htmlFor="nombre">Nombre</label>
            <input id="nombre" type="text" className="input-comic" value={campos.nombre} onChange={manejarCambio} autoComplete="name" />
            {errores.nombre && <div className="error-campo">{errores.nombre}</div>}
          </div>

          <div className="form-grupo">
            <label className="form-label" htmlFor="correo">Correo</label>
            <input id="correo" type="email" className="input-comic" value={campos.correo} onChange={manejarCambio} autoComplete="email" />
            {errores.correo && <div className="error-campo">{errores.correo}</div>}
          </div>

          <div className="form-grupo">
            <label className="form-label" htmlFor="motivo">Motivo</label>
            <select id="motivo" className="select-comic" value={campos.motivo} onChange={manejarCambio}>
              <option value="">Selecciona un motivo</option>
              <option value="consulta">Consulta</option>
              <option value="reclamo">Reclamo</option>
              <option value="sugerencia">Sugerencia</option>
              <option value="otro">Otro</option>
            </select>
            {errores.motivo && <div className="error-campo">{errores.motivo}</div>}
          </div>

          <div className="form-grupo">
            <label className="form-label" htmlFor="detalle">Detalle</label>
            <textarea id="detalle" className="textarea-comic" rows="6" value={campos.detalle} onChange={manejarCambio} />
            {errores.detalle && <div className="error-campo">{errores.detalle}</div>}
          </div>

          <button type="submit" className="btn-comic btn-primary">Enviar</button>
        </form>
      </section>

      <aside className="caja-comic">
        <h3 className="titulo-cont titulo-chico"><span>Nuestra tienda</span></h3>
        <p>Av. Providencia 456, Santiago</p>
        <p>Lunes a sábado, de 10:00 a 19:00</p>
        <p>contacto@comicmania.cl<br />+56 9 1234 5678</p>
      </aside>
    </div>
  );
}