// Nombre completo: Dilan Estiven Henao Montoya
// Ejercicio 13: Simular el lanzamiento de una moneda (cara o sello).

function lanzarMoneda() {
    let resultado = Math.floor(Math.random() * 2);
    return resultado === 0 ? "Cara" : "Sello";
}

let resultadoMoneda = lanzarMoneda();

console.log("Resultado del lanzamiento de la moneda: ", resultadoMoneda);