import React, { useEffect, useRef } from 'react';
import { useShop } from '../../context/ShopContext';
import ProductCard from '../ui/ProductCard';

const HomeView = () => {
  const { products, setCurrentView } = useShop();
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  // Setup intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up, .reveal-stagger').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="view-section active">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Hero background" className="w-full h-full object-cover scale-105 animate-[kenburns_20s_infinite_alternate]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
          <p className="text-gold tracking-[4px] uppercase text-xs md:text-sm mb-6 reveal-up font-semibold">Parfumerie de Luxe</p>
          <h1 className="font-heading text-5xl md:text-7xl leading-tight mb-6 drop-shadow-2xl reveal-up delay-1">The Essence of<br/>Timeless Elegance.</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide reveal-up delay-2">Discover the unseen accessory that speaks volumes before you even say a word.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal-up" style={{transitionDelay: '0.6s'}}>
            <button 
              className="bg-gold text-[#050505] font-semibold py-4 px-12 uppercase tracking-[2px] transition-all duration-300 hover:bg-[#F3E5AB] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] magnetic w-full sm:w-auto"
              onClick={() => { setCurrentView('home'); window.location.hash = '#collections'; }}
            >
              Explore Collection
            </button>
            <button 
              className="border border-white/20 bg-black/20 backdrop-blur-sm text-white py-4 px-12 uppercase tracking-[2px] transition-all duration-300 hover:border-gold hover:text-gold hover:bg-white/5 magnetic w-full sm:w-auto"
              onClick={() => { setCurrentView('home'); window.location.hash = '#story'; }}
            >
              Our Story
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal-up delay-2 opacity-50">
          <span className="text-[10px] uppercase tracking-[3px] text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Collections Overview */}
      <section id="discovery" className="py-24 bg-card border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 tracking-wide">Olfactory Families</h2>
              <p className="text-text-muted leading-relaxed">Each creation is meticulously crafted around a central, noble ingredient sourced from the most prestigious terroirs.</p>
            </div>
            <button className="text-gold uppercase text-xs tracking-[2px] hover:text-white transition-colors mt-6 md:mt-0 group hidden md:block">
              View Guide <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer reveal-stagger">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-md relative mb-4">
                <img src="https://images.unsplash.com/photo-1608528577891-eb055944f2e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Woody" className="w-full h-full object-cover img-zoom" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="font-heading text-2xl mb-1 text-gold">Woody & Oriental</h3>
              <p className="text-text-muted text-sm">Deep, resinous, and unapologetically bold.</p>
            </div>
            <div className="group cursor-pointer reveal-stagger delay-1">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-md relative mb-4">
                <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Floral" className="w-full h-full object-cover img-zoom" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="font-heading text-2xl mb-1 text-gold">Luminous Florals</h3>
              <p className="text-text-muted text-sm">Intoxicating blooms captured at their peak.</p>
            </div>
            <div className="group cursor-pointer reveal-stagger delay-2">
              <div className="w-full aspect-[4/5] overflow-hidden rounded-md relative mb-4">
                <img src="https://images.unsplash.com/photo-1615486171448-4fc1ac839f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Fresh" className="w-full h-full object-cover img-zoom" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h3 className="font-heading text-2xl mb-1 text-gold">Aquatic & Fresh</h3>
              <p className="text-text-muted text-sm">Crisp, vibrant, and infinitely refreshing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="collections" className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16 reveal-up">
            <span className="text-gold uppercase tracking-[3px] text-xs font-semibold">Curated</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 mb-6">Signature Pieces</h2>
            <div className="w-px h-16 bg-gold mx-auto opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 reveal-stagger-container">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-20 reveal-up">
            <button 
              className="border border-white/20 bg-transparent text-white py-4 px-12 uppercase tracking-[2px] transition-all hover:border-gold hover:text-gold magnetic"
              onClick={() => setCurrentView('collections')}
            >
              View Full Collection
            </button>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-10 border-y border-white/5 bg-[#030303] overflow-hidden flex items-center">
        <div className="animate-marquee font-heading text-4xl italic text-white/10 whitespace-nowrap">
          <span>THE UNSEEN ACCESSORY • L'ART DE LA PARFUMERIE • TIMELESS ELEGANCE • THE UNSEEN ACCESSORY • L'ART DE LA PARFUMERIE • TIMELESS ELEGANCE •</span>
        </div>
      </div>

      {/* Story Section */}
      <section id="story" className="py-32 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 reveal-up">
              <div className="absolute -inset-4 border border-gold/20 rounded-md transform -rotate-3 transition-transform duration-700 hover:rotate-0"></div>
              <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Perfume Ingredients" className="w-full aspect-[4/3] object-cover rounded-md relative z-10 grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="order-1 lg:order-2 lg:pl-12 reveal-up delay-1">
              <span className="text-gold uppercase tracking-[3px] text-xs font-semibold">Our Heritage</span>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 mb-8 leading-tight">The Architecture <br/>of Scent.</h2>
              <p className="text-text-muted leading-relaxed mb-6 text-lg">Every bottle of AURA is a masterclass in balance and raw material quality. We spend years sourcing the perfect ingredients before a single drop is formulated.</p>
              <p className="text-text-muted leading-relaxed mb-10 text-lg">We don't make perfumes to mask. We craft invisible armor. A scent that announces your arrival and lingers long after you've departed.</p>
              
              <div className="grid grid-cols-2 gap-8 mb-10 border-t border-b border-white/5 py-8">
                <div>
                  <h4 className="font-heading text-3xl text-gold mb-2">24<span className="text-lg text-white/50 ml-1">mo</span></h4>
                  <p className="text-xs uppercase tracking-[2px] text-white/70">Maceration Process</p>
                </div>
                <div>
                  <h4 className="font-heading text-3xl text-gold mb-2">100<span className="text-lg text-white/50 ml-1">%</span></h4>
                  <p className="text-xs uppercase tracking-[2px] text-white/70">Vegan & Cruelty Free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
