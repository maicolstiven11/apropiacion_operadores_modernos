// funciones/evaluar.js

export function evaluar(...valores) {
try {
    // Validamos que todos los valores sean números
    for (const v of valores) {
    if (isNaN(v)) {
        throw new Error(`Valor no numérico encontrado: ${v}`);
    }
    }

    // Creamos una nueva lista con spread para mantener inmutabilidad
    const lista = [...valores];

    // Calculamos el promedio
    const suma = lista.reduce((acc, num) => acc + Number(num), 0);
    const promedio = suma / lista.length;

    return promedio;
} catch (error) {
    // Capturamos el error y mostramos mensaje adecuado
    console.error("Error en la evaluación:", error.message);
}
}
