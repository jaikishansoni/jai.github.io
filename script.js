// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section, .about-me, .skills, .experience, .projects, .contact');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id') || section.className.split(' ')[0];
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-bottom');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.animation-element');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.name-text');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loading');
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body.loading {
        overflow: hidden;
    }
    
    body.loading::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body.loading::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
    }
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98) !important;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .nav-link.active {
        color: #007bff !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Initialize loading state
document.body.classList.add('loading');

// Resume download functionality
document.addEventListener('DOMContentLoaded', () => {
    const resumeBtn = document.querySelector('.resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            // Add download animation
            resumeBtn.style.transform = 'scale(0.95)';
            resumeBtn.style.background = '#28a745';
            resumeBtn.innerHTML = 'Downloading...';
            
            // Reset button after animation
            setTimeout(() => {
                resumeBtn.style.transform = 'scale(1)';
                resumeBtn.style.background = '';
                resumeBtn.innerHTML = 'Résumé';
            }, 2000);
            
            // Show success message
            setTimeout(() => {
                showNotification('Resume downloaded successfully!', 'success');
            }, 1000);
        });
    }
});

// Notification system for download feedback
function showNotification(message, type = 'info') {
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
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        padding: 1rem;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left: 4px solid #28a745;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-content i {
        color: #28a745;
    }
`;
document.head.appendChild(notificationStyle);

// Add hover effects for skill categories
document.querySelectorAll('.list-col').forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    category.addEventListener('mouseleave', () => {
        category.style.transform = 'translateY(0) scale(1)';
    });
});

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll('.about-me, .skills, .experience, .projects, .contact');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Add CSS for reveal animation
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .about-me, .skills, .experience, .projects, .contact {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .about-me.revealed, .skills.revealed, .experience.revealed, .projects.revealed, .contact.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1;
        transform: none;
    }
`;
document.head.appendChild(revealStyle);

// Add click handlers for project links
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            showNotification('This project is coming soon!', 'info');
        }
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Portfolio website loaded successfully!');
});