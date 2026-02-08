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

// Mobile dropdown support (CSS disables hover open on small screens).
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll("nav .dropdown");
    dropdowns.forEach((dd) => {
        const trigger = dd.querySelector("a.dropbtn");
        if (!trigger) return;
        trigger.addEventListener("click", (e) => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                e.preventDefault();
                dd.classList.toggle("open");
            }
        });
    });
});
