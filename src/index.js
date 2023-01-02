import paginaPrincipal from "./principal";
import menu from "./menu";
import contacto from "./contacto";
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

            btn_inicio.disabled = true;
            btn_menu.disabled = false;
            btn_contacto.disabled = false;

            contenido.remove();
            contenido = document.createElement('div');
            body.insertBefore(contenido, body.children[1])
            contenido.id = 'contenido';

            paginaPrincipal();

        } else if (buttons[i].className === 'btn-menu') {

            btn_menu.disabled = true;
            btn_inicio.disabled = false;
            btn_contacto.disabled = false;

            contenido.remove();
            contenido = document.createElement('div');
            body.insertBefore(contenido, body.children[1])
            contenido.id = 'contenido';
            
            menu();

        } else if (buttons[i].className === 'btn-contacto') {

            btn_contacto.disabled = true;
            btn_inicio.disabled = false;
            btn_menu.disabled = false;

            contenido.remove();
            contenido = document.createElement('div');
            body.insertBefore(contenido, body.children[1])
            contenido.id = 'contenido';
            
            contacto();

        }
    })
}