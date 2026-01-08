// ==========================================
// MAIN JAVASCRIPT - PORTFOLIO WEBSITE
// ==========================================

// ==========================================
// SMOOTH SCROLL & NAVIGATION
// ==========================================

// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll('.nav-link');
if (navLinks.length > 0 && hamburger && navMenu) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ==========================================
// NEWS TICKER
// ==========================================

function initializeTicker() {
    const tickerContent = document.getElementById('ticker-content');
    if (!tickerContent || typeof tickerItems === 'undefined') return;
    
    // Create ticker items HTML
    let tickerHTML = '';
    tickerItems.forEach(item => {
        tickerHTML += `
            <div class="ticker-item">
                <i class="fas ${item.icon}"></i>
                <span>${item.text}</span>
            </div>
        `;
    });
    
    // Duplicate for seamless loop
    tickerContent.innerHTML = tickerHTML + tickerHTML;
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ==========================================
// PORTFOLIO - GITHUB AUTO-FETCH
// ==========================================

function initializePortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;
    
    const GITHUB_USERNAME = 'nraj-dataanalytics';
    const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`;
    const CACHE_KEY = 'github_projects_cache';
    const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    let allProjects = [];
    let currentFilter = 'all';
    
    // Get cached repos
    function getCachedRepos() {
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            if (!cached) return null;
            
            const { repos, timestamp } = JSON.parse(cached);
            const now = Date.now();
            
            if (now - timestamp < CACHE_DURATION) {
                return repos;
            }
            
            localStorage.removeItem(CACHE_KEY);
            return null;
        } catch (error) {
            console.error('Cache read error:', error);
            return null;
        }
    }
    
    // Save to cache
    function cacheRepos(repos) {
        try {
            const cacheData = {
                repos: repos,
                timestamp: Date.now()
            };
            localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
        } catch (error) {
            console.error('Cache write error:', error);
        }
    }
    
    // Determine category from repo data
    function determineCategory(repo) {
        const overrides = typeof githubProjectOverrides !== 'undefined' ? githubProjectOverrides : {};
        
        // Check override first
        if (overrides[repo.name] && overrides[repo.name].category) {
            return overrides[repo.name].category;
        }
        
        const language = (repo.language || '').toLowerCase();
        const name = (repo.name || '').toLowerCase();
        const desc = (repo.description || '').toLowerCase();
        const combined = `${name} ${desc}`;
        
        // SQL
        if (language.includes('sql') || language.includes('plpgsql') || 
            combined.includes('sql') || combined.includes('database')) {
            return 'sql';
        }
        
        // Machine Learning
        if (language.includes('python') || language.includes('jupyter') ||
            combined.includes('machine learning') || combined.includes('ml') ||
            combined.includes('neural') || combined.includes('model') ||
            combined.includes('prediction') || combined.includes('classification')) {
            return 'machine-learning';
        }
        
        // Dashboards
        if (combined.includes('power bi') || combined.includes('powerbi') ||
            combined.includes('tableau') || combined.includes('dashboard') ||
            combined.includes('visualization') || combined.includes('analytics dashboard')) {
            return 'dashboards';
        }
        
        // Cloud
        if (combined.includes('aws') || combined.includes('azure') ||
            combined.includes('cloud') || combined.includes('docker') ||
            combined.includes('kubernetes') || combined.includes('gcp')) {
            return 'cloud';
        }
        
        // Default: no specific category (shows only in "All")
        return null;
    }
    
    // Prettify repo name
    function prettifyName(name) {
        return name
            .replace(/[-_]/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
    
    // Build project object from repo
    function buildProject(repo) {
        const overrides = typeof githubProjectOverrides !== 'undefined' ? githubProjectOverrides : {};
        const override = overrides[repo.name] || {};
        
        return {
            name: repo.name,
            title: override.title || prettifyName(repo.name),
            description: override.description || repo.description || 'GitHub repository',
            image: override.image || `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
            tags: override.tags || (repo.language ? [repo.language, 'GitHub'] : ['GitHub']),
            category: override.category || determineCategory(repo),
            github: repo.html_url,
            demo: (repo.homepage && repo.homepage.trim() !== '') ? repo.homepage : null
        };
    }
    
    // Get themed background image based on project name/description
    function getThemedBackground(project) {
        const name = project.name.toLowerCase();
        const desc = project.description.toLowerCase();
        const combined = `${name} ${desc}`;
        
        // Weather-related
        if (combined.includes('weather') || combined.includes('climate')) {
            return 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop';
        }
        
        // Google Trends, Analytics, Insights
        if (combined.includes('google') || combined.includes('trend') || combined.includes('analytics insights')) {
            return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop';
        }
        
        // Customer, Behavior, Segmentation, CRM
        if (combined.includes('customer') || combined.includes('behavior') || combined.includes('segmentation') || combined.includes('crm')) {
            return 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=300&fit=crop';
        }
        
        // E-commerce, Sales, Retail
        if (combined.includes('ecommerce') || combined.includes('e-commerce') || combined.includes('sales') || combined.includes('retail')) {
            return 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=300&fit=crop';
        }
        
        // Dashboard, BI, Visualization
        if (combined.includes('dashboard') || combined.includes('visualization') || combined.includes('power bi') || combined.includes('tableau')) {
            return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop';
        }
        
        // Data Science, ML, AI
        if (combined.includes('machine learning') || combined.includes('ml') || combined.includes('ai') || combined.includes('neural')) {
            return 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop';
        }
        
        // Cloud, AWS, Azure
        if (combined.includes('cloud') || combined.includes('aws') || combined.includes('azure') || combined.includes('docker')) {
            return 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=300&fit=crop';
        }
        
        // Database, SQL
        if (combined.includes('database') || combined.includes('sql') || combined.includes('data warehouse')) {
            return 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop';
        }
        
        // Default: abstract data/tech background
        return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop';
    }
    
    // Create project card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        
        const backgroundImage = getThemedBackground(project);
        
        const imageHTML = `
            <div class="portfolio-image-container" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url('${backgroundImage}'); background-size: cover; background-position: center;">
            </div>
        `;
        
        const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
        
        const buttonsHTML = [];
        if (project.github) {
            buttonsHTML.push(`<a href="${project.github}" target="_blank" class="portfolio-btn"><i class="fab fa-github"></i> GitHub</a>`);
        }
        if (project.demo) {
            buttonsHTML.push(`<a href="${project.demo}" target="_blank" class="portfolio-btn portfolio-btn-primary"><i class="fas fa-external-link-alt"></i> Demo</a>`);
        }
        
        card.innerHTML = `
            ${imageHTML}
            <div class="portfolio-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="portfolio-tags">${tagsHTML}</div>
                ${buttonsHTML.length > 0 ? `<div class="portfolio-buttons">${buttonsHTML.join('')}</div>` : ''}
            </div>
        `;
        
        return card;
    }
    
    // Display projects
    function displayProjects(filter = 'all') {
        portfolioGrid.innerHTML = '';
        
        const filtered = filter === 'all' 
            ? allProjects 
            : allProjects.filter(project => project.category === filter);
        
        if (filtered.length === 0) {
            portfolioGrid.innerHTML = '<p style="text-align: center; padding: 3rem; color: #6b7280; grid-column: 1 / -1;">No projects found in this category.</p>';
            return;
        }
        
        filtered.forEach((project, index) => {
            const card = createProjectCard(project);
            card.style.animationDelay = `${index * 0.05}s`;
            portfolioGrid.appendChild(card);
        });
    }
    
    // Handle error
    function handleError(error) {
        console.error('GitHub fetch error:', error);
        portfolioGrid.innerHTML = '<p style="text-align: center; padding: 3rem; color: #991b1b; grid-column: 1 / -1;">Unable to load projects right now. Please check back soon.</p>';
    }
    
    // Fetch GitHub repos
    async function fetchGitHubRepos() {
        // Try cache first
        const cachedRepos = getCachedRepos();
        if (cachedRepos) {
            console.log('Using cached GitHub repos');
            processRepos(cachedRepos);
            return;
        }
        
        // Show loading
        portfolioGrid.innerHTML = '<p style="text-align: center; padding: 3rem; color: #6b7280; grid-column: 1 / -1;">Loading projects...</p>';
        
        try {
            const response = await fetch(GITHUB_API);
            
            if (!response.ok) {
                throw new Error(`GitHub API returned ${response.status}`);
            }
            
            const repos = await response.json();
            
            // Cache the repos
            cacheRepos(repos);
            
            // Process
            processRepos(repos);
            
        } catch (error) {
            handleError(error);
        }
    }
    
    // Process repos into projects
    function processRepos(repos) {
        // Filter repos
        const filteredRepos = repos.filter(repo => {
            if (repo.fork) return false;
            if (repo.archived) return false;
            if (repo.name === `${GITHUB_USERNAME}.github.io`) return false;
            return true;
        });
        
        // Build projects
        allProjects = filteredRepos.map(repo => buildProject(repo));
        
        // Display
        displayProjects(currentFilter);
    }
    
    // Filter button listeners
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentFilter = button.dataset.filter;
                displayProjects(currentFilter);
            });
        });
    }
    
    // Initialize
    fetchGitHubRepos();
}

// ==========================================
// BLOG SECTION
// ==========================================

function initializeBlog() {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid || typeof blogData === 'undefined') return;
    
    const postsToShow = blogData.slice(0, 3);
    
    postsToShow.forEach((post, index) => {
        const card = createBlogCard(post);
        card.style.animationDelay = `${index * 0.1}s`;
        blogGrid.appendChild(card);
    });
}

function createBlogCard(post) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    
    const blogUrl = `blog-${post.slug}.html`;
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    const imageHTML = post.image 
        ? `<img src="${post.image}" alt="${post.title}" loading="lazy" style="width: 100%; height: 200px; object-fit: cover;">`
        : `<div class="blog-placeholder"><i class="fas fa-blog"></i></div>`;
    
    card.innerHTML = `
        ${imageHTML}
        <div class="blog-content">
            <div class="blog-meta">
                <span class="blog-date">${formattedDate}</span>
                <span class="blog-reading-time">${post.readingTime}</span>
            </div>
            <div class="blog-categories">
                ${post.categories.map(cat => `<span>${cat}</span>`).join('')}
            </div>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <a href="${blogUrl}" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    
    return card;
}

// ==========================================
// CERTIFICATIONS SECTION
// ==========================================

let showingAllCertifications = false;

function initializeCertifications() {
    const certificationsGrid = document.getElementById('certifications-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const modal = document.getElementById('certificate-modal');
    
    if (!certificationsGrid || typeof certificationsData === 'undefined') return;
    
    const featured = certificationsData.filter(cert => cert.featured);
    const others = certificationsData.filter(cert => !cert.featured);
    
    // Display initial certifications (featured only)
    displayCertifications(featured);
    
    // Show load more button if there are additional certifications
    if (others.length > 0 && loadMoreBtn) {
        loadMoreBtn.parentElement.style.display = 'block';
        
        loadMoreBtn.addEventListener('click', () => {
            if (!showingAllCertifications) {
                displayCertifications([...featured, ...others]);
                loadMoreBtn.textContent = 'Show Less';
                showingAllCertifications = true;
            } else {
                certificationsGrid.innerHTML = '';
                displayCertifications(featured);
                loadMoreBtn.textContent = 'Load More Certifications';
                showingAllCertifications = false;
            }
        });
    }
    
    // Initialize certificate modal
    initializeCertificateModal();
}

function displayCertifications(certs) {
    const certificationsGrid = document.getElementById('certifications-grid');
    if (!certificationsGrid) return;
    
    certs.forEach((cert, index) => {
        const card = createCertificationCard(cert);
        card.style.animationDelay = `${index * 0.1}s`;
        certificationsGrid.appendChild(card);
    });
}

function createCertificationCard(cert) {
    const card = document.createElement('div');
    card.className = 'certification-card';
    
    const featuredBadge = cert.featured ? '<span class="certification-badge">Featured</span>' : '';
    
    card.innerHTML = `
        <div class="certification-image">
            ${featuredBadge}
            <img src="${cert.image}" alt="${cert.title}" loading="lazy" onerror="this.onerror=null; this.src='assets/project-placeholder.jpg';">
        </div>
        <div class="certification-content">
            <span class="certification-category">${cert.category}</span>
            <h3>${cert.title}</h3>
            <p class="certification-issuer">${cert.issuer}</p>
            ${cert.date ? `<p class="certification-date">${cert.date}</p>` : ''}
            <a href="${cert.link}" target="_blank" class="certification-link">
                View Certificate <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    
    return card;
}

function initializeCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    
    const modalClose = document.getElementById('modal-close');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    
    // Close modal handlers
    if (modalClose) {
        modalClose.addEventListener('click', closeCertificateModal);
    }
    
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeCertificateModal);
    }
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCertificateModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeCertificateModal();
        }
    });
}

function openCertificateModal(cert) {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    
    const modalImage = document.getElementById('modal-cert-image');
    const modalOpenFull = document.getElementById('modal-open-full');
    
    if (!modalImage || !modalOpenFull) return;
    
    modalImage.src = cert.image;
    modalImage.alt = cert.title;
    modalImage.onerror = function() {
        this.onerror = null;
        this.src = 'assets/project-placeholder.jpg';
    };
    modalOpenFull.href = cert.link;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCertificateModal() {
    const modal = document.getElementById('certificate-modal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// CONTACT FORM
// ==========================================

function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form fields
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
        const honeypot = document.getElementById('website');
        const submitBtn = form.querySelector('button[type="submit"]');
        const formMessage = document.getElementById('form-message');
        
        // Honeypot check (anti-spam)
        if (honeypot && honeypot.value) {
            console.log('Bot detected, submission blocked');
            return;
        }
        
        // Get values
        const name = nameField ? nameField.value.trim() : '';
        const email = emailField ? emailField.value.trim() : '';
        const message = messageField ? messageField.value.trim() : '';
        
        // Validation
        if (!name || !email || !message) {
            showMessage('Please fill in all fields.', 'error', formMessage);
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error', formMessage);
            return;
        }
        
        // Disable button and show loading state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }
        
        try {
            // Send form data to Google Apps Script
            const formData = { name, email, message };
            
            const response = await fetch('https://script.google.com/macros/s/AKfycbz4GQH9Fq34-6pJwdSfZA4-cMsX76H4FajT89fe8HJgjsVAZAjy4DoTRsSCafPFwg1t/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            // Success message
            showMessage('Message sent — thank you! I\'ll get back to you soon.', 'success', formMessage);
            
            // Clear form
            if (nameField) nameField.value = '';
            if (emailField) emailField.value = '';
            if (messageField) messageField.value = '';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                resetButton(submitBtn, 'Send Message');
            }, 3000);
            
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage('Something went wrong. Please try again.', 'error', formMessage);
            resetButton(submitBtn, 'Send Message');
        }
    });
}

function showMessage(message, type, messageElement) {
    if (!messageElement) return;
    
    messageElement.textContent = message;
    messageElement.style.display = 'block';
    messageElement.style.padding = '1rem';
    messageElement.style.borderRadius = '4px';
    messageElement.style.marginBottom = '1rem';
    
    if (type === 'success') {
        messageElement.style.backgroundColor = '#d1fae5';
        messageElement.style.color = '#065f46';
        messageElement.style.border = '1px solid #6ee7b7';
    } else {
        messageElement.style.backgroundColor = '#fee2e2';
        messageElement.style.color = '#991b1b';
        messageElement.style.border = '1px solid #fca5a5';
    }
    
    // Hide message after 5 seconds
    if (type === 'error') {
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 5000);
    }
}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

function resetButton(button, text) {
    if (!button) return;
    button.disabled = false;
    button.innerHTML = `${text} <i class="fas fa-paper-plane"></i>`;
}

// ==========================================
// SCROLL TO TOP
// ==========================================

function initializeScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// FOOTER YEAR
// ==========================================

function updateFooterYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ==========================================
// INITIALIZE ALL
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeTicker();
    initializePortfolio(); // Now auto-fetches from GitHub
    initializeBlog();
    initializeCertifications();
    initializeContactForm();
    initializeScrollTop();
    updateFooterYear();
});
