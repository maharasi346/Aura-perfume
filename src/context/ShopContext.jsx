import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const productsData = [
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

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem('aura_cart')) || []; }
    catch { return []; }
  });
  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem('aura_wishlist')) || []; }
    catch { return []; }
  });

  const [toastMessage, setToastMessage] = useState('');
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('aura_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('aura_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const addToCart = (productId, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => item.id === productId ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { id: productId, quantity }];
    });
    showToast('Added to bag');
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }));
  };

  const toggleWishlist = (productId, e) => {
    if(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setWishlist(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        showToast('Added to wishlist');
        return [...prev, productId];
      }
    });
  };

  const getProduct = (id) => productsData.find(p => p.id === id);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      const product = getProduct(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  }, [cart]);

  const value = {
    products: productsData,
    currentView,
    setCurrentView,
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    wishlist,
    toggleWishlist,
    getProduct,
    isCartOpen,
    setIsCartOpen,
    isWishlistOpen,
    setIsWishlistOpen,
    quickViewProduct,
    setQuickViewProduct,
    isCheckoutOpen,
    setIsCheckoutOpen,
    isSuccessOpen,
    setIsSuccessOpen,
    toastMessage
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
