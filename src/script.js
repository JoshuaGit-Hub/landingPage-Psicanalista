// Responsividade do NAV

const btnHamburguer = document.getElementById('menu-hamburguer');
const navResponsiveContainer = document.getElementById('nav-responsive_container');
const navLinksResponsive = document.querySelector('#nav-links_responsive');

btnHamburguer.addEventListener('click', () => {
    navResponsiveContainer.classList.toggle('active');
    navLinksResponsive.classList.toggle('active');
});