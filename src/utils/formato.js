// Da formato de peso chileno a un número (ej: 8990 -> $8.990)
export function formatearPrecio(precio) {
  return precio.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
}