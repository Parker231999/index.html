// To show fade-in animations when sections are in view
window.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".fade-in");
  
    // Function to check and add fade-in class when in view
    function checkVisibility() {
      sections.forEach(function(section) {
        const rect = section.getBoundingClientRect();
        // Only add "show" class when section is within the viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add("show");
        } else {
          // If section is out of view, ensure it's hidden again
          section.classList.remove("show");
        }
      });
    }
  
    // Run the checkVisibility function on load and scroll
    checkVisibility(); // To check visibility on initial page load
    window.addEventListener("scroll", checkVisibility); // On scroll
  });