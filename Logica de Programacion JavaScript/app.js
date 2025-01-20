//Variables
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
let numeroMaximo =100;

//let palabraVeces='Vez';
let maximoIntentos=5;
while(numeroSecreto!=numeroUsuario){
    numeroUsuario=parseInt(prompt(`Elije un Número estre 1 y ${numeroMaximo}:`));

    console.log(typeof(numeroUsuario));// typeof muestra el tipo de variable
    /*Para comentar varias lineas*/

    if (numeroUsuario == numeroSecreto) {
        /*se cumple la condición usamos operador ternario al usar template string 
        el signo ? es como un si y el else son los : */
        alert(`Acertaste, el numero es : ${numeroUsuario}.
        Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }
    else{
        //no se cumple la condición
        if(numeroUsuario>numeroSecreto){
            alert('El numero secreto es menor ');
        }else{
            alert('El numero secreto es Mayor');
        }
        //incrementamos el contador cuando la persona no acierta
        intentos++;
        //palabraVeces="Veces";
        if (intentos>maximoIntentos) {
            alert(`Llegaste al número máximo de ${maximoIntentos} intentos `);
            break;
        }
    }
  
}