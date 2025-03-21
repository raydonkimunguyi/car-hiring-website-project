document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
  
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
  
        // Toggle the icon between ☰ and ✖
        if (navLinks.classList.contains("active")) {
            hamburger.textContent = "✖"; // Close icon
        } else {
            hamburger.textContent = "☰"; // Hamburger icon
        }
    });
  });

function scrollToServices() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

// Slideshow Functionality
let index = 0;
        const slides = document.querySelector(".carousel");
        const totalSlides = document.querySelectorAll(".review").length;

        function moveSlide(direction) {
            index += direction;
            if (index >= totalSlides) index = 0;
            if (index < 0) index = totalSlides - 1;
            slides.style.transform = `translateX(${-index * 100}%)`;
        }

        setInterval(() => moveSlide(1), 5000); // Auto-slide every 5 seconds