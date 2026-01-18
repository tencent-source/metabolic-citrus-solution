// ==========================================
// CITRUSBURN LANDING PAGE - JAVASCRIPT
// FOMO Popups, Exit Intent, Timers, Animations
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initFOMOPopups();
    initExitIntent();
    initCountdownTimers();
    initLiveViewers();
    initStockCounter();
    initSmoothScroll();
    randomizeStoryName();
});

// ==========================================
// RANDOMIZE STORY NAME
// ==========================================

function randomizeStoryName() {
    const americanNames = [
        { name: "Jennifer Martinez", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Sarah Thompson", img: "https://randomuser.me/api/portraits/women/32.jpg" },
        { name: "Michelle Anderson", img: "https://randomuser.me/api/portraits/women/68.jpg" },
        { name: "Amanda Williams", img: "https://randomuser.me/api/portraits/women/54.jpg" },
        { name: "Jessica Brown", img: "https://randomuser.me/api/portraits/women/89.jpg" },
        { name: "Emily Davis", img: "https://randomuser.me/api/portraits/women/91.jpg" },
        { name: "Ashley Johnson", img: "https://randomuser.me/api/portraits/women/76.jpg" },
        { name: "Stephanie Garcia", img: "https://randomuser.me/api/portraits/women/63.jpg" },
        { name: "Nicole Miller", img: "https://randomuser.me/api/portraits/women/28.jpg" },
        { name: "Heather Wilson", img: "https://randomuser.me/api/portraits/women/85.jpg" }
    ];

    const randomPerson = americanNames[Math.floor(Math.random() * americanNames.length)];
    const firstName = randomPerson.name.split(' ')[0];

    // Update story names
    const storyName = document.getElementById('story-name');
    const storyName2 = document.getElementById('story-name-2');
    const storyName3 = document.getElementById('story-name-3');
    const storyPortrait = document.getElementById('story-portrait');

    if (storyName) storyName.textContent = randomPerson.name;
    if (storyName2) storyName2.textContent = firstName + "'s";
    if (storyName3) storyName3.textContent = firstName;
    if (storyPortrait) storyPortrait.src = randomPerson.img;
}

// ==========================================
// FOMO POPUP SYSTEM
// ==========================================

const fomoData = [
    { name: "Sarah M.", location: "Austin, TX", action: "just purchased CitrusBurn", time: "2 min ago", img: "https://randomuser.me/api/portraits/women/32.jpg" },
    { name: "Michael D.", location: "Phoenix, AZ", action: "lost 12 lbs this week", time: "5 min ago", img: "https://randomuser.me/api/portraits/men/45.jpg" },
    { name: "Jennifer L.", location: "Miami, FL", action: "just ordered 3 bottles", time: "8 min ago", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Robert W.", location: "Chicago, IL", action: "is viewing this page", time: "Just now", img: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: "Patricia A.", location: "Seattle, WA", action: "just purchased CitrusBurn", time: "11 min ago", img: "https://randomuser.me/api/portraits/women/54.jpg" },
    { name: "James K.", location: "Denver, CO", action: "lost 23 lbs in 4 weeks", time: "15 min ago", img: "https://randomuser.me/api/portraits/men/36.jpg" },
    { name: "Linda R.", location: "Los Angeles, CA", action: "just ordered 6 bottles", time: "18 min ago", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "David S.", location: "Houston, TX", action: "just purchased CitrusBurn", time: "22 min ago", img: "https://randomuser.me/api/portraits/men/52.jpg" },
    { name: "Barbara J.", location: "New York, NY", action: "is viewing this page", time: "Just now", img: "https://randomuser.me/api/portraits/women/79.jpg" },
    { name: "William T.", location: "Atlanta, GA", action: "lost 18 lbs this month", time: "25 min ago", img: "https://randomuser.me/api/portraits/men/67.jpg" },
    { name: "Elizabeth M.", location: "Philadelphia, PA", action: "just purchased CitrusBurn", time: "28 min ago", img: "https://randomuser.me/api/portraits/women/91.jpg" },
    { name: "Richard B.", location: "San Diego, CA", action: "just ordered 3 bottles", time: "32 min ago", img: "https://randomuser.me/api/portraits/men/81.jpg" },
    { name: "Susan C.", location: "Dallas, TX", action: "is viewing this page", time: "Just now", img: "https://randomuser.me/api/portraits/women/28.jpg" },
    { name: "Joseph H.", location: "Boston, MA", action: "lost 31 lbs in 6 weeks", time: "35 min ago", img: "https://randomuser.me/api/portraits/men/91.jpg" },
    { name: "Karen P.", location: "San Francisco, CA", action: "just purchased CitrusBurn", time: "38 min ago", img: "https://randomuser.me/api/portraits/women/63.jpg" },
    { name: "Thomas G.", location: "Portland, OR", action: "just ordered 6 bottles", time: "41 min ago", img: "https://randomuser.me/api/portraits/men/76.jpg" },
    { name: "Nancy E.", location: "Nashville, TN", action: "lost 27 lbs so far", time: "45 min ago", img: "https://randomuser.me/api/portraits/women/85.jpg" },
    { name: "Christopher L.", location: "Las Vegas, NV", action: "just purchased CitrusBurn", time: "48 min ago", img: "https://randomuser.me/api/portraits/men/86.jpg" },
    { name: "Betty F.", location: "Charlotte, NC", action: "is viewing this page", time: "Just now", img: "https://randomuser.me/api/portraits/women/76.jpg" },
    { name: "Daniel N.", location: "Orlando, FL", action: "lost 19 lbs in 3 weeks", time: "52 min ago", img: "https://randomuser.me/api/portraits/men/33.jpg" }
];

let fomoIndex = 0;

function initFOMOPopups() {
    // Show first popup after 3 seconds
    setTimeout(showFOMOPopup, 3000);
}

function showFOMOPopup() {
    const container = document.getElementById('fomo-container');
    if (!container) return;

    // Get current FOMO data
    const data = fomoData[fomoIndex % fomoData.length];
    fomoIndex++;

    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'fomo-popup';
    popup.innerHTML = `
        <img src="${data.img}" alt="${data.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&background=ff6b35&color=fff'">
        <div class="fomo-content">
            <strong>${data.name}</strong> from ${data.location}
            <p>${data.action}</p>
        </div>
        <span class="fomo-time">${data.time}</span>
    `;

    // Add to container
    container.appendChild(popup);

    // Remove after 5 seconds with animation
    setTimeout(() => {
        popup.classList.add('fade-out');
        setTimeout(() => {
            popup.remove();
        }, 500);
    }, 5000);

    // Schedule next popup (random interval between 8-15 seconds)
    const nextDelay = Math.floor(Math.random() * 7000) + 8000;
    setTimeout(showFOMOPopup, nextDelay);
}

// ==========================================
// EXIT INTENT POPUP
// ==========================================

let exitPopupShown = false;

function initExitIntent() {
    // Desktop: Mouse leaves viewport
    document.addEventListener('mouseout', function(e) {
        if (e.clientY < 10 && !exitPopupShown) {
            showExitPopup();
        }
    });

    // Mobile: Back button or scroll up quickly
    let lastScrollTop = 0;
    let scrollUpCount = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop < lastScrollTop && scrollTop < 100) {
            scrollUpCount++;
            if (scrollUpCount > 3 && !exitPopupShown) {
                showExitPopup();
            }
        } else {
            scrollUpCount = 0;
        }

        lastScrollTop = scrollTop;
    });

    // Close popup handlers
    const exitPopup = document.getElementById('exit-popup');
    const closeBtn = exitPopup?.querySelector('.exit-popup-close');
    const noThanks = exitPopup?.querySelector('.no-thanks');

    if (closeBtn) {
        closeBtn.addEventListener('click', hideExitPopup);
    }

    if (noThanks) {
        noThanks.addEventListener('click', hideExitPopup);
    }

    // Close on overlay click
    if (exitPopup) {
        exitPopup.addEventListener('click', function(e) {
            if (e.target === exitPopup) {
                hideExitPopup();
            }
        });
    }

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideExitPopup();
        }
    });
}

