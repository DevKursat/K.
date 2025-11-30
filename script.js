/* ============================================
   KÜRŞAT YILMAZ PORTFOLIO - JAVASCRIPT
   Enhanced with Language Support (TR/EN)
   ============================================ */

// ============================================
// PROJECT DATA (Bilingual)
// ============================================
const projectsData = {
    risko: {
        title: "Risko",
        category: { tr: "AI Platform", en: "AI Platform" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "🌍",
        gradient: "linear-gradient(135deg, #00D9FF, #0099CC)",
        description: {
            tr: "Deprem, sel, yangın ve fırtına gibi afetler için AI destekli risk analizi yapan platform. Konum bazlı yapısal, jeolojik ve iklimsel verileri analiz ederek kapsamlı risk skorları sunar.",
            en: "AI-powered risk analysis platform for disasters like earthquakes, floods, fires, and storms. Analyzes location-based structural, geological, and climate data to provide comprehensive risk scores."
        },
        features: {
            tr: [
                "AI destekli çoklu afet risk analizi",
                "Konum bazlı detaylı raporlama",
                "Yapısal ve jeolojik veri entegrasyonu",
                "Gerçek zamanlı iklim verisi takibi",
                "Detaylı risk skor kartları"
            ],
            en: [
                "AI-powered multi-disaster risk analysis",
                "Location-based detailed reporting",
                "Structural and geological data integration",
                "Real-time climate data tracking",
                "Detailed risk scorecards"
            ]
        },
        tech: ["Python", "FastAPI", "TensorFlow", "PostgreSQL", "React"],
        github: "https://github.com/DevKursat/Risko"
    },
    "linkedin-agent": {
        title: "LinkedIn Agent",
        category: { tr: "Otomasyon", en: "Automation" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "🤖",
        gradient: "linear-gradient(135deg, #0077B5, #00A0DC)",
        description: {
            tr: "LinkedIn'de otomatik içerik üretimi ve paylaşımı yapan AI bot. Gemini API ile kişiselleştirilmiş içerikler oluşturur ve optimal zamanlarda paylaşır.",
            en: "AI bot for automatic content generation and sharing on LinkedIn. Creates personalized content with Gemini API and shares at optimal times."
        },
        features: {
            tr: [
                "AI ile otomatik içerik üretimi",
                "Zamanlı paylaşım sistemi",
                "Kişiselleştirilmiş ton ve stil",
                "Engagement analizi",
                "Çoklu profil desteği"
            ],
            en: [
                "AI-powered automatic content generation",
                "Scheduled posting system",
                "Personalized tone and style",
                "Engagement analytics",
                "Multi-profile support"
            ]
        },
        tech: ["Python", "Gemini API", "Selenium", "Supabase"],
        github: "https://github.com/DevKursat/linkednai"
    },
    "iyilik-zinciri": {
        title: "İyilik Zinciri",
        category: { tr: "Sosyal Etki", en: "Social Impact" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "💫",
        gradient: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
        description: {
            tr: "AI tarafından verilen iyilik görevlerini tamamlayarak puan kazanılan sosyal etki platformu. Toplumda pozitif değişim yaratmayı hedefler.",
            en: "Social impact platform where you earn points by completing AI-generated kindness tasks. Aims to create positive change in society."
        },
        features: {
            tr: [
                "AI destekli görev oluşturma",
                "Puan ve rozet sistemi",
                "Topluluk liderlik tablosu",
                "Sosyal paylaşım entegrasyonu",
                "Günlük iyilik hatırlatıcıları"
            ],
            en: [
                "AI-powered task generation",
                "Points and badge system",
                "Community leaderboard",
                "Social sharing integration",
                "Daily kindness reminders"
            ]
        },
        tech: ["JavaScript", "Node.js", "OpenAI API", "MongoDB"],
        github: "https://github.com/DevKursat/iyilikzinciri"
    },
    aura: {
        title: "Aura",
        category: { tr: "Lifestyle", en: "Lifestyle" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "✨",
        gradient: "linear-gradient(135deg, #667EEA, #764BA2)",
        description: {
            tr: "Yapay zeka destekli kişisel yaşam asistanı. Hedefler, alışkanlıklar, finans takibi ve kişisel gelişim önerilerini tek çatı altında toplar.",
            en: "AI-powered personal life assistant. Combines goals, habits, finance tracking, and personal development suggestions under one roof."
        },
        features: {
            tr: [
                "Kişiselleştirilmiş AI asistanı",
                "Hedef ve alışkanlık takibi",
                "Finansal yönetim araçları",
                "Mood ve enerji takibi",
                "Günlük öneriler ve motivasyon"
            ],
            en: [
                "Personalized AI assistant",
                "Goal and habit tracking",
                "Financial management tools",
                "Mood and energy tracking",
                "Daily suggestions and motivation"
            ]
        },
        tech: ["Next.js", "TypeScript", "Prisma", "OpenAI", "PostgreSQL"],
        github: "https://github.com/DevKursat/Aura"
    },
    lusid: {
        title: "Lusid",
        category: { tr: "Yaratıcı Platform", en: "Creative Platform" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "📚",
        gradient: "linear-gradient(135deg, #00D9FF, #0066FF)",
        description: {
            tr: "Kitap okuma, günlük yazma, meditasyon ve rüya yorumlama özellikleri sunan kapsamlı bir kişisel gelişim platformu.",
            en: "A comprehensive personal development platform offering book reading, journaling, meditation, and dream interpretation features."
        },
        features: {
            tr: [
                "Dijital kitaplık yönetimi",
                "AI destekli rüya yorumu",
                "Günlük yazma arayüzü",
                "Meditasyon seansları",
                "Kişisel gelişim takibi"
            ],
            en: [
                "Digital library management",
                "AI-powered dream interpretation",
                "Journaling interface",
                "Meditation sessions",
                "Personal development tracking"
            ]
        },
        tech: ["Flutter", "Firebase", "OpenAI API", "Dart"],
        github: "https://github.com/DevKursat/lusid"
    },
    viralwave: {
        title: "ViralWaveAi",
        category: { tr: "Sosyal Medya", en: "Social Media" },
        status: { tr: "Beklemede", en: "On Hold" },
        statusType: "waiting",
        icon: "📱",
        gradient: "linear-gradient(135deg, #FF0050, #FF4081)",
        description: {
            tr: "TikTok trend analizi ve içerik stratejisi platformu. Organik büyüme için veri odaklı içgörüler sunar.",
            en: "TikTok trend analysis and content strategy platform. Provides data-driven insights for organic growth."
        },
        features: {
            tr: [
                "Trend analizi ve tahminleme",
                "Viral içerik önerileri",
                "Hashtag optimizasyonu",
                "Rakip analizi",
                "Performans raporları"
            ],
            en: [
                "Trend analysis and forecasting",
                "Viral content suggestions",
                "Hashtag optimization",
                "Competitor analysis",
                "Performance reports"
            ]
        },
        tech: ["Python", "FastAPI", "TikTok API", "ML Models"],
        github: "https://github.com/DevKursat/viralwaveai"
    },
    vera: {
        title: "Vera",
        category: { tr: "Yemek Teknolojisi", en: "Food Tech" },
        status: { tr: "Beklemede", en: "On Hold" },
        statusType: "waiting",
        icon: "🍽️",
        gradient: "linear-gradient(135deg, #FF6B6B, #FFA07A)",
        description: {
            tr: "AI garsonlu akıllı restoran sipariş sistemi. Müşteri deneyimini kişiselleştirir ve restoran operasyonlarını optimize eder.",
            en: "AI waiter smart restaurant ordering system. Personalizes customer experience and optimizes restaurant operations."
        },
        features: {
            tr: [
                "AI destekli sipariş asistanı",
                "Kişiselleştirilmiş öneriler",
                "Diyet ve alerji takibi",
                "Akıllı masa yönetimi",
                "Mutfak entegrasyonu"
            ],
            en: [
                "AI-powered order assistant",
                "Personalized recommendations",
                "Diet and allergy tracking",
                "Smart table management",
                "Kitchen integration"
            ]
        },
        tech: ["React Native", "Node.js", "OpenAI", "PostgreSQL"],
        github: "https://github.com/DevKursat/vera"
    },
    veraqr: {
        title: "VeraQR",
        category: { tr: "QR Menü", en: "QR Menu" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "📋",
        gradient: "linear-gradient(135deg, #FF8E53, #FFA726)",
        description: {
            tr: "Restoranlar için modern QR kod menü sistemi. Anlık güncelleme, çoklu dil desteği ve analitik özellikleri sunar.",
            en: "Modern QR code menu system for restaurants. Offers instant updates, multi-language support, and analytics features."
        },
        features: {
            tr: [
                "Anlık menü güncelleme",
                "Çoklu dil desteği",
                "Fiyat ve stok yönetimi",
                "Görsel menü tasarımı",
                "Müşteri analitiği"
            ],
            en: [
                "Instant menu updates",
                "Multi-language support",
                "Price and stock management",
                "Visual menu design",
                "Customer analytics"
            ]
        },
        tech: ["Next.js", "Supabase", "Tailwind CSS", "QR Code API"],
        github: "https://github.com/DevKursat/veraqr"
    },
    "kursat-social": {
        title: "Kürşat",
        category: { tr: "Sosyal Medya", en: "Social Media" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "🇹🇷",
        gradient: "linear-gradient(135deg, #E1306C, #C13584)",
        description: {
            tr: "Yerli ve milli sosyal medya platformu. Türk kullanıcılar için özel tasarlanmış, güvenli ve kullanıcı dostu bir deneyim sunar.",
            en: "Local and national social media platform. Specially designed for Turkish users, offering a secure and user-friendly experience."
        },
        features: {
            tr: [
                "Yerli altyapı",
                "Güvenli veri saklama",
                "Türkçe öncelikli arayüz",
                "Topluluk yönetimi araçları",
                "İçerik moderasyonu"
            ],
            en: [
                "Local infrastructure",
                "Secure data storage",
                "Turkish-first interface",
                "Community management tools",
                "Content moderation"
            ]
        },
        tech: ["Flutter", "Firebase", "Node.js", "MongoDB"],
        github: "https://github.com/DevKursat/kursat"
    },
    lincard: {
        title: "Lincard",
        category: { tr: "Link Yönetimi", en: "Link Management" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "🔗",
        gradient: "linear-gradient(135deg, #39E09B, #00D9FF)",
        description: {
            tr: "Tüm linklerinizi tek bir sayfada toplayan modern bio link platformu. Analitik ve özelleştirme seçenekleri sunar.",
            en: "Modern bio link platform that collects all your links on one page. Offers analytics and customization options."
        },
        features: {
            tr: [
                "Sınırsız link ekleme",
                "Özelleştirilebilir temalar",
                "Tıklama analitiği",
                "QR kod oluşturma",
                "Sosyal medya entegrasyonu"
            ],
            en: [
                "Unlimited link adding",
                "Customizable themes",
                "Click analytics",
                "QR code generation",
                "Social media integration"
            ]
        },
        tech: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
        github: "https://github.com/DevKursat/lincard"
    },
    voltnet: {
        title: "Voltnet",
        category: { tr: "EV Şarj", en: "EV Charging" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "⚡",
        gradient: "linear-gradient(135deg, #00D9FF, #00FF88)",
        description: {
            tr: "Farklı elektrikli araç şarj ağlarını tek platformda birleştiren uygulama. Şarj istasyonu bulma, fiyat karşılaştırma ve ödeme kolaylığı sağlar.",
            en: "Application that unifies different electric vehicle charging networks on one platform. Provides charging station finding, price comparison, and payment convenience."
        },
        features: {
            tr: [
                "Çoklu şarj ağı entegrasyonu",
                "Gerçek zamanlı uygunluk",
                "Fiyat karşılaştırma",
                "Rota planlama",
                "Tek ödeme sistemi"
            ],
            en: [
                "Multi-charging network integration",
                "Real-time availability",
                "Price comparison",
                "Route planning",
                "Single payment system"
            ]
        },
        tech: ["Flutter", "Node.js", "Maps API", "PostgreSQL"],
        github: "https://github.com/DevKursat/voltnet"
    },
    alove: {
        title: "aLove",
        category: { tr: "Flört Uygulaması", en: "Dating App" },
        status: { tr: "Aktif", en: "Active" },
        statusType: "active",
        icon: "❤️",
        gradient: "linear-gradient(135deg, #FD297B, #FF655B)",
        description: {
            tr: "Anlamlı bağlantılar kurmayı hedefleyen modern flört uygulaması. AI destekli eşleştirme ve güvenlik özellikleri sunar.",
            en: "Modern dating app aimed at building meaningful connections. Offers AI-powered matching and security features."
        },
        features: {
            tr: [
                "AI destekli eşleştirme",
                "Profil doğrulama sistemi",
                "Güvenli mesajlaşma",
                "Video tanışma özelliği",
                "Gizlilik kontrolleri"
            ],
            en: [
                "AI-powered matching",
                "Profile verification system",
                "Secure messaging",
                "Video dating feature",
                "Privacy controls"
            ]
        },
        tech: ["React Native", "Firebase", "Node.js", "ML Kit"],
        github: "https://github.com/DevKursat/alove"
    }
};

// ============================================
// LANGUAGE SYSTEM
// ============================================
let currentLang = localStorage.getItem('lang') || 'tr';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-tr][data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // If modal is open, update modal content
    const modal = document.getElementById('projectModal');
    if (modal && modal.classList.contains('active')) {
        const projectId = modal.dataset.projectId;
        if (projectId && projectsData[projectId]) {
            updateModalContent(projectsData[projectId]);
        }
    }
}

function initLanguage() {
    // Set initial language
    setLanguage(currentLang);
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        follower.style.display = 'none';
        return;
    }
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        // Cursor (fast)
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Follower (slower)
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animate);
    }
    animate();
    
    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .project-mini, .hobby-item, .skill-tag');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });
}

// ============================================
// LOADER WITH PORTAL ZOOM EFFECT
// ============================================
function initLoader() {
    const loader = document.querySelector('.loader');
    const loaderContent = document.querySelector('.loader-content');
    
    // Add portal rings for zoom effect
    for (let i = 0; i < 3; i++) {
        const ring = document.createElement('div');
        ring.className = 'loader-ring';
        loader.appendChild(ring);
    }
    
    window.addEventListener('load', () => {
        // Wait for dots animation to complete a cycle
        setTimeout(() => {
            // Trigger zoom-in portal effect
            loader.classList.add('zoom-in');
            
            // After zoom animation, hide loader and show content
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = '';
                initScrollAnimations();
            }, 1200);
        }, 1200);
    });
    
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const nav = document.querySelector('.nav');
    const menuBtn = document.querySelector('.nav-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('[data-scroll]');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.scrollDelay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(el => observer.observe(el));
}

// ============================================
// STATS COUNTER
// ============================================
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.dataset.count);
                animateCount(target, count);
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCount(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 1500;
    const stepTime = duration / 50;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ============================================
// PROJECT MODAL
// ============================================
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const modalClose = modal.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('[data-project]');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            const project = projectsData[projectId];
            
            if (project) {
                openModal(project, projectId);
            }
        });
    });
    
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(project, projectId) {
    const modal = document.getElementById('projectModal');
    modal.dataset.projectId = projectId;
    
    updateModalContent(project);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateModalContent(project) {
    const modal = document.getElementById('projectModal');
    const lang = currentLang;
    
    // Update visual
    modal.querySelector('.modal-gradient').style.background = project.gradient;
    modal.querySelector('.modal-icon').textContent = project.icon;
    
    // Update meta
    modal.querySelector('.modal-category').textContent = project.category[lang];
    const statusEl = modal.querySelector('.modal-status');
    statusEl.textContent = project.status[lang];
    statusEl.className = `modal-status ${project.statusType}`;
    
    // Update content
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-description').textContent = project.description[lang];
    
    // Update features
    const featureList = modal.querySelector('.modal-feature-list');
    featureList.innerHTML = project.features[lang].map(f => `<li>${f}</li>`).join('');
    
    // Update tech
    const techList = modal.querySelector('.modal-tech-list');
    techList.innerHTML = project.tech.map(t => `<span>${t}</span>`).join('');
    
    // Update link
    modal.querySelector('.modal-link').href = project.github;
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// PARALLAX EFFECTS
// ============================================
function initParallax() {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        orbs.forEach((orb, index) => {
            const speed = 0.1 + (index * 0.05);
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

// ============================================
// SKILLS WHEEL ANIMATION WITH DRAGGABLE PLANETS
// ============================================
function initSkillsWheel() {
    const wheel = document.querySelector('.skills-wheel');
    if (!wheel) return;
    
    const orbits = wheel.querySelectorAll('.skill-orbit');
    const planets = wheel.querySelectorAll('.skill-planet');
    
    // Pause animation on hover
    wheel.addEventListener('mouseenter', () => {
        orbits.forEach(orbit => {
            orbit.style.animationPlayState = 'paused';
        });
    });
    
    wheel.addEventListener('mouseleave', () => {
        if (!wheel.classList.contains('dragging-active')) {
            orbits.forEach(orbit => {
                orbit.style.animationPlayState = 'running';
            });
        }
    });
    
    // Tooltip positioning - always on top with mouse tracking
    planets.forEach(planet => {
        const tooltip = planet.querySelector('.skill-tooltip');
        if (!tooltip) return;
        
        // Show tooltip and position it
        planet.addEventListener('mouseenter', (e) => {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
            updateTooltipPosition(e, tooltip);
        });
        
        planet.addEventListener('mousemove', (e) => {
            updateTooltipPosition(e, tooltip);
        });
        
        planet.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.visibility = 'hidden';
        });
    });
    
    // Draggable planets
    initDraggablePlanets(wheel, planets, orbits);
}

function updateTooltipPosition(e, tooltip) {
    // Position tooltip above mouse cursor
    const tooltipWidth = tooltip.offsetWidth || 150;
    const tooltipHeight = tooltip.offsetHeight || 60;
    
    let left = e.clientX - tooltipWidth / 2;
    let top = e.clientY - tooltipHeight - 20;
    
    // Keep tooltip within viewport
    if (left < 10) left = 10;
    if (left + tooltipWidth > window.innerWidth - 10) {
        left = window.innerWidth - tooltipWidth - 10;
    }
    if (top < 10) {
        top = e.clientY + 20;
        tooltip.classList.add('below');
    } else {
        tooltip.classList.remove('below');
    }
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
}

function initDraggablePlanets(wheel, planets, orbits) {
    let isDragging = false;
    let currentPlanet = null;
    let originalParent, originalNextSibling;
    
    planets.forEach(planet => {
        planet.style.cursor = 'grab';
        
        planet.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDragging = true;
            currentPlanet = planet;
            
            // Store original position info
            originalParent = planet.parentElement;
            originalNextSibling = planet.nextElementSibling;
            
            // Add dragging classes
            planet.classList.add('dragging');
            wheel.classList.add('dragging-active');
            
            // Pause orbits
            orbits.forEach(orbit => {
                orbit.style.animationPlayState = 'paused';
            });
            
            // Move planet to body for free movement
            document.body.appendChild(planet);
            planet.classList.add('dragged');
            planet.style.left = (e.clientX - planet.offsetWidth / 2) + 'px';
            planet.style.top = (e.clientY - planet.offsetHeight / 2) + 'px';
        });
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging || !currentPlanet) return;
        
        currentPlanet.style.left = (e.clientX - currentPlanet.offsetWidth / 2) + 'px';
        currentPlanet.style.top = (e.clientY - currentPlanet.offsetHeight / 2) + 'px';
    });
    
    document.addEventListener('mouseup', () => {
        if (!isDragging || !currentPlanet) return;
        
        // Return planet to original position
        currentPlanet.classList.remove('dragging', 'dragged');
        currentPlanet.style.left = '';
        currentPlanet.style.top = '';
        currentPlanet.style.position = '';
        
        // Return to original parent
        if (originalNextSibling) {
            originalParent.insertBefore(currentPlanet, originalNextSibling);
        } else {
            originalParent.appendChild(currentPlanet);
        }
        
        wheel.classList.remove('dragging-active');
        
        // Resume orbits
        orbits.forEach(orbit => {
            orbit.style.animationPlayState = 'running';
        });
        
        isDragging = false;
        currentPlanet = null;
    });
}

