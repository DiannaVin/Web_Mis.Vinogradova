console.log("✨ Creative TapLink loaded ✨");

const yearDate = new Date().getFullYear().toString();
document.querySelector(".year").innerText = yearDate;

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loading');
    
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 500);
});

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

document.querySelectorAll('.link-item').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    link.addEventListener('click', function() {
        this.style.transform = 'translateY(-2px) scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        }, 150);
    });
});

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

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

setTimeout(() => {
    const bioElement = document.querySelector('.bio');
    if (bioElement) {
        const originalText = bioElement.textContent;
        typeWriter(bioElement, originalText, 80);
    }
}, 1000);

function createCuteConfetti() {
    const cuteEmojis = ['💕', '💖', '💝', '🌸', '✨', '💫', '🌺', '🌷', '💗', '💓'];
    const colors = ['#ffb3d9', '#ffd6e7', '#ffccf2', '#ffe6f2', '#ff99cc'];
    
    for (let i = 0; i < 30; i++) {
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
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

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

document.querySelectorAll('.link-item').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href && this.href.startsWith('http')) {
            setTimeout(createCuteConfetti, 100);
        }
    });
});

function createFloatingCuteElements() {
    const cuteElements = ['💕', '💖', '🌸', '✨', '💫', '🌺', '🌷'];
    const container = document.querySelector('.background-animation');
    
    for (let i = 0; i < 8; i++) {
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

document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
        this.style.boxShadow = '0 8px 25px rgba(255, 107, 157, 0.3)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 2px 10px rgba(255, 107, 157, 0.1)';
    });
});

function createCuteParticleEffect() {
    const cuteParticles = ['💕', '💖', '🌸', '✨', '💫'];
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) {
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
            
            setTimeout(() => {
                particle.remove();
            }, 1500);
        }
    });
}

const particleCuteStyle = document.createElement('style');
particleCuteStyle.textContent = `
    @keyframes particleFadeCute {
        0% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-20px);
        }
    }
`;
document.head.appendChild(particleCuteStyle);

function addHeartBeatToAvatar() {
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('mouseenter', function() {
            this.style.animation = 'heartBeat 0.6s ease-in-out';
        });
        
        avatar.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    }
}

setTimeout(addHeartBeatToAvatar, 1000);

function addWaveToFooterIcons() {
    const footerIcons = document.querySelectorAll('.footer-icon');
    footerIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'wave 0.5s ease-in-out';
        });
        
        icon.addEventListener('animationend', function() {
            this.style.animation = 'bounce 2s infinite';
            if (index === 1) this.style.animationDelay = '0.2s';
            if (index === 2) this.style.animationDelay = '0.4s';
        });
    });
}

setTimeout(addWaveToFooterIcons, 1500);

function addSparkleToName() {
    const name = document.querySelector('.name');
    if (name) {
        name.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(255, 107, 157, 0.8)';
        });
        
        name.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
        });
    }
}

setTimeout(addSparkleToName, 2000);

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
}

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

document.querySelectorAll('.link-item, .tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

function createCuteMusicVisualizer() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-2';
    canvas.style.opacity = '0.05';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let bars = [];
    const barCount = 30;
    
    for (let i = 0; i < barCount; i++) {
        bars.push({
            x: (canvas.width / barCount) * i,
            y: canvas.height,
            height: Math.random() * 80 + 40,
            speed: Math.random() * 1.5 + 0.5
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        bars.forEach(bar => {
            ctx.fillStyle = `hsl(${Math.random() * 60 + 320}, 70%, 80%)`;
            ctx.fillRect(bar.x, bar.y - bar.height, 3, bar.height);
            
            bar.height += Math.sin(Date.now() * 0.001 + bar.x) * 1.5;
            if (bar.height < 20) bar.height = 20;
            if (bar.height > 120) bar.height = 120;
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// === БЛЁСТКИ ===
function createGlitter() {
    const glitterColors = [
        '#fff', '#b3e0ff', '#a1c4fd', '#c2e9fb', '#7f53ac', '#3a8dde', '#e3f0ff', '#f7fbff'
    ];
    const glitterContainer = document.createElement('div');
    glitterContainer.style.position = 'fixed';
    glitterContainer.style.top = '0';
    glitterContainer.style.left = '0';
    glitterContainer.style.width = '100vw';
    glitterContainer.style.height = '100vh';
    glitterContainer.style.pointerEvents = 'none';
    glitterContainer.style.zIndex = '2';
    document.body.appendChild(glitterContainer);

    function spawnGlitter() {
        const glitter = document.createElement('div');
        const size = Math.random() * 3 + 2;
        glitter.style.position = 'absolute';
        glitter.style.left = Math.random() * window.innerWidth + 'px';
        glitter.style.top = '-10px';
        glitter.style.width = size + 'px';
        glitter.style.height = size + 'px';
        glitter.style.borderRadius = '50%';
        glitter.style.background = glitterColors[Math.floor(Math.random() * glitterColors.length)];
        glitter.style.opacity = Math.random() * 0.7 + 0.3;
        glitter.style.boxShadow = `0 0 8px 2px ${glitter.style.background}`;
        glitter.style.transition = 'opacity 0.5s';
        glitterContainer.appendChild(glitter);

        const duration = Math.random() * 3 + 2;
        const endLeft = parseFloat(glitter.style.left) + (Math.random() - 0.5) * 60;
        glitter.animate([
            { top: '-10px', left: glitter.style.left },
            { top: window.innerHeight + 'px', left: endLeft + 'px' }
        ], {
            duration: duration * 1000,
            easing: 'linear',
            fill: 'forwards'
        });

        setTimeout(() => {
            glitter.style.opacity = 0;
            setTimeout(() => glitter.remove(), 500);
        }, duration * 1000);
    }

    // Постоянно сыпем блёстки
    setInterval(spawnGlitter, 80);
}

// Запускаем блёстки после загрузки страницы
window.addEventListener('DOMContentLoaded', createGlitter);

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