import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { Menu, Search, Heart, ShoppingBag, X } from 'lucide-react';

const Navbar = () => {
  const { setCurrentView, cart, wishlist, setIsCartOpen, setIsWishlistOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#050505]/90 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-[#050505]/30 backdrop-blur-md border-b border-white/5'}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 h-[90px] flex justify-between items-center">
          
          <button className="lg:hidden magnetic z-[60]" onClick={() => setIsMobileNavOpen(true)}>
            <Menu className="w-7 h-7 text-gold" />
          </button>
          
          <button onClick={() => setCurrentView('home')} className="font-heading text-3xl text-gold tracking-[8px] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] magnetic">
            AURA
          </button>
          
          <div className="hidden lg:flex gap-10">
            <button onClick={() => setCurrentView('home')} className="text-xs uppercase tracking-[2px] text-text-muted hover:text-gold transition-colors relative group">
              Home
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => { setCurrentView('home'); window.location.hash = '#collections'; }} className="text-xs uppercase tracking-[2px] text-text-muted hover:text-gold transition-colors relative group">
              Collections
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => setCurrentView('collections')} className="text-xs uppercase tracking-[2px] text-text-muted hover:text-gold transition-colors relative group">
              Shop All
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => { setCurrentView('home'); window.location.hash = '#story'; }} className="text-xs uppercase tracking-[2px] text-text-muted hover:text-gold transition-colors relative group">
              Our Story
              <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
          
          <div className="flex items-center gap-6 z-[60]">
            <button className="magnetic text-white hover:text-gold transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="magnetic text-white hover:text-gold transition-colors relative" onClick={() => setIsWishlistOpen(true)}>
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-dark text-[0.65rem] font-bold w-4 h-4 rounded-full flex items-center justify-center transition-opacity duration-300">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button className="magnetic relative text-white hover:text-gold transition-colors" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag className="w-5 h-5" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-gold text-dark text-[0.65rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[55] transition-all" onClick={() => setIsMobileNavOpen(false)}></div>
      )}

      {/* Mobile Drawer */}
      <div className={`fixed top-0 ${isMobileNavOpen ? 'left-0' : '-left-full'} w-[85%] max-w-[400px] h-screen bg-[#111111] border-r border-white/5 z-[60] flex flex-col transition-all duration-500`}>
        <div className="flex justify-between items-center p-8 border-b border-white/5">
          <span className="font-heading text-2xl text-gold tracking-[5px]">AURA</span>
          <button className="magnetic text-white hover:text-gold" onClick={() => setIsMobileNavOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-8 p-10 mt-10">
          <button onClick={() => { setCurrentView('home'); setIsMobileNavOpen(false); }} className="text-xl uppercase tracking-[3px] text-white hover:text-gold text-left">Home</button>
          <button onClick={() => { setCurrentView('home'); window.location.hash = '#collections'; setIsMobileNavOpen(false); }} className="text-xl uppercase tracking-[3px] text-white hover:text-gold text-left">Collections</button>
          <button onClick={() => { setCurrentView('collections'); setIsMobileNavOpen(false); }} className="text-xl uppercase tracking-[3px] text-white hover:text-gold text-left">Shop All</button>
          <button onClick={() => { setCurrentView('home'); window.location.hash = '#story'; setIsMobileNavOpen(false); }} className="text-xl uppercase tracking-[3px] text-white hover:text-gold text-left">Our Story</button>
        </div>
        <div className="mt-auto p-10 border-t border-white/5">
          <p className="text-sm text-text-muted mb-4 uppercase tracking-[2px]">Connect</p>
          <div className="flex gap-4">
            <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors"><i className="fab fa-instagram"></i></button>
            <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors"><i className="fab fa-twitter"></i></button>
            <button className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white hover:text-gold hover:border-gold transition-colors"><i className="fab fa-tiktok"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
