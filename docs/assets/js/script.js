console.log("✨ Creative TapLink loaded ✨");

// Performance optimizations
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isLowPower = navigator.hardwareConcurrency <= 2 || navigator.deviceMemory <= 4;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Disable heavy animations on mobile or low-power devices
const shouldReduceAnimations = isMobile || isLowPower || prefersReducedMotion;

const yearDate = new Date().getFullYear().toString();
document.querySelector(".year").innerText = yearDate;

// Optimized DOM ready handler
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loading');
    
    // Use requestAnimationFrame for smoother animations
    requestAnimationFrame(() => {
        document.body.classList.remove('loading');
    });
    
    // Initialize performance-optimized features
    initializeOptimizedFeatures();
});

// Performance-optimized feature initialization
function initializeOptimizedFeatures() {
    if (shouldReduceAnimations) {
        disableHeavyAnimations();
    } else {
        initializeAnimations();
    }
    
    initializeTouchOptimizations();
    initializeScrollOptimizations();
    initializeTypeWriter();
}

// Disable heavy animations for better performance
function disableHeavyAnimations() {
    const heavyElements = document.querySelectorAll('.floating-shapes, .shape');
    heavyElements.forEach(el => {
        el.style.display = 'none';
    });
    
    // Disable background animation
    const bgAnimation = document.querySelector('.background-animation');
    if (bgAnimation) {
        bgAnimation.style.animation = 'none';
    }
}

// Initialize animations only if device can handle them
function initializeAnimations() {
    if (shouldReduceAnimations) return;
    
    // Optimized scroll handler with throttling
    let ticking = false;
    
    function updateShapes() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateShapes);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Touch-optimized event handlers
function initializeTouchOptimizations() {
    const linkItems = document.querySelectorAll('.link-item');
    const tags = document.querySelectorAll('.tag');
    const avatar = document.querySelector('.avatar');
    
    // Use touch events for mobile devices
    if (isMobile) {
        linkItems.forEach(link => {
            link.addEventListener('touchstart', handleTouchStart, { passive: true });
            link.addEventListener('touchend', handleTouchEnd, { passive: true });
        });
        
        tags.forEach(tag => {
            tag.addEventListener('touchstart', handleTouchStart, { passive: true });
            tag.addEventListener('touchend', handleTouchEnd, { passive: true });
        });
        
        if (avatar) {
            avatar.addEventListener('touchstart', handleTouchStart, { passive: true });
            avatar.addEventListener('touchend', handleTouchEnd, { passive: true });
        }
    } else {
        // Desktop hover effects
        linkItems.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Click handlers for all devices
    linkItems.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click feedback
            this.style.transform = 'translateY(-2px) scale(0.98)';
            
            // Reset after animation
            setTimeout(() => {
                this.style.transform = isMobile ? 'translateY(0) scale(1)' : 'translateY(-4px) scale(1.02)';
            }, 150);
            
            // Create confetti only on external links
            if (this.href && this.href.startsWith('http') && !shouldReduceAnimations) {
                setTimeout(createCuteConfetti, 100);
            }
        });
    });
}

// Touch event handlers
function handleTouchStart(e) {
    this.style.transform = 'scale(0.98)';
    this.style.transition = 'transform 0.1s ease';
}

function handleTouchEnd(e) {
    this.style.transform = 'scale(1)';
    this.style.transition = 'transform 0.2s ease';
}

