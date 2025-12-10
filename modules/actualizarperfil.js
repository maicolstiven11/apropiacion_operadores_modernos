// funciones/actualizarPerfil.js

export function actualizarPerfil(perfil, ...nuevosDatos) {
  // Usamos spread para combinar el perfil original con los objetos parciales
  // 'nuevosDatos' es un array, por eso usamos reduce para ir aplicando cada objeto
const perfilActualizado = nuevosDatos.reduce(
    (acc, dato) => ({ ...acc, ...dato }),
    { ...perfil } // copiamos el perfil original para mantener inmutabilidad
);

  // Retornamos el nuevo perfil completo
return perfilActualizado;
}
