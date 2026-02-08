// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    /* ======================================
       Generic Reveal Animation Logic
       Targets elements with the "reveal" class,
       except those that are timeline items.
       ====================================== */
    const genericRevealElements = document.querySelectorAll('.reveal:not(.timeline-item)');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        genericRevealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }
    
    // Check generic reveal elements on scroll and immediately on load
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    // Immediately reveal elements that should load revealed
    document.querySelectorAll('.reveal-load').forEach(el => {
        el.classList.add('active');
    });
    
    
    /* ======================================
       Timeline Reveal Logic
       Handles timeline items independently.
       (These items will have the "reveal" class toggled
       according to their own viewport trigger.)
       ====================================== */
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function revealTimelineItems() {
        // Set trigger at 80% of the viewport height
        const triggerBottom = window.innerHeight * 0.8;
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                item.classList.add('reveal');
            } else {
                item.classList.remove('reveal');
            }
        });
    }
    
    // Check timeline items on scroll and immediately on load
    window.addEventListener('scroll', revealTimelineItems);
    revealTimelineItems();
    
    
    /* ======================================
       FAQ Section Logic
       Toggles open/closed state on click.
       ====================================== */
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
    
    // Optional: Debug logging for generic reveal elements (remove if not needed)
});
    
    
/* ======================================
   Navigation Toggle Logic
   ====================================== */
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
