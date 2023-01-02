import Icon from './vinos.jpg';
import Vino from './glass-wine.png';
import Pasta from './pasta-receta.jpg'
import Pescado from './salmon-receta.jpg'
import Raviol from './raviol-receta.jpg'
import Merluza from './merluza-receta.jpg'
import Chorizo from './chori-receta.jpg'
import Pollo from './pollo-receta.jpg'

export default function menu() {

    const contenedor = document.querySelector('#contenido');
    const main_content = document.createElement('div');
    const cont_main = document.createElement('div');
    const nombre = document.createElement('h1');
    const receta1 = document.createElement('div');
    const receta2 = document.createElement('div');
    const receta3 = document.createElement('div');
    const receta4 = document.createElement('div');
    const receta5 = document.createElement('div');
    const receta6 = document.createElement('div');
    const bienvenida_box = document.createElement('div');
    const myIcon = new Image();
    myIcon.src = Vino;

    contenedor.appendChild(main_content);
    main_content.appendChild(cont_main);
    cont_main.appendChild(bienvenida_box);
    cont_main.appendChild(receta1);
    cont_main.appendChild(receta2);
    cont_main.appendChild(receta3);
    cont_main.appendChild(receta4);
    cont_main.appendChild(receta5);
    cont_main.appendChild(receta6);
    bienvenida_box.appendChild(nombre);
    bienvenida_box.appendChild(myIcon);
    
    main_content.classList.add('main-content');
    cont_main.classList.add('cont-main');
    receta1.classList.add('cuadros-contenido');
    receta2.classList.add('cuadros-contenido');
    receta3.classList.add('cuadros-contenido');
    receta4.classList.add('cuadros-contenido');
    receta5.classList.add('cuadros-contenido');
    receta6.classList.add('cuadros-contenido');
    bienvenida_box.classList.add('bienvenida-box');

    nombre.innerHTML = 'Menu';
    receta1.innerHTML = `<h2>Pasta</h2> <br> Espaguetti con marisco. <br> <img class='recetas' src=${Pasta} width="200px" height="200px"></img> <br> <h4>$630</h3> `;
    receta2.innerHTML = `<h2>Pescado</h2> <br> Salmon con ensalada. <br> <img class='recetas' src=${Pescado} width="200px" height="200px"></img> <br> <h4>$980</h3> `;
    receta3.innerHTML = `<h2>Pasta</h2> <br> Ravioles con salsa. <br> <img class='recetas' src=${Raviol} width="200px" height="200px"></img> <br> <h4>$470</h3> `;
    receta4.innerHTML = `<h2>Pescado</h2> <br> Merluza asada. <br> <img class='recetas' src=${Merluza} width="200px" height="200px"></img> <br> <h4>$1300</h3> `;
    receta5.innerHTML = `<h2>Jamones</h2> <br> Chorizo asado. <br> <img class='recetas' src=${Chorizo} width="200px" height="200px"></img> <br> <h4>$786</h3> `;
    receta6.innerHTML = `<h2>Pollo</h2> <br> Pollo asado con fritas. <br> <img class='recetas' src=${Pollo} width="200px" height="200px"></img> <br> <h4>$1400</h3> `;
    main_content.style.backgroundImage =  `url(${Icon})` ;
}