// ---------- Dark Mode Toggle (Minimal-Version) ----------
console.log('✅ Skript wurde geladen!');

const toggleBtn = document.getElementById('theme-toggle');
console.log('🔍 Button gefunden?', toggleBtn);

if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        console.log('🔄 Dark Mode toggled!', document.body.classList.contains('dark'));
        
        if (document.body.classList.contains('dark')) {
            this.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            this.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
} else {
    console.error('❌ Button mit ID "theme-toggle" nicht gefunden!');
}

// Dark Mode beim Laden wiederherstellen
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = '☀️';
}
