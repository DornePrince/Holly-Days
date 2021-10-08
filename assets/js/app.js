
const precioBase = 10;

/* Usuarios */

class Usuario {
    constructor(destino, cantidadDias, edad) {
        this.destino  = destino.toUpperCase();
        this.cantidadDias  = parseInt(cantidadDias);
        this.edad = parseInt(edad);
        this.costoDelViaje = 0;

    }
    
}




function calcularCosto(usuario){

    
    const destinoCaro = 1.4;
    const destinoBarato = 1.2;
    
    let costoFinal = precioBase;
    
    if(usuario.destino == 'USA' || usuario.destino == 'EUROPA'){
        costoFinal = costoFinal * destinoCaro;
    } else{
        costoFinal = costoFinal * destinoBarato;
    }
/* 
    switch (usuario.destino) {
        case usuario.destino == 'USA' || usuario.destino == 'EUROPA':
            costoFinal * destinoCaro;

        default:
            costoFinal * destinoBarato;

    } */
    
    
    
    
    const menorDeEdad = 1.1;
    const mayorDeEdad = 1.2;
    const adultoMayor = 1.4;

    if(usuario.edad < 18 && usuario.edad >0){
        costoFinal = costoFinal * menorDeEdad
    } else if(usuario.edad >= 18 && usuario.edad <= 45){
        costoFinal = costoFinal * mayorDeEdad;
    } else{
        costoFinal = costoFinal * adultoMayor;
    }
/* 
    switch (usuario.edad) {
        case usuario.edad < 18:
            costoFinal = costoFinal * menorDeEdad;

            
        case usuario.edad >= 18 && usuario.edad <= 45:
            costoFinal = costoFinal * mayorDeEdad;

        case usuario.edad >= 46:
            costoFinal = costoFinal * adultoMayor;



    } */



    costoFinal = parseInt(costoFinal * usuario.cantidadDias);
    usuario.costoDelViaje = costoFinal;
    usuariosCompradores.push(usuario);
    console.log(`El costo final para este usuario es de ${costoFinal}`);
    console.log(`El usuario se agregó a la lista de compradores`);
    console.log(`La lista de compradores es: `);

    usuariosCompradores.forEach(usuario => {
        console.log(usuario);
    });

}




// Array de usuarios para almacenar objetos
let usuariosCompradores = [];


let usuarioCreado = pedirInfo();
calcularCosto(usuarioCreado);



// Pedir info del viaje

function pedirInfo(){
    let dest = prompt('Ingresá el destino de tu viaje');
    let cantidadDias = Number(prompt('Ingresá la cantidad de días'));
    let edad = Number(prompt('Ingresá tu edad'));

    let usuarioCreado = new Usuario(dest, cantidadDias , edad);

    return usuarioCreado;

}






// CALCULAR COSTO

// Tengo un precio base que se modifica con: 1) destino 2) edad 3) cantidad de dias
/* 
1) Destino
*1.2 LATAM
*1.1 Argentina
*1.4 USA
*1.5 Europa
*1.5 Asia
*1.5 Oceanía
*1.3 África

2) Edad
*1.1 <18
*1.2 18-45
*1.4 >=46

3) Cantidad de dias
resultado * cantidad de días

*/





const usuarioStorage = localStorage.setItem( 'usuario', JSON.stringify(usuarioCreado) );
const usuarioJSON = localStorage.getItem('usuario');
console.log(`Log con usuario del storage:`);
console.log(JSON.parse(usuarioJSON));



