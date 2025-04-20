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

let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
let currentRating = 0;
let currentLikedReviewId = null;

function displayReviews() {
    const reviewList = document.getElementById('reviewList');
    reviewList.innerHTML = '';

    const sortedReviews = [...reviews].reverse();

    sortedReviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item';

        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += i <= review.rating ? '★' : '☆';
        }

        reviewElement.innerHTML = `
            <div class="review-header">
                <div class="review-author">${review.name}</div>
                <div class="review-date">${review.date}</div>
            </div>
            <div class="review-rating">${stars}</div>
            <div class="review-text">${review.text}</div>
            <div class="review-actions">
                <span class="review-likes">${review.likes} likes</span>
                <button class="like-btn" data-id="${review.id}">Like</button>
                <button class="dislike-btn" data-id="${review.id}">Dislike</button>
                <button class="delete-btn" data-id="${review.id}">Delete</button>
            </div>
        `;

        reviewList.appendChild(reviewElement);
    });

    document.querySelectorAll('.like-btn').forEach(button => {
        button.addEventListener('click', handleLike);
    });

    document.querySelectorAll('.dislike-btn').forEach(button => {
        button.addEventListener('click', handleDislike);
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', handleDelete);
    });
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleDateString('sq-AL', options);
}

document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const text = document.getElementById('reviewText').value;
    const rating = currentRating;

    if (!name || !text || rating === 0) {
        showNotification('Ju lutem plotësoni të gjitha fushat dhe vlerësimin');
        return;
    }

    const newReview = {
        id: Date.now().toString(),
        name: name,
        text: text,
        rating: rating,
        date: formatDate(new Date()),
        likes: 0,
        timestamp: Date.now()
    };

    reviews.push(newReview);
    localStorage.setItem('reviews', JSON.stringify(reviews));

    document.getElementById('reviewForm').reset();
    resetStarRating();

    displayReviews();
    showNotification('Review u shtua me sukses!');

    reviewList.scrollTop = reviewList.scrollHeight;
});

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        const value = parseInt(this.getAttribute('data-value'));
        document.getElementById('rating').value = value;
        currentRating = value;

        document.querySelectorAll('.star').forEach((s, index) => {
            if (index < value) {
                s.classList.add('selected');
            } else {
                s.classList.remove('selected');
            }
        });
    });
});

function resetStarRating() {
    currentRating = 0;
    document.getElementById('rating').value = 0;
    document.querySelectorAll('.star').forEach(s => {
        s.classList.remove('selected');
    });
}

function handleLike(e) {
    const reviewId = e.target.getAttribute('data-id');
    currentLikedReviewId = reviewId;

    const modal = document.getElementById('feedbackModal');
    modal.style.display = 'flex';
}

function handleDislike(e) {
    const reviewId = e.target.getAttribute('data-id');
    showNotification('Faleminderit për feedback-un!');
}

function handleDelete(e) {
    const reviewId = e.target.getAttribute('data-id');
    reviews = reviews.filter(review => review.id !== reviewId);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    displayReviews();
    showNotification('Review u fshi me sukses!');
}

document.getElementById('yesBtn').addEventListener('click', function() {
    if (currentLikedReviewId) {
        const reviewIndex = reviews.findIndex(review => review.id === currentLikedReviewId);
        if (reviewIndex !== -1) {
            reviews[reviewIndex].likes += 1;
            localStorage.setItem('reviews', JSON.stringify(reviews));
            displayReviews();
        }
    }

    document.getElementById('feedbackModal').style.display = 'none';
    showNotification('Faleminderit për vlerësimin!');
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('feedbackModal').style.display = 'none';
    showNotification('Faleminderit për feedback-un!');
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

if (reviews.length === 0) {
    for (let i = 1; i <= 10; i++) {
        reviews.push({
            id: `test-${i}`,
            name: `Përdorues: ${i}`,
            text: `Kjo eshte nje review nga ${i}.`,
            rating: Math.floor(Math.random() * 5) + 1,
            date: formatDate(new Date(Date.now() - i * 86400000)),
            likes: Math.floor(Math.random() * 10),
            timestamp: Date.now() - i * 86400000
        });
    }
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

displayReviews();