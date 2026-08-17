import React, { useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Minus, Plus } from 'lucide-react';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, updateCartQuantity, removeFromCart, cartTotal, getProduct, setIsCheckoutOpen } = useShop();

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 w-full md:w-[450px] h-full bg-[#0a0a0a] z-[100] border-l border-white/10 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isCartOpen ? 'right-0' : '-right-full md:-right-[450px]'
        }`}
      >
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#050505]">
          <h2 className="font-heading text-2xl text-gold tracking-[4px]">Your Bag</h2>
          <button 
            className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full hover:bg-gold hover:text-dark hover:border-gold transition-all"
            onClick={() => setIsCartOpen(false)}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
              <p className="font-heading text-xl mb-4">Your bag is empty</p>
              <button 
                className="text-xs tracking-[2px] uppercase text-gold hover:underline"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map(item => {
                const product = getProduct(item.id);
                if (!product) return null;
                return (
                  <div key={item.id} className="flex gap-6 pb-6 border-b border-white/5">
                    <img src={product.image} alt={product.name} className="w-24 h-32 object-cover rounded-sm mix-blend-screen opacity-90" />
                    <div className="flex-1 flex flex-col justify-center">
                      <span className="text-[10px] uppercase tracking-[2px] text-gold mb-1">{product.family}</span>
                      <h4 className="font-heading text-lg text-white mb-1">{product.name}</h4>
                      <p className="text-white/50 text-xs mb-4">{product.volume}</p>
                      
                      <div className="flex justify-between items-center w-full mt-auto">
                        <div className="flex items-center gap-4 bg-[#111] border border-white/10 rounded-sm px-2 py-1">
                          <button onClick={() => updateCartQuantity(item.id, -1)} className="text-white/50 hover:text-gold p-1">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateCartQuantity(item.id, 1)} className="text-white/50 hover:text-gold p-1">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-semibold text-sm tracking-[1px]">${(product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 bg-[#050505] border-t border-white/5">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-text-muted uppercase tracking-[2px]">Subtotal</span>
              <span className="font-heading text-2xl text-gold">${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-gold text-dark py-4 text-xs font-bold uppercase tracking-[3px] hover:bg-gold-hover transition-colors rounded-sm"
              onClick={handleCheckoutClick}
            >
              Secure Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
