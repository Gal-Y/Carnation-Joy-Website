// aged-care.js
document.addEventListener('DOMContentLoaded', function() {
    const animationTrigger = () => {
        document.body.classList.add('animate-page');
        // Remove click listener after first interaction
        document.body.removeEventListener('click', animationTrigger);
    };

    // Add click listener to trigger animation
    document.body.addEventListener('click', animationTrigger);
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
    });
});