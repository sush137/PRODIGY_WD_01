const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text h1');
    const imageElement = document.querySelector('.image img');

    
    textElement.textContent = 'Constructing The';
    imageElement.src = 'construction-image1';
    imageElement.alt = 'Image';
});
