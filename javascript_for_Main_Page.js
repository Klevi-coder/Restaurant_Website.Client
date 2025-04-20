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
            }, 5000);
        }, 5000);
    }, 5000);
});

function fadeOutIntro() {
    const introOverlay = document.getElementById('introOverlay');
    introOverlay.classList.add('fade-out');
    
    setTimeout(() => {
        introOverlay.style.display = 'none';
    }, 3000);
}

window.onload = () => {
    setTimeout(fadeOutIntro, 2500);
};

var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderEl = document.querySelector('.tranding-slider');
    const existingSwiper = sliderEl.swiper;
    
    if (existingSwiper) {
        existingSwiper.params.autoplay = {
            delay: 2000,
            disableOnInteraction: false
        };
        
        existingSwiper.params.speed = 1500;
        
        existingSwiper.update();
        
        existingSwiper.autoplay.start();
        
        sliderEl.addEventListener('mouseenter', function() {
            existingSwiper.autoplay.stop();
        });
        
        sliderEl.addEventListener('mouseleave', function() {
            existingSwiper.autoplay.start();
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    existingSwiper.autoplay.start();
                } else {
                    existingSwiper.autoplay.stop();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(sliderEl);
    }
});