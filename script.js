// ===================================
// IRONCORE — Elite Minimal Variant
// Core Interactivity
// ===================================

// ---- Sticky navbar background on scroll ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- Mobile menu toggle ----
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ---- Scroll-reveal animation ----
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ---- Contact form validation (used on contact.html) ----
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formStatus = document.getElementById('formStatus');

    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    [name, email, message].forEach(field => field.classList.remove('border-iron'));

    if (name.value.trim().length < 2) {
      name.classList.add('border-iron');
      isValid = false;
    }
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add('border-iron');
      isValid = false;
    }
    if (message.value.trim().length < 10) {
      message.classList.add('border-iron');
      isValid = false;
    }

    if (isValid) {
      formStatus.textContent = "Thanks — we'll get back to you within 24 hours.";
      formStatus.classList.remove('hidden', 'text-iron');
      formStatus.classList.add('text-gold');
      contactForm.reset();
    } else {
      formStatus.textContent = "Please check the highlighted fields.";
      formStatus.classList.remove('hidden', 'text-gold');
      formStatus.classList.add('text-iron');
    }
  });
}