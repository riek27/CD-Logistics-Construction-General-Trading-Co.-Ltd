// ----- script.js - clean and functional -----

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // ========== MOBILE MENU TOGGLE ==========
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.createElement('div'); // Create overlay dynamically

    if (hamburger && navLinks) {
        // Setup overlay
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);

        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            // Change icon (optional)
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on overlay
        overlay.addEventListener('click', function() {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });

        // Close menu when a nav link is clicked (for better UX)
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ========== GALLERY LIGHTBOX ==========
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (lightbox && lightboxImg && closeBtn && galleryItems.length > 0) {
        // Open lightbox on gallery item click
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt;
                    lightbox.classList.add('active');
                }
            });
        });

        // Close lightbox functions
        const closeLightbox = function() {
            lightbox.classList.remove('active');
            lightboxImg.src = ''; // Clear src to stop loading if any
        };

        closeBtn.addEventListener('click', closeLightbox);

        // Close on overlay click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // ========== FORM SUBMISSION PREVENTION (optional) ==========
    // Prevents actual submit for demo; remove or modify for backend integration
    const inquiryForm = document.getElementById('inquiryForm');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry. We will contact you soon!');
            // Optionally, you can add AJAX fetch here to send data to a server
            inquiryForm.reset(); // Clear form after submission
        });
    }

    // ========== HIGHLIGHT ACTIVE PAGE IN NAV (already set in HTML, but ensure) ==========
    // No extra code needed because each page has 'active' class manually set in HTML.
    // However, if you want to dynamically set based on URL (for single page app), uncomment below:
    /*
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav-links a');
    navLinksAll.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    */

    // ========== SMOOTH SCROLL FOR ANCHOR LINKS (if any) ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== "#" && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
