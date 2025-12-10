// Exporta la función para usarla en otros archivos
export function procesarPedido(pedido, ...extras) {
  // Extrae cliente, producto y cantidad del objeto pedido
const { cliente, producto, cantidad } = pedido;

  // Devuelve un objeto con los datos del pedido y los extras
return {
    cliente,
    producto,
    cantidad,
    extras
};
}
