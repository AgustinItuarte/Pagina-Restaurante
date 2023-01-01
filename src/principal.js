import Icon from './vinos.jpg';

export default function paginaPrincipal() {

    const contenedor = document.querySelector('#contenido');
    const pagina_principal = document.createElement('div');
    const header = document.createElement('div');
    const main_content = document.createElement('div');
    const footer = document.createElement('div');
    const header_tab1 = document.createElement('button');
    const header_tab2 = document.createElement('button');
    const header_tab3 = document.createElement('button');
    
    contenedor.appendChild(pagina_principal);
    pagina_principal.appendChild(header);
    pagina_principal.appendChild(main_content);
    pagina_principal.appendChild(footer);
    header.appendChild(header_tab1);
    header.appendChild(header_tab2);
    header.appendChild(header_tab3);
    main_content.style.backgroundImage =  `url(${Icon})` ;
    

    pagina_principal.classList.add('pagina-principal');
    header.classList.add('header');
    main_content.classList.add('main_content');
    footer.classList.add('footer');
    header_tab1.classList.add('btn-inicio');
    header_tab2.classList.add('btn-menu');
    header_tab3.classList.add('btn-contacto');

    header_tab1.textContent = 'Inicio';
    header_tab2.textContent = 'Menu';
    header_tab3.textContent = 'Contacto';
    
}