alert('Bienvenida y bienvenido a nuestro sitio web');
let nombre = "Lua";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert('¡Error! Llena todos los campos');
let mensajeDeError = "¡Error! Completa todos los campos";
alert (mensajeDeError);

nombre = prompt('Ingresa tu nombre: ');
edad = prompt('Ingresa tú edad: ');

if (edad>=18){
    alert("¡Puedes sacar tú licencia de conducir!")
}