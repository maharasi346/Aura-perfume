import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Menu, Search, Heart, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const { setCurrentView, cart, wishlist, setIsCartOpen, setIsWishlistOpen } = useShop();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-0' : 'bg-[#050505]/30 backdrop-blur-md border-b border-white/5 py-2'}`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-[90px] flex justify-between items-center">
        
        <button className="lg:hidden magnetic z-[60]">
          <Menu className="w-7 h-7 text-gold" />
        </button>
        
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }} className="font-heading text-3xl text-gold tracking-[8px] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] magnetic">
          AURA
        </a>
        
        <div className="hidden lg:flex gap-10">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }} className="text-xs uppercase tracking-[2px] text-text-muted hover:text-gold transition-colors relative group">
            Home
            <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('collections'); }} className="text-xs uppercase tracking-[2px] text-text-muted hover:text-gold transition-colors relative group">
            Collections
            <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-xs uppercase tracking-[2px] text-text-muted hover:text-gold transition-colors relative group">
            About Us
            <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex gap-6 items-center">
          <button className="magnetic group relative hidden sm:block">
            <Search className="w-5 h-5 text-white/70 group-hover:text-gold transition-colors" />
          </button>
          
          <button className="magnetic group relative" onClick={() => setIsWishlistOpen(true)}>
            <Heart className="w-5 h-5 text-white/70 group-hover:text-gold transition-colors" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>
          
          <button className="magnetic flex items-center gap-2 group" onClick={() => setIsCartOpen(true)}>
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-white/70 group-hover:text-gold transition-colors" />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </div>
            <span className="text-xs tracking-[1px] hidden sm:block text-white/70 group-hover:text-gold">BAG</span>
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
