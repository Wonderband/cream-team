(() => {
    const menuBtnRef = document.querySelector('[data-menu-btn]');
    const mobileMenuRef = document.querySelector('[data-mobile-menu]');
    const navLinks = document.querySelectorAll('.nav__link');
    menuBtnRef.addEventListener('click', closeMenu);

    navLinks.forEach(navLink => navLink.addEventListener('click', closeMenu));

    function closeMenu() {
        const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

        menuBtnRef.classList.toggle('is-open');
        menuBtnRef.setAttribute('aria-expanded', !expanded);

        mobileMenuRef.classList.toggle('is-open');
    }
})();
