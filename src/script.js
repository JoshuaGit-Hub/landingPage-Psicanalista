// Responsividade do NAV //

const btnHamburguer = document.getElementById('menu-hamburguer');
const navResponsiveContainer = document.getElementById('nav-responsive_container');
const navLinksResponsive = document.querySelector('#nav-links_responsive');

btnHamburguer.addEventListener('click', () => {
    navResponsiveContainer.classList.toggle('active');
    navLinksResponsive.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll('#nav-links_responsive a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navResponsiveContainer.classList.remove('active');
        navLinksResponsive.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Fechar o menu ao clicar fora dele
const overlay = document.getElementById('overlay');
overlay.addEventListener('click', () => {
    navResponsiveContainer.classList.remove('active');
    navLinksResponsive.classList.remove('active');
    overlay.classList.remove('active');
});

// Fim da responsividade do NAV //

// Adicionar sombra ao NAV ao rolar a página //

const navContainer = document.querySelector('.nav-container');
const heroSection = document.getElementById('hero');
let heightHero = heroSection.clientHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > heightHero) {
        navContainer.classList.add('hero-passed');
    }
    else {
        navContainer.classList.remove('hero-passed');
    }
});