// ============================================
// SKILLS VIEW MODE SWITCHER & ZERO-G PLAYGROUND
// ============================================
const skillsData = [
    { icon: 'TS', name: 'TypeScript', color: '#3178C6' },
    { icon: 'JS', name: 'JavaScript', color: '#F7DF1E' },
    { icon: 'PY', name: 'Python', color: '#3776AB' },
    { icon: 'JV', name: 'Java', color: '#ED8B00' },
    { icon: 'KT', name: 'Kotlin', color: '#7F52FF' },
    { icon: 'DT', name: 'Dart', color: '#0175C2' },
    { icon: '⚛️', name: 'React', color: '#61DAFB' },
    { icon: '🔺', name: 'Next.js', color: '#fff' },
    { icon: '💙', name: 'Flutter', color: '#02569B' },
    { icon: '🚀', name: 'FastAPI', color: '#009688' },
    { icon: '📗', name: 'Node.js', color: '#339933' },
    { icon: '🔥', name: 'Firebase', color: '#FFCA28' },
    { icon: '⚡', name: 'Supabase', color: '#3ECF8E' },
    { icon: '🤖', name: 'AI/ML', color: '#00D9FF' },
    { icon: '🐳', name: 'Docker', color: '#2496ED' },
    { icon: '🐘', name: 'PostgreSQL', color: '#336791' },
    { icon: '🍃', name: 'MongoDB', color: '#47A248' },
    { icon: '🔄', name: 'Git', color: '#F05032' },
    { icon: '☸️', name: 'Kubernetes', color: '#326CE5' },
    { icon: '☁️', name: 'AWS', color: '#FF9900' },
    { icon: '🎨', name: 'Figma', color: '#F24E1E' },
    { icon: '📱', name: 'React Native', color: '#61DAFB' },
    { icon: '🔗', name: 'REST/GraphQL', color: '#E10098' }
];

