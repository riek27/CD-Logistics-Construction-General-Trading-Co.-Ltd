// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Typing animation
  const typedSpan = document.getElementById('typed-text');
  if(typedSpan) {
    const phrases = [
      "Residential Construction", "Commercial Construction",
      "Architectural & Engineering Design", "Logistics & Supply Chain",
      "Renovation & Remodeling", "Interior Decoration",
      "Maintenance Services", "Property Management"
    ];
    let i = 0, j = 0, currentPhrase = [], isDeleting = false;
    
    function loop() {
      if(!typedSpan) return;
      if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase = phrases[i].substring(0, j);
          typedSpan.textContent = currentPhrase;
          j++;
        }
        if (isDeleting && j <= phrases[i].length) {
          currentPhrase = phrases[i].substring(0, j-1);
          typedSpan.textContent = currentPhrase;
          j--;
        }
        if (j === phrases[i].length + 1) {
          isDeleting = true;
        }
        if (isDeleting && j === 0) {
          isDeleting = false;
          i++;
          if (i === phrases.length) i = 0;
        }
      }
      setTimeout(loop, 150);
    }
    loop();
  }

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if(hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Sticky navbar shrink
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  });

  // Services dropdown toggle (services.html)
  const dropdownBtn = document.getElementById('serviceDropdownToggle');
  const dropdownMenu = document.getElementById('serviceDropdownMenu');
  if(dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownMenu.classList.toggle('show');
    });
    // Close if clicked outside (optional)
    document.addEventListener('click', (e) => {
      if(!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  }

  // Fade-in on scroll (Intersection Observer)
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

  // Smooth scrolling for internal links (optional)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
