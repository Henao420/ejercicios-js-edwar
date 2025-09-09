// Nombre completo: Dilan Estiven Henao Montoya
// Ejercicio 18: Generar un número aleatorio impar entre 1 y 99.

let numero = Math.floor(Math.random() * 99) + 1;

if (numero % 2 === 0) {
    numero += 1;
}

if (numero > 99) {
    numero = 99;
}

console.log("Numero impar generado entre 1 y 99: ", numero);