let zeroGBalls = [];
let animationId = null;
let deviceMotionEnabled = false;
let motionAccel = { x: 0, y: 0 };

function initSkillsToggle() {
    const modeBtns = document.querySelectorAll('.mode-btn');
    const gridView = document.querySelector('.skills-grid-view');
    const solarView = document.querySelector('.skills-solar-view');
    const zeroGView = document.querySelector('.skills-zero-g-view');
    
    if (!modeBtns.length) return;
    
    modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            
            // Update active button with animation
            modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Hide all views with fade out
            [gridView, solarView, zeroGView].forEach(view => {
                if (view) {
                    view.classList.remove('active');
                }
            });
            
            // Stop any physics
            stopZeroGPhysics();
            
            // Show selected view with animation delay
            setTimeout(() => {
                if (mode === 'grid' && gridView) {
                    gridView.classList.add('active');
                } else if (mode === 'solar' && solarView) {
                    solarView.classList.add('active');
                } else if (mode === 'zero-g' && zeroGView) {
                    zeroGView.classList.add('active');
                    initZeroGPlayground(zeroGView);
                }
            }, 100);
        });
    });
}

function initZeroGPlayground(container) {
    // Clear previous balls
    container.querySelectorAll('.zero-g-ball').forEach(b => b.remove());
    zeroGBalls = [];
    
    const containerRect = container.getBoundingClientRect();
    const ballSize = window.innerWidth < 768 ? 60 : 70;
    
    // Create balls with random positions
    skillsData.forEach((skill, index) => {
        const ball = document.createElement('div');
        ball.className = 'zero-g-ball floating';
        ball.innerHTML = `
            <span class="ball-icon">${skill.icon}</span>
            <span class="ball-name">${skill.name}</span>
        `;
        ball.style.borderColor = skill.color;
        
        // Random position across the container
        const x = Math.random() * (containerRect.width - ballSize);
        const y = Math.random() * (containerRect.height - ballSize);
        
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
        
        // Random animation delay for floating effect
        ball.style.animationDelay = `${Math.random() * 2}s`;
        
        container.appendChild(ball);
        
        zeroGBalls.push({
            el: ball,
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: ballSize
        });
        
        // Add drag handlers
        addZeroGDragHandlers(ball, zeroGBalls[zeroGBalls.length - 1], container);
    });
    
    // Start zero-gravity physics
    startZeroGPhysics(container);
    
    // Request device motion permission (for iOS 13+)
    requestDeviceMotion();
}

