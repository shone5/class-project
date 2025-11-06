// Simple form submission alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting Velocity Bikes! We will reach out soon.');
});

// Buy Now button interaction
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Thank you for your interest! Our sales team will contact you shortly.');
    });
});
