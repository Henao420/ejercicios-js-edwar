// Nombre completo: Dilan Estiven Henao Montoya
// Ejercicio 20: Generar un arreglo con 20 números aleatorios enteros entre 1 y 100 y calcular el máximo y mínimo.

let numeros = [];
for (let i = 0; i < 20; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

let maximo = Math.max(...numeros);
let minimo = Math.min(...numeros);

console.log("Arreglo generado: ", numeros);
console.log("Numero maximo: ", maximo);
console.log("Numero minimo: ", minimo);