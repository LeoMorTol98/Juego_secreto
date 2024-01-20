//metodos del DOM (document object model)
//procedimiento para seleccionar y modificar el objeto encabezado de la pagina
/*let titulo=document.querySelector('h1');
titulo.innerHTML='Juego del número secreto.';*/

//procedimento para seleccionar y modoificar el objeto parrafo de la pagina.
/*let parrafo=document.querySelector('p');
parrafo.innerHTML='Ingresa un numero del 1 al 10';*/

let numeroSecreto=0;

let contador=0;
let listaNumeros=[];
let numeroMaximo=10;

function intentoDeUsuario(){
    let numeroUsuario=parseInt(document.getElementById("numeroPropuesto").value);
    if (numeroUsuario===numeroSecreto){
        AsignarTexto('p',`Acertaste el numero!!! en el intento ${contador} ${contador==1 ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario>numeroSecreto){
            AsignarTexto('p','El numero secreto es menor');
        } else {
            AsignarTexto('p','El numero secreto es mayor');
        }
        contador++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector("#numeroPropuesto").value='';
}
function AsignarTexto(Elemento,Texto){
    let elementoHTML=document.querySelector(Elemento);
    elementoHTML.innerHTML=Texto;
}

function asignarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumeros);
    if (listaNumeros.length==numeroMaximo){
        AsignarTexto('p','ya se sortearon todos los numeros posibles');
    } else{
        if (listaNumeros.includes(numeroGenerado)){
            return asignarNumeroSecreto();
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    AsignarTexto('h1','Juego del numero secreto');
    AsignarTexto('p','Ingresa un numero del 1 al 10');
    numeroSecreto=asignarNumeroSecreto();
    contador=1;
}

function restcondicionesIniciales(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();