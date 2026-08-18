// ---------- Dark Mode Toggle ----------
const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Dark Mode beim Laden wiederherstellen
if (currentTheme === 'dark') {
    document.body.classList.add('dark');
    toggleBtn.textContent = '☀️';
} else {
    document.body.classList.remove('dark');
    toggleBtn.textContent = '🌙';
}

// Toggle-Funktion
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        toggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// ---------- Smooth Scrolling ----------
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ---------- Typewriter-Effekt ----------
const typewriterElement = document.getElementById('typewriter');
const texts = [
    '> Initializing Bewerbung ...',
    '> Ziel: Ausbildung FiSi 2026',
    '> Bereit für neue Herausforderungen'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = false;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let speed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        speed = 2000;
        isWaiting = true;
        setTimeout(() => {
            isDeleting = true;
            isWaiting = false;
        }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        speed = 500;
    }
    
    if (!isWaiting) {
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(typeEffect, 100);
    }
}

// Typewriter starten
typeEffect();

console.log('🚀 Tareks Bewerbungsseite ist bereit!');
