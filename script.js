AOS.init({
    once: true, // La animación ocurre solo una vez al hacer scroll
    mirror: false, // No se repite al subir el scroll
    duration: 800, // Duración por defecto de las animaciones
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu'); // El botón de las 3 rayitas
    const navMenu = document.getElementById('nav-menu');    // El contenedor de los enlaces

    if (menuBtn && navMenu) {
        // 1. Abrir/Cerrar al dar clic en el botón
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active'); // Usamos 'active' que es la que pusimos en style.css
            menuBtn.classList.toggle('is-active');
            
            // Cambiar icono visualmente
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // 2. Cerrar automáticamente al hacer clic en cualquier enlace
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // 3. Cerrar si el usuario hace clic fuera del menú
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                navMenu.classList.remove('active');
                // Resetear icono a barras
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            }
        });
    }
});
