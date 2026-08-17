import React from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Heart, Star, ShieldCheck, Droplets, Clock } from 'lucide-react';

const QuickViewModal = () => {
  const { quickViewProduct: product, setQuickViewProduct, addToCart, wishlist, toggleWishlist } = useShop();

  if (!product) return null;

  const isWished = wishlist.includes(product.id);
  const stars = Array(Math.floor(product.rating)).fill(0);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[150] flex items-center justify-center p-4">
      <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-5xl rounded-lg overflow-hidden flex flex-col md:flex-row relative">
        <button 
          className="absolute top-4 right-4 z-10 text-white/50 hover:text-gold bg-black/50 p-2 rounded-full"
          onClick={() => setQuickViewProduct(null)}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-2">
            <p className="text-gold uppercase tracking-[3px] text-xs font-semibold">{product.family}</p>
            <div className="flex items-center gap-1">
              {stars.map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
              <span className="text-white/60 text-xs ml-1">({product.popularity})</span>
            </div>
          </div>
          
          <h2 className="font-heading text-4xl lg:text-5xl mb-4">{product.name}</h2>
          <p className="text-2xl text-white/80 mb-6">₹{product.price.toFixed(2)}</p>
          
          <p className="text-text-muted leading-relaxed mb-8">{product.desc}</p>
          
          <div className="bg-[#111] border border-white/5 p-4 rounded-md mb-8">
            <h4 className="text-xs uppercase tracking-[2px] text-gold mb-3 font-semibold">Olfactory Notes</h4>
            <p className="text-sm text-white/80 leading-loose">{product.notes}</p>
          </div>
          
          <div className="flex items-center gap-6 text-xs text-white/60 mb-10">
            <div className="flex items-center gap-2"><Droplets className="w-4 h-4 text-gold" /> {product.volume}</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> 24h Longevity</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold" /> Authentic</div>
          </div>

          <div className="flex gap-4">
            <button 
              className="flex-1 bg-gold text-[#050505] font-semibold py-4 uppercase tracking-[2px] transition-all hover:bg-gold-hover text-sm magnetic"
              onClick={() => { addToCart(product.id); setQuickViewProduct(null); }}
            >
              Add to Bag
            </button>
            <button 
              className={`w-14 flex items-center justify-center border ${isWished ? 'border-gold bg-[rgba(212,175,55,0.1)]' : 'border-white/10 hover:border-gold'} rounded-md transition-colors magnetic`}
              onClick={(e) => toggleWishlist(product.id, e)}
            >
              <Heart className={`w-5 h-5 ${isWished ? 'fill-gold text-gold heart-animate' : 'text-white'}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
