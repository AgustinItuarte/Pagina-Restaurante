export default function paginaPrincipal() {

    const contenedor = document.querySelector('#contenido');
    const pagina_principal = document.createElement('div');
    const header = document.createElement('div');
    const main_content = document.createElement('div');
    const footer = document.createElement('div');
    
    contenedor.appendChild(pagina_principal);
    pagina_principal.appendChild(header);
    pagina_principal.appendChild(main_content);
    pagina_principal.appendChild(footer);

    header.classList.add('header');
    main_content.classList.add('main_content');
    footer.classList.add('footer');
    
}