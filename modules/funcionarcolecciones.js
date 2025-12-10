// funciones/fusionarColecciones.js

export function fusionarColecciones(lista1, lista2) {
try {
    // Validamos que ambas sean arreglos
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
    throw new Error("Ambas colecciones deben ser arreglos.");
    }

    // Usamos spread para fusionar sin mutar las originales
    const coleccionFinal = [...lista1, ...lista2];

    // Retornamos la colección final
    return coleccionFinal;
} catch (error) {
    console.error("Error al fusionar colecciones:", error.message);
}
}
