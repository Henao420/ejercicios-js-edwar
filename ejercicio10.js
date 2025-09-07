// Nombre completo: Dilan Estiven Henao Montoya
// Ejercicio 10: Generar una contraseña numérica aleatoria de 6 dígitos.

function generarContraseña() {
    let numero = Math.floor(Math.random() * 1000000);
    let contraseña = numero.toString().padStart(6, "0");

    return contraseña;
}

let contraseñaGenerada = generarContraseña ();

console.log("Contraseña numerica aleatoria de 6 digitos:", contraseñaGenerada);