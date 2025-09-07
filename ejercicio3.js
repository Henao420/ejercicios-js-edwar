// Nombre completo: Dilan Estiven Henao Montoya
// Ejercicio 3: Calcular el área de un círculo de 5cm de radio (usar Math.PI).

let radio = 5;
let area = Math.PI * Math.pow(radio, 2);
let areaRedondeada = Math.round(area * 100) / 100;

console.log("Radio del circulo:", radio, "cm");
console.log("Area del circulo (Sin redondear):", area, "cm");
console.log("Area del circulo (Redondeada a 2 decimales)", areaRedondeada, "cm")