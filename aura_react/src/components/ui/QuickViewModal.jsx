import React from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Heart, Star } from 'lucide-react';

const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, wishlist } = useShop();

  if (!quickViewProduct) return null;
  const isWishlisted = wishlist.includes(quickViewProduct.id);

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110]"
        onClick={() => setQuickViewProduct(null)}
      ></div>
      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl bg-[#0a0a0a] border border-white/10 z-[120] flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto">
        
        <button 
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-dark/50 backdrop-blur-sm border border-white/10 flex items-center justify-center rounded-full hover:bg-gold hover:text-dark hover:border-gold transition-all"
          onClick={() => setQuickViewProduct(null)}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-full md:w-1/2 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-12 min-h-[300px]">
          <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-auto object-cover rounded-sm mix-blend-screen opacity-90" />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[3px] text-gold mb-3 font-semibold">{quickViewProduct.family}</span>
          <h2 className="font-heading text-4xl text-white mb-2">{quickViewProduct.name}</h2>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(quickViewProduct.rating) ? 'fill-gold' : 'opacity-30'}`} />
              ))}
            </div>
            <span className="text-white/40 text-xs">({quickViewProduct.rating}/5)</span>
          </div>

          <p className="text-text-muted text-sm leading-relaxed mb-8 border-b border-white/5 pb-8">
            {quickViewProduct.desc}
          </p>

          <div className="flex flex-col gap-4 mb-8">
            <div>
              <span className="text-white/40 text-xs uppercase tracking-[2px] block mb-1">Notes</span>
              <p className="text-white text-sm">{quickViewProduct.notes}</p>
            </div>
            <div>
              <span className="text-white/40 text-xs uppercase tracking-[2px] block mb-1">Volume</span>
              <p className="text-white text-sm">{quickViewProduct.volume}</p>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-4">
            <div className="flex-1 bg-[#111] border border-white/10 p-4 flex justify-between items-center">
              <span className="text-xs text-white/50 uppercase tracking-[2px]">Price</span>
              <span className="font-heading text-xl text-gold">${quickViewProduct.price.toFixed(2)}</span>
            </div>
            
            <button 
              className="flex-2 bg-gold text-dark py-4 px-8 text-xs font-bold uppercase tracking-[2px] hover:bg-gold-hover transition-colors rounded-sm h-[60px]"
              onClick={() => {
                addToCart(quickViewProduct.id);
                setQuickViewProduct(null);
              }}
            >
              Add to Bag
            </button>

            <button 
              className={`w-[60px] h-[60px] border border-white/10 flex items-center justify-center shrink-0 hover:border-gold hover:text-gold transition-colors ${isWishlisted ? 'text-gold border-gold' : 'text-white/50'}`}
              onClick={(e) => toggleWishlist(quickViewProduct.id, e)}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-gold' : ''}`} />
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default QuickViewModal;
