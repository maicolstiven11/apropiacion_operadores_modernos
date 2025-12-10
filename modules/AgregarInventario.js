// funciones/agregarInventario.js

export function agregarInventario(lista, nuevoItem) {
  // Usamos spread para copiar la lista y añadir el nuevo ítem
const nuevaLista = [...lista, nuevoItem];

  // Mensaje indicando cuántos ítems tiene ahora
console.log(`El inventario ahora tiene ${nuevaLista.length} ítems.`);

  // Retornamos la nueva lista sin modificar la original
return nuevaLista;
}
