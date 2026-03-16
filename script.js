AOS.init({
    once: true, // La animación ocurre solo una vez al hacer scroll
    mirror: false, // No se repite al subir el scroll
    duration: 800, // Duración por defecto de las animaciones
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            // Usamos 'show' como en tu otra página
            navMenu.classList.toggle('show');
            menuBtn.classList.toggle('is-active');
            
            // Cambiamos el icono visualmente
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Cerrar si haces clic fuera del menú
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('show');
                menuBtn.classList.remove('is-active');
                
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            }
        });
    }
});
