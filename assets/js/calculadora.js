
let destino = prompt('Ingrese destino');
let edad = parseInt(prompt ('Ingrese su edad'));
let dias = parseInt(prompt ('Ingrese la cantidad de dias'));
const precioBase = 10;



// Por destino
function calculaDestino (){
    const destinoCaro = 1.4;
    const destinoBarato = 1.2;
    let precioTotal;

    if (destino == 'Usa' || destino == 'Europa'){
        precioTotal = precioBase * destinoCaro;
    } else{
        precioTotal = precioBase * destinoBarato;
    }

    return precioTotal;
}

let precio = calculaDestino();

console.log(`El precio hasta destino es de ${precio}`);



// Por edad
function calcularEdad(){
    const mayorDeEdad = 1.2;
    const menorDeEdad = 1.1;
    const terceraEdad = 1.3;

    if (edad < 18){
        precio = precio * menorDeEdad;
    } else if(edad >= 18 && edad < 45){
        precio = precio * mayorDeEdad;
    } else{
        precio = precio * terceraEdad;
    }

    return precio;
}


let precioEdad = calcularEdad();
console.log(`El precio hasta edad es de ${precio}`);


// Cantidad de días
function calcularCantidadDias(){
    let precioFinal;
    precioFinal = precioEdad * dias;

    return precioFinal;
}

let precioFinal = Math.round( calcularCantidadDias() );

console.log(`El precio total FINAL para el viaje a ${destino} por ${dias} días es de ${precioFinal}`);