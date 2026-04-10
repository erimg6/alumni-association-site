/* ============================================
   Alumni Association Website - JavaScript
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    initSmoothScrolling();
    initStickyNav();
});

/* ============================================
   Carousel Functionality
   ============================================ */

function initCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const leftArrow = document.querySelector('.carousel-arrow-left');
    const rightArrow = document.querySelector('.carousel-arrow-right');
    const carouselContainer = document.querySelector('.carousel-container');
    
    let currentSlide = 0;
    let autoRotateInterval;
    const slideCount = slides.length;
    const autoRotateDelay = 12000; // 12 seconds

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }

    // Function to go to next slide
    function nextSlide() {
        const next = (currentSlide + 1) % slideCount;
        showSlide(next);
    }

    // Function to go to previous slide
    function prevSlide() {
        const prev = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(prev);
    }

    // Function to start auto-rotation
    function startAutoRotate() {
        autoRotateInterval = setInterval(nextSlide, autoRotateDelay);
    }

    // Function to stop auto-rotation
    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
    }

    // Event listeners for arrow buttons
    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            nextSlide();
            stopAutoRotate();
            startAutoRotate(); // Restart auto-rotate after manual navigation
        });
    }

    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            prevSlide();
            stopAutoRotate();
            startAutoRotate(); // Restart auto-rotate after manual navigation
        });
    }

    // Event listeners for dot indicators
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoRotate();
            startAutoRotate(); // Restart auto-rotate after manual navigation
        });
    });

    // Pause auto-rotation on hover
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoRotate);
        carouselContainer.addEventListener('mouseleave', startAutoRotate);
    }

    // Start auto-rotation when page loads
    startAutoRotate();
}

/* ============================================
   Smooth Scrolling for Navigation Links
   ============================================ */

function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle anchor links (starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Calculate offset for sticky navbar
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    // Smooth scroll to target section
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Handle CTA button smooth scroll
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
}

/* ============================================
   Sticky Navigation Bar Behavior
   ============================================ */

function initStickyNav() {
    const navbar = document.getElementById('navbar');
    const scrollThreshold = 50; // Pixels scrolled before navbar changes
    
    if (!navbar) return;
    
    function handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        
        if (scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position (in case page loads scrolled)
    handleScroll();
}

/* ============================================
   Optional: Active Navigation Link Highlighting
   (Can be enhanced with Intersection Observer API)
   ============================================ */

// This function can be enhanced to highlight the active section
// in the navigation based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get current scroll position
    const scrollY = window.scrollY || window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Uncomment the following lines to enable active nav link highlighting
// window.addEventListener('scroll', updateActiveNavLink);
// updateActiveNavLink(); // Check on initial load

