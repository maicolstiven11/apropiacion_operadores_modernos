// funciones/registrarActividad.js

export function registrarActividad(actividad) {
try {
    // Validamos que el objeto tenga nombre y fecha
    if (!actividad.nombre || !actividad.fecha) {
    throw new Error("La actividad no es válida: falta nombre o fecha.");
    }

    // Si todo está correcto, mostramos confirmación
    console.log(`Actividad registrada: ${actividad.nombre} en la fecha ${actividad.fecha}`);
} catch (error) {
    // Capturamos y mostramos el error
    console.error("Error al registrar actividad:", error.message);
}
}
