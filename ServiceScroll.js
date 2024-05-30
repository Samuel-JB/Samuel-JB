$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,  // Show only one item at a time
        loop: true,  // Loop the carousel infinitely
        nav: true,   // Show navigation arrows
        dots: true, // Hide navigation dots (optional)
        autoplay: true,  // Enable autoplay (optional)
        autoplayTimeout: 5000, // Set autoplay interval (optional)
        autoplayHoverPause: true  // Pause autoplay on hover (optional)
    });
});