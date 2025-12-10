// app6.js

import promptSync from "prompt-sync";
import { analizarVentas } from "./modules/analizarventa.js";

const prompt = promptSync();

// Pedimos datos al usuario
const producto = prompt("Ingrese el nombre del producto: ");
const precio = Number(prompt("Ingrese el precio del producto: "));
const unidades = Number(prompt("Ingrese la cantidad de unidades vendidas: "));

// Creamos el arreglo de ventas con los datos ingresados
const ventas = [
{ producto, detalles: { precio, unidades } }
];

// Llamamos a la función
const totalPrimerProducto = analizarVentas(ventas);

// Mostramos resultados
console.log(`Total vendido del primer producto: ${totalPrimerProducto}`);
