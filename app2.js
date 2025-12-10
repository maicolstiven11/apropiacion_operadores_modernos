// app2.js

import { agregarInventario } from "./modules/AgregarInventario.js";

// Inventario inicial
const inventario = ["cámara", "trípode", "micrófono"];

// Ejemplo: el usuario ingresa un nuevo ítem
import promptSync from "prompt-sync";
const prompt = promptSync();

const nuevoItem = prompt("Ingrese el nuevo ítem para el inventario: ");

// Usamos la función con el ítem ingresado
const inventarioActualizado = agregarInventario(inventario, nuevoItem);

// Mostrar resultados
console.log("Inventario original:", inventario);
console.log("Inventario actualizado:", inventarioActualizado);
