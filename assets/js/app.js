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
    
    if(nuevoUsuarioCapturar.destino == 'USA' || nuevoUsuarioCapturar.destino == 'EUROPA'){
        costoFinal = costoFinal * destinoCaro;
    } else{
        costoFinal = costoFinal * destinoBarato;
    }

    
    
    
    // Evalua por edad
    const menorDeEdad = 1.1;
    const mayorDeEdad = 1.2;
    const adultoMayor = 1.4;

    if(nuevoUsuarioCapturar.edad < 18 && nuevoUsuarioCapturar.edad >0){
        costoFinal = costoFinal * menorDeEdad
    } else if(nuevoUsuarioCapturar.edad >= 18 && usuario.edad <= 45){
        costoFinal = costoFinal * mayorDeEdad;
    } else{
        costoFinal = costoFinal * adultoMayor;
    }



    // Evalua por cantidad de días
    costoFinal = parseInt(costoFinal * nuevoUsuarioCapturar.cantidadDias);
    nuevoUsuarioCapturar.costoDelViaje = costoFinal;
    

}




//Capturar datos del form
function capturarDatos(){


    function Persona(nombre, email, destinoViaje, edad, cantidadDias, costo) {
        this.nombre = nombre;
        this. email = email;
        this.destinoViaje = destinoViaje;
        this.edad = edad;
        this.cantidadDias = cantidadDias;
        this.costo = costo;
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


    let cupon = document.getElementById("cupon");

    if(cuponGenerado){
        cupon.innerHTML += `<div class="col"><p class="cupon">${cuponGenerado}</p></div>`;
    } 
    
    

    const modalDesc = document.querySelector('.cuponContainer');
    const btnClose = document.querySelector('#btnClose');

    modalDesc.classList.add('show');

    btnClose.addEventListener('click', () =>{
        modalDesc.classList.remove('show');
    })


}



function aplicarDescuento(){


    inputCupon.addEventListener('input', (e) =>{

        const btnDesc = document.querySelector('#btnDescuento');
        let leer = e.target.value;
        console.log(leer);

        btnDesc.addEventListener('click', (e)=>{
            e.preventDefault();

             if(leer === cuponGenerado){
                console.log('cupon aplicado... calculando descuento');
                
    
            } else{
                console.log('cupon incorrecto');
            } 
        });


    })


}

aplicarDescuento();







/* - - - LOCAL STORAGE - - - */
/* const usuarioStorage = localStorage.setItem( 'usuario', JSON.stringify(nuevoUsuarioCapturar) );
const usuarioJSON = localStorage.getItem('usuario');
console.log(`Log con usuario del storage:`);
console.log(JSON.parse(usuarioJSON)); */