function addZeroGDragHandlers(ball, ballData, container) {
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let lastTime = 0;
    
    const onStart = (e) => {
        isDragging = true;
        ball.classList.add('grabbing');
        ball.classList.remove('floating');
        
        const pos = getEventPos(e);
        lastX = pos.x;
        lastY = pos.y;
        lastTime = Date.now();
        
        ballData.vx = 0;
        ballData.vy = 0;
        
        e.preventDefault();
    };
    
    const onMove = (e) => {
        if (!isDragging) return;
        
        const pos = getEventPos(e);
        const containerRect = container.getBoundingClientRect();
        
        const newX = pos.x - containerRect.left - ballData.size / 2;
        const newY = pos.y - containerRect.top - ballData.size / 2;
        
        // Calculate velocity for throwing
        const now = Date.now();
        const dt = (now - lastTime) / 1000;
        if (dt > 0) {
            ballData.vx = (pos.x - lastX) / dt * 0.08;
            ballData.vy = (pos.y - lastY) / dt * 0.08;
        }
        
        ballData.x = Math.max(0, Math.min(containerRect.width - ballData.size, newX));
        ballData.y = Math.max(0, Math.min(containerRect.height - ballData.size, newY));
        
        ball.style.left = ballData.x + 'px';
        ball.style.top = ballData.y + 'px';
        
        lastX = pos.x;
        lastY = pos.y;
        lastTime = now;
        
        e.preventDefault();
    };
    
    const onEnd = () => {
        isDragging = false;
        ball.classList.remove('grabbing');
    };
    
    // Mouse events
    ball.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    
    // Touch events
    ball.addEventListener('touchstart', onStart, { passive: false });
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);
}

