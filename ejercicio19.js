// Nombre completo: Dilan Estiven Henao Montoya
// Ejercicio 19: Determinar si un número es potencia de 2 usando logaritmos (Math.log2).

let numero = 64;
let logaritmo = Math.log2(numero);

if (Number.isInteger(logaritmo)) {
    console.log(numero, "SI es potencia de 2");
} else {
    console.log(numero, "NO es potencia de 2");
}