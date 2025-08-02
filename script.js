// Enhanced food data with more popular items
const foodData = {
    pizzas: [
        {
            id: 1,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 1.jpg",
            discount: "20%"
        },
        {
            id: 2,
            name: "Home made pizza", 
            price: 123,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 2.jpg"
        },
        {
            id: 3,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min", 
            image: "./assets/img 3.jpg",
            discount: "30%"
        },
        {
            id: 4,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 4.jpg"
        },
        {
            id: 5,
            name: "Home made pizza",
            price: 19,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 5.jpg",
            discount: "20%"
        },
        {
            id: 6,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 6.jpg",
            discount: "30%"
        },
        {
            id: 7,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 7.jpg"
        },
        {
            id: 8,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 8.jpg",
            discount: "20%"
        },
        {
            id: 9,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 1.jpg",
            discount: "20%"
        },
        {
            id: 10,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 2.jpg",
            discount: "20%"
        },
        {
            id: 11,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 3.jpg",
            discount: "20%"
        },
        {
            id: 12,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/img 4.jpg",
            discount: "20%"
        }
    ],
    popular: [
        {
            id: 101,
            name: "Home made pizza",
            price: 190,
            rating: 4.7,
            reviews: "50-79 min",
            image: "./assets/slider 1.jpg"
        },
        {
            id: 102,
            name: "Tandoor Chicken",
            price: 164,
            rating: 4.5,
            reviews: "1-100 min",
            image: "./assets/slider 2.jpg",
            discount: "35%"
        },
        {
            id: 103,
            name: "Chili Chicken",
            price: 116,
            rating: 4.1,
            reviews: "244 min",
            image: "./assets/slider 3.jpg",
            discount: "30%"
        },
        {
            id: 104,
            name: "Butter Chicken",
            price: 250,
            rating: 4.8,
            reviews: "45-60 min",
            image: "./assets/img 1.jpg",
            discount: "25%"
        },
        {
            id: 105,
            name: "Chicken Biryani",
            price: 320,
            rating: 4.9,
            reviews: "60-80 min",
            image: "./assets/img 2.jpg",
            discount: "15%"
        },
        {
            id: 106,
            name: "Paneer Tikka",
            price: 180,
            rating: 4.6,
            reviews: "30-45 min",
            image: "./assets/img 3.jpg"
        },
        {
            id: 107,
            name: "Fish Curry",
            price: 280,
            rating: 4.4,
            reviews: "40-55 min",
            image: "./assets/img 4.jpg",
            discount: "20%"
        },
        {
            id: 108,
            name: "Mutton Curry",
            price: 350,
            rating: 4.7,
            reviews: "70-90 min",
            image: "./assets/img 5.jpg",
            discount: "10%"
        }
    ]
};

// Cart state management
const cartState = {
    items: new Map(),
    totalCount: 0
};

// Unified food card creation function for both grid and slider
function createFoodCard(item, isPopular = false) {
    const quantity = cartState.items.get(item.id) || 0;
    const showQuantityControls = quantity > 0;
    
    return `
        <article class="food-card ${isPopular ? 'popular-item' : ''}" data-id="${item.id}">
            <div class="food-card-image">
                <img src="${item.image}" alt="${item.name}" 
                    onerror="this.src='./assets/placeholder.jpg'; this.onerror=null;"
                    loading="lazy">
                ${item.discount ? `
                    <div class="discount-container">
                        <div class="discount-bg"></div>
                        <div class="discount-badge">${item.discount}</div>
                    </div>
                ` : ''}
            </div>
            <div class="food-card-content">
                <!-- Row 1: Title and Price -->
                <div class="food-card-header">
                    <h3>${item.name}</h3>
                    <div class="price">₹${item.price}</div>
                </div>
                
                <!-- Row 2: Rating/Time and Add Button -->
                <div class="food-card-footer">
                    <div class="rating-time-container">
                        <div class="rating">
                            <img src="./assets/star.svg" alt="Star" class="star-icon">
                            <span class="rating-text">${item.rating}</span>
                        </div>
                        <div class="time-container1">
                            <div class="time-container">
                                <span class="time-text">${item.reviews}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="quantity-controls ${showQuantityControls ? 'active' : ''}" id="quantity-${item.id}">
                        <button class="quantity-btn" onclick="decreaseQuantity(${item.id})" aria-label="Decrease quantity">
                            <img src="./assets/minus.svg" alt="Minus" class="minus-icon">
                        </button>
                        <span class="quantity-count" id="count-${item.id}">${quantity}</span>
                        <button class="quantity-btn" onclick="increaseQuantity(${item.id})" aria-label="Increase quantity">
                            <img src="./assets/plus.svg" alt="Plus" class="plus-icon">
                        </button>
                    </div>
                    
                    <button class="add-btn ${showQuantityControls ? 'hide' : ''}" onclick="addToCart(${item.id})" id="add-btn-${item.id}">
                        <img src="./assets/plus.svg" alt="Plus" class="plus-icon">
                    </button>
                </div>
            </div>
        </article>
    `;
}

// Enhanced Application Class with Fixed Carousel
class JTGeatsApp {
    constructor() {
        this.currentSlide = 0;
        this.slidesToShow = 3; // Always show 3 items as per Figma
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
        this.updateCartDisplay();
        this.setupCarouselHoverControls();
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
            // Calculate slide width based on container and gap
            const slideWidth = (277 + 24); // card width + gap
            const translateX = -this.currentSlide * slideWidth;
            track.style.transform = `translateX(${translateX}px)`;
        }
    }

    setupCarouselHoverControls() {
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        const carouselTrack = document.querySelector('.carousel-track');
        
        // Hover elements for comprehensive coverage
        const hoverElements = [carouselContainer, carouselWrapper, carouselTrack].filter(Boolean);
        
        hoverElements.forEach(element => {
            if (element) {
                element.addEventListener('mouseenter', () => {
                    this.stopAutoSlide();
                });
                
                element.addEventListener('mouseleave', () => {
                    this.startAutoSlide();
                });
            }
        });
        
        // Also handle arrow buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        [prevBtn, nextBtn].forEach(btn => {
            if (btn) {
                btn.addEventListener('mouseenter', () => this.stopAutoSlide());
                btn.addEventListener('mouseleave', () => this.startAutoSlide());
            }
        });
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

        if (video && overlay) {
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

    updateCartDisplay() {
        const cartCountElement = document.getElementById('cartCount');
        if (cartCountElement) {
            cartCountElement.textContent = cartState.totalCount;
            cartCountElement.classList.toggle('show', cartState.totalCount > 0);
        }
    }

    handleSearch(query) {
        if (!query.trim()) return;
        
        const allItems = [...foodData.pizzas, ...foodData.popular];
        const filteredItems = allItems.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase())
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

    // Method to refresh all displays when cart changes
    refreshDisplays() {
        this.renderFoodItems();
        this.renderPopularItems();
        this.updateCartDisplay();
    }
}

// Enhanced Cart functionality that works for both grid and slider
function addToCart(itemId) {
    const allItems = [...foodData.pizzas, ...foodData.popular];
    const item = allItems.find(item => item.id === itemId);
    
    if (item) {
        cartState.items.set(itemId, 1);
        cartState.totalCount = Array.from(cartState.items.values()).reduce((sum, qty) => sum + qty, 0);
        
        updateItemDisplay(itemId);
        window.app.updateCartDisplay();
        window.app.showNotification(`${item.name} added to cart!`, 'success');
        
        console.log('Added to cart:', item);
    }
}

function increaseQuantity(itemId) {
    const currentQty = cartState.items.get(itemId) || 0;
    cartState.items.set(itemId, currentQty + 1);
    cartState.totalCount = Array.from(cartState.items.values()).reduce((sum, qty) => sum + qty, 0);
    
    updateItemDisplay(itemId);
    window.app.updateCartDisplay();
}

function decreaseQuantity(itemId) {
    const currentQty = cartState.items.get(itemId) || 0;
    if (currentQty > 1) {
        cartState.items.set(itemId, currentQty - 1);
    } else {
        cartState.items.delete(itemId);
    }
    cartState.totalCount = Array.from(cartState.items.values()).reduce((sum, qty) => sum + qty, 0);
    
    updateItemDisplay(itemId);
    window.app.updateCartDisplay();
}

function updateItemDisplay(itemId) {
    const quantity = cartState.items.get(itemId) || 0;
    const quantityControls = document.getElementById(`quantity-${itemId}`);
    const addBtn = document.getElementById(`add-btn-${itemId}`);
    const countElement = document.getElementById(`count-${itemId}`);
    
    if (quantityControls && addBtn && countElement) {
        if (quantity > 0) {
            quantityControls.classList.add('active');
            addBtn.style.display = 'none';
            countElement.textContent = quantity;
        } else {
            quantityControls.classList.remove('active');
            addBtn.style.display = 'flex';
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    window.app = new JTGeatsApp();
});

// Handle visibility change for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden && window.app) {
        window.app.stopAutoSlide();
    } else if (!document.hidden && window.app) {
        window.app.startAutoSlide();
    }
});
