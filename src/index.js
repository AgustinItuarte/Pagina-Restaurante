import paginaPrincipal from "./principal";
import menu from "./menu";
import './style.css';

paginaPrincipal();

const btn_inicio = document.querySelector('.btn-inicio');
const btn_menu = document.querySelector('.btn-menu');
const btn_contacto = document.querySelector('.btn-contacto');
let buttons = document.querySelectorAll('button');
const pagina_principal = document.querySelector('.pagina-principal')

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click', () => {
        if (buttons[i].className === 'btn-inicio') {
            pagina_principal.remove();
            paginaPrincipal();
            buttons = document.querySelectorAll('button');
        } else if (buttons[i].className === 'btn-menu') {
            pagina_principal.remove();
            menu();
            buttons = document.querySelectorAll('button');
        }
    })
    
}