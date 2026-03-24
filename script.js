// Vortex Global — Shared JavaScript

// Mobile nav toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Scroll-triggered animations
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.anim').forEach(el => observer.observe(el));
}

// Contact form submit handler
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('successMsg').style.display = 'block';
}

// Close nav on link click (mobile)
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('open');
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.style.background = 'rgba(8,12,16,0.98)';
    } else {
      navbar.style.background = 'rgba(8,12,16,0.92)';
    }
  });
});