function showExitPopup() {
    const exitPopup = document.getElementById('exit-popup');
    if (exitPopup && !exitPopupShown) {
        exitPopup.classList.add('active');
        exitPopupShown = true;
        document.body.style.overflow = 'hidden';

        // Start exit timer countdown
        startExitTimer();
    }
}

function hideExitPopup() {
    const exitPopup = document.getElementById('exit-popup');
    if (exitPopup) {
        exitPopup.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function startExitTimer() {
    let time = 299; // 4:59
    const timerElement = document.getElementById('exit-timer');

    const interval = setInterval(() => {
        if (!timerElement) {
            clearInterval(interval);
            return;
        }

        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (time <= 0) {
            clearInterval(interval);
            timerElement.textContent = 'EXPIRED';
        }

        time--;
    }, 1000);
}

// ==========================================
// COUNTDOWN TIMERS
// ==========================================

function initCountdownTimers() {
    // Main timer - 15 minutes
    startCountdown('main-timer', 15 * 60);
    startCountdown('final-timer', 15 * 60);
}

function startCountdown(elementId, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let time = duration;

    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        element.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        if (time <= 0) {
            clearInterval(interval);
            element.textContent = '0:00';
            // Reset timer to create urgency loop
            setTimeout(() => {
                startCountdown(elementId, duration);
            }, 1000);
        }

        time--;
    }, 1000);
}

