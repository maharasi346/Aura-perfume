import React from 'react';
import { useShop } from '../../context/ShopContext';
import ProductCard from '../ui/ProductCard';

const HomeView = () => {
  const { products, setCurrentView } = useShop();
  
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1615486171448-4fc1ac839f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Dark aesthetic background" className="w-full h-full object-cover opacity-30 mix-blend-luminosity scale-105 transform translate-y-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6 reveal-up in-view">
          <span className="text-gold tracking-[4px] uppercase text-[10px] font-bold mb-6 block drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">L'Art de la Parfumerie</span>
          <h1 className="font-heading text-6xl md:text-8xl text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
            Scent as an <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#F3E5AB] to-gold">Aura</span>
          </h1>
          <p className="text-text-muted text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
            Elevate your presence with meticulously crafted fragrances. Born from rare ingredients, designed for the modern connoisseur who speaks without words.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="bg-gold text-dark py-4 px-10 text-xs font-bold uppercase tracking-[3px] hover:bg-gold-hover transition-colors rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              onClick={() => setCurrentView('collections')}
            >
              Discover Collection
            </button>
            <button className="text-white text-xs font-bold uppercase tracking-[3px] py-4 px-8 border border-white/20 hover:border-gold hover:text-gold transition-colors rounded-sm glass-effect">
              Our Heritage
            </button>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-6 border-y border-white/5 bg-[#0a0a0a] overflow-hidden whitespace-nowrap flex">
        <div className="animate-marquee text-xs font-bold uppercase tracking-[4px] text-white/30 flex gap-12">
          <span>Cruelty Free</span> <span>•</span>
          <span>Sustainably Sourced</span> <span>•</span>
          <span>Crafted in Grasse</span> <span>•</span>
          <span>Artisanal Blends</span> <span>•</span>
          <span>Cruelty Free</span> <span>•</span>
          <span>Sustainably Sourced</span> <span>•</span>
          <span>Crafted in Grasse</span> <span>•</span>
          <span>Artisanal Blends</span>
        </div>
      </div>

      {/* Best Sellers */}
      <section className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up in-view gap-6">
            <div>
              <span className="text-gold tracking-[3px] uppercase text-[10px] font-bold mb-3 block">Curated Selection</span>
              <h2 className="font-heading text-4xl md:text-5xl text-white">Signature Blends</h2>
            </div>
            <button 
              className="text-text-muted hover:text-gold transition-colors text-xs uppercase tracking-[2px] border-b border-transparent hover:border-gold pb-1"
              onClick={() => setCurrentView('collections')}
            >
              View All Fragrances →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger-container">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture of Scent */}
      <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 relative reveal-up in-view">
            <div className="aspect-[3/4] relative z-10 bg-gradient-to-tr from-dark to-card border border-white/10 p-12 flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 bg-[url('https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
              <div className="relative z-20 text-center">
                <div className="w-32 h-32 mx-auto rounded-full border border-gold/30 flex items-center justify-center mb-8 relative">
                  <div className="absolute inset-0 border border-gold/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <span className="font-heading text-3xl text-gold">24</span>
                </div>
                <h3 className="text-white uppercase tracking-[3px] text-sm mb-4">Hours of Longevity</h3>
                <p className="text-text-muted text-xs leading-relaxed max-w-[250px] mx-auto">Extrait de Parfum concentration ensures your aura lingers from dusk till dawn.</p>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-[#111] border border-white/5 z-20 p-8 flex flex-col justify-center transform translate-y-10 group hover:-translate-y-0 transition-transform duration-700 glass-effect">
              <span className="text-gold tracking-[2px] uppercase text-[10px] mb-2 block">The Process</span>
              <h4 className="font-heading text-2xl text-white mb-4">Macerated for 6 Months</h4>
              <p className="text-white/50 text-xs leading-relaxed">Time is our most expensive ingredient. Every bottle rests in dark cellars to reach its absolute peak before it touches your skin.</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-10 reveal-up in-view delay-1">
            <span className="text-gold tracking-[3px] uppercase text-[10px] font-bold mb-4 block">Olfactory Pyramid</span>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-8">The Architecture <br/>of Scent</h2>
            <p className="text-text-muted text-sm leading-relaxed mb-12 max-w-lg">
              A true fragrance is not static. It is a living, breathing entity that evolves on your skin, revealing hidden depths as the hours pass.
            </p>
            
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
              
              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-dark border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold transition-colors"></div>
                </div>
                <h4 className="text-white uppercase tracking-[2px] text-xs font-bold mb-2 group-hover:text-gold transition-colors">The Top Notes (0-15 Min)</h4>
                <p className="text-white/50 text-xs leading-relaxed">The initial strike. Bright, volatile citruses and aromatics that introduce the fragrance and captivate instantly.</p>
              </div>
              
              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-dark border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold transition-colors"></div>
                </div>
                <h4 className="text-white uppercase tracking-[2px] text-xs font-bold mb-2 group-hover:text-gold transition-colors">The Heart (1-4 Hours)</h4>
                <p className="text-white/50 text-xs leading-relaxed">The soul of the scent. Rich florals, spices, and complex accords that unfold once the top notes evaporate.</p>
              </div>
              
              <div className="relative pl-10 group">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-dark border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-gold transition-colors"></div>
                </div>
                <h4 className="text-white uppercase tracking-[2px] text-xs font-bold mb-2 group-hover:text-gold transition-colors">The Base (4-24 Hours)</h4>
                <p className="text-white/50 text-xs leading-relaxed">The anchor. Heavy molecules like woods, resins, and musks that bond with your unique skin chemistry.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
