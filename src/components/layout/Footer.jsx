import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-[#030303]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10 mb-20 reveal-up">
          <div className="lg:col-span-1 pr-8">
            <h2 className="font-heading text-4xl text-gold tracking-[5px] mb-8 drop-shadow-md">AURA</h2>
            <p className="text-text-muted text-sm leading-relaxed mb-8">Crafting unseen accessories that speak volumes. Masterful perfumery for the modern connoisseur.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors magnetic"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors magnetic"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors magnetic"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[3px] text-white mb-8 font-semibold">Collections</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-gold transition-colors relative inline-block group">Noir Series <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="hover:text-gold transition-colors relative inline-block group">L'Or Blanc <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="hover:text-gold transition-colors relative inline-block group">Voyage <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="hover:text-gold transition-colors relative inline-block group">Limited Edition <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[3px] text-white mb-8 font-semibold">Assistance</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-gold transition-colors">Client Services</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Find a Boutique</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[3px] text-white mb-8 font-semibold">The Inner Circle</h4>
            <p className="text-text-muted text-sm mb-6 leading-relaxed">Subscribe to receive exclusive access to limited releases and private events.</p>
            <form className="flex border-b border-white/20 pb-3 focus-within:border-gold transition-colors group" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/30 text-white" required />
              <button type="submit" className="text-white/50 group-hover:text-gold transition-colors"><ArrowRight className="w-5 h-5" /></button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 tracking-wider">
          <p>&copy; 2026 AURA Fragrances. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
