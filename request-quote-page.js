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

        function showPopupMessage(message, isError = false) {
            const popup = document.getElementById('popupMessage');
            popup.textContent = message;
            popup.classList.toggle('popup-error', isError);
            popup.style.display = 'block';
            
            setTimeout(() => {
                popup.style.display = 'none';
            }, 3000);
        }
        
        document.getElementById('quoteForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Simulating form submission success
            showPopupMessage('Quote request submitted successfully!', false);

            // Clear form fields
            this.reset();
        });