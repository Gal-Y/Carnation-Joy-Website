document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Initial setup
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-container');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
    }

    setInterval(showNextTestimonial, 10000); // Rotate every 10 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
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




