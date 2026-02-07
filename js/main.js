// Scroll Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

// Sticky Header Logic
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    // Add transition class if not present
    if (!header.classList.contains('transition-all')) {
        header.classList.add('transition-all', 'duration-300');
    }

    if (window.scrollY > 50) {
        header.classList.add('bg-punk-black', 'border-b', 'border-white/20');
        header.classList.remove('bg-transparent');
    } else {
        header.classList.remove('bg-punk-black', 'border-b', 'border-white/20');
        header.classList.add('bg-transparent');
    }
});

// Mobile Menu logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            // Allow display:block to apply before changing opacity
            requestAnimationFrame(() => {
                mobileMenu.classList.remove('opacity-0', '-translate-y-5');
            });
            menuBtn.textContent = '✕';
        } else {
            mobileMenu.classList.add('opacity-0', '-translate-y-5');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            menuBtn.textContent = '☰';
        }
    });

    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('opacity-0', '-translate-y-5');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            menuBtn.textContent = '☰';
        });
    });
}
