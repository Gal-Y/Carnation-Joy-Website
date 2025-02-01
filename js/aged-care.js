document.addEventListener('DOMContentLoaded', () => {
    // Reveal animation logic for elements on scroll
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);

    // Initial check in case elements are already in view
    revealOnScroll();

    // Initial load reveal for elements in view on load
    const revealLoadElements = document.querySelectorAll('.reveal-load');
    revealLoadElements.forEach(el => {
        el.classList.add('active');
    });

    // Scroll event logging for debugging purposes
    window.addEventListener('scroll', () => {
        console.log('Scroll event detected. Checking elements for reveal animation.');
    });

    // Debugging: Log reveal elements status
    revealElements.forEach((el, index) => {
        console.log(`Reveal element ${index + 1} initial position:`, el.getBoundingClientRect().top);
    });

    // Interactive Timeline Logic
    const timelineItems = document.querySelectorAll('.timeline-item');

    function revealTimelineItems() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemTop < windowHeight - 50) {
                item.classList.add('active'); // Correct: Add the 'active' class
            } else {
                item.classList.remove('active'); // Ensure they reset properly
            }
        });
    }

    // Initial check
    revealTimelineItems();

    // Check on scroll
    window.addEventListener('scroll', revealTimelineItems);

    // Interactive FAQ Section Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('open');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('open')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
});
