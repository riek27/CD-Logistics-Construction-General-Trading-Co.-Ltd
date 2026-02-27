(function() {
  // ===== TYPING ANIMATION (only on home) =====
  const typedSpan = document.getElementById('typed-text');
  if (typedSpan) {
    const phrases = [
      "Construction Works.",
      "Architectural Design.",
      "Logistics & Supply Chain.",
      "Renovation & Remodeling.",
      "Interior Decoration.",
      "Property Management."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    function typeEffect() {
      const fullText = phrases[phraseIndex];
      if (isDeleting) {
        currentText = fullText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = fullText.substring(0, charIndex + 1);
        charIndex++;
      }
      typedSpan.textContent = currentText;

      if (!isDeleting && charIndex === fullText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
      }
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 300);
        return;
      }
      const speed = isDeleting ? 60 : 100;
      setTimeout(typeEffect, speed);
    }
    typeEffect();
  }

  // ===== HEADER SCROLL EFFECT =====
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      scrollTopBtn?.classList.add('show');
    } else {
      scrollTopBtn?.classList.remove('show');
    }
  });

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== SCROLL TO TOP =====
  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== MOBILE MENU TOGGLE =====
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      // animate hamburger
      const spans = hamburger.querySelectorAll('span');
      spans.forEach(span => span.classList.toggle('active'));
    });
  }

  // ===== ACCORDION FOR SERVICES PAGE =====
  const serviceHeaders = document.querySelectorAll('.service-detail-header');
  serviceHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.classList.toggle('open');
    });
  });

  // ===== PARALLAX EFFECT ON HERO =====
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
      const scrolled = window.scrollY;
      hero.style.backgroundPositionY = scrolled * 0.3 + 'px';
    }
  });
})();
