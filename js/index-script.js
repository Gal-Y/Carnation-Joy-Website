document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    let currentSlide = 0;

    console.log('Carousel script loaded'); // Debugging line

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        console.log('Showing slide:', index); // Debugging line
    }

    prevBtn.addEventListener('click', () => {
        console.log('Previous button clicked'); // Debugging line
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        console.log('Next button clicked'); // Debugging line
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Initial setup
    showSlide(currentSlide);
    console.log('Initial slide shown'); // Debugging line
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





