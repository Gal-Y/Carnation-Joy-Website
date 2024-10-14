document.addEventListener("DOMContentLoaded", function() {
    const timelineContainer = document.querySelector(".timeline-container");
    let isHorizontalScroll = false;

    window.addEventListener("scroll", function() {
        const timelineTop = timelineContainer.getBoundingClientRect().top;
        const timelineBottom = timelineContainer.getBoundingClientRect().bottom;
        const scrollThreshold = 200;

        if (timelineTop <= scrollThreshold && timelineBottom > 0 && !isHorizontalScroll) {
            isHorizontalScroll = true;
            window.scrollTo({ top: window.scrollY });
        }

        if (isHorizontalScroll) {
            const scrollStep = 10; // Adjust scroll speed
            timelineContainer.scrollLeft += scrollStep;
            if (timelineContainer.scrollLeft + window.innerWidth >= timelineContainer.scrollWidth) {
                isHorizontalScroll = false;
            }
        }
    });
});