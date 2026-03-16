AOS.init({
    once: true, // La animación ocurre solo una vez al hacer scroll
    mirror: false, // No se repite al subir el scroll
    duration: 800, // Duración por defecto de las animaciones
});

const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Cambia el icono de barras a una 'X' al abrir
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});