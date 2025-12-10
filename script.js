
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    const sunIcon = document.querySelector('.fa-sun');
    const moonIcon = document.querySelector('.fa-moon');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu a');

    // Set initial theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        }
    }

    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    }

    // Close menu
    function closeMenu() {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Check for saved theme preference or use system preference
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            setTheme(theme === 'light' ? 'dark' : 'light');
        });
    }

    // Mobile Menu Toggle
    if (hamburger && menu) {
        hamburger.addEventListener('click', toggleMenu);

        // Close menu when clicking on overlay
        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        // Close menu when clicking on a link
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Rest of your existing code for subject cards and scroll to top...
    const subjectCards = document.querySelectorAll('.subject-card');

    function togglePanel(card) {
        const panel = card.querySelector('.panel');
        const toggleIcon = card.querySelector('.toggle-icon');
        
        if (card.classList.contains('active')) {
            panel.style.maxHeight = null;
            card.classList.remove('active');
            if (toggleIcon) {
                toggleIcon.classList.remove('fa-chevron-up');
                toggleIcon.classList.add('fa-chevron-down');
            }
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            card.classList.add('active');
            if (toggleIcon) {
                toggleIcon.classList.remove('fa-chevron-down');
                toggleIcon.classList.add('fa-chevron-up');
            }
        }
    }

    // Add click event to all toggle icons
    subjectCards.forEach(card => {
        const toggleIcon = card.querySelector('.toggle-icon');
        const cardHead = card.querySelector('.card-head');
        
        if (toggleIcon && cardHead) {
            toggleIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePanel(card);
            });
            
            cardHead.addEventListener('click', (e) => {
                if (e.target !== toggleIcon && !toggleIcon.contains(e.target)) {
                    togglePanel(card);
                }
            });
        }
    });

    // Scroll to top button
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollToTopBtn);

    // Scroll event for scroll-to-top button
    window.addEventListener('scroll', () => {
        scrollToTopBtn.classList.toggle('visible', window.pageYOffset > 300);
    });

    // Smooth scroll to top
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-fadeInUp');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animated');
            }
        });
    };

    // Initial animations
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});