// Optimized scroll handling
function initializeScrollOptimizations() {
    if (shouldReduceAnimations) return;
    
    // Throttled scroll handler
    let scrollTimeout;
    
    function handleScroll() {
        if (scrollTimeout) return;
        
        scrollTimeout = setTimeout(() => {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.shape');
            
            shapes.forEach((shape, index) => {
                const speed = 0.3 + (index * 0.05); // Reduced speed for better performance
                shape.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            scrollTimeout = null;
        }, 16); // ~60fps
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
}

// Optimized typewriter effect
function initializeTypeWriter() {
    setTimeout(() => {
        const bioElement = document.querySelector('.bio');
        if (bioElement && !shouldReduceAnimations) {
            const originalText = bioElement.textContent;
            typeWriter(bioElement, originalText, isMobile ? 120 : 80);
        }
    }, 1000);
}

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

// Optimized confetti creation
function createCuteConfetti() {
    if (shouldReduceAnimations) return;
    
    const cuteEmojis = ['💕', '💖', '💝', '🌸', '✨', '💫', '🌺', '🌷', '💗', '💓'];
    const colors = ['#ffb3d9', '#ffd6e7', '#ffccf2', '#ffe6f2', '#ff99cc'];
    
    // Reduce number of confetti on mobile
    const confettiCount = isMobile ? 15 : 30;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.fontSize = Math.random() * 20 + 15 + 'px';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-30px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fallCute ${Math.random() * 3 + 2}s linear forwards`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.textContent = cuteEmojis[Math.floor(Math.random() * cuteEmojis.length)];
        
        document.body.appendChild(confetti);
        
        // Clean up after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 5000);
    }
}

// Add confetti animation styles only if needed
if (!shouldReduceAnimations) {
    const cuteStyle = document.createElement('style');
    cuteStyle.textContent = `
        @keyframes fallCute {
            to {
                transform: translateY(${window.innerHeight}px) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(cuteStyle);
}

// Optimized floating elements creation
function createFloatingCuteElements() {
    if (shouldReduceAnimations) return;
    
    const cuteElements = ['💕', '💖', '🌸', '✨', '💫', '🌺', '🌷'];
    const container = document.querySelector('.background-animation');
    
    // Reduce number of floating elements on mobile
    const elementCount = isMobile ? 4 : 8;
    
    for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.fontSize = Math.random() * 20 + 15 + 'px';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.opacity = '0.3';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '0';
        element.style.animation = `floatCute ${Math.random() * 10 + 10}s ease-in-out infinite`;
        element.style.animationDelay = Math.random() * 5 + 's';
        element.textContent = cuteElements[Math.floor(Math.random() * cuteElements.length)];
        
        container.appendChild(element);
    }
}

// Add floating animation styles only if needed
if (!shouldReduceAnimations) {
    const floatingCuteStyle = document.createElement('style');
    floatingCuteStyle.textContent = `
        @keyframes floatCute {
            0%, 100% {
                transform: translateY(0px) rotate(0deg) scale(1);
                opacity: 0.3;
            }
            25% {
                transform: translateY(-20px) rotate(90deg) scale(1.1);
                opacity: 0.6;
            }
            50% {
                transform: translateY(-40px) rotate(180deg) scale(1.2);
                opacity: 0.8;
            }
            75% {
                transform: translateY(-20px) rotate(270deg) scale(1.1);
                opacity: 0.6;
            }
        }
    `;
    document.head.appendChild(floatingCuteStyle);
    
    setTimeout(createFloatingCuteElements, 2000);
}

// Optimized tag interactions
document.querySelectorAll('.tag').forEach(tag => {
    if (!isMobile) {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 25px rgba(255, 107, 157, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 2px 10px rgba(255, 107, 157, 0.1)';
        });
    }
});

// Optimized particle effect (disabled on mobile for performance)
function createCuteParticleEffect() {
    if (shouldReduceAnimations) return;
    
    const cuteParticles = ['💕', '💖', '🌸', '✨', '💫'];
    let particleCount = 0;
    const maxParticles = isMobile ? 5 : 10;
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95 && particleCount < maxParticles) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';
            particle.style.fontSize = '12px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9998';
            particle.style.animation = 'particleFadeCute 1.5s ease-out forwards';
            particle.textContent = cuteParticles[Math.floor(Math.random() * cuteParticles.length)];
            
            document.body.appendChild(particle);
            particleCount++;
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                    particleCount--;
                }
            }, 1500);
        }
    });
}