function requestDeviceMotion() {
    // Check if DeviceMotionEvent is available
    if (typeof DeviceMotionEvent !== 'undefined') {
        // iOS 13+ requires permission
        if (typeof DeviceMotionEvent.requestPermission === 'function') {
            // Create a button for user interaction (required for iOS)
            const hint = document.querySelector('.zero-g-hint');
            if (hint) {
                hint.style.cursor = 'pointer';
                hint.addEventListener('click', async () => {
                    try {
                        const permission = await DeviceMotionEvent.requestPermission();
                        if (permission === 'granted') {
                            enableDeviceMotion();
                            hint.innerHTML = `
                                <span class="hint-icon">🪐</span>
                                <span data-tr="Cihazı hareket ettir!" data-en="Move your device!">Cihazı hareket ettir!</span>
                            `;
                        }
                    } catch (error) {
                        console.log('Device motion permission denied');
                    }
                }, { once: true });
            }
        } else {
            // Non-iOS devices
            enableDeviceMotion();
        }
    }
    
    // Also add mouse movement as fallback for desktop
    addMouseMotionFallback();
}

function enableDeviceMotion() {
    deviceMotionEnabled = true;
    
    window.addEventListener('devicemotion', (event) => {
        const accel = event.accelerationIncludingGravity;
        if (accel) {
            // Normalize and scale acceleration
            motionAccel.x = (accel.x || 0) * 0.5;
            motionAccel.y = (accel.y || 0) * -0.5; // Invert for natural feeling
        }
    });
}

