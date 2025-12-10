// funciones/analizarVentas.js

export function analizarVentas(ventas) {
  // Destructuración profunda: obtenemos precio y unidades del primer producto
const [{ detalles: { precio, unidades } }] = ventas;

  // Calculamos el total vendido
  const total = precio * unidades;

  // Retornamos el total
return total;
}
