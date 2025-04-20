document.addEventListener('DOMContentLoaded', function() {
    const introOverlay = document.getElementById('introOverlay');
    const clockWipe = document.getElementById('clockWipe');
    const mainContent = document.getElementById('mainContent');
    
    setTimeout(function() {
        clockWipe.style.opacity = '0';
        
        setTimeout(function() {
            clockWipe.style.transform = 'rotate(90deg)';
            
            setTimeout(function() {
                introOverlay.remove();
                clockWipe.remove();
                mainContent.classList.add('show');
            }, 3000);
        }, 1500);
    }, 3000);
});

function fadeOutIntro() {
    const introOverlay = document.getElementById('introOverlay');
    introOverlay.classList.add('fade-out');
    
    setTimeout(() => {
        introOverlay.style.display = 'none';
    }, 500);
}

window.onload = () => {
    setTimeout(fadeOutIntro, 2500);
};

function toggleCategory(category) {
    category.classList.toggle('active');
}

function addToCart(element) {
    let box = element.closest('.box');
    let productName = box.querySelector('h2').innerText.trim();
    alert(productName + " has been added to your cart!");
}

function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(itemName + ' has been added to your cart!');
}