function addMouseMotionFallback() {
    const zeroGView = document.querySelector('.skills-zero-g-view');
    if (!zeroGView) return;
    
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    zeroGView.addEventListener('mousemove', (e) => {
        const rect = zeroGView.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Calculate acceleration based on mouse movement
        const dx = mouseX - lastMouseX;
        const dy = mouseY - lastMouseY;
        
        motionAccel.x = dx * 0.1;
        motionAccel.y = dy * 0.1;
        
        lastMouseX = mouseX;
        lastMouseY = mouseY;
    });
    
    zeroGView.addEventListener('mouseleave', () => {
        motionAccel.x = 0;
        motionAccel.y = 0;
    });
}

function getEventPos(e) {
    if (e.touches && e.touches.length) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
}

function startZeroGPhysics(container) {
    const bounce = 0.85;
    const friction = 0.995;
    const maxSpeed = 15;
    
    function update() {
        const containerRect = container.getBoundingClientRect();
        
        zeroGBalls.forEach(ball => {
            if (ball.el.classList.contains('grabbing')) return;
            
            // Apply motion acceleration (from device or mouse)
            ball.vx += motionAccel.x * 0.2;
            ball.vy += motionAccel.y * 0.2;
            
            // Add slight random drift for zero-G feeling
            ball.vx += (Math.random() - 0.5) * 0.1;
            ball.vy += (Math.random() - 0.5) * 0.1;
            
            // Apply friction
            ball.vx *= friction;
            ball.vy *= friction;
            
            // Limit max speed
            const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
            if (speed > maxSpeed) {
                ball.vx = (ball.vx / speed) * maxSpeed;
                ball.vy = (ball.vy / speed) * maxSpeed;
            }
            
            // Update position
            ball.x += ball.vx;
            ball.y += ball.vy;
            
            // Bounce off walls
            if (ball.x < 0) {
                ball.x = 0;
                ball.vx *= -bounce;
            }
            if (ball.x > containerRect.width - ball.size) {
                ball.x = containerRect.width - ball.size;
                ball.vx *= -bounce;
            }
            
            // Bounce off floor/ceiling
            if (ball.y < 0) {
                ball.y = 0;
                ball.vy *= -bounce;
            }
            if (ball.y > containerRect.height - ball.size) {
                ball.y = containerRect.height - ball.size;
                ball.vy *= -bounce;
            }
            
            // Update DOM
            ball.el.style.left = ball.x + 'px';
            ball.el.style.top = ball.y + 'px';
        });
        
        // Ball collision detection
        for (let i = 0; i < zeroGBalls.length; i++) {
            for (let j = i + 1; j < zeroGBalls.length; j++) {
                const b1 = zeroGBalls[i];
                const b2 = zeroGBalls[j];
                
                const dx = (b2.x + b2.size/2) - (b1.x + b1.size/2);
                const dy = (b2.y + b2.size/2) - (b1.y + b1.size/2);
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = (b1.size + b2.size) / 2;
                
                if (dist < minDist && dist > 0) {
                    // Collision response
                    const nx = dx / dist;
                    const ny = dy / dist;
                    const overlap = minDist - dist;
                    
                    // Separate balls
                    b1.x -= nx * overlap * 0.5;
                    b1.y -= ny * overlap * 0.5;
                    b2.x += nx * overlap * 0.5;
                    b2.y += ny * overlap * 0.5;
                    
                    // Exchange velocities along collision normal
                    const dvx = b1.vx - b2.vx;
                    const dvy = b1.vy - b2.vy;
                    const dvn = dvx * nx + dvy * ny;
                    
                    if (dvn > 0) {
                        b1.vx -= dvn * nx * 0.5;
                        b1.vy -= dvn * ny * 0.5;
                        b2.vx += dvn * nx * 0.5;
                        b2.vy += dvn * ny * 0.5;
                    }
                }
            }
        }
        
        animationId = requestAnimationFrame(update);
    }
    
    update();
}

