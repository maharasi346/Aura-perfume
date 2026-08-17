import React from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, getProduct, updateCartQuantity, removeFromCart, cartTotal, setIsCheckoutOpen } = useShop();

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-all" onClick={() => setIsCartOpen(false)}></div>
      )}
      <div className={`fixed top-0 ${isCartOpen ? 'right-0' : '-right-full'} w-[100%] sm:w-[450px] h-screen bg-[#0a0a0a] border-l border-white/5 z-[110] flex flex-col transition-all duration-500 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]`}>
        <div className="flex justify-between items-center p-8 border-b border-white/5 bg-[#050505]">
          <h2 className="font-heading text-2xl text-gold">Your Bag</h2>
          <button className="text-white/50 hover:text-gold transition-colors" onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 flex flex-col gap-6">
          {cart.length === 0 ? (
            <div className="text-center text-white/50 my-auto">Your bag is empty</div>
          ) : (
            cart.map(item => {
              const product = getProduct(item.id);
              if (!product) return null;
              return (
                <div key={item.id} className="flex gap-4 border-b border-white/5 pb-6">
                  <div className="w-24 h-24 bg-[#111] rounded overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-heading text-lg">{product.name}</h4>
                      <button onClick={() => removeFromCart(item.id)} className="text-white/30 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                    </div>
                    <p className="text-xs text-gold uppercase tracking-[1px] mb-2">{product.volume}</p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex items-center gap-3 border border-white/10 rounded-md px-2 py-1">
                        <button onClick={() => updateCartQuantity(item.id, -1)} className="text-white/50 hover:text-white"><Minus className="w-3 h-3" /></button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, 1)} className="text-white/50 hover:text-white"><Plus className="w-3 h-3" /></button>
                      </div>
                      <p className="font-semibold">${(product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="p-8 border-t border-white/5 bg-[#050505]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-white/60 uppercase tracking-[2px] text-sm">Subtotal</span>
              <span className="font-heading text-2xl">${cartTotal.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-gold text-[#050505] font-semibold py-4 uppercase tracking-[2px] transition-all hover:bg-gold-hover"
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <p className="text-center text-xs text-white/30 mt-4">Complimentary shipping & returns on all orders.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
