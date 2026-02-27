// script.js – all interactive enhancements

document.addEventListener('DOMContentLoaded', function() {
  // ---------- typing animation ----------
  const typedTextSpan = document.getElementById('typing-text');
  if (typedTextSpan) {
    const textArray = ['Construction', 'Architecture', 'Logistics', 'Property Management'];
    let i = 0;
    let j = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
      if (i < textArray.length) {
        if (!isDeleting && j <= textArray[i].length) {
          currentText = textArray[i].substring(0, j);
          typedTextSpan.textContent = currentText;
          j++;
          setTimeout(type, 150);
        } else if (isDeleting && j >= 0) {
          currentText = textArray[i].substring(0, j);
          typedTextSpan.textContent = currentText;
          j--;
          setTimeout(type, 100);
        } else {
          if (!isDeleting) {
            isDeleting = true;
            setTimeout(type, 1000);
          } else {
            isDeleting = false;
            i = (i + 1) % textArray.length;
            j = 0;
            setTimeout(type, 400);
          }
        }
      }
    }
    type();
  }

  // ---------- navbar background on scroll ----------
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ---------- mobile menu toggle ----------
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');
  if (mobileMenu) {
    mobileMenu.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // ---------- mobile dropdown toggle (click on services parent) ----------
  const dropbtn = document.querySelectorAll('.dropbtn');
  dropbtn.forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const parent = this.closest('.dropdown');
        parent.classList.toggle('active');
        const dropdownContent = parent.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      }
    });
  });

  // ---------- scroll reveal (Intersection Observer) ----------
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(r => observer.observe(r));

  // ---------- smooth scrolling for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ---------- button ripple effect (premium touch) ----------
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = e.clientX - rect.left + 'px';
      ripple.style.top = e.clientY - rect.top + 'px';
      ripple.style.background = 'rgba(255,255,255,0.5)';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'scale(0)';
      ripple.style.width = ripple.style.height = '10px';
      ripple.style.animation = 'rippleAnim 0.5s linear';
      btn.style.position = 'relative';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });
  // add keyframe dynamically
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `@keyframes rippleAnim { to { transform: scale(20); opacity: 0; } }`;
  document.head.appendChild(styleSheet);

  // ---------- close mobile menu after clicking a link ----------
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });
});
