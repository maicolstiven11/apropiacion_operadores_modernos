// app5.js

import { actualizarPerfil } from "./modules/actualizarperfil.js";

// Perfil inicial
const perfil = { nombre: "Michael", edad: 18, ciudad: "Girón" };

// Actualizaciones parciales
const perfilActualizado = actualizarPerfil(
perfil,
{ edad: 22 },
{ ciudad: "cartagena" },
{ hobby: "micro" }
);

// Mostrar resultados
console.log("Perfil original:", perfil);
console.log("Perfil actualizado:", perfilActualizado);
