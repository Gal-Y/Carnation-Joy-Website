document.addEventListener('DOMContentLoaded', () => {
    // Function to reveal elements on scroll
    function revealOnScroll() {
        const revealElements = document.querySelectorAll('.reveal, .service-item, .timeline-item'); 
        const windowHeight = window.innerHeight;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    }

    // Initial reveal check and scroll event listener
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // Ensure elements marked as "reveal-load" are active on page load
    document.querySelectorAll('.reveal-load').forEach(el => {
        el.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("nav-open");
    });
});

