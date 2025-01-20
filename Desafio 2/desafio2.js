/*Pregunta al usuario qué día de la semana es. Si la respuesta es 
"Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario,
muestra "¡Buena semana!".Dia de */
let diaSemana=prompt("Me puedes decir que dia de la semana es: ");
if (diaSemana=="Sabado"){
    alert("¡Buen fin de semana!");
}else if (diaSemana=="Domingo"){
    alert("¡Buen fin de semana!");
}else {
    alert("¡Buena semana!.Dia "+ diaSemana);
}

/*Verifica si un número ingresado por el usuario 
es positivo o negativo. Muestra una alerta informativa.*/
 
let numeroUsuario=prompt("Ingresa un número y te dire si es positivo o Negativo");
console.log(numeroUsuario)
if(numeroUsuario>0){
    alert(`El número ${numeroUsuario}es : Positivo`)
}
else if (numeroUsuario==0){
    alert(` El número ${numeroUsuario}, no es positivo ni negativo es Neutro`)
}else{
    alert(`El número ${numeroUsuario}, es Negativo`)
}

/*Crea un sistema de puntuación para un juego. Si la puntuación 
es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
En caso contrario, muestra "Intentalo nuevamente para ganar.".
*/
let puntuacion=103
if(puntuacion>=100){
    alert("¡Felicidades, has ganado!")
}else{
    alert("Intentalo nuevamente para ganar.")
}

/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
 utilizando un template string para incluir el valor del saldo.*/

let saldoCuenta=600
alert(`El saldo de tu cuenta es: ${saldoCuenta}`);

/*Pide al usuario que ingrese su nombre mediante un prompt. 
Luego, muestra una alerta de bienvenida usando ese nombre.*/

let nombreUsuario = prompt("Ingresa tú nombre: ")
alert(`¡Bienvenido!${nombreUsuario}`);