




        document.addEventListener('DOMContentLoaded', function() {
            // Elements
        const introOverlay = document.getElementById('introOverlay');
            const clockWipe = document.getElementById('clockWipe');
            const mainContent = document.getElementById('mainContent');
            
            // Start animation sequence after a short delay
            setTimeout(function() {
                // Make clock wipe visible
                clockWipe.style.opacity = '0';
                
                // Animate clock wipe
                setTimeout(function() {
                    clockWipe.style.transform = 'rotate(90deg)';
                    
                    // After clock wipe completes
                    setTimeout(function() {
                        // Hide intro elements by removing them from DOM completely
                introOverlay.remove();
                clockWipe.remove();
                        
                        // Show main content
                mainContent.classList.add('show');
              }, 3000); // Same as the transition time of clock wipe
            }, 1500);
            }, 3000); // Time to display restaurant name before wipe starts
        });

            // Function to trigger fade-out effect
            function fadeOutIntro() {
                const introOverlay = document.getElementById('introOverlay');
                introOverlay.classList.add('fade-out');
        
                // Optionally, you can hide it after the fade-out is complete
                setTimeout(() => {
                    introOverlay.style.display = 'none'; // Hides the overlay after fade-out
                }, 500); // Match this duration with the fade-out transition duration
            }
        
            // Call this function when you want to fade out the intro
            window.onload = () => {
                setTimeout(fadeOutIntro, 2500); // Auto fade out after 3 seconds
            };









        function toggleCategory(category) {
            category.classList.toggle('active');
        }

        function addToCart(element) {
            // Gjej div-in më të afërt me klasën "box"
            let box = element.closest('.box');
            
            // Gjej emrin e produktit nga h2
            let productName = box.querySelector('h2').innerText.trim();
            
            // Shfaq emrin e produktit në alert
            alert(productName + " has been added to your cart!");
        }


        function addToCart(itemName, itemPrice) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({ name: itemName, price: itemPrice });
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(itemName + ' has been added to your cart!');
        }
