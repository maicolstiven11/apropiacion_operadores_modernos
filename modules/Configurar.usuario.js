// funciones/configurarUsuario.js

export function configurarUsuario(defaults, personalizadas) {
  // Usamos spread para combinar las configuraciones sin mutar los objetos originales
const configuracionFinal = { ...defaults, ...personalizadas };

  // Usamos destructuración para obtener el idioma configurado
const { idioma } = configuracionFinal;

  // Retornamos el idioma resultante
return idioma;
}
