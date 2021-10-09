
/* - - - VARIABLES - - - */
const precioBase = 10;

let numeros = "0123456789";
let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let cupon = numeros + letras;

// Dom
const inputNombre = document.querySelector('#input-nombre');
const inputEmail = document.querySelector('#input-email');
const inputDestino = document.querySelector('#input-destino');
const inputCantidadDias = document.querySelector('#input-cantidadDias');
const inputEdad = document.querySelector('#input-edad');
const btnCotizar = document.querySelector('#btn-cotizar');


// Constructor de usuario
class Usuario {
    constructor(nombre, email, destino, cantidadDias, edad) {
        this.nombre = nombre.toLowerCase();
        this.email = email.toLowerCase();
        this.destino  = destino.toUpperCase();
        this.cantidadDias  = parseInt(cantidadDias);
        this.edad = parseInt(edad);
        this.costoDelViaje = 0;

    }
    
}



/* - - - FUNCIONES - - - */

// Pedir info del viaje
function pedirInfo(){
    let dest = prompt('Ingresá el destino de tu viaje');
    let cantidadDias = Number(prompt('Ingresá la cantidad de días'));
    let edad = Number(prompt('Ingresá tu edad'));
    let nombre = prompt('Nombre');
    let email = prompt('email');

    let usuarioCreado = new Usuario(nombre, email, dest, cantidadDias , edad);

    return usuarioCreado;

}

// Calcular costo del seguro
function calcularCosto(usuario){

    


    //Evalua por destino
    const destinoCaro = 1.4;
    const destinoBarato = 1.2;
    
    let costoFinal = precioBase;
    
    if(usuario.destino == 'USA' || usuario.destino == 'EUROPA'){
        costoFinal = costoFinal * destinoCaro;
    } else{
        costoFinal = costoFinal * destinoBarato;
    }

    
    
    
    // Evalua por edad
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



    // Evalua por cantidad de días
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


// Array de usuarios
let usuariosCompradores = [];


let usuarioCreado = pedirInfo();
calcularCosto(usuarioCreado);

// Mostrar en el html
function imprimirHtml(){
    const renderNombre = document.createElement('p');
    renderNombre.textContent = usuarioCreado.nombre;
    const renderContainer = document.querySelector('#render-container');
    
    const renderDestino = document.createElement('p');
    renderDestino.textContent = usuarioCreado.destino;
    
    
    const renderCantidadDias = document.createElement('p');
    renderCantidadDias.textContent = usuarioCreado.cantidadDias;
    
    
    const renderCosto = document.createElement('p');
    renderCosto.textContent = usuarioCreado.costoDelViaje;

    const renderMensaje = document.createElement('p');
    const mensajeCotizacion = `${usuarioCreado.nombre}, el precio para tu viaje de ${usuarioCreado.cantidadDias} días a ${usuarioCreado.destino} tiene un precio final de ${usuarioCreado.costoDelViaje} usd. `;
    renderMensaje.textContent = mensajeCotizacion;

    const renderBtnCompra = document.createElement('button');
    renderBtnCompra.textContent = '¡Contratar seguro!';
    renderBtnCompra.classList.add('btn');
    renderBtnCompra.classList.add('btn-primary');

    

    setTimeout(() => {

        renderContainer.appendChild(renderMensaje);
        renderContainer.appendChild(renderBtnCompra);
    }, 1500);

    //const contenedorNombre = inputNombre.parentElement;
}




/* btnCotizar.addEventListener('click', ()=>{
    console.log('click en cotizar..');
}); */

btnCotizar.addEventListener('click', mostrarInfo)

function mostrarInfo(){
    imprimirHtml();
}


// Crear cupón random
/* La idea es que haya n cantidad de cupones y al hacer click vayan disminuyendo
   Ej: los primeros 50 compradores obtienen un % de descuento 
*/
const generarCupon = (longitud) =>{
    let cuponDesc = "";
    for(let i=0; i < longitud; i++){
        let aleatorio = Math.floor(Math.random() * cupon.length);
        cuponDesc += cupon.charAt(aleatorio);
    }
    return cuponDesc;
};

let cuponGenerado= generarCupon(8);
console.log(cuponGenerado);





/* - - - LOCAL STORAGE - - - */
const usuarioStorage = localStorage.setItem( 'usuario', JSON.stringify(usuarioCreado) );
const usuarioJSON = localStorage.getItem('usuario');
console.log(`Log con usuario del storage:`);
console.log(JSON.parse(usuarioJSON));











