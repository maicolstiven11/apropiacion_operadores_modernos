// app5.js

import { actualizarPerfil } from "./modules/actualizarperfil.js";

// Perfil inicial
const perfil = { nombre: "Jensen", edad: 20, ciudad: "Girón" };

// Actualizaciones parciales
const perfilActualizado = actualizarPerfil(
perfil,
{ edad: 22 },
{ ciudad: "Medellín" },
{ hobby: "Programación" }
);

// Mostrar resultados
console.log("Perfil original:", perfil);
console.log("Perfil actualizado:", perfilActualizado);
