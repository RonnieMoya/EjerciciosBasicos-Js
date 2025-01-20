//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let contador = 1;
while(contador<=10){
    console.log(contador);
    contador++;
}
/*Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else 
para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.*/
let nota = 6 ;
if(nota>=7){
    console.log(`Tú nota es: ${nota}, por lo tanto  Aprobaste`);
}else{
    console.log(`Tú nota es: ${nota}, por lo tanto Reprobaste`);
}