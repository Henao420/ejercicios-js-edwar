// Nombre completo: Dilan Estiven Henao Montoya
// Ejercicio 11: Encontrar el número mayor y menor en un arreglo de 20 números (usar Math.max y Math.min).

let numeros = [15, 3, 78, 45, 92, 6, 33, 21, 54, 88, 12, 67, 9, 100, 41, 28, 73, 5, 60, 37];
let numeroMayor = Math.max(...numeros);
let numeroMenor = Math.min(...numeros);

console.log("Numero mayor: ", numeroMayor);
console.log("Numero menor: ", numeroMenor);