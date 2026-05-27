document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const hamburgerBtn = document.querySelector('.hamburger-btn');

  if (hamburgerBtn && nav) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.toggle('menu-open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      
      // Bloquear scroll de la página de fondo
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Cerrar menú al hacer clic en enlaces
    const navLinksList = nav.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('menu-open')) {
          nav.classList.remove('menu-open');
          hamburgerBtn.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });

    // Cerrar si se hace clic fuera del menú
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('menu-open') && !nav.contains(e.target)) {
        nav.classList.remove('menu-open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // Efecto de scroll para la navegación
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(60, 20, 0, 0.1)';
      } else {
        if (!nav.classList.contains('menu-open')) {
          nav.style.background = 'rgba(255, 255, 255, 0.92)';
          nav.style.boxShadow = 'none';
        }
      }
    });
  }
});
