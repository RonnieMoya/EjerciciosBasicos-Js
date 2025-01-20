/*Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada,
utiliza un if para verificar si la persona es mayor o menor de edad y muestra
un mensaje apropiado en la consola.*/

let edad=prompt("Ingresa tu edad: ");
if (edad>=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}

/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica 
si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.*/
let numero = parseInt(prompt("Ingresa un numero"));
if(numero>0){
    alert(`El numero ${numero}, es positivo`);
    
}else if(numero<0){
    alert(`El número ${numero}, es negativo`)
}else{
    alert(`El numero que ingresaste es cero `)
}
