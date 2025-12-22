/* ===== PREMIUM CONSTRUCTION COMPANY STYLES ===== */
:root {
    --charcoal: #1a1a1a;
    --gold: #c5a15e;
    --gold-light: #d4b87a;
    --white: #ffffff;
    --beige: #f8f5f0;
    --beige-dark: #f0ebe2;
    --transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    --section-padding: 100px 0;
    --box-shadow: 0 25px 50px rgba(0, 0, 0, 0.08);
    --border-radius: 8px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--charcoal);
    background-color: var(--white);
    overflow-x: hidden;
    line-height: 1.7;
    font-weight: 300;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: var(--beige);
}

::-webkit-scrollbar-thumb {
    background: var(--gold);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--gold-light);
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1.2rem;
}

.container {
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-title {
    text-align: center;
    margin-bottom: 3.5rem;
    position: relative;
}

.section-title h2 {
    font-size: 3rem;
    display: inline-block;
    color: var(--charcoal);
    position: relative;
}

.section-title h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
}

.section-subtitle {
    text-align: center;
    color: #666;
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto 3rem;
    font-weight: 300;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2.5rem;
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    color: var(--white);
    border: none;
    border-radius: var(--border-radius);
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    text-align: center;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(135deg, var(--gold-light), var(--gold));
    transition: var(--transition);
    z-index: -1;
}

.btn:hover::before {
    width: 100%;
}

.btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(197, 161, 94, 0.3);
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--gold);
    color: var(--gold);
}

.btn-outline::before {
    background: var(--gold);
}

.btn-outline:hover {
    color: var(--white);
}

/* ===== PREMIUM HEADER ===== */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(26, 26, 26, 0.95);
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: var(--transition);
    backdrop-filter: blur(10px);
}

header.scrolled {
    background-color: rgba(26, 26, 26, 0.98);
    padding: 0.5rem 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    transition: var(--transition);
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
    text-decoration: none;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo span {
    color: var(--gold);
}

.logo-icon {
    color: var(--gold);
    font-size: 1.8rem;
}

.desktop-nav ul {
    display: flex;
    list-style: none;
    gap: 2.5rem;
}

.desktop-nav ul li {
    position: relative;
}

.desktop-nav ul li a {
    text-decoration: none;
    color: var(--white);
    font-weight: 500;
    font-size: 1.05rem;
    transition: var(--transition);
    position: relative;
    padding: 0.5rem 0;
}

.desktop-nav ul li a:hover {
    color: var(--gold);
}

.desktop-nav ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--gold);
    transition: var(--transition);
}

.desktop-nav ul li a:hover::after,
.desktop-nav ul li a.active::after {
    width: 100%;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
    color: var(--white);
    z-index: 1001;
}

/* ===== LUXURY HERO SECTION ===== */
.hero {
    height: 100vh;
    min-height: 800px;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--white);
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 1000px;
    padding: 0 2rem;
    z-index: 2;
    position: relative;
}

.hero h1 {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--white);
    line-height: 1.1;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.typewriter-container {
    min-height: 120px;
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

#typewriter {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--gold);
    border-right: 4px solid var(--gold);
    padding-right: 15px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.hero p {
    font-size: 1.4rem;
    margin-bottom: 3.5rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.9;
    font-weight: 300;
}

.hero-btns {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* ===== PAGE BACKGROUNDS ===== */
.page-hero {
    height: 50vh;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--white);
    position: relative;
    margin-top: 80px;
}

.page-hero-content {
    max-width: 800px;
    padding: 0 2rem;
    z-index: 2;
    position: relative;
}

.page-hero h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--white);
    line-height: 1.1;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.page-hero p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.9;
}

/* Specific background images for each page */
.about-page .page-hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover;
}

.services-page .page-hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover;
}

.portfolio-page .page-hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover;
}

.contact-page .page-hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover;
}

/* ===== SECTIONS ===== */
section {
    padding: var(--section-padding);
}

.bg-light {
    background-color: var(--beige);
}

/* About Section */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
}

.about-text h2 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
}

.about-text h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
}

.about-text p {
    margin-bottom: 1.5rem;
    color: #444;
    font-size: 1.1rem;
}

.about-features {
    margin-top: 3rem;
}

.feature {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
}

.feature-icon {
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    flex-shrink: 0;
    color: var(--white);
    font-size: 1.5rem;
    box-shadow: 0 10px 20px rgba(197, 161, 94, 0.2);
}

.feature-text h4 {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    color: var(--charcoal);
}

.feature-text p {
    color: #666;
    margin-bottom: 0;
}

.about-image {
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--box-shadow);
    position: relative;
    height: 600px;
}

.about-image::before {
    content: '';
    position: absolute;
    top: 30px;
    left: 30px;
    right: -30px;
    bottom: -30px;
    border: 2px solid var(--gold);
    border-radius: var(--border-radius);
    z-index: -1;
}

.about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;
}

.about-image:hover img {
    transform: scale(1.05);
}

/* Services Section */
.services-preview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    margin-bottom: 3rem;
}

.service-preview-card {
    background: var(--white);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
    transition: var(--transition);
    height: 100%;
}

.service-preview-card:hover {
    transform: translateY(-20px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}

.service-preview-icon {
    height: 200px;
    background: linear-gradient(135deg, var(--beige), var(--beige-dark));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gold);
    font-size: 4rem;
    transition: var(--transition);
}

.service-preview-card:hover .service-preview-icon {
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    color: var(--white);
}

.service-preview-content {
    padding: 2.5rem;
}

.service-preview-content h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--charcoal);
}

.service-preview-content p {
    color: #666;
    margin-bottom: 1.5rem;
}

.services-all-btn {
    text-align: center;
    margin-top: 4rem;
}

/* Portfolio Section */
.portfolio-preview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-bottom: 3rem;
}

.portfolio-preview-item {
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    background-color: var(--white);
    height: 100%;
}

.portfolio-preview-item:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
}

.portfolio-preview-image {
    height: 250px;
    overflow: hidden;
}

.portfolio-preview-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
}

.portfolio-preview-item:hover .portfolio-preview-image img {
    transform: scale(1.1);
}

.portfolio-preview-content {
    padding: 2rem;
}

.portfolio-preview-content h3 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    color: var(--charcoal);
}

.portfolio-preview-content p {
    color: #666;
    margin-bottom: 1.2rem;
}

.portfolio-preview-meta {
    display: flex;
    justify-content: space-between;
    color: var(--gold);
    font-weight: 600;
    font-size: 0.9rem;
}

.portfolio-all-btn {
    text-align: center;
    margin-top: 4rem;
}

/* CTA Section */
.cta-section {
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover;
    padding: 120px 0;
    text-align: center;
    color: var(--white);
    position: relative;
}

.cta-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.cta-content h2 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: var(--white);
}

.cta-content p {
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* ===== SERVICES PAGE ===== */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.service-card {
    background: var(--white);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
    transition: var(--transition);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.service-card:hover {
    transform: translateY(-20px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
}

.service-icon {
    height: 180px;
    background: linear-gradient(135deg, var(--beige), var(--beige-dark));
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gold);
    font-size: 4rem;
    transition: var(--transition);
}

.service-card:hover .service-icon {
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    color: var(--white);
}

.service-content {
    padding: 2.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.service-content h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--charcoal);
}

.service-content p {
    color: #666;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

/* ===== PORTFOLIO PAGE ===== */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 3rem;
    margin-top: 3rem;
}

.portfolio-item {
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    background-color: var(--white);
    height: 100%;
}

.portfolio-item:hover {
    transform: translateY(-15px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
}

.portfolio-image {
    height: 280px;
    overflow: hidden;
}

.portfolio-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease;
}

.portfolio-item:hover .portfolio-image img {
    transform: scale(1.1);
}

.portfolio-content {
    padding: 2.5rem;
}

.portfolio-content h3 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: var(--charcoal);
}

.portfolio-content p {
    color: #666;
    margin-bottom: 1.5rem;
}

.portfolio-meta {
    display: flex;
    justify-content: space-between;
    color: var(--gold);
    font-weight: 600;
    font-size: 0.95rem;
}

/* ===== CONTACT PAGE ===== */
.contact-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 5rem;
}

.contact-info h3 {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
    position: relative;
    display: inline-block;
}

.contact-info h3::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
}

.contact-details {
    margin-bottom: 3rem;
}

.contact-detail {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

.contact-detail i {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    color: var(--white);
    font-size: 1.5rem;
    flex-shrink: 0;
    box-shadow: 0 10px 20px rgba(197, 161, 94, 0.2);
}

.contact-detail-text h4 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: var(--charcoal);
}

.contact-detail-text p {
    color: #666;
    font-size: 1.1rem;
}

.whatsapp-btn {
    background: linear-gradient(135deg, #25D366, #1DA851);
    color: white;
    display: inline-flex;
    align-items: center;
    padding: 1.2rem 2.5rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    font-size: 1.1rem;
    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.2);
}

.whatsapp-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(37, 211, 102, 0.3);
}

.whatsapp-btn i {
    margin-right: 12px;
    font-size: 1.5rem;
}

.contact-form {
    background: var(--white);
    padding: 3.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

.contact-form h3 {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
    position: relative;
    display: inline-block;
}

.contact-form h3::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 70px;
    height: 4px;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
}

.form-group {
    margin-bottom: 2rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.8rem;
    font-weight: 600;
    color: var(--charcoal);
    font-size: 1.1rem;
}

.form-control {
    width: 100%;
    padding: 1.2rem 1.5rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    transition: var(--transition);
    background-color: var(--beige);
}

.form-control:focus {
    outline: none;
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(197, 161, 94, 0.2);
    background-color: var(--white);
}

textarea.form-control {
    min-height: 180px;
    resize: vertical;
}

.map-container {
    margin-top: 5rem;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--box-shadow);
    height: 400px;
}

.map-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80') no-repeat center center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
}

.map-placeholder-content {
    text-align: center;
    padding: 2rem;
}

.map-placeholder h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--white);
}

.map-placeholder p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

