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

document.addEventListener("DOMContentLoaded", function() {
    let testimonials = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.remove('active');
            testimonial.style.opacity = 0;
            if (index === currentIndex) {
                testimonial.classList.add('active');
                testimonial.style.opacity = 1;
            }
        });

        currentIndex = (currentIndex + 1) % testimonials.length;
    }

    showNextTestimonial();
    setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds
});


