import paginaPrincipal from "./principal";
import menu from "./menu";
import './style.css';

paginaPrincipal();

const btn_inicio = document.querySelector('.btn-inicio');
const btn_menu = document.querySelector('.btn-menu');
const btn_contacto = document.querySelector('.btn-contacto');
let buttons = document.querySelectorAll('button');
let contenido = document.querySelector('#contenido')
const body = document.querySelector('body');

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', () => {

        if (buttons[i].className === 'btn-inicio') {

            contenido.remove();
            contenido = document.createElement('div');
            body.insertBefore(contenido, body.children[1])
            contenido.id = 'contenido';
            paginaPrincipal();

        } else if (buttons[i].className === 'btn-menu') {

            contenido.remove();
            contenido = document.createElement('div');
            body.insertBefore(contenido, body.children[1])
            contenido.id = 'contenido';
            menu();

        }
    })
}