/* - - - VARIABLES - - - */
const precioBase = 10;

const numeros = "0123456789";
const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const cupon = numeros + letras;



// Dom
const inputNombre = document.querySelector("#input-nombre");
const inputEmail = document.querySelector("#input-email");
const inputDestino = document.querySelector("#input-destino");
const inputCantidadDias = document.querySelector("#input-cantidadDias");
const inputEdad = document.querySelector("#input-edad");
const btnCotizar = document.querySelector("#btn-cotizar");
const inputCupon = document.querySelector("#inputCupon");
const btnDescuento = document.querySelector("#btnDescuento");

/* const inputNombre = $("#input-nombre")
const inputEmail = $("#input-email")
const inputDestino = $('#input-destino')
const iinputCantidadDias = $("#input-cantidadDias")
const inputEdad = $("#input-edad")
const btnCotizar = $("#btn-cotizar")
const inputCupon = $("#inputCupon")
const btnDescuento = $("#btnDescuento") */

/* - - - FUNCIONES - - - */

// Calcular costo del seguro
function calcularCosto(usuario) {
  //Evalua por destino
  const destinoCaro = 1.4;
  const destinoBarato = 1.2;

  let costoFinal = precioBase;

  if (
    destinoCapturar == "Norteamérica" ||
    destinoCapturar == "Europa" ||
    destinoCapturar == "Asia/Oceanía"
  ) {
    costoFinal = costoFinal * destinoCaro;
    console.log("destino caro");
  } else {
    costoFinal = costoFinal * destinoBarato;
  }

  // Evalua por edad
  const menorDeEdad = 1.1;
  const mayorDeEdad = 1.2;
  const adultoMayor = 1.4;

  if (edad < 18 && edad > 0) {
    costoFinal = costoFinal * menorDeEdad;
  } else if (edad >= 18 && edad <= 45) {
    costoFinal = costoFinal * mayorDeEdad;
  } else {
    costoFinal = costoFinal * adultoMayor;
  }

  // Evalua por cantidad de días
  costoFinal = parseInt(costoFinal * cantidadDias);
  nuevoUsuarioCapturar.costoDelViaje = costoFinal;
}

//Capturar datos del form

function Persona(nombre, email, destinoViaje, edad, cantidadDias, costo) {
  this.nombre = nombre;
  this.email = email;
  this.destinoViaje = destinoViaje;
  this.edad = edad;
  this.cantidadDias = cantidadDias;
  this.costo = costo;

  function getCosto() {
    return this.costo;
  }
  //this.cupon = cuponGenerado;
}

function calculaDestino(destino) {
  const destinoCaro = 1.4;
  const destinoBarato = 1.2;
  let precioTotal;

  if (
    destino == "Norteamérica" ||
    destino == "Europa" ||
    destino == "Asia/Oceanía"
  ) {
    precioTotal = precioBase * destinoCaro;
  } else {
    precioTotal = precioBase * destinoBarato;
  }

  return precioTotal;
}

// Por edad
function calcularEdad(edad) {
  const mayorDeEdad = 1.2;
  const menorDeEdad = 1.1;
  const terceraEdad = 1.3;
  if (edad < 18) {
    return menorDeEdad;
  } else if (edad >= 18 && edad < 45) {
    return mayorDeEdad;
  } else {
    return terceraEdad;
  }
}

function calcularCostoTotal(destino, edad, dias) {
  const precioPorDestino = calculaDestino(destino);
  const calcularPorEdad = calcularEdad(edad);
  return Math.floor(precioPorDestino * calcularPorEdad * dias);
}

//Array de base de datos
let baseDatos = [];
function validarUsuario(user) {
  return !baseDatos.some((u) => u.mail == user.mail);
}
function agregarPersona(user) {
  if (validarUsuario(user)) {
    baseDatos.push(user);
    document.getElementById(
      "tabla"
    ).innerHTML += `<tbody><td> ${user.nombre}</td><td>${user.destinoViaje}</td><td>${user.cantidadDias}</td><td>${user.costo} USD</td></tbody>`;
  } else {
    alert("El mail ya ha sido registrado");
    console.log(baseDatos);
  }
}

function mostrarCartel() {
  let contenedor = document.querySelector("#contenedorRender");

  setTimeout(() => {
    contenedor.classList.remove("ocultar");
    contenedor.classList.add("mostrar");
  }, 300);
}



function cotizarUsuario() {
  let nombreCapturar = inputNombre.value;
  let emailCapturar = inputEmail.value;
  let destinoCapturar = inputDestino.value;
  let edadCapturar = inputEdad.value;
  let diasCapturar = inputCantidadDias.value;

  nuevoCosto = calcularCostoTotal(destinoCapturar, edadCapturar, diasCapturar);
  nuevoUser = new Persona(
    nombreCapturar,
    emailCapturar,
    destinoCapturar,
    edadCapturar,
    diasCapturar,
    (costo = nuevoCosto)
  );
  if (validarUsuario(nuevoUser)) {
    agregarPersona(nuevoUser);
  }

  return nuevoUser;
}

btnCotizar.addEventListener("click", mostrarInfo);

function mostrarInfo(e) {
  e.preventDefault();
  const usuarioFinal = cotizarUsuario();
  mostrarCartel();
}

/* CUPONES DE DESCUENTO */

const generarCupon = (longitud) => {
  let cuponDesc = "";
  for (let i = 0; i < longitud; i++) {
    let aleatorio = Math.floor(Math.random() * cupon.length);
    cuponDesc += cupon.charAt(aleatorio);
  }
  return cuponDesc;
};

let cuponGenerado = generarCupon(8);

console.log(cuponGenerado);

/* Con jquery */
function obtenerDescuento() {

  if (cuponGenerado) {
    $('#cupon').append (`<div class="col"><p class="cupon">${cuponGenerado}</p></div>`);
  }


  $('.cuponContainer').addClass('show');



  $('#btnClose').click(function(){
    $('.cuponContainer').removeClass('show');
  })
}

function aplicarDescuento() {
  inputCupon.addEventListener("input", (e) => {
    const btnDesc = document.querySelector("#btnDescuento");
    let leer = e.target.value;
    btnDesc.addEventListener("click", (e) => {
      e.preventDefault();
      if (leer === cuponGenerado) {
        return 0.9;
      } else {
        console.log("cupon incorrecto");
      }
    });
  });
}

/* - - - LOCAL STORAGE - - - */
/* const usuarioStorage = localStorage.setItem( 'usuario', JSON.stringify(nuevoUsuarioCapturar) );
const usuarioJSON = localStorage.getItem('usuario');
console.log(`Log con usuario del storage:`);
console.log(JSON.parse(usuarioJSON)); */
