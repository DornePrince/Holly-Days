
/* - - - VARIABLES - - - */
const precioBase = 10;

const numeros = "0123456789";
const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const cupon = numeros + letras;

// Dom
const inputNombre = document.querySelector('#input-nombre');
const inputEmail = document.querySelector('#input-email');
const inputDestino = document.querySelector('#input-destino');
const inputCantidadDias = document.querySelector('#input-cantidadDias');
const inputEdad = document.querySelector('#input-edad');
const btnCotizar = document.querySelector('#btn-cotizar');
const inputCupon = document.querySelector('#inputCupon');
const btnDescuento = document.querySelector('#btnDescuento')




/* - - - FUNCIONES - - - */



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
    

}




//Capturar datos del form
function capturarDatos(){


    function Persona(nombre, email, destinoViaje, edad, cantidadDias) {
        this.nombre = nombre;
        this. email = email;
        this.destinoViaje = destinoViaje;
        this.edad = edad;
        this.cantidadDias = cantidadDias;
        this.costo = 0;
        //this.cupon = cuponGenerado;
    }

    let nombreCapturar = inputNombre.value;
    let emailCapturar = inputEmail.value;
    let destinoCapturar = inputDestino.value;
    let edadCapturar = inputEdad.value;
    let diasCapturar = inputCantidadDias.value;
    /* rever costo */
    //let costo = usuarioCreado.costoDelViaje;



    nuevoUsuarioCapturar = new Persona (nombreCapturar, emailCapturar, destinoCapturar, edadCapturar, diasCapturar);

    console.log(nuevoUsuarioCapturar);
    agregarPersona();

}


//Array de base de datos
let baseDatos = [];

function agregarPersona() {
    baseDatos.push(nuevoUsuarioCapturar);
    document.getElementById("tabla").innerHTML += `<tbody><td> ${nuevoUsuarioCapturar.nombre}</td><td>${nuevoUsuarioCapturar.destinoViaje}</td><td>${nuevoUsuarioCapturar.cantidadDias}</td><td>${nuevoUsuarioCapturar.costo}</td></tbody>`;

    console.log(baseDatos);

}


function mostrarCartel(){
    let contenedor = document.querySelector('#contenedorRender');

    setTimeout(() => {
        contenedor.classList.remove('ocultar');
        contenedor.classList.add('mostrar');
    
    }, 300);
}


btnCotizar.addEventListener('click', mostrarInfo)

function mostrarInfo(e){
    e.preventDefault();
    capturarDatos();
    mostrarCartel();
}







/* CUPONES DE DESCUENTO */

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




function obtenerDescuento() {


    let cupon = document.getElementById("cupon")

    if(cuponGenerado){
        cupon.innerHTML += `<div class="col"><p class="cupon">${cuponGenerado}</p></div>`;
    } 
    
    

    const btnDesc = document.querySelector('.btnDesc');
    const modalDesc = document.querySelector('.cuponContainer');
    const btnClose = document.querySelector('#btnClose');

    btnDesc.addEventListener('click', ()=>{
        modalDesc.classList.add('show');
    })

    btnClose.addEventListener('click', () =>{
        modalDesc.classList.remove('show');
    })


}



function aplicarDescuento(){


    inputCupon.addEventListener('input', (e) =>{
        console.log(e.target.value);
        e.preventDefault();

        if(e.target.value == cuponGenerado){
            console.log('cupon aplicado');
        } else{
            console.log('cupon incorrecto');
        }
    })


}

aplicarDescuento();








/* - - - LOCAL STORAGE - - - */
/* const usuarioStorage = localStorage.setItem( 'usuario', JSON.stringify(nuevoUsuarioCapturar) );
const usuarioJSON = localStorage.getItem('usuario');
console.log(`Log con usuario del storage:`);
console.log(JSON.parse(usuarioJSON)); */