// ==========================================
// LIVE VIEWERS COUNTER
// ==========================================

function initLiveViewers() {
    const viewerElement = document.getElementById('live-viewers');
    if (!viewerElement) return;

    // Fluctuate viewers randomly
    setInterval(() => {
        const currentViewers = parseInt(viewerElement.textContent.replace(/,/g, ''));
        const change = Math.floor(Math.random() * 50) - 20; // -20 to +30
        const newViewers = Math.max(2500, currentViewers + change);
        viewerElement.textContent = newViewers.toLocaleString();
    }, 3000);
}

// ==========================================
// STOCK COUNTER
// ==========================================

function initStockCounter() {
    const stockElements = [
        document.getElementById('stock-count'),
        document.getElementById('stock-remaining')
    ];
    const stockFill = document.getElementById('stock-fill');

    let stock = 17;

    // Occasionally decrease stock
    setInterval(() => {
        if (Math.random() > 0.7 && stock > 3) {
            stock--;
            stockElements.forEach(el => {
                if (el) el.textContent = stock;
            });
            if (stockFill) {
                stockFill.style.width = `${(stock / 100) * 100}%`;
            }
        }
    }, 30000); // Every 30 seconds
}

// ==========================================
// SMOOTH SCROLL FOR ANCHORS
// ==========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements on load
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.problem-card, .step, .testimonial-card, .faq-item'
    );
    animatedElements.forEach(el => observer.observe(el));
});

// ==========================================
// CTA BUTTON TRACKING
// ==========================================

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        // Track click event (placeholder for analytics)
        console.log('CTA clicked:', this.textContent.trim());
    });
});

// ==========================================
// PRELOAD TESTIMONIAL IMAGES
// ==========================================

function preloadImages() {
    const images = [
        'https://randomuser.me/api/portraits/women/32.jpg',
        'https://randomuser.me/api/portraits/men/45.jpg',
        'https://randomuser.me/api/portraits/women/44.jpg',
        'https://randomuser.me/api/portraits/men/22.jpg',
        'https://randomuser.me/api/portraits/women/54.jpg',
        'https://randomuser.me/api/portraits/men/36.jpg',
        'https://randomuser.me/api/portraits/women/68.jpg'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

preloadImages();
