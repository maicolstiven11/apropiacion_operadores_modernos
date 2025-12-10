// app4.js

import { configurarUsuario } from "./modules/Configurar.usuario.js";

// Configuración por defecto
const defaults = { tema: "claro", idioma: "es" };

// Configuración personalizada (el usuario cambia idioma y tema)
const personalizadas = { tema: "oscuro", idioma: "en" };

// Llamamos a la función
const idiomaFinal = configurarUsuario(defaults, personalizadas);

// Mostramos resultados
console.log("Idioma configurado:", idiomaFinal);
