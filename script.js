// ===== PREMIUM JAVASCRIPT FOR CONSTRUCTION COMPANY WEBSITE =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== TYPEWRITER EFFECT =====
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const messages = [
            "Building Excellence in South Sudan",
            "Your Trusted Construction Partner in Juba", 
            "Quality, Integrity, and Timely Delivery"
        ];
        
        let messageIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let cursorVisible = true;
        
        // Cursor blink animation
        setInterval(() => {
            if (cursorVisible) {
                typewriterElement.style.borderRightColor = 'transparent';
            } else {
                typewriterElement.style.borderRightColor = 'var(--gold)';
            }
            cursorVisible = !cursorVisible;
        }, 700);
        
        function typeWriter() {
            const currentMessage = messages[messageIndex];
            
            if (!isDeleting && charIndex < currentMessage.length) {
                typewriterElement.textContent += currentMessage.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else if (isDeleting && charIndex > 0) {
                typewriterElement.textContent = currentMessage.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeWriter, typingSpeed / 2);
            } else if (!isDeleting && charIndex === currentMessage.length) {
                isDeleting = true;
                setTimeout(typeWriter, 2000); // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                messageIndex = (messageIndex + 1) % messages.length;
                setTimeout(typeWriter, 500); // Pause before next message
            }
        }
        
        // Start typewriter after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // ===== MOBILE MENU FUNCTIONALITY =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const desktopNav = document.querySelector('.desktop-nav');
    
    if (mobileMenuBtn && desktopNav) {
        mobileMenuBtn.addEventListener('click', function() {
            desktopNav.classList.toggle('mobile-open');
            mobileMenuBtn.innerHTML = desktopNav.classList.contains('mobile-open') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
            
            // Toggle body scroll
            document.body.style.overflow = desktopNav.classList.contains('mobile-open') ? 'hidden' : '';
        });
        
        // Close mobile menu when clicking a link
        const navLinks = desktopNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (desktopNav.classList.contains('mobile-open')) {
                    desktopNav.classList.remove('mobile-open');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    document.body.style.overflow = '';
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.desktop-nav') && 
                !event.target.closest('.mobile-menu-btn') && 
                desktopNav.classList.contains('mobile-open')) {
                desktopNav.classList.remove('mobile-open');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = '';
            }
        });
        
        // Add mobile menu styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .desktop-nav.mobile-open {
                    display: block !important;
                    position: fixed;
                    top: 80px;
                    left: 0;
                    width: 100%;
                    height: calc(100vh - 80px);
                    background-color: var(--white);
                    padding: 2rem;
                    overflow-y: auto;
                    z-index: 1000;
                    animation: slideDown 0.3s ease-out;
                }
                
                .desktop-nav.mobile-open ul {
                    flex-direction: column;
                    gap: 1.5rem;
                }
                
                .desktop-nav.mobile-open ul li a {
                    font-size: 1.2rem;
                    padding: 0.8rem 0;
                    display: block;
                    border-bottom: 1px solid #eee;
                }
                
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Initial check
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        }
    }
    
    // ===== SCROLL ANIMATIONS =====
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkScroll() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('appear');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // ===== ACTIVE NAV LINK HIGHLIGHTING =====
    function highlightActiveNav() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.desktop-nav a');
        
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current page link
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            
            if (currentPage === '' || currentPage === 'index.html') {
                if (linkHref === 'index.html' || linkHref === '#home') {
                    link.classList.add('active');
                }
            } else if (linkHref === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    // Call on page load
    highlightActiveNav();
    
    // ===== FORM SUBMISSION =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            const service = document.getElementById('service') ? document.getElementById('service').value : 'General Inquiry';
            
            // Form validation
            if (!name || !phone || !message) {
                showNotification('Please fill in all required fields (Name, Phone, and Message).', 'error');
                return;
            }
            
            // Get submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                showNotification(`Thank you, ${name}! Your construction inquiry has been received. We will contact you at ${phone} within 24 hours.`, 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Notification function
    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: ${type === 'success' ? '#4CAF50' : '#f44336'};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 4px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                max-width: 400px;
                animation: slideInRight 0.3s ease-out;
                font-family: 'Lato', sans-serif;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.8rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                font-size: 1rem;
                padding: 0;
                width: 24px;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Add to page
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // ===== PORTFOLIO FILTERING =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter items
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // Trigger reflow for animation
                        void item.offsetWidth;
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // ===== FAQ TOGGLE =====
    const faqItems = document.querySelectorAll('.faq-item h4');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                answer.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
    
    // ===== BACK TO TOP BUTTON =====
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    document.body.appendChild(backToTopBtn);
    
    // Style the button
    Object.assign(backToTopBtn.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        backgroundColor: 'var(--gold)',
        color: 'var(--white)',
        border: 'none',
        borderRadius: '50%',
        fontSize: '1.2rem',
        cursor: 'pointer',
        opacity: '0',
        visibility: 'hidden',
        transition: 'var(--transition)',
        zIndex: '999',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });
    
    // Click event
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide based on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle same-page anchors
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===== PRELOADER =====
    // Add a simple preloader for better UX
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 500);
    });
    
    // Add preloader styles
    const preloaderStyle = document.createElement('style');
    preloaderStyle.textContent = `
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--white);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        body:not(.loaded)::after {
            content: '';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            border: 3px solid var(--beige);
            border-top-color: var(--gold);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            z-index: 10000;
        }
        
        @keyframes spin {
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }
    `;
    document.head.appendChild(preloaderStyle);
});
