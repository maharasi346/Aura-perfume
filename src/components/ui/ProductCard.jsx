import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Heart, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { toggleWishlist, wishlist, addToCart, setQuickViewProduct, setIsCheckoutOpen } = useShop();

  const isWished = wishlist.includes(product.id);
  const stars = Array(Math.floor(product.rating)).fill(0);

  const buyNow = (id) => {
    addToCart(id);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="glass-effect rounded-md p-6 text-center transition-all duration-500 hover:border-gold hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.1)] relative group reveal-stagger">
      <button 
        className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 hover:border-gold"
        onClick={(e) => toggleWishlist(product.id, e)}
      >
        <Heart className={`w-4 h-4 ${isWished ? 'fill-gold text-gold heart-animate' : 'text-white/80 transition-colors'}`} />
      </button>

      <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative rounded-sm">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover img-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
        <button 
          className="magnetic absolute -bottom-16 left-1/2 -translate-x-1/2 bg-[#050505]/90 text-gold border border-gold py-3 px-6 text-xs uppercase tracking-widest w-[85%] opacity-0 group-hover:bottom-6 group-hover:opacity-100 transition-all duration-500 hover:bg-gold hover:text-[#050505]"
          onClick={() => setQuickViewProduct(product)}
        >
          Quick View
        </button>
      </div>

      <p className="text-[0.75rem] text-gold uppercase mb-2 tracking-[2px]">{product.family} | {product.volume}</p>
      <h3 className="font-heading text-2xl mb-2.5">{product.name}</h3>
      
      <div className="flex justify-center items-center gap-1 mb-4 text-[0.8rem]">
        {stars.map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
        ))}
        <span className="text-text-muted ml-1">{product.rating}</span>
      </div>
      
      <p className="text-text-muted mb-6 text-[1.1rem]">${product.price.toFixed(2)}</p>
      
      <div className="flex gap-2">
        <button 
          className="w-1/2 border border-white/5 py-3.5 text-[0.7rem] sm:text-[0.85rem] uppercase tracking-[2px] transition-all hover:border-gold hover:text-gold hover:bg-[rgba(212,175,55,0.05)] magnetic"
          onClick={() => addToCart(product.id)}
        >
          Add to Bag
        </button>
        <button 
          className="w-1/2 bg-gold text-[#050505] font-semibold py-3.5 text-[0.7rem] sm:text-[0.85rem] uppercase tracking-[2px] transition-all hover:bg-gold-hover magnetic"
          onClick={() => buyNow(product.id)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
