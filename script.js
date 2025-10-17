// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
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
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
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
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-category, .timeline-item, .project-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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
    const heroTitle = document.querySelector('.hero-title');
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

// Image slider opacity effect
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-bg-image');
    const heroContainer = document.querySelector('.hero-container');
    
    if (heroImage && heroContainer) {
        // Add hover effect to change opacity
        heroContainer.addEventListener('mouseenter', () => {
            heroImage.style.opacity = '0.6';
            heroContainer.style.background = 'rgba(0, 0, 0, 0.6)';
        });
        
        heroContainer.addEventListener('mouseleave', () => {
            heroImage.style.opacity = '0.4';
            heroContainer.style.background = 'rgba(0, 0, 0, 0.3)';
        });
        
        // Add scroll effect to change opacity
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                const opacity = Math.max(0.2, 0.4 - (scrolled * 0.0003));
                heroImage.style.opacity = opacity;
                
                // Fade out text as user scrolls
                const textOpacity = Math.max(0.3, 1 - (scrolled * 0.002));
                heroContainer.style.opacity = textOpacity;
            }
        });
        
        // Add parallax effect to the background image
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                const translateY = scrolled * 0.5;
                heroImage.style.transform = `translateY(${translateY}px)`;
            }
        });
    }
});

// Form handling (if you add a contact form later)
function handleContactForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form data:', data);
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    event.target.reset();
}

// Add click handlers for project links
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            alert('This project is coming soon!');
        }
    });
});

// Resume download functionality
document.addEventListener('DOMContentLoaded', () => {
    const resumeBtn = document.querySelector('.resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            // Add download animation
            resumeBtn.style.transform = 'scale(0.95)';
            resumeBtn.style.background = '#28a745';
            resumeBtn.innerHTML = '<i class="fas fa-download"></i> Downloading...';
            
            // Reset button after animation
            setTimeout(() => {
                resumeBtn.style.transform = 'scale(1)';
                resumeBtn.style.background = '#007bff';
                resumeBtn.innerHTML = 'Resume';
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

// Add hover effects for skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    category.addEventListener('mouseenter', () => {
        category.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    category.addEventListener('mouseleave', () => {
        category.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
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
    
    body:not(.loaded)::after {
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
`;
document.head.appendChild(style);

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll('section');
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
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero {
        opacity: 1;
        transform: none;
    }
`;
document.head.appendChild(revealStyle);
