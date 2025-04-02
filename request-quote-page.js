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