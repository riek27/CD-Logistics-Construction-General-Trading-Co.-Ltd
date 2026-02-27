// script.js
document.addEventListener('DOMContentLoaded', function() {
  // ========== TYPING ANIMATION ==========
  const typedSpan = document.getElementById('typed-text');
  if (typedSpan) {
    const phrases = [
      "Residential Construction",
      "Commercial Construction",
      "Architectural & Engineering Design",
      "Logistics & Supply Chain",
      "Renovation & Remodeling",
      "Interior Decoration",
      "Maintenance Services",
      "Property Management"
    ];
    let i = 0, j = 0, currentPhrase = [];
    let isDeleting = false;

    function typeLoop() {
      if (!typedSpan) return;
      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase = phrases[i].substring(0, j);
          typedSpan.textContent = currentPhrase;
          j++;
        }
        if (isDeleting && j <= phrases[i].length) {
          currentPhrase = phrases[i].substring(0, j - 1);
          typedSpan.textContent = currentPhrase;
          j--;
        }
        if (j === phrases[i].length + 1) {
          isDeleting = true;
          setTimeout(typeLoop, 1500);
          return;
        }
        if (isDeleting && j === 0) {
          isDeleting = false;
          i++;
          if (i === phrases.length) i = 0;
        }
      }
      setTimeout(typeLoop, 120);
    }
    typeLoop();
  }

  // ========== MOBILE HAMBURGER MENU ==========
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      // Animate bars
      const bars = hamburger.querySelectorAll('.bar');
      bars.forEach(bar => bar.classList.toggle('active'));
    });
  }

  // ========== STICKY NAVBAR SHRINK ==========
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    });
  }

  // ========== SERVICES DROPDOWN TOGGLE ==========
  const dropdownBtn = document.getElementById('serviceDropdownToggle');
  const dropdownMenu = document.getElementById('serviceDropdownMenu');
  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle('show');
    });
    // Close if clicked outside
    document.addEventListener('click', (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  }

  // ========== FADE-IN ON SCROLL (Intersection Observer) ==========
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));

  // ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ========== ACTIVE NAVIGATION HIGHLIGHT ==========
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
