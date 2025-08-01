// Enhanced food data with proper image paths
const foodData = {
    pizzas: [
        {
            id: 1,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 1.jpg",
            discount: "20%",
            description: "Fresh homemade pizza with authentic ingredients"
        },
        {
            id: 2,
            name: "Home made pizza", 
            price: 123,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 2.jpg",
            description: "Delicious homemade pizza crafted with love"
        },
        {
            id: 3,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min", 
            image: "./assets/img 3.jpg",
            discount: "30%",
            description: "Traditional homemade pizza recipe"
        },
        {
            id: 4,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 4.jpg",
            description: "Artisan homemade pizza with premium toppings"
        },
        {
            id: 5,
            name: "Home made pizza",
            price: 19,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 5.jpg",
            discount: "20%",
            description: "Budget-friendly homemade pizza"
        },
        {
            id: 6,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 6.jpg",
            discount: "30%",
            description: "Gourmet homemade pizza experience"
        },
        {
            id: 7,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 7.jpg",
            description: "Classic homemade pizza with fresh ingredients"
        },
        {
            id: 8,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 8.jpg",
            discount: "20%",
            description: "Specialty homemade pizza with unique flavors"
        },
        {
            id: 9,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 8.jpg",
            discount: "20%",
            description: "Specialty homemade pizza with unique flavors"
        },
        {
            id: 10,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 8.jpg",
            discount: "20%",
            description: "Specialty homemade pizza with unique flavors"
        },
        {
            id: 11,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 8.jpg",
            discount: "20%",
            description: "Specialty homemade pizza with unique flavors"
        },
        {
            id: 12,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 8.jpg",
            discount: "20%",
            description: "Specialty homemade pizza with unique flavors"
        }
    ],
    popular: [
        {
            id: 9,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/slider 1.jpg",
            description: "Most popular homemade pizza"
        },
        {
            id: 10,
            name: "Tandoor Chicken",
            price: 164,
            rating: 4.5,
            reviews: "1-100 min",
            image: "./assets/slider 2.jpg",
            discount: "35%",
            description: "Authentic tandoor-cooked chicken"
        },
        {
            id: 11,
            name: "Chili Chicken",
            price: 116,
            rating: 4.1,
            reviews: "244 min",
            image: "./assets/slider 3.jpg",
            discount: "30%",
            description: "Spicy Indo-Chinese chili chicken"
        }
    ]
};

// Optimized food card creation with proper image handling
function createFoodCard(item, isPopular = false) {
    return `
        <div class="food-card ${isPopular ? 'popular-item' : ''}" data-id="${item.id}">
            <div class="food-card-image">
                <img src="${item.image}" alt="${item.name}" 
                     onerror="this.src='./assets/placeholder.jpg'; this.onerror=null;"
                     loading="lazy">
                ${item.discount ? `<div class="discount-badge">${item.discount}</div>` : ''}
            </div>
            <div class="food-card-content">
                <h3>${item.name}</h3>
                <p class="food-description">${item.description || ''}</p>
                <div class="food-card-meta">
                    <div class="rating">
                        <span>⭐ ${item.rating}</span>
                        <span>(${item.reviews})</span>
                    </div>
                    <div class="price">₹${item.price}</div>
                </div>
                <button class="add-btn" onclick="addToCart(${item.id})">
                    <span>🛒</span> Add
                </button>
            </div>
        </div>
    `;
}

// Enhanced Application Class with optimized performance
class JTGeatsApp {
    constructor() {
        this.currentSlide = 0;
        this.slidesToShow = this.getSlidesToShow();
        this.totalSlides = foodData.popular.length;
        this.autoSlideInterval = null;
        this.isVideoPlaying = false;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        this.init();
    }

    init() {
        this.renderFoodItems();
        this.renderPopularItems();
        this.setupEventListeners();
        this.setupCarousel();
        this.setupModal();
        this.setupVideoPlayer();
        this.startAutoSlide();
        this.setupImageErrorHandling();
    }

    getSlidesToShow() {
        const width = window.innerWidth;
        if (width <= 480) return 1;
        if (width <= 768) return 2;
        return 3;
    }

    renderFoodItems() {
        const foodGrid = document.getElementById('foodGrid');
        if (foodGrid) {
            foodGrid.innerHTML = foodData.pizzas.map(item => createFoodCard(item)).join('');
        }
    }

    renderPopularItems() {
        const carouselTrack = document.getElementById('carouselTrack');
        if (carouselTrack) {
            carouselTrack.innerHTML = foodData.popular.map(item => createFoodCard(item, true)).join('');
            this.updateCarousel();
        }
    }

    setupEventListeners() {
        // Smooth scrolling navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active link
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });

        // Search functionality
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        if (searchInput && searchBtn) {
            searchBtn.addEventListener('click', () => this.handleSearch(searchInput.value));
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleSearch(searchInput.value);
                }
            });
        }

        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(contactForm);
            });
        }

        // Scroll effects
        window.addEventListener('scroll', this.debounce(() => {
            this.handleScroll();
        }, 10));

        // Window resize handler
        window.addEventListener('resize', this.debounce(() => {
            const newSlidesToShow = this.getSlidesToShow();
            if (newSlidesToShow !== this.slidesToShow) {
                this.slidesToShow = newSlidesToShow;
                this.currentSlide = Math.min(this.currentSlide, Math.max(0, this.totalSlides - this.slidesToShow));
                this.updateCarousel();
            }
        }, 250));
    }

    setupCarousel() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const track = document.getElementById('carouselTrack');

        if (prevBtn && nextBtn && track) {
            prevBtn.addEventListener('click', () => {
                this.stopAutoSlide();
                this.previousSlide();
                this.startAutoSlide();
            });
            
            nextBtn.addEventListener('click', () => {
                this.stopAutoSlide();
                this.nextSlide();
                this.startAutoSlide();
            });

            // Touch/swipe support
            track.addEventListener('touchstart', (e) => {
                this.touchStartX = e.touches[0].clientX;
                this.stopAutoSlide();
            }, { passive: true });

            track.addEventListener('touchend', (e) => {
                this.touchEndX = e.changedTouches[0].clientX;
                this.handleSwipe();
                this.startAutoSlide();
            }, { passive: true });

            // Mouse wheel support
            track.addEventListener('wheel', (e) => {
                e.preventDefault();
                this.stopAutoSlide();
                if (e.deltaY > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
                this.startAutoSlide();
            }, { passive: false });
        }
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = this.touchStartX - this.touchEndX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }
    }

    previousSlide() {
        this.currentSlide = this.currentSlide <= 0 ? 
            Math.max(0, this.totalSlides - this.slidesToShow) : this.currentSlide - 1;
        this.updateCarousel();
    }

    nextSlide() {
        const maxSlide = Math.max(0, this.totalSlides - this.slidesToShow);
        this.currentSlide = this.currentSlide >= maxSlide ? 0 : this.currentSlide + 1;
        this.updateCarousel();
    }

    updateCarousel() {
        const track = document.getElementById('carouselTrack');
        if (track) {
            const slideWidth = 100 / this.slidesToShow;
            const translateX = -this.currentSlide * (100 / this.totalSlides) * this.slidesToShow;
            track.style.transform = `translateX(${translateX}%)`;
        }
    }

    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    setupModal() {
        const modal = document.getElementById('modal');
        const requestBtn = document.getElementById('requestDishBtn');
        const closeBtn = document.getElementById('closeBtn');
        const cancelBtn = document.getElementById('cancelBtn');
        const modalForm = document.getElementById('modalForm');

        if (modal && requestBtn) {
            requestBtn.addEventListener('click', () => this.openModal());

            if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
            if (cancelBtn) cancelBtn.addEventListener('click', () => this.closeModal());
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal();
            });

            if (modalForm) {
                modalForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleModalForm(modalForm);
                });
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('show')) {
                    this.closeModal();
                }
            });
        }
    }

    openModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
            requestAnimationFrame(() => {
                modal.classList.add('show');
            });
        }
    }

    closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
            
            setTimeout(() => {
                modal.style.display = 'none';
                const form = modal.querySelector('form');
                if (form) form.reset();
            }, 300);
        }
    }

    setupVideoPlayer() {
        const video = document.getElementById('videoPlayer');
        const overlay = document.getElementById('videoOverlay');
        const playBtn = document.getElementById('playBtn');

        if (video && overlay && playBtn) {
            overlay.addEventListener('click', () => this.toggleVideo());

            video.addEventListener('ended', () => {
                this.isVideoPlaying = false;
                overlay.classList.remove('hidden');
            });

            video.addEventListener('pause', () => {
                this.isVideoPlaying = false;
                overlay.classList.remove('hidden');
            });

            video.addEventListener('play', () => {
                this.isVideoPlaying = true;
                overlay.classList.add('hidden');
            });
        }
    }

    toggleVideo() {
        const video = document.getElementById('videoPlayer');
        
        if (video) {
            if (this.isVideoPlaying) {
                video.pause();
            } else {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Video play failed:', error);
                        this.showNotification('Unable to play video', 'error');
                    });
                }
            }
        }
    }

    setupImageErrorHandling() {
        // Create a placeholder image if it doesn't exist
        const img = new Image();
        img.onerror = () => {
            // Create a simple placeholder SVG as data URL
            const placeholderSVG = `data:image/svg+xml,${encodeURIComponent(`
                <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" fill="#f0f0f0"/>
                    <text x="100" y="100" text-anchor="middle" dy="0.3em" 
                          font-family="Arial" font-size="16" fill="#999">
                        No Image
                    </text>
                </svg>
            `)}`;
            
            // Replace all failed images with placeholder
            document.querySelectorAll('img').forEach(image => {
                if (!image.complete || image.naturalHeight === 0) {
                    image.src = placeholderSVG;
                }
            });
        };
        img.src = './assets/placeholder.jpg';
    }

    handleSearch(query) {
        if (!query.trim()) return;
        
        const allItems = [...foodData.pizzas, ...foodData.popular];
        const filteredItems = allItems.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
        );
        
        if (filteredItems.length > 0) {
            this.displaySearchResults(filteredItems);
            this.showNotification(`Found ${filteredItems.length} items matching "${query}"`);
        } else {
            this.showNotification(`No items found for "${query}"`);
        }
    }

    displaySearchResults(items) {
        const foodGrid = document.getElementById('foodGrid');
        if (foodGrid) {
            foodGrid.innerHTML = items.map(item => createFoodCard(item)).join('');
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        }
    }

    handleContactForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        if (!data.name || !data.email || !data.message) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        console.log('Contact form submitted:', data);
        this.showNotification('Thank you! We will contact you soon.', 'success');
        form.reset();
    }

    handleModalForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        if (!data.dishName || !data.customerName || !data.customerEmail) {
            this.showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        console.log('Dish request submitted:', data);
        this.showNotification('Dish request submitted successfully!', 'success');
        this.closeModal();
    }

    handleScroll() {
        const header = document.querySelector('.header');
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.style.background = 'rgba(26, 192, 115, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#1AC073';
            header.style.backdropFilter = 'none';
        }
        
        this.updateActiveNavLink();
    }

    updateActiveNavLink() {
        const sections = ['home', 'menu'];
        const scrollY = window.scrollY;
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            const navLink = document.querySelector(`a[href="#${sectionId}"]`);
            
            if (section && navLink) {
                const sectionTop = section.offsetTop - headerHeight - 50;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    document.querySelectorAll('.nav-link').forEach(link => 
                        link.classList.remove('active')
                    );
                    navLink.classList.add('active');
                }
            }
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const colors = {
            success: '#1AC073',
            error: '#e74c3c',
            info: '#3498db'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            z-index: 3000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            font-family: 'Open Sans', sans-serif;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
        });
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Utility functions
function addToCart(itemId) {
    const item = [...foodData.pizzas, ...foodData.popular].find(item => item.id === itemId);
    if (item && window.app) {
        console.log('Added to cart:', item);
        showCartAnimation();
        window.app.showNotification(`${item.name} added to cart!`, 'success');
    }
}

function showCartAnimation() {
    const cartIcon = document.querySelector('.nav-icons .icon-container:last-child');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        cartIcon.style.background = 'rgba(255,255,255,0.2)';
        cartIcon.style.borderRadius = '50%';
        cartIcon.style.padding = '8px';
        
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
            cartIcon.style.background = 'none';
            cartIcon.style.padding = '0';
        }, 300);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.app = new JTGeatsApp();
});

// Handle visibility change for video performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden && window.app) {
        window.app.stopAutoSlide();
    } else if (!document.hidden && window.app) {
        window.app.startAutoSlide();
    }
});
