// Select all the links in the navigation bar
const navbar = document.querySelectorAll('navbar a');

// Add a click event listener to each link
navbar.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default jump behavior

    const targetId = this.getAttribute('href'); // Get the ID from the href 
    const targetSection = document.querySelector(targetId);

    // Smooth scrolling function
    targetSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  });
});