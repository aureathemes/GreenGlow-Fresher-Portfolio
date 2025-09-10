// Mobile menu functionality
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simulate typing effect in terminal
const terminalContent = document.querySelector('.terminal-content');
const cursor = document.querySelector('.terminal-cursor');

// Add animation for floating particles
document.querySelectorAll('.particle').forEach(particle => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomSize = Math.random() * 3 + 2;
    const randomDuration = Math.random() * 30 + 20;
    
    particle.style.width = `${randomSize}px`;
    particle.style.height = `${randomSize}px`;
    particle.style.animation = `float ${randomDuration}s infinite ease-in-out`;
    
    function float() {
        particle.style.transform = `translate(${Math.sin(Date.now() / 1000) * 20}px, ${Math.cos(Date.now() / 1500) * 20}px)`;
        requestAnimationFrame(float);
    }
    
    float();
});
