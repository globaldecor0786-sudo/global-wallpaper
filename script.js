// Smooth scrolling for any future navigation (if added)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// WhatsApp button functionality (already handled via href, but adding a click event for analytics if needed)
document.getElementById('whatsapp-btn').addEventListener('click', function() {
    // Optional: Track clicks or add custom behavior here
    console.log('WhatsApp button clicked');
});