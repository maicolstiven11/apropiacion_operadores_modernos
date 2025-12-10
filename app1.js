// app1.js

import { procesarPedido } from "./modules/procesarPedido.js";
// Importa la función procesarPedido desde el archivo de módulos

const pedido = {
cliente: "Jensen",
producto: "Laptop",
cantidad: 2
};
// Define el objeto pedido con cliente, producto y cantidad

const resultado = procesarPedido(
pedido,
"Envío rápido",
"Garantía extendida",
"Descuento 10%"
);
// Llama a la función pasando el pedido y extras, devuelve un objeto consolidado

console.log("Pedido procesado:", resultado);
// Muestra en consola el resultado final
