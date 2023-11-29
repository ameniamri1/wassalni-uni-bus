document.addEventListener('DOMContentLoaded', function () {
    const menubar = document.querySelector('#menu-bars');
    const timesIcon = document.querySelector('.fas.fa-bars i.fad.fa-times');
    const mynav = document.querySelector('.navbar');

    function toggleNavbar() {
        menubar.classList.toggle('fa-times');
        mynav.classList.toggle('active');
        timesIcon.classList.toggle('fa-spin');
    }

    menubar.onclick = toggleNavbar;

    // Ajouter un gestionnaire d'événements pour le redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        // Masquer la barre de navigation si la largeur de la fenêtre est inférieure à 768 pixels
        if (window.innerWidth < 768 && mynav.classList.contains('active')) {
            toggleNavbar();
        }
    });
});
