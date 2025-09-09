// Nombre completo: Dilan Estiven Henao Montoya
// Ejercicio 12: Simular el lanzamiento de un dado de 6 caras.

function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

let Resultado = lanzarDado();

console.log("Resultado del lanzamiento del dado: ", Resultado);