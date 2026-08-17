import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Heart, Search } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist, setQuickViewProduct } = useShop();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="group relative bg-[#0a0a0a] border border-white/5 p-6 flex flex-col items-center hover:border-gold/50 transition-colors duration-500 overflow-hidden reveal-stagger in-view">
      
      {/* Badges */}
      {(product.isBestSeller || product.isNew) && (
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {product.isBestSeller && <span className="bg-gold text-dark text-[10px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-sm shadow-[0_0_10px_rgba(212,175,55,0.3)]">Best Seller</span>}
          {product.isNew && <span className="bg-white/10 text-white backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[2px] px-3 py-1 rounded-sm">New</span>}
        </div>
      )}

      {/* Image Container */}
      <div className="relative w-full aspect-[4/5] mb-8 overflow-hidden bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-8 group cursor-pointer" onClick={() => setQuickViewProduct(product)}>
        
        {/* Quick actions overlay */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
          <button 
            className="w-10 h-10 bg-dark/80 backdrop-blur-sm border border-white/10 flex items-center justify-center rounded-full hover:bg-gold hover:text-dark hover:border-gold transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
          >
            <Search className="w-4 h-4" />
          </button>
          <button 
            className={`w-10 h-10 bg-dark/80 backdrop-blur-sm border border-white/10 flex items-center justify-center rounded-full hover:bg-gold hover:text-dark hover:border-gold transition-all ${isWishlisted ? 'text-gold border-gold' : ''}`}
            onClick={(e) => toggleWishlist(product.id, e)}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-gold' : ''}`} />
          </button>
        </div>

        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-sm img-zoom mix-blend-screen opacity-90" />
      </div>

      <div className="w-full flex flex-col items-center text-center">
        <span className="text-[10px] uppercase tracking-[3px] text-gold mb-3 font-semibold">{product.family}</span>
        <h3 className="font-heading text-2xl text-white mb-2">{product.name}</h3>
        <p className="text-text-muted text-xs mb-6 w-full truncate border-b border-white/5 pb-4 px-4">{product.notes}</p>
        
        <div className="w-full flex justify-between items-center px-2">
          <span className="font-body text-white font-semibold text-sm tracking-[1px]">${product.price.toFixed(2)}</span>
          <button 
            className="text-[10px] uppercase tracking-[2px] text-white hover:text-gold transition-colors font-bold flex items-center gap-2"
            onClick={() => addToCart(product.id)}
          >
            Add to Bag <span className="text-gold">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
