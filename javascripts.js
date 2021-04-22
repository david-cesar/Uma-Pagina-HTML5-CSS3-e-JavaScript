const menuNoCelular = document.querySelector('.menu-hamburguer');
const animacaoMenu = document.querySelector('nav .menus ul');
let menuAberto = false;

menuNoCelular.addEventListener('click', () => {
    if(!menuAberto) {
        menuNoCelular.classList.add('open');
        animacaoMenu.classList.add('open');
        menuAberto = true;
    } else {
        menuNoCelular.classList.remove('open');
        animacaoMenu.classList.remove('open');
        menuAberto = false;
    }
});