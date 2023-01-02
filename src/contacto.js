import Icon from './vinos.jpg';
import Vino from './glass-wine.png';
import Gusano1 from './gusano1.jpg';
import Gusano2 from './gusano2.jpg';
import Gusano3 from './gusano3.jpg';

export default function paginaPrincipal() {

    const contenedor = document.querySelector('#contenido');
    const main_content = document.createElement('div');
    const cont_main = document.createElement('div');
    const nombre = document.createElement('h1');
    const carta1 = document.createElement('div');
    const carta2 = document.createElement('div');
    const carta3 = document.createElement('div');
    const cartas1 = document.createElement('div');
    const cartas2 = document.createElement('div');
    const cartas3 = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const bienvenida_box = document.createElement('div');
    const myIcon = new Image();
    myIcon.src = Vino;

    contenedor.appendChild(main_content);
    main_content.appendChild(cont_main);
    cont_main.appendChild(bienvenida_box);
    cont_main.appendChild(carta1);
    cont_main.appendChild(carta2);
    cont_main.appendChild(carta3);
    carta1.appendChild(cartas1);
    carta2.appendChild(cartas2);
    carta3.appendChild(cartas3);
    carta1.appendChild(img1);
    carta2.appendChild(img2);
    carta3.appendChild(img3);
    bienvenida_box.appendChild(nombre);
    bienvenida_box.appendChild(myIcon);
    
    main_content.classList.add('main-content');
    cont_main.classList.add('cont-main');
    carta1.classList.add('cuadros-contenido2');
    carta2.classList.add('cuadros-contenido2');
    carta3.classList.add('cuadros-contenido2');
    img1.classList.add('img-contactos');
    img2.classList.add('img-contactos');
    img3.classList.add('img-contactos');
    bienvenida_box.classList.add('bienvenida-box');

    nombre.innerHTML = 'Contacto';
    cartas1.innerHTML = '<h2>Chef</h2> <br> Conor Mcregor <br> 096 555 555 <br> gusanofeo@gmail.com ';
    cartas2.innerHTML = '<h2>Manager</h2> <br> Rick Sanchez <br> 092 222 222 <br> gusanolindo@gmail.com ';
    cartas3.innerHTML = '<h2>Recepcionista</h2> <br> Silvia Gonzalez <br> 091 444 444 <br> gusanodrogado@gmail.com ';
    img1.src = Gusano1;
    img2.src = Gusano2;
    img3.src = Gusano3;
    main_content.style.backgroundImage =  `url(${Icon})` ;
}