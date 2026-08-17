// AURA Fragrances - Tailwind SPA Logic

const products = [
    { id: 1, name: "Noir Absolu", family: "Woody", price: 850.00, volume: "100ml", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.9, notes: "Top: Black Pepper | Heart: Oud | Base: Dark Amber", desc: "A dangerously seductive blend of aged oud and deep amber.", isFeatured: true, date: "2026-08-01", gender: "Men", isBestSeller: true, isNew: false, popularity: 98 },
    { id: 2, name: "Éclat d'Or", family: "Floral", price: 920.00, volume: "50ml", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.8, notes: "Top: Bergamot | Heart: Ylang-Ylang | Base: Vanilla", desc: "Liquid gold in a bottle. A luminous, sophisticated floral.", isFeatured: true, date: "2026-07-15", gender: "Women", isBestSeller: true, isNew: false, popularity: 95 },
    { id: 3, name: "Velvet Santal", family: "Woody", price: 780.00, volume: "50ml", image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.7, notes: "Top: Cardamom | Heart: Iris | Base: Sandalwood", desc: "Creamy, smooth, and intimate Australian sandalwood.", isFeatured: true, date: "2026-06-20", gender: "Unisex", isBestSeller: false, isNew: false, popularity: 82 },
    { id: 4, name: "Midnight Rose", family: "Floral", price: 890.00, volume: "100ml", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.6, notes: "Top: Plum | Heart: Damask Rose | Base: Patchouli", desc: "A nocturnal, thorny bloom surrounded by dark fruits.", isFeatured: true, date: "2026-05-10", gender: "Women", isBestSeller: false, isNew: false, popularity: 75 },
    { id: 5, name: "Oceanic Amber", family: "Aquatic", price: 650.00, volume: "50ml", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.5, notes: "Top: Sea Salt | Heart: Neroli | Base: Ambergris", desc: "A fresh yet sensual aquatic scent.", date: "2026-04-05", gender: "Men", isBestSeller: false, isNew: false, popularity: 68 },
    { id: 6, name: "Desert Mirage", family: "Oriental", price: 990.00, volume: "100ml", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 5.0, notes: "Top: Saffron | Heart: Frankincense | Base: Myrrh", desc: "Rich, smoky, and intensely warm.", date: "2026-08-10", gender: "Unisex", isBestSeller: false, isNew: true, popularity: 88 },
    { id: 7, name: "Citrus Riviera", family: "Fresh", price: 450.00, volume: "50ml", image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.4, notes: "Top: Lemon Zest | Heart: Basil | Base: Vetiver", desc: "Sparkling and vibrant Mediterranean sunshine.", date: "2026-03-12", gender: "Unisex", isBestSeller: false, isNew: false, popularity: 65 },
    { id: 8, name: "Crimson Silk", family: "Oriental", price: 820.00, volume: "100ml", image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.8, notes: "Top: Cherry | Heart: Almond | Base: Tonka Bean", desc: "A luxurious gourmand. Sweet and deeply enveloping.", date: "2026-02-28", gender: "Women", isBestSeller: true, isNew: false, popularity: 92 },
    { id: 9, name: "Oud Royale", family: "Woody", price: 950.00, volume: "100ml", image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.9, notes: "Top: Rosewood | Heart: Cambodian Oud | Base: Musk", desc: "The pinnacle of luxury. Pure, unadulterated oud for the true connoisseur.", date: "2026-01-15", gender: "Men", isBestSeller: true, isNew: false, popularity: 89 },
    { id: 10, name: "Jasmine Noir", family: "Floral", price: 740.00, volume: "50ml", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.7, notes: "Top: Green Leaves | Heart: Jasmine Sambac | Base: Cashmere Wood", desc: "An indolic, hypnotic white floral that blooms best at midnight.", date: "2026-07-01", gender: "Women", isBestSeller: false, isNew: true, popularity: 84 },
    { id: 11, name: "Bergamot Blanc", family: "Fresh", price: 550.00, volume: "100ml", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.6, notes: "Top: White Tea | Heart: Bergamot | Base: White Musk", desc: "Clean, pure, and uplifting. Like crisp white linens on a Sunday morning.", date: "2026-05-25", gender: "Unisex", isBestSeller: false, isNew: false, popularity: 72 },
    { id: 12, name: "Spiced Leather", family: "Oriental", price: 880.00, volume: "50ml", image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.8, notes: "Top: Nutmeg | Heart: Leather | Base: Cedarwood", desc: "A study in contrast. Sharp spices meld seamlessly into supple, warm leather.", date: "2026-08-05", gender: "Men", isBestSeller: false, isNew: true, popularity: 90 }
];

let cart = JSON.parse(localStorage.getItem('aura_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('aura_wishlist')) || [];
let currentView = 'home';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    setupNavigation();
    setupAnimations();
    updateCartUI();
    updateWishlistUI();
    renderFeatured();
    renderCatalog(products);
    setupFilters();
    
    // Default routing based on hash
    if(window.location.hash === '#collections') {
        switchView('collections');
    } else {
        switchView('home');
    }
});

// --- SPA Routing ---
function switchView(viewName) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(viewName + '-view').classList.add('active');
    currentView = viewName;
    
    // Re-trigger scroll observer for new elements
    setTimeout(() => {
        setupAnimations();
        observeNewElements();
    }, 100);
}

// --- Navigation & Interactions ---
function setupNavigation() {
    // Nav links
    document.querySelectorAll('[data-link]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-link');
            const href = link.getAttribute('href');
            
            switchView(target);
            
            if (href && href !== '#' && href.startsWith('#')) {
                // Wait for the view to become active before scrolling
                setTimeout(() => {
                    const section = document.querySelector(href);
                    if (section) {
                        const offset = 90; // Height of the sticky navbar
                        const top = section.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }, 100);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            closeMobileMenu();
        });
    });

    // Mobile Menu
    const hamburger = document.getElementById('hamburger-menu');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileOverlay = document.getElementById('mobile-overlay');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            mobileDrawer.classList.toggle('mobile-nav-enter');
            mobileOverlay.classList.toggle('hidden');
        });
    }

    document.getElementById('close-drawer')?.addEventListener('click', closeMobileMenu);
    mobileOverlay?.addEventListener('click', closeMobileMenu);

    // Cart Drawer
    document.getElementById('open-cart')?.addEventListener('click', toggleCart);
    document.getElementById('close-cart')?.addEventListener('click', toggleCart);
    document.getElementById('cart-overlay')?.addEventListener('click', toggleCart);

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if(window.scrollY > 50) {
            nav.classList.add('bg-[#050505]/90', 'border-[rgba(212,175,55,0.3)]');
            nav.classList.remove('bg-[#050505]/30', 'border-[rgba(255,255,255,0.05)]');
        } else {
            nav.classList.remove('bg-[#050505]/90', 'border-[rgba(212,175,55,0.3)]');
            nav.classList.add('bg-[#050505]/30', 'border-[rgba(255,255,255,0.05)]');
        }
    });

    // Newsletter
    document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.style.display = 'none';
        document.getElementById('newsletter-success').classList.remove('hidden');
    });
}

function closeMobileMenu() {
    document.getElementById('mobile-drawer').classList.remove('mobile-nav-enter');
    document.getElementById('mobile-overlay').classList.add('hidden');
}

// --- Animations ---
function setupAnimations() {
    // Custom Cursor
    const cursor = document.getElementById('cursor-glow');
    if (window.innerWidth > 1024 && cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, .magnetic').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }

    // Scroll Reveals
    observeNewElements();
}

function observeNewElements() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                if(entry.target.classList.contains('reveal-stagger')) {
                    setTimeout(() => entry.target.classList.add('in-view'), index * 100);
                } else {
                    entry.target.classList.add('in-view');
                }
                obs.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal-up:not(.in-view), .reveal-stagger:not(.in-view)').forEach(el => observer.observe(el));
    
    // Magnetic logic
    document.querySelectorAll('.magnetic:not(.mag-bound)').forEach(btn => {
        btn.classList.add('mag-bound');
        btn.addEventListener('mousemove', function(e) {
            const position = btn.getBoundingClientRect();
            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        btn.addEventListener('mouseout', function(e) {
            if(btn.classList.contains('-translate-x-1/2')) {
                btn.style.transform = 'translate(-50%, 0)';
            } else {
                btn.style.transform = 'translate(0, 0)';
            }
        });
    });
}

// --- Rendering Cards ---
function generateCardHTML(p) {
    const isWished = wishlist.includes(p.id);
    const heartIcon = isWished ? 
        `<i data-lucide="heart" class="w-4 h-4 fill-[var(--gold)] text-[var(--gold)] heart-animate"></i>` : 
        `<i data-lucide="heart" class="w-4 h-4 text-white/80 transition-colors"></i>`;

    const stars = Array(Math.floor(p.rating)).fill('<i data-lucide="star" class="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]"></i>').join('');
    return `
        <div class="glass-effect rounded-md p-6 text-center transition-all duration-500 hover:border-[var(--gold)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.1)] relative group reveal-stagger">
            <button data-wishlist-btn="${p.id}" class="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:border-[var(--gold)]" onclick="toggleWishlist(${p.id}, event)">
                ${heartIcon}
            </button>
            <div class="w-full aspect-[3/4] overflow-hidden mb-6 relative rounded-sm">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover img-zoom">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                <button class="magnetic absolute -bottom-16 left-1/2 -translate-x-1/2 bg-[#050505]/90 text-[var(--gold)] border border-[var(--gold)] py-3 px-6 text-xs uppercase tracking-widest w-[85%] opacity-0 group-hover:bottom-6 group-hover:opacity-100 transition-all duration-500 hover:bg-[var(--gold)] hover:text-[#050505]" onclick="openQuickView(${p.id})">Quick View</button>
            </div>
            <p class="text-[0.75rem] text-[var(--gold)] uppercase mb-2 tracking-[2px]">${p.family} • ${p.volume}</p>
            <h3 class="font-heading text-2xl mb-2.5">${p.name}</h3>
            <div class="flex justify-center items-center gap-1 mb-4 text-[0.8rem]">${stars} <span class="text-[var(--text-muted)] ml-1">${p.rating}</span></div>
            <p class="text-[var(--text-muted)] mb-6 text-[1.1rem]">₹${p.price.toFixed(2)}</p>
            <div class="flex gap-2">
                <button class="w-1/2 border border-white/5 py-3.5 text-[0.7rem] sm:text-[0.85rem] uppercase tracking-[2px] transition-all hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-[rgba(212,175,55,0.05)] magnetic" onclick="addToCart(${p.id})">Add to Bag</button>
                <button class="w-1/2 bg-[var(--gold)] text-[#050505] font-semibold py-3.5 text-[0.7rem] sm:text-[0.85rem] uppercase tracking-[2px] transition-all hover:bg-[#F3E5AB] magnetic" onclick="buyNow(${p.id})">Buy Now</button>
            </div>
        </div>
    `;
}

function renderFeatured() {
    const featured = products.filter(p => p.isFeatured).slice(0, 4);
    const grid = document.getElementById('featured-grid');
    if(grid) {
        grid.innerHTML = featured.map(generateCardHTML).join('');
        lucide.createIcons();
    }
}

function renderCatalog(items) {
    const grid = document.getElementById('full-catalog-grid');
    if(grid) {
        document.getElementById('product-count').textContent = `${items.length} Results`;
        if (items.length === 0) {
            grid.innerHTML = '<div class="col-span-full text-center py-12 text-[var(--text-muted)]">No fragrances match your criteria.</div>';
            return;
        }
        grid.innerHTML = items.map(generateCardHTML).join('');
        lucide.createIcons();
        observeNewElements();
    }
}

// --- Filters & Sorting ---
function setupFilters() {
    const priceFilter = document.getElementById('price-filter');
    if(priceFilter) {
        priceFilter.addEventListener('input', (e) => {
            document.getElementById('price-val').textContent = e.target.value;
            applyFilters();
        });
    }

    // Category Tabs Setup
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active classes
            tabBtns.forEach(b => {
                b.classList.remove('text-gold', 'border-gold');
                b.classList.add('text-white/50', 'border-transparent');
            });
            // Add active to clicked
            e.target.classList.remove('text-white/50', 'border-transparent');
            e.target.classList.add('text-gold', 'border-gold');
            
            // Set active category and filter
            window.activeCategory = e.target.dataset.category;
            applyFilters();
        });
    });
    
    // Mobile filters toggle
    document.getElementById('mobile-filter-btn')?.addEventListener('click', () => {
        document.getElementById('sidebar-filters').classList.remove('-left-full');
        document.getElementById('sidebar-filters').classList.add('left-0');
        document.getElementById('mobile-overlay').classList.remove('hidden');
    });
    
    document.getElementById('close-filters')?.addEventListener('click', closeFilters);
    document.getElementById('mobile-overlay')?.addEventListener('click', closeFilters);
}

function closeFilters() {
    const sidebar = document.getElementById('sidebar-filters');
    if(sidebar) {
        sidebar.classList.add('-left-full');
        sidebar.classList.remove('left-0');
        document.getElementById('mobile-overlay').classList.add('hidden');
    }
}

window.filterCatalogBy = function(type, value) {
    if (currentView !== 'collections') {
        switchView('collections');
    }
    if (type === 'family') {
        document.querySelectorAll('.family-filter').forEach(cb => cb.checked = (cb.value === value));
    }
    setTimeout(applyFilters, 100);
}

window.applyFilters = function() {
    const families = Array.from(document.querySelectorAll('.family-filter:checked')).map(cb => cb.value);
    const volumes = Array.from(document.querySelectorAll('.volume-filter:checked')).map(cb => cb.value);
    const maxPrice = parseFloat(document.getElementById('price-filter').value);
    const sortMethod = document.getElementById('sort-select').value;
    const searchQuery = document.getElementById('shop-search-input')?.value.toLowerCase() || "";
    const category = window.activeCategory || 'All';

    let filtered = products.filter(p => {
        // Category Tab filter
        let matchCategory = true;
        if (category === 'Men') matchCategory = p.gender === 'Men';
        if (category === 'Women') matchCategory = p.gender === 'Women';
        if (category === 'Unisex') matchCategory = p.gender === 'Unisex';
        if (category === 'Best Sellers') matchCategory = p.isBestSeller;
        if (category === 'New Arrivals') matchCategory = p.isNew;

        // Search Filter
        let matchSearch = true;
        if (searchQuery) {
            matchSearch = p.name.toLowerCase().includes(searchQuery) || 
                          p.notes.toLowerCase().includes(searchQuery) || 
                          p.family.toLowerCase().includes(searchQuery);
        }

        const matchFam = families.length === 0 || families.includes(p.family);
        const matchVol = volumes.length === 0 || volumes.includes(p.volume);
        const matchPrice = p.price <= maxPrice;
        
        return matchCategory && matchSearch && matchFam && matchVol && matchPrice;
    });

    if (sortMethod === 'price-low') filtered.sort((a,b) => a.price - b.price);
    else if (sortMethod === 'price-high') filtered.sort((a,b) => b.price - a.price);
    else if (sortMethod === 'popular') filtered.sort((a,b) => (b.popularity || 0) - (a.popularity || 0));
    else if (sortMethod === 'newest') filtered.sort((a,b) => new Date(b.date) - new Date(a.date));

    // Update results count
    const countEl = document.getElementById('product-count');
    if(countEl) countEl.textContent = `${filtered.length} Results`;

    renderCatalog(filtered);
    // Don't close filters on desktop when applying inline changes
    if(window.innerWidth < 1024) closeFilters();
}

window.resetFilters = function() {
    document.querySelectorAll('.family-filter, .volume-filter').forEach(cb => cb.checked = false);
    document.getElementById('price-filter').value = 400;
    document.getElementById('price-val').textContent = "400";
    document.getElementById('sort-select').value = "popular";
    const searchInput = document.getElementById('shop-search-input');
    if(searchInput) searchInput.value = "";
    
    // Reset category tabs to All
    window.activeCategory = 'All';
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(b => {
        if(b.dataset.category === 'All') {
            b.classList.remove('text-white/50', 'border-transparent');
            b.classList.add('text-gold', 'border-gold');
        } else {
            b.classList.remove('text-gold', 'border-gold');
            b.classList.add('text-white/50', 'border-transparent');
        }
    });

    applyFilters();
}

// --- Cart Logic ---
function toggleCart() {
    document.getElementById('cart-drawer').classList.toggle('drawer-enter');
    document.getElementById('cart-overlay').classList.toggle('hidden');
}

window.addToCart = function(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(i => i.id === id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });
    
    localStorage.setItem('aura_cart', JSON.stringify(cart));
    updateCartUI();
    if (!document.getElementById('cart-drawer').classList.contains('drawer-enter')) toggleCart();
}

window.updateQty = function(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
        localStorage.setItem('aura_cart', JSON.stringify(cart));
        updateCartUI();
    }
}

window.removeItem = function(id) {
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('aura_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const totalQty = cart.reduce((s, i) => s + i.quantity, 0);
    const totalAmt = cart.reduce((s, i) => s + (i.price * i.quantity), 0);
    
    document.getElementById('cart-badge').textContent = totalQty;
    document.getElementById('cart-total').textContent = `₹${totalAmt.toFixed(2)}`;
    
    const container = document.getElementById('cart-items');
    if (cart.length === 0) {
        container.innerHTML = `<p class="text-center text-[var(--text-muted)] mt-5">Your bag is elegantly empty.</p>`;
        return;
    }
    
    container.innerHTML = cart.map(i => `
        <div class="flex gap-6 pb-6 border-b border-white/5 last:border-none">
            <div class="relative group">
                <img src="${i.image}" class="w-[85px] h-[110px] object-cover border border-white/10 p-1 rounded-sm bg-dark/50">
            </div>
            <div class="flex-1 flex flex-col justify-between py-1">
                <div>
                    <div class="flex justify-between items-start">
                        <h4 class="font-heading text-xl text-white/90 leading-tight pr-4">${i.name}</h4>
                        <button class="text-white/40 hover:text-gold transition-colors" onclick="removeItem(${i.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <p class="text-gold text-sm tracking-[1px] mt-1">₹${i.price.toFixed(2)}</p>
                </div>
                
                <div class="flex justify-between items-end mt-4">
                    <div class="flex items-center border border-white/20 rounded-sm w-fit bg-[#0a0a0a]">
                        <button class="w-[30px] h-[30px] flex items-center justify-center text-white/60 hover:text-gold hover:bg-white/5 transition-colors" onclick="updateQty(${i.id}, -1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                        <span class="w-[30px] text-center text-xs font-semibold">${i.quantity}</span>
                        <button class="w-[30px] h-[30px] flex items-center justify-center text-white/60 hover:text-gold hover:bg-white/5 transition-colors" onclick="updateQty(${i.id}, 1)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// --- Quick View Modal ---
window.openQuickView = function(id) {
    const p = products.find(p => p.id === id);
    const stars = Array(Math.floor(p.rating)).fill('<i data-lucide="star" class="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]"></i>').join('');
    
    const isWished = wishlist.includes(p.id);
    const heartIcon = isWished ? 
        `<i data-lucide="heart" class="w-5 h-5 fill-[var(--gold)] text-[var(--gold)] heart-animate"></i>` : 
        `<i data-lucide="heart" class="w-5 h-5 text-white/80 transition-colors"></i>`;
    
    document.getElementById('modal-body').innerHTML = `
        <div class="flex-1 p-0">
            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover min-h-[450px]">
        </div>
        <div class="flex-1 p-10 flex flex-col justify-center relative">
            <button data-wishlist-btn="${p.id}" class="absolute top-5 right-6 md:right-20 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-black/40 hover:bg-black/80 hover:border-gold transition-all duration-300" onclick="toggleWishlist(${p.id}, event)">
                ${heartIcon}
            </button>
            <p class="text-[var(--gold)] uppercase text-[0.75rem] mb-1.5 tracking-[2px]">${p.family}</p>
            <h2 class="font-heading text-[2.2rem] mb-2.5 text-[var(--gold)] leading-tight">${p.name}</h2>
            <div class="text-[var(--gold)] mb-4 flex items-center gap-1.5 text-[0.9rem]">
                ${stars} <span class="text-[var(--text-muted)] text-[0.8rem] ml-2.5">(${p.rating})</span>
            </div>
            <p class="text-[1.3rem] mb-5">₹${p.price.toFixed(2)}</p>
            <p class="text-[var(--text-muted)] text-[0.95rem] mb-5 leading-[1.6]">${p.desc}</p>
            
            <div class="mb-5">
                <h4 class="mb-2.5 font-heading text-[1rem]">Select Volume</h4>
                <div class="flex gap-2.5">
                    <button class="vol-btn border border-white/5 py-2 px-4 text-[var(--text-muted)] text-[0.85rem] rounded-sm transition-all ${p.volume==='50ml'?'border-[var(--gold)] text-[var(--gold)] bg-[rgba(212,175,55,0.05)]':''} hover:border-[var(--gold)] hover:text-[var(--gold)]">50ml</button>
                    <button class="vol-btn border border-white/5 py-2 px-4 text-[var(--text-muted)] text-[0.85rem] rounded-sm transition-all ${p.volume==='100ml'?'border-[var(--gold)] text-[var(--gold)] bg-[rgba(212,175,55,0.05)]':''} hover:border-[var(--gold)] hover:text-[var(--gold)]">100ml</button>
                </div>
            </div>

            <div class="bg-[rgba(212,175,55,0.03)] border border-white/5 p-4 mb-6 text-[0.85rem] rounded-sm">
                <h4 class="mb-2.5 text-[var(--gold)] font-heading">Olfactory Journey</h4>
                ${p.notes.replace(/\|/g, '<br>')}
            </div>
            <div class="flex gap-2">
                <button class="w-1/2 border border-white/5 py-4 text-[0.85rem] uppercase tracking-[2px] transition-all hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-[rgba(212,175,55,0.05)] magnetic" onclick="addToCartFromModal(${p.id})">Add to Bag</button>
                <button class="w-1/2 bg-[var(--gold)] text-[#050505] font-semibold py-4 uppercase tracking-[2px] transition-all hover:bg-[var(--gold-hover)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] magnetic" onclick="closeQuickView(); buyNow(${p.id})">Buy Now</button>
            </div>
        </div>
    `;
    
    const modal = document.getElementById('quick-view-modal');
    modal.classList.remove('invisible', 'opacity-0');
    modal.classList.add('visible', 'opacity-100');
    modal.querySelector('.modal-content').classList.remove('translate-y-8', 'scale-95');
    modal.querySelector('.modal-content').classList.add('translate-y-0', 'scale-100');
    
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
    
    // Vol btn interactivity
    document.querySelectorAll('.vol-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.vol-btn').forEach(b => {
                b.classList.remove('border-[var(--gold)]', 'text-[var(--gold)]', 'bg-[rgba(212,175,55,0.05)]');
            });
            e.target.classList.add('border-[var(--gold)]', 'text-[var(--gold)]', 'bg-[rgba(212,175,55,0.05)]');
        });
    });
}

window.closeQuickView = function() {
    const modal = document.getElementById('quick-view-modal');
    modal.classList.add('invisible', 'opacity-0');
    modal.classList.remove('visible', 'opacity-100');
    modal.querySelector('.modal-content').classList.add('translate-y-8', 'scale-95');
    modal.querySelector('.modal-content').classList.remove('translate-y-0', 'scale-100');
    document.body.style.overflow = '';
}

window.addToCartFromModal = function(id) {
    addToCart(id);
    closeQuickView();
}

document.getElementById('quick-view-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'quick-view-modal') closeQuickView();
});
document.getElementById('close-modal-btn')?.addEventListener('click', closeQuickView);

window.processCheckout = function() {
    if (cart.length === 0) {
        showToast("Your bag is empty. Add some luxury to proceed.");
        return;
    }
    
    // Only close cart drawer if it's currently open
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay && !cartOverlay.classList.contains('hidden')) {
        document.getElementById('close-cart').click();
    }
    
    // Open Checkout Modal
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('invisible', 'opacity-0');
    modal.querySelector('.modal-content').classList.remove('translate-y-8', 'scale-95');
    document.body.style.overflow = 'hidden';
    
    // Reset to Step 1
    backToShipping();
}

window.buyNow = function(id) {
    // Silently add to cart without toast
    const p = products.find(x => x.id === id);
    const existing = cart.find(x => x.id === id);
    if(existing) existing.quantity++;
    else cart.push({...p, quantity: 1});
    localStorage.setItem('aura_cart', JSON.stringify(cart));
    updateCartUI();
    
    // Proceed to checkout
    processCheckout();
}

// --- Checkout Multi-Step Logic ---
window.closeCheckoutModal = function() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.add('invisible', 'opacity-0');
    modal.querySelector('.modal-content').classList.add('translate-y-8', 'scale-95');
    document.body.style.overflow = '';
}

document.getElementById('close-checkout')?.addEventListener('click', closeCheckoutModal);
document.getElementById('checkout-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'checkout-modal') closeCheckoutModal();
});

window.proceedToPayment = function(e) {
    e.preventDefault();
    document.getElementById('shipping-form').classList.add('-translate-x-full', 'opacity-0', 'invisible');
    document.getElementById('payment-form').classList.remove('left-full', 'opacity-0', 'invisible');
    document.getElementById('payment-form').classList.add('left-0');
    
    // Update Indicators
    const indicator = document.getElementById('payment-step-indicator');
    indicator.classList.remove('text-white/40');
    indicator.classList.add('text-gold');
    indicator.querySelector('div').classList.remove('border-white/40');
    indicator.querySelector('div').classList.add('bg-gold', 'text-[#0a0a0a]', 'border-gold');
}

window.backToShipping = function() {
    document.getElementById('shipping-form').classList.remove('-translate-x-full', 'opacity-0', 'invisible');
    document.getElementById('payment-form').classList.add('left-full', 'opacity-0', 'invisible');
    document.getElementById('payment-form').classList.remove('left-0');
    
    // Update Indicators
    const indicator = document.getElementById('payment-step-indicator');
    indicator.classList.add('text-white/40');
    indicator.classList.remove('text-gold');
    indicator.querySelector('div').classList.add('border-white/40');
    indicator.querySelector('div').classList.remove('bg-gold', 'text-[#0a0a0a]', 'border-gold');
}

window.togglePaymentInputs = function() {
    const method = document.querySelector('input[name="payment_method"]:checked').value;
    const upi = document.getElementById('upi-input-container');
    const card = document.getElementById('card-input-container');
    
    if(upi) upi.style.display = method === 'upi' ? 'block' : 'none';
    if(card) card.style.display = method === 'card' ? 'flex' : 'none';
}

window.placeOrder = function(e) {
    e.preventDefault();
    
    // Close checkout modal
    closeCheckoutModal();
    
    // Empty cart
    cart = [];
    localStorage.setItem('aura_cart', JSON.stringify(cart));
    updateCartUI();
    
    // Show success modal
    setTimeout(() => {
        const modal = document.getElementById('success-modal');
        modal.classList.remove('invisible', 'opacity-0');
        modal.querySelector('.modal-content').classList.remove('scale-95');
        document.body.style.overflow = 'hidden';
    }, 500);
}

window.closeSuccessModal = function() {
    const modal = document.getElementById('success-modal');
    modal.classList.add('invisible', 'opacity-0');
    modal.querySelector('.modal-content').classList.add('scale-95');
    document.body.style.overflow = '';
}

window.showToast = function(message) {
    const existing = document.getElementById('aura-toast');
    if(existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.id = 'aura-toast';
    toast.className = 'fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#0a0a0a] border border-gold text-gold px-8 py-4 z-[9999] text-xs uppercase tracking-[2px] shadow-[0_0_20px_rgba(212,175,55,0.2)] rounded-sm transform transition-all duration-500 translate-y-10 opacity-0 flex items-center gap-3';
    toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i> ${message}`;
    
    document.body.appendChild(toast);
    lucide.createIcons();
    
    setTimeout(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    }, 10);
    
    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// --- Wishlist Logic ---
window.toggleWishlist = function(id, event) {
    if(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    const idx = wishlist.indexOf(id);
    const isAdding = idx === -1;
    
    if(isAdding) {
        wishlist.push(id);
    } else {
        wishlist.splice(idx, 1);
    }
    localStorage.setItem('aura_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    
    // Update all heart icons for this product directly without re-rendering the whole page
    document.querySelectorAll(`button[data-wishlist-btn="${id}"] svg`).forEach(icon => {
        if (isAdding) {
            icon.setAttribute('class', 'lucide lucide-heart w-4 h-4 fill-[var(--gold)] text-[var(--gold)] heart-animate');
        } else {
            icon.setAttribute('class', 'lucide lucide-heart w-4 h-4 text-white/80 transition-colors');
        }
    });
}

window.updateWishlistUI = function() {
    const badge = document.getElementById('wishlist-badge');
    if(badge) {
        if(wishlist.length > 0) {
            badge.textContent = wishlist.length;
            badge.classList.remove('opacity-0');
        } else {
            badge.classList.add('opacity-0');
        }
    }
    renderWishlist();
}

window.renderWishlist = function() {
    const container = document.getElementById('wishlist-items');
    if(!container) return;
    
    if (wishlist.length === 0) {
        container.innerHTML = `<p class="text-center text-[var(--text-muted)] mt-5">Your wishlist is empty.</p>`;
        return;
    }
    
    const wItems = products.filter(p => wishlist.includes(p.id));
    container.innerHTML = wItems.map(i => `
        <div class="flex gap-6 pb-6 border-b border-white/5 last:border-none">
            <img src="${i.image}" class="w-[85px] h-[110px] object-cover border border-white/10 p-1 rounded-sm bg-dark/50">
            <div class="flex-1 flex flex-col justify-between py-1">
                <div>
                    <div class="flex justify-between items-start">
                        <h4 class="font-heading text-xl text-white/90 leading-tight pr-4">${i.name}</h4>
                        <button class="text-white/40 hover:text-gold transition-colors" onclick="toggleWishlist(${i.id}, event)">
                            <i data-lucide="x" class="w-4 h-4"></i>
                        </button>
                    </div>
                    <p class="text-gold text-sm tracking-[1px] mt-1">₹${i.price.toFixed(2)}</p>
                </div>
                <button class="text-xs uppercase tracking-[2px] text-white/60 hover:text-gold text-left mt-4 transition-colors flex items-center gap-2" onclick="addToCart(${i.id}); toggleWishlist(${i.id}, event);">
                    <i data-lucide="shopping-bag" class="w-3 h-3"></i> Move to Bag
                </button>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

document.getElementById('open-wishlist')?.addEventListener('click', () => {
    document.getElementById('wishlist-drawer').classList.remove('-right-full');
    document.getElementById('wishlist-drawer').classList.add('right-0');
    document.getElementById('cart-overlay').classList.remove('hidden');
});

document.getElementById('close-wishlist')?.addEventListener('click', () => {
    document.getElementById('wishlist-drawer').classList.add('-right-full');
    document.getElementById('wishlist-drawer').classList.remove('right-0');
    document.getElementById('cart-overlay').classList.add('hidden');
});

// --- Search Logic ---
document.getElementById('open-search')?.addEventListener('click', () => {
    const overlay = document.getElementById('search-overlay');
    overlay.classList.remove('invisible', 'opacity-0', '-translate-y-4');
    document.getElementById('search-input').focus();
    renderSearchResults(''); // show all initially or popular
});

document.getElementById('close-search')?.addEventListener('click', () => {
    const overlay = document.getElementById('search-overlay');
    overlay.classList.add('invisible', 'opacity-0', '-translate-y-4');
    document.getElementById('search-input').value = '';
});

// Close search if clicked outside
document.addEventListener('click', (e) => {
    const overlay = document.getElementById('search-overlay');
    const openBtn = document.getElementById('open-search');
    if (overlay && !overlay.classList.contains('invisible') && !overlay.contains(e.target) && !openBtn.contains(e.target)) {
        document.getElementById('close-search').click();
    }
});

document.getElementById('search-input')?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.toLowerCase());
});

window.renderSearchResults = function(query) {
    const grid = document.getElementById('search-results-grid');
    const status = document.getElementById('search-status');
    if(!grid || !status) return;

    if(query.length === 0) {
        status.classList.add('hidden');
        grid.innerHTML = '';
        return;
    }

    const results = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.notes.toLowerCase().includes(query) ||
        p.family.toLowerCase().includes(query)
    );

    status.classList.remove('hidden');
    status.textContent = `${results.length} Results Found`;

    if(results.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-white/40">No fragrances matched your search.</p>`;
        return;
    }

    grid.innerHTML = results.map(p => {
        const isWished = wishlist.includes(p.id);
        const heartIcon = isWished ? 
            `<i data-lucide="heart" class="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]"></i>` : 
            `<i data-lucide="heart" class="w-3.5 h-3.5 text-white/50 group-hover/btn:text-gold transition-colors"></i>`;
        
        return `
        <div class="flex items-center gap-4 p-2 hover:bg-white/5 rounded-sm cursor-pointer transition-colors group relative" onclick="closeSearchAndGo(${p.id})">
            <img src="${p.image}" class="w-12 h-12 object-cover rounded-sm border border-white/10">
            <div class="flex-1 text-left">
                <h3 class="font-heading text-sm text-white/90 group-hover:text-gold transition-colors">${p.name}</h3>
                <p class="text-gold text-[0.65rem] tracking-[1px] mt-0.5">₹${p.price.toFixed(2)}</p>
            </div>
            <button data-wishlist-btn="${p.id}" class="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 border border-white/5 opacity-0 group-hover:opacity-100 transition-all hover:bg-black/80 hover:border-gold group/btn z-10" onclick="toggleWishlist(${p.id}, event)">
                ${heartIcon}
            </button>
        </div>
    `}).join('');
    lucide.createIcons();
}

window.closeSearchAndGo = function(id) {
    document.getElementById('close-search').click();
    openQuickView(id);
}
