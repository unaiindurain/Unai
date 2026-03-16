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
            // CAMBIADO: Ahora usamos 'active' para coincidir con style.css
            navMenu.classList.toggle('active');
            menuBtn.classList.toggle('is-active');
            
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
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
