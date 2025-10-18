let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
if(top >= offset && top < offset + height){
    navlinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    });
 };
});
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* ==================== HIỆU ỨNG MỚI BỔ SUNG ==================== */

// Hiệu ứng xuất hiện khi scroll vào viewport
function revealOnScroll() {
    const reveals = document.querySelectorAll('.animate-element');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('show');
        }
    });
}

// Thêm class animate-element cho các phần tử
function initAnimations() {
    // Home content animations
    const homeContent = document.querySelector('.home-content h1');
    if (homeContent) {
        homeContent.classList.add('animate-element', 'fade-left');
    }
    
    const textAnimate = document.querySelector('.text-animate');
    if (textAnimate) {
        textAnimate.classList.add('animate-element', 'fade-up');
    }
    
    const homeP = document.querySelector('.home-content p');
    if (homeP) {
        homeP.classList.add('animate-element', 'fade-up');
    }
    
    const btnBox = document.querySelector('.btn-box');
    if (btnBox) {
        btnBox.classList.add('animate-element', 'zoom-in');
    }
    
    // About section animations
    const aboutImg = document.querySelector('.about-img');
    if (aboutImg) {
        aboutImg.classList.add('animate-element', 'fade-left');
    }
    
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.classList.add('animate-element', 'fade-right');
    }
    
    // Education section animations
    const educationContents = document.querySelectorAll('.education-content .content');
    educationContents.forEach((content, index) => {
        content.classList.add('animate-element', 'fade-up');
        content.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Skills section animations
    const skillsColumns = document.querySelectorAll('.skills-column');
    skillsColumns.forEach((column, index) => {
        column.classList.add('animate-element');
        if (index % 2 === 0) {
            column.classList.add('fade-left');
        } else {
            column.classList.add('fade-right');
        }
    });
    
    // Contact section animations
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.classList.add('animate-element', 'zoom-in');
    }
    
    // Heading animations
    const headings = document.querySelectorAll('.heading');
    headings.forEach(heading => {
        heading.classList.add('animate-element', 'fade-up');
    });
}

// Gọi hàm reveal khi scroll
window.addEventListener('scroll', revealOnScroll);

// Gọi ngay khi trang load
window.addEventListener('load', () => {
    initAnimations();
    revealOnScroll();
});

// Hiệu ứng parallax cho background home
window.addEventListener('scroll', () => {
    const home = document.querySelector('.home');
    if (home) {
        let scrollPosition = window.pageYOffset;
        home.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Hiệu ứng typing cho text-animate
const textAnimateH3 = document.querySelector('.text-animate h3');
if (textAnimateH3) {
    const text = textAnimateH3.textContent;
    textAnimateH3.textContent = '';
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            textAnimateH3.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 150);
        } else {
            setTimeout(() => {
                textAnimateH3.textContent = '';
                index = 0;
                typeWriter();
            }, 3000);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Hiệu ứng progress bar animation khi scroll vào view
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skills-content .progress .bar span');
    
    progressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (barTop < windowHeight - 100) {
            const width = bar.style.width || bar.getAttribute('data-width');
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-out';
                bar.style.width = width;
            }, 100);
        }
    });
}

// Lưu width ban đầu của progress bars
window.addEventListener('load', () => {
    const progressBars = document.querySelectorAll('.skills-content .progress .bar span');
    progressBars.forEach(bar => {
        const computedWidth = window.getComputedStyle(bar).width;
        bar.setAttribute('data-width', computedWidth);
    });
});

window.addEventListener('scroll', animateProgressBars);

// Hiệu ứng ripple cho buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Thêm CSS cho ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Áp dụng ripple cho tất cả buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', createRipple);
});

// Hiệu ứng smooth scroll cho navigation links
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

// Hiệu ứng hover cho social icons với delay
const socialIcons = document.querySelectorAll('.home-sci a');
socialIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.1}s`;
    
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-5px) rotate(360deg)';
        icon.style.transition = 'transform 0.5s ease';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Hiệu ứng particles cho background (tùy chọn)
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.3;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: var(--main-color);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Thêm animation cho particles
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Khởi tạo particles (comment dòng này nếu không muốn dùng)
// createParticles();

// Hiệu ứng cursor custom (tùy chọn)
function customCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--main-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    document.querySelectorAll('a, button, .btn').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = 'var(--text-color)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'var(--main-color)';
        });
    });
}

// Khởi tạo custom cursor (comment dòng này nếu không muốn dùng)
// customCursor();

// Hiệu ứng loading khi submit form
const contactFormElement = document.querySelector('.contact form');
if (contactFormElement) {
    contactFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactFormElement.querySelector('.btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Đang gửi...';
        submitBtn.style.pointerEvents = 'none';
        submitBtn.style.opacity = '0.7';
        
        // Giả lập gửi form (thay bằng logic thực tế)
        setTimeout(() => {
            submitBtn.textContent = 'Đã gửi!';
            submitBtn.style.background = '#4CAF50';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.pointerEvents = 'auto';
                submitBtn.style.opacity = '1';
                submitBtn.style.background = '';
                contactFormElement.reset();
            }, 2000);
        }, 1500);
    });
}

// Hiệu ứng count up cho numbers (nếu có)
function animateCountUp(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Hiệu ứng tilt cho cards
const cards = document.querySelectorAll('.education-content .content');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Console message
console.log('%c🎉 Portfolio Website Loaded! ', 'background: #5bcf91; color: #fff; padding: 10px; font-size: 16px; font-weight: bold;');
console.log('%cMade with ❤️ by Lê Văn Thắng', 'color: #5bcf91; font-size: 14px;');