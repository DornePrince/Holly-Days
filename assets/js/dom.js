/* --- DOM --- */

/* Seleccionar elementos del html por su id */
//const resultado = document.getElementById('main');

/* Seleccionar elementos del html por su clase */
//const resultado = document.getElementsByClassName('main');

/* Seleccionar Un elemento del html por su selector de css */
//const resultado = document.querySelector('.main');

/* Seleccionar elementos del html por su selector de css */
//const resultado = document.querySelectorAll('.main');


/* Agregar elementos */
const p = document.createElement('p');

/* Agregar contenido al elemento */
p.innerText = 'Hola desde dom';

/* Selecciono el padre */
const divPadre = document.querySelector('.pruebajs');

/* Insertar elemento en el html a partir de una referencia (padre)*/
divPadre.appendChild(p);


/* Agregar o quitar clases */
p.classList.add('parafo');
p.classList.remove('parrafo-azul');
p.classList.toggle('clase-toggle');