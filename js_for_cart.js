

            function loadCart() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartItemsContainer = document.getElementById('cart-items');
            cartItemsContainer.innerHTML = '';

            let totalAmount = 0;

            cart.forEach((item, index) => {
            const cartItem = document.createElement('li');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <span class="remove-item" onclick="removeFromCart(${index})">Remove</span>`;
            cartItemsContainer.appendChild(cartItem);

            totalAmount += item.price;
            });

            document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;
            }

            function removeFromCart(index) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
            }

            function checkout() {
            const totalAmount = parseFloat(document.getElementById('total-amount').textContent.replace('$', ''));
            if (totalAmount > 0) {
            alert(`Proceeding to checkout. Total Amount: $${totalAmount.toFixed(2)}`);
            // Redirect to card payment page
            window.location.href = 'card_payment.html';
            } else {
            alert('Your cart is empty. Add items to proceed to checkout.');
            }
            }


            // Load cart items and calculate total on page load
            window.onload = loadCart;