/* ===== FOOTER ===== */
footer {
    background-color: var(--charcoal);
    color: #aaa;
    padding: 5rem 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 4rem;
    margin-bottom: 3rem;
}

.footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 1.5rem;
    display: block;
    text-decoration: none;
}

.footer-logo span {
    color: var(--gold);
}

.footer-about p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.05rem;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.social-link {
    width: 45px;
    height: 45px;
    background-color: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    text-decoration: none;
    transition: var(--transition);
    font-size: 1.2rem;
}

.social-link:hover {
    background-color: var(--gold);
    transform: translateY(-5px);
}

.footer-links h4, .footer-contact h4 {
    color: var(--white);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
}

.footer-links h4::after, .footer-contact h4::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
}

.footer-links ul {
    list-style: none;
}

.footer-links ul li {
    margin-bottom: 1rem;
}

.footer-links ul li a {
    color: #aaa;
    text-decoration: none;
    transition: var(--transition);
    font-size: 1.05rem;
    display: flex;
    align-items: center;
}

.footer-links ul li a:hover {
    color: var(--gold);
    padding-left: 10px;
}

.footer-links ul li a i {
    margin-right: 10px;
    color: var(--gold);
}

.footer-contact p {
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    font-size: 1.05rem;
}

.footer-contact i {
    color: var(--gold);
    margin-right: 15px;
    width: 25px;
    font-size: 1.2rem;
}

.footer-bottom {
    text-align: center;
    padding-top: 3rem;
    border-top: 1px solid #333;
    font-size: 1rem;
    color: #888;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1200px) {
    .hero h1 {
        font-size: 4rem;
    }
    
    #typewriter {
        font-size: 3rem;
    }
    
    .page-hero h1 {
        font-size: 3.5rem;
    }
}

@media (max-width: 992px) {
    .desktop-nav {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .mobile-nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 300px;
        height: 100vh;
        background-color: var(--charcoal);
        box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transition: var(--transition);
        padding: 6rem 2.5rem 2.5rem;
        overflow-y: auto;
    }

    .mobile-nav.active {
        right: 0;
    }

    .mobile-nav ul {
        list-style: none;
    }

    .mobile-nav ul li {
        margin-bottom: 1.5rem;
    }

    .mobile-nav ul li a {
        text-decoration: none;
        color: var(--white);
        font-size: 1.3rem;
        font-weight: 500;
        display: block;
        padding: 0.8rem 0;
        border-bottom: 1px solid #333;
        transition: var(--transition);
        display: flex;
        align-items: center;
    }

    .mobile-nav ul li a i {
        margin-right: 15px;
        color: var(--gold);
        font-size: 1.2rem;
    }

    .mobile-nav ul li a:hover,
    .mobile-nav ul li a.active {
        color: var(--gold);
        padding-left: 15px;
    }

    .hero {
        min-height: 700px;
    }

    .hero h1, #typewriter {
        font-size: 3rem;
    }

    .typewriter-container {
        min-height: 100px;
    }

    .hero p {
        font-size: 1.2rem;
    }

    .about-content {
        grid-template-columns: 1fr;
        gap: 4rem;
    }

    .about-image {
        order: -1;
        height: 500px;
    }

    .section-title h2 {
        font-size: 2.5rem;
    }

    .contact-container {
        grid-template-columns: 1fr;
    }
    
    .cta-content h2 {
        font-size: 2.8rem;
    }
}

@media (max-width: 768px) {
    .hero h1, #typewriter {
        font-size: 2.5rem;
    }

    .typewriter-container {
        min-height: 85px;
    }

    .hero-btns {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 280px;
    }

    .services-preview, .portfolio-preview {
        grid-template-columns: 1fr;
    }
    
    .services-grid, .portfolio-grid {
        grid-template-columns: 1fr;
    }
    
    .page-hero h1 {
        font-size: 2.8rem;
    }
    
    .contact-form {
        padding: 2.5rem;
    }
    
    .cta-content h2 {
        font-size: 2.2rem;
    }
}

@media (max-width: 576px) {
    .hero h1, #typewriter {
        font-size: 2.2rem;
    }

    .typewriter-container {
        min-height: 75px;
    }
    
    .hero p {
        font-size: 1.1rem;
    }
    
    .section-title h2 {
        font-size: 2rem;
    }
    
    .about-text h2 {
        font-size: 2.2rem;
    }
    
    .feature {
        flex-direction: column;
        text-align: center;
    }
    
    .feature-icon {
        margin-right: 0;
        margin-bottom: 1.5rem;
        align-self: center;
    }
    
    .page-hero {
        height: 40vh;
        min-height: 400px;
    }
    
    .page-hero h1 {
        font-size: 2.2rem;
    }
}

/* ===== ANIMATION CLASSES ===== */
.fade-in {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.appear {
    opacity: 1;
    transform: translateY(0);
}

/* Particle Background */
.particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.particle {
    position: absolute;
    background-color: var(--gold);
    border-radius: 50%;
    opacity: 0.1;
    animation: float 15s infinite linear;
}

@keyframes float {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0.1;
    }
    50% {
        opacity: 0.2;
    }
    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
    }
}