// Add particle animation styles only if needed
if (!shouldReduceAnimations) {
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFadeCute {
            0% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            100% {
                opacity: 0;
                transform: scale(0.5) translateY(-20px);
            }
        }
    `;
    document.head.appendChild(particleStyle);
    
    // Initialize particle effect
    createCuteParticleEffect();
}

// Performance monitoring
if (window.performance && window.performance.mark) {
    window.performance.mark('script-start');
    
    window.addEventListener('load', () => {
        window.performance.mark('script-end');
        window.performance.measure('script-execution', 'script-start', 'script-end');
        
        const measure = window.performance.getEntriesByName('script-execution')[0];
        console.log(`Script execution time: ${measure.duration.toFixed(2)}ms`);
    });
}

// Service Worker registration for better performance (if supported)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// === КОТИКИ ===
function createJumpingCats() {
    const catEmojis = ['🐱', '🐈', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];
    const catContainer = document.createElement('div');
    catContainer.style.position = 'fixed';
    catContainer.style.top = '0';
    catContainer.style.left = '0';
    catContainer.style.width = '100vw';
    catContainer.style.height = '100vh';
    catContainer.style.pointerEvents = 'none';
    catContainer.style.zIndex = '3';
    document.body.appendChild(catContainer);

    function spawnCat() {
        const cat = document.createElement('div');
        const catEmoji = catEmojis[Math.floor(Math.random() * catEmojis.length)];
        const fontSize = Math.random() * 20 + 25; // 25-45px
        const side = Math.random() > 0.5 ? 'left' : 'right';
        const startX = side === 'left' ? -50 : window.innerWidth + 50;
        const endX = side === 'left' ? 
            Math.random() * (window.innerWidth * 0.3) : 
            window.innerWidth - Math.random() * (window.innerWidth * 0.3);
        
        cat.style.position = 'absolute';
        cat.style.left = startX + 'px';
        cat.style.top = window.innerHeight + 50 + 'px';
        cat.style.fontSize = fontSize + 'px';
        cat.style.transform = 'rotate(0deg)';
        cat.style.transition = 'transform 0.3s ease';
        cat.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))';
        cat.textContent = catEmoji;
        catContainer.appendChild(cat);

        // Анимация прыжка
        const jumpHeight = Math.random() * 200 + 100; // 100-300px
        const duration = Math.random() * 2 + 2; // 2-4 секунды
        
        // Создаем траекторию прыжка
        const keyframes = [
            { 
                top: window.innerHeight + 50 + 'px', 
                left: startX + 'px',
                transform: 'rotate(0deg) scale(1)'
            },
            { 
                top: window.innerHeight - jumpHeight + 'px', 
                left: endX + 'px',
                transform: 'rotate(360deg) scale(1.2)'
            },
            { 
                top: window.innerHeight + 50 + 'px', 
                left: endX + 'px',
                transform: 'rotate(720deg) scale(0.8)'
            }
        ];

        cat.animate(keyframes, {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards'
        });

        // Добавляем эффект "мяу" при прыжке
        setTimeout(() => {
            const meow = document.createElement('div');
            meow.style.position = 'absolute';
            meow.style.left = (parseFloat(cat.style.left) + 20) + 'px';
            meow.style.top = (parseFloat(cat.style.top) - 30) + 'px';
            meow.style.fontSize = '12px';
            meow.style.color = '#3a8dde';
            meow.style.fontWeight = 'bold';
            meow.style.pointerEvents = 'none';
            meow.style.zIndex = '4';
            meow.textContent = 'мяу!';
            meow.style.animation = 'meowFade 1s ease-out forwards';
            document.body.appendChild(meow);

            setTimeout(() => meow.remove(), 1000);
        }, duration * 500);

        // Удаляем котика после падения
        setTimeout(() => {
            cat.style.opacity = '0';
            setTimeout(() => cat.remove(), 500);
        }, duration * 1000);
    }

    // Создаем котиков с разными интервалами
    setInterval(spawnCat, Math.random() * 3000 + 2000); // 2-5 секунд
}

// Добавляем CSS для анимации "мяу"
const meowStyle = document.createElement('style');
meowStyle.textContent = `
    @keyframes meowFade {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0.5);
        }
        50% {
            opacity: 1;
            transform: translateY(-20px) scale(1.2);
        }
        100% {
            opacity: 0;
            transform: translateY(-40px) scale(0.8);
        }
    }
`;
document.head.appendChild(meowStyle);

// Запускаем котиков после загрузки страницы
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(createJumpingCats, 3000); // Начинаем через 3 секунды
});

console.log("💕 Все милые эффекты загружены успешно! 💕");