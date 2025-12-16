// Rolagem Suave para links de navegação //
function smoothScrollTo(targetPosition, duration = 1000) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        e.preventDefault();

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - 80;
            smoothScrollTo(targetPosition);
        }
    });
});

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

// Adicionar sombra ao NAV ao rolar a página //
const navContainer = document.querySelector('.nav-container');
const heroSection = document.getElementById('hero');
let heightHero = heroSection.clientHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > heightHero) {
        navContainer.classList.add('hero-passed');
    } else {
        navContainer.classList.remove('hero-passed');
    }
});

// Mandar mensagem pelo WhatsApp //
function sendWhatsMessage() {
    const phoneNumber = '000000';
    const message = 'Olá, gostaria de agendar uma consulta.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

const allBtnsContact = document.querySelectorAll('.contact_btn');

allBtnsContact.forEach(btn => {
    btn.addEventListener('click', e => {
        sendWhatsMessage();
    })
});

// Animações com ScrollReveal //
ScrollReveal().reveal('.hero-content, .hero-image', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    reset: false,
    interval: 200
});