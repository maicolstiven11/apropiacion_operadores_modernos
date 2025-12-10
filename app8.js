// app8.js

import promptSync from "prompt-sync";
import { fusionarColecciones } from "./modules/funcionarcolecciones.js";

const prompt = promptSync();

// Pedimos al usuario ingresar dos listas separadas por coma
const entrada1 = prompt("Ingrese la primera lista de elementos separados por coma: ");
const entrada2 = prompt("Ingrese la segunda lista de elementos separados por coma: ");

// Convertimos las entradas en arreglos
const lista1 = entrada1.split(",").map(e => e.trim());
const lista2 = entrada2.split(",").map(e => e.trim());

// Llamamos a la función
const coleccionFinal = fusionarColecciones(lista1, lista2);

// Mostramos resultados si es válido
if (coleccionFinal) {
console.log("Colección final:", coleccionFinal);
}