function stopZeroGPhysics() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    motionAccel.x = 0;
    motionAccel.y = 0;
}

// ============================================
// 3D TILT EFFECT FOR PROJECT CARDS
// ============================================
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-mini');
    
    cards.forEach(card => {
        card.classList.add('tilt');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// ============================================
// MARQUEE PAUSE ON HOVER
// ============================================
function initMarquee() {
    const marquee = document.querySelector('.marquee');
    if (!marquee) return;
    
    const contents = marquee.querySelectorAll('.marquee-content');
    
    marquee.addEventListener('mouseenter', () => {
        contents.forEach(content => {
            content.style.animationPlayState = 'paused';
        });
    });
    
    marquee.addEventListener('mouseleave', () => {
        contents.forEach(content => {
            content.style.animationPlayState = 'running';
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initLoader();
    initCursor();
    initNavigation();
    initStatsCounter();
    initProjectModal();
    initParallax();
    initSkillsWheel();
    initSkillsToggle();
    initMarquee();
    initTiltEffect();
});

// Handle page visibility
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        document.querySelectorAll('.marquee-content, .skill-orbit').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations
        document.querySelectorAll('.marquee-content, .skill-orbit').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Performance: Reduce motion if user prefers
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--duration-fast', '0.01ms');
    document.documentElement.style.setProperty('--duration-normal', '0.01ms');
    document.documentElement.style.setProperty('--duration-slow', '0.01ms');
}

console.log('%c🚀 Portfolio by Kürşat Yılmaz', 'font-size: 20px; color: #00D9FF; font-weight: bold;');
console.log('%cBuilding ideas into reality, fast.', 'font-size: 14px; color: #666;');
