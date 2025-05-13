document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
    } else {
        alert('Please fill in all fields.');
    }
});
// button cv
function downloadCV() {
    // Replace with the path to your CV file
    
    const cvUrl = 'HarshVardhanResume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'your-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar .nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
