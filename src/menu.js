import Icon from './vinos.jpg';
import Vino from './glass-wine.png';

export default function menu() {

    const contenedor = document.querySelector('#contenido');
    const main_content = document.createElement('div');
    const cont_main = document.createElement('div');
    const nombre = document.createElement('h1');
    const bienvenida = document.createElement('div');
    const horarios = document.createElement('div');
    const localizacion = document.createElement('div');
    const bienvenida_box = document.createElement('div');
    const myIcon = new Image();
    myIcon.src = Vino;

    contenedor.appendChild(main_content);
    main_content.appendChild(cont_main);
    cont_main.appendChild(bienvenida_box);
    cont_main.appendChild(bienvenida);
    cont_main.appendChild(horarios);
    cont_main.appendChild(localizacion);
    bienvenida_box.appendChild(nombre);
    bienvenida_box.appendChild(myIcon);
    
    main_content.classList.add('main-content');
    cont_main.classList.add('cont-main');
    bienvenida.classList.add('cuadros-contenido');
    horarios.classList.add('cuadros-contenido');
    localizacion.classList.add('cuadros-contenido');
    bienvenida_box.classList.add('bienvenida-box');

    nombre.innerHTML = 'Menu';
    bienvenida.innerHTML = '<h2>El Vino</h2> <br> El Restaurante El Vino nace a principios del año 2000 como un desafío de su propietario. Luego de haber estudiado y trabajado diez años fuera del país, aprendió que se puede lograr un buen servicio y mejor calidad sin tener que dañar el bolsillo del cliente.';
    horarios.innerHTML = '<h2>Horarios</h2> <br> Domingo: 8am - 8pm <br> Lunes: 6am - 6pm <br> Lunes: 6am - 6pm <br> Martes: 6am - 6pm <br> Miercoles: 6am - 10pm <br> Jueves: 6am - 10pm <br> Viernes: 6am - 10pm <br> Viernes: 6am - 10pm'
    localizacion.innerHTML = '<h2>Localizacion</h2> <br> Guipúzcoa 350, Montevideo 11300 Uruguay'
    main_content.style.backgroundImage =  `url(${Icon})` ;
}