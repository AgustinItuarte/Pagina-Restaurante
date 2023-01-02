import Icon from './vinos.jpg';
import Vino from './glass-wine.png';

export default function paginaPrincipal() {

    const contenedor = document.querySelector('#contenido');
    const pagina_principal = document.createElement('div');
    const header = document.createElement('div');
    const main_content = document.createElement('div');
    const footer = document.createElement('div');
    const header_tab1 = document.createElement('button');
    const header_tab2 = document.createElement('button');
    const header_tab3 = document.createElement('button');
    const cont_main = document.createElement('div');
    const nombre = document.createElement('h1');
    const bienvenida = document.createElement('div');
    const horarios = document.createElement('div');
    const localizacion = document.createElement('div');
    const ul_footer = document.createElement('ul');
    const li1_footer = document.createElement('li');
    const li2_footer = document.createElement('li');
    const bienvenida_box = document.createElement('div');
    const myIcon = new Image();
    myIcon.src = Vino;

    contenedor.appendChild(pagina_principal);
    pagina_principal.appendChild(header);
    pagina_principal.appendChild(main_content);
    pagina_principal.appendChild(footer);
    header.appendChild(header_tab1);
    header.appendChild(header_tab2);
    header.appendChild(header_tab3);
    main_content.appendChild(cont_main);
    cont_main.appendChild(bienvenida_box);
    cont_main.appendChild(bienvenida);
    cont_main.appendChild(horarios);
    cont_main.appendChild(localizacion);
    footer.appendChild(ul_footer);
    ul_footer.appendChild(li1_footer);
    ul_footer.appendChild(li2_footer);
    bienvenida_box.appendChild(nombre);
    bienvenida_box.appendChild(myIcon);
    
    pagina_principal.classList.add('pagina-principal');
    header.classList.add('header');
    main_content.classList.add('main-content');
    cont_main.classList.add('cont-main');
    bienvenida.classList.add('cuadros-contenido');
    horarios.classList.add('cuadros-contenido');
    localizacion.classList.add('cuadros-contenido');
    footer.classList.add('footer');
    header_tab1.classList.add('btn-inicio');
    header_tab2.classList.add('btn-menu');
    header_tab3.classList.add('btn-contacto');
    bienvenida_box.classList.add('bienvenida-box');

    header_tab1.textContent = 'Inicio';
    header_tab2.textContent = 'Menu';
    header_tab3.textContent = 'Contacto';
    nombre.innerHTML = 'Bienvenidos';
    bienvenida.innerHTML = '<h2>El Vino</h2> <br> El Restaurante El Vino nace a principios del año 2000 como un desafío de su propietario. Luego de haber estudiado y trabajado diez años fuera del país, aprendió que se puede lograr un buen servicio y mejor calidad sin tener que dañar el bolsillo del cliente.';
    horarios.innerHTML = '<h2>Horarios</h2> <br> Domingo: 8am - 8pm <br> Lunes: 6am - 6pm <br> Lunes: 6am - 6pm <br> Martes: 6am - 6pm <br> Miercoles: 6am - 10pm <br> Jueves: 6am - 10pm <br> Viernes: 6am - 10pm <br> Viernes: 6am - 10pm'
    localizacion.innerHTML = '<h2>Localizacion</h2> <br> Guipúzcoa 350, Montevideo 11300 Uruguay'
    main_content.style.backgroundImage =  `url(${Icon})` ;
    li1_footer.textContent = 'Creador de la Pagina: Agustin Ituarte'
    li2_footer.textContent = 'Propietario del Fondo: stevepb'
}