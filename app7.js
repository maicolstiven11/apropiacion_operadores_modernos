// app7.js

import promptSync from "prompt-sync";
import { evaluar } from "./modules/evaluar.js";

const prompt = promptSync();

// Pedimos al usuario ingresar varios números separados por coma
const entrada = prompt("Ingrese varios números separados por coma: ");

// Convertimos la entrada en un arreglo
const valores = entrada.split(",").map(v => v.trim());

// Llamamos a la función evaluar
const promedio = evaluar(...valores);

// Mostramos resultados si es válido
if (promedio !== undefined) {
console.log("Promedio calculado:", promedio);
}
