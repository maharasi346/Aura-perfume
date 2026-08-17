import React from 'react';

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-[#030303]">
      <div className="max-w-[1400px] mx-auto px-8 reveal-up in-view">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          <div>
            <h2 className="font-heading text-2xl text-gold tracking-[4px] mb-6 drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]">AURA</h2>
            <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-sm">
              Crafting olfactory masterpieces that transcend time. Each bottle holds a universe of meticulously sourced essences, blended for the modern aesthete.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-colors magnetic text-xs">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-colors magnetic text-xs">
                TW
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-colors magnetic text-xs">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-colors magnetic text-xs">
                YT
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-xs tracking-[3px] uppercase font-semibold mb-8">The House</h3>
            <ul className="flex flex-col gap-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-gold transition-colors inline-block w-fit relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">Our Story</a></li>
              <li><a href="#" className="hover:text-gold transition-colors inline-block w-fit relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">The Artisans</a></li>
              <li><a href="#" className="hover:text-gold transition-colors inline-block w-fit relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">Bespoke Services</a></li>
              <li><a href="#" className="hover:text-gold transition-colors inline-block w-fit relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs tracking-[3px] uppercase font-semibold mb-8">Client Care</h3>
            <ul className="flex flex-col gap-4 text-sm text-text-muted">
              <li><a href="#" className="hover:text-gold transition-colors inline-block w-fit relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">Contact Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors inline-block w-fit relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gold transition-colors inline-block w-fit relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">FAQ</a></li>
              <li><a href="#" className="hover:text-gold transition-colors inline-block w-fit relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xs tracking-[3px] uppercase font-semibold mb-8">Exclusive Access</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Join the inner circle. Receive private invitations to new launches and bespoke events.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="YOUR EMAIL ADDRESS" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors pr-10" />
              <button type="submit" className="absolute right-0 top-0 text-white/50 group-hover:text-gold transition-colors pb-3">
                →
              </button>
            </form>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} AURA FRAGRANCES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
