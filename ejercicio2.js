// Nombre completo: Dilan Estiven Henao Montoya
// Ejercicio 2: Generar un número entero aleatorio entre 10 y 50.

let minimo = 10;
let maximo = 50;
let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

console.log("Numero aleatorio entre" + minimo + " y " + maximo + ": ", numeroAleatorio);