// Initialize Lucide Icons
lucide.createIcons();

const products = [
    { id: 1, name: "Noir Absolu", family: "Woody", price: 245.00, volume: "100ml", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.9, notes: "Top: Black Pepper | Heart: Oud | Base: Dark Amber", desc: "A dangerously seductive blend of aged oud and deep amber.", isFeatured: true, date: "2026-08-01" },
    { id: 2, name: "Éclat d'Or", family: "Floral", price: 210.00, volume: "50ml", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.8, notes: "Top: Bergamot | Heart: Ylang-Ylang | Base: Vanilla", desc: "Liquid gold in a bottle. A luminous, sophisticated floral.", isFeatured: true, date: "2026-07-15" },
    { id: 3, name: "Velvet Santal", family: "Woody", price: 185.00, volume: "50ml", image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.7, notes: "Top: Cardamom | Heart: Iris | Base: Sandalwood", desc: "Creamy, smooth, and intimate Australian sandalwood.", isFeatured: true, date: "2026-06-20" },
    { id: 4, name: "Midnight Rose", family: "Floral", price: 195.00, volume: "100ml", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.6, notes: "Top: Plum | Heart: Damask Rose | Base: Patchouli", desc: "A nocturnal, thorny bloom surrounded by dark fruits.", isFeatured: true, date: "2026-05-10" },
    
    { id: 5, name: "Oceanic Amber", family: "Aquatic", price: 165.00, volume: "50ml", image: "https://images.unsplash.com/photo-1615486171448-4fc1ac839f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.5, notes: "Top: Sea Salt | Heart: Neroli | Base: Ambergris", desc: "A fresh yet sensual aquatic scent.", date: "2026-04-05" },
    { id: 6, name: "Desert Mirage", family: "Oriental", price: 280.00, volume: "100ml", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 5.0, notes: "Top: Saffron | Heart: Frankincense | Base: Myrrh", desc: "Rich, smoky, and intensely warm.", date: "2026-08-10" },
    { id: 7, name: "Citrus Riviera", family: "Fresh", price: 140.00, volume: "50ml", image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.4, notes: "Top: Lemon Zest | Heart: Basil | Base: Vetiver", desc: "Sparkling and vibrant Mediterranean sunshine.", date: "2026-03-12" },
    { id: 8, name: "Crimson Silk", family: "Oriental", price: 230.00, volume: "100ml", image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.8, notes: "Top: Cherry | Heart: Almond | Base: Tonka Bean", desc: "A luxurious gourmand. Sweet and deeply enveloping.", date: "2026-02-28" },
    { id: 9, name: "Oud Royale", family: "Woody", price: 350.00, volume: "100ml", image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.9, notes: "Top: Rosewood | Heart: Cambodian Oud | Base: Musk", desc: "The pinnacle of luxury. Pure, unadulterated oud for the true connoisseur.", date: "2026-01-15" },
    { id: 10, name: "Jasmine Noir", family: "Floral", price: 175.00, volume: "50ml", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.7, notes: "Top: Green Leaves | Heart: Jasmine Sambac | Base: Cashmere Wood", desc: "An indolic, hypnotic white floral that blooms best at midnight.", date: "2026-07-01" },
    { id: 11, name: "Bergamot Blanc", family: "Fresh", price: 155.00, volume: "100ml", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.6, notes: "Top: White Tea | Heart: Bergamot | Base: White Musk", desc: "Clean, pure, and uplifting. Like crisp white linens on a Sunday morning.", date: "2026-05-25" },
    { id: 12, name: "Spiced Leather", family: "Oriental", price: 220.00, volume: "50ml", image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 4.8, notes: "Top: Nutmeg | Heart: Leather | Base: Cedarwood", desc: "A study in contrast. Sharp spices meld seamlessly into supple, warm leather.", date: "2026-08-05" }
];

let cart = JSON.parse(localStorage.getItem('aura_cart')) || [];
const isCollectionPage = document.body.getAttribute('data-page') === 'collection';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    if (!isCollectionPage) {
        renderFeatured();
    } else {
        renderCatalog(products);
    }
    setupEvents();
    setupAnimations();
    updateCartUI();
});

// --- Animations (Cursor, Magnetic, Observers) ---
function setupAnimations() {
    // 1. Custom Cursor
    const cursor = document.getElementById('cursor-glow');
    if (window.innerWidth > 1024) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Expand cursor on clickable elements
        const clickables = document.querySelectorAll('a, button, .magnetic');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }

    // 3. Scroll Reveals (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-stagger');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                if(entry.target.classList.contains('reveal-stagger')) {
                    setTimeout(() => entry.target.classList.add('in-view'), index * 100);
                } else {
                    entry.target.classList.add('in-view');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. Parallax
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxBgs = document.querySelectorAll('.parallax-bg');
        parallaxBgs.forEach(bg => {
            bg.style.transform = `translateY(${scrolled * 0.4}px)`;
        });
    });
}

// Ensure dynamically created elements get observed
function observeNewElements() {
    const revealElements = document.querySelectorAll('.reveal-stagger:not(.in-view)');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('in-view'), index * 100);
                observer.unobserve(entry.target);
            }
        });
    });
    revealElements.forEach(el => observer.observe(el));
    
    // Re-attach magnetic
    const magnetics = document.querySelectorAll('.glass-card .quick-view, .glass-card .quick-add');
    magnetics.forEach(btn => {
        if(!btn.classList.contains('magnetic-bound')) {
            btn.classList.add('magnetic-bound');
            btn.addEventListener('mousemove', function(e) {
                const position = btn.getBoundingClientRect();
                const x = e.clientX - position.left - position.width / 2;
                const y = e.clientY - position.top - position.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            btn.addEventListener('mouseout', function(e) {
                if(btn.classList.contains('quick-view')) {
                    btn.style.transform = 'translateX(-50%)'; // maintain center
                } else {
                    btn.style.transform = 'translate(0px, 0px)';
                }
            });
        }
    });
}

// --- Routing ---
window.filterCatalogBy = function(type, value) {
    // If on home page, redirect to catalog with query parameter
    if (!isCollectionPage) {
        window.location.href = `collection.html?filter=${type}&value=${value}`;
        return;
    }
    
    if (type === 'family') {
        document.querySelectorAll('.family-filter').forEach(cb => cb.checked = (cb.value === value));
    }
    applyFilters();
}

window.scrollToFeatured = function() {
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

// --- Render Logic ---
function generateCard(p) {
    const stars = Array(Math.floor(p.rating)).fill('<i data-lucide="star" style="width:14px; fill:var(--gold);"></i>').join('');
    return `
        <div class="glass-card reveal-stagger">
            <div class="product-img">
                <img src="${p.image}" alt="${p.name}">
                <button class="quick-view magnetic" onclick="openQuickView(${p.id})">Quick View</button>
            </div>
            <p class="product-family">${p.family} • ${p.volume}</p>
            <h3 class="product-name">${p.name}</h3>
            <div class="product-rating">${stars} <span style="color:var(--text-muted); font-size:0.75rem;">${p.rating}</span></div>
            <p class="product-price">$${p.price.toFixed(2)}</p>
            <button class="btn quick-add magnetic" onclick="addToCart(${p.id})">Add to Bag</button>
        </div>
    `;
}

function renderFeatured() {
    const featured = products.filter(p => p.isFeatured).slice(0, 4);
    document.getElementById('featured-grid').innerHTML = featured.map(generateCard).join('');
    lucide.createIcons();
}

function renderCatalog(items) {
    const grid = document.getElementById('full-catalog-grid');
    document.getElementById('product-count').textContent = `${items.length} Results`;
    if (items.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 50px; color:var(--text-muted);">No fragrances match your criteria.</div>';
        return;
    }
    grid.innerHTML = items.map(generateCard).join('');
    lucide.createIcons();
    observeNewElements();
}

// --- Filtering ---
window.applyFilters = function() {
    if (!isCollectionPage) return;
    const families = Array.from(document.querySelectorAll('.family-filter:checked')).map(cb => cb.value);
    const volumes = Array.from(document.querySelectorAll('.volume-filter:checked')).map(cb => cb.value);
    const maxPrice = parseFloat(document.getElementById('price-filter').value);
    const sortMethod = document.getElementById('sort-select').value;

    let filtered = products.filter(p => {
        const matchFam = families.length === 0 || families.includes(p.family);
        const matchVol = volumes.length === 0 || volumes.includes(p.volume);
        const matchPrice = p.price <= maxPrice;
        return matchFam && matchVol && matchPrice;
    });

    if (sortMethod === 'price-low') filtered.sort((a,b) => a.price - b.price);
    else if (sortMethod === 'price-high') filtered.sort((a,b) => b.price - a.price);
    else if (sortMethod === 'popular') filtered.sort((a,b) => b.rating - a.rating);
    else if (sortMethod === 'newest') filtered.sort((a,b) => new Date(b.date) - new Date(a.date));

    renderCatalog(filtered);
    
    document.getElementById('sidebar-filters').classList.remove('active');
    document.getElementById('mobile-overlay').classList.remove('active');
}

window.resetFilters = function() {
    document.querySelectorAll('.family-filter, .volume-filter').forEach(cb => cb.checked = false);
    document.getElementById('price-filter').value = 400;
    document.getElementById('price-val').textContent = "400";
    document.getElementById('sort-select').value = "popular";
    applyFilters();
}

// --- Events ---
function setupEvents() {
    // Nav Scroll
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile Menu
    const mobileMenu = document.getElementById('mobile-drawer');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const hamburger = document.getElementById('hamburger-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
        });
    }
    
    const closeDrawer = document.getElementById('close-drawer');
    if (closeDrawer) closeDrawer.addEventListener('click', closeMobileMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

    // Mobile Filters (Only on Collection Page)
    const mobileFilterBtn = document.getElementById('mobile-filter-btn');
    if (mobileFilterBtn) {
        mobileFilterBtn.addEventListener('click', () => {
            document.getElementById('sidebar-filters').classList.add('active');
            mobileOverlay.classList.add('active');
        });
        document.getElementById('close-filters').addEventListener('click', () => {
            document.getElementById('sidebar-filters').classList.remove('active');
            mobileOverlay.classList.remove('active');
        });
    }

    // Price Slider
    const priceFilter = document.getElementById('price-filter');
    if (priceFilter) {
        priceFilter.addEventListener('input', (e) => {
            document.getElementById('price-val').textContent = e.target.value;
        });
    }

    // Auto-apply filters from URL if present
    if (isCollectionPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const filterType = urlParams.get('filter');
        const filterValue = urlParams.get('value');
        if (filterType === 'family' && filterValue) {
            document.querySelectorAll('.family-filter').forEach(cb => cb.checked = (cb.value === filterValue));
            applyFilters();
        }
    }

    // Newsletter
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.style.display = 'none';
        document.getElementById('newsletter-success').classList.remove('hidden');
    });

    // Cart
    document.getElementById('open-cart').addEventListener('click', toggleCart);
    document.getElementById('close-cart').addEventListener('click', toggleCart);
    document.getElementById('cart-overlay').addEventListener('click', toggleCart);

    // Modal close
    document.querySelector('.close-modal').addEventListener('click', closeQuickView);
    document.getElementById('quick-view-modal').addEventListener('click', (e) => {
        if (e.target.id === 'quick-view-modal') closeQuickView();
    });
}

window.closeMobileMenu = function() {
    document.getElementById('hamburger-menu').classList.remove('active');
    if (mobileMenu) mobileMenu.classList.remove('active');
    const sidebarFilters = document.getElementById('sidebar-filters');
    if (sidebarFilters) sidebarFilters.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
}

// --- Cart ---
function toggleCart() {
    document.getElementById('cart-overlay').classList.toggle('active');
    document.getElementById('cart-drawer').classList.toggle('active');
}

window.addToCart = function(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(i => i.id === id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });
    
    localStorage.setItem('aura_cart', JSON.stringify(cart));
    updateCartUI();
    if (!document.getElementById('cart-drawer').classList.contains('active')) toggleCart();
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
    document.getElementById('cart-total').textContent = `$${totalAmt.toFixed(2)}`;
    
    const container = document.getElementById('cart-items');
    if (cart.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:20px;">Your bag is elegantly empty.</p>`;
        return;
    }
    
    container.innerHTML = cart.map(i => `
        <div class="cart-item">
            <img src="${i.image}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${i.name}</h4>
                <p style="color:var(--gold);">$${i.price.toFixed(2)}</p>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
                    <div class="qty-selector">
                        <button onclick="updateQty(${i.id}, -1)">-</button>
                        <span>${i.quantity}</span>
                        <button onclick="updateQty(${i.id}, 1)">+</button>
                    </div>
                    <button onclick="removeItem(${i.id})" style="color:#ff4d4d; font-size:0.8rem; text-decoration:underline;">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// --- Quick View Modal ---
window.openQuickView = function(id) {
    const p = products.find(p => p.id === id);
    const stars = Array(Math.floor(p.rating)).fill('<i data-lucide="star" style="width:16px; fill:var(--gold);"></i>').join('');
    
    document.getElementById('modal-body').innerHTML = `
        <div class="modal-img-container">
            <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="modal-details">
            <p style="color:var(--gold); text-transform:uppercase; font-size:0.75rem; margin-bottom:5px; letter-spacing:2px;">${p.family}</p>
            <h2 class="modal-title">${p.name}</h2>
            <div style="color:var(--gold); margin-bottom:15px; display:flex; align-items:center; gap:5px; font-size: 0.9rem;">
                ${stars} <span style="color:var(--text-muted); font-size:0.8rem; margin-left:10px;">(${p.rating})</span>
            </div>
            <p class="modal-price">$${p.price.toFixed(2)}</p>
            <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:20px; line-height:1.6;">${p.desc}</p>
            
            <div style="margin-bottom: 20px;">
                <h4 style="margin-bottom:10px; color:var(--text-main); font-family:var(--font-heading); font-size:1rem;">Select Volume</h4>
                <div class="vol-selector">
                    <button class="vol-btn ${p.volume==='50ml'?'active':''}">50ml</button>
                    <button class="vol-btn ${p.volume==='100ml'?'active':''}">100ml</button>
                </div>
            </div>

            <div style="background:rgba(212,175,55,0.03); border:1px solid var(--border-glass); padding:15px; margin-bottom:25px; font-size:0.85rem; border-radius:4px;">
                <h4 style="margin-bottom:10px; color:var(--gold); font-family:var(--font-heading);">Olfactory Journey</h4>
                ${p.notes.replace(/\|/g, '<br>')}
            </div>
            <button class="btn btn-solid w-100 magnetic" onclick="addToCartFromModal(${p.id})" style="padding: 15px;">Add to Bag</button>
        </div>
    `;
    document.getElementById('quick-view-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
    
    // Vol btn interactivity
    document.querySelectorAll('.vol-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.vol-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

window.closeQuickView = function() {
    document.getElementById('quick-view-modal').classList.remove('active');
    document.body.style.overflow = '';
}

window.addToCartFromModal = function(id) {
    addToCart(id);
    closeQuickView();
}
