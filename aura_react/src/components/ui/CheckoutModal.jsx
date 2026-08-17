import React from 'react';
import { useShop } from '../../context/ShopContext';
import { X, Lock } from 'lucide-react';

const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cartTotal, setCart, setIsSuccessOpen } = useShop();

  if (!isCheckoutOpen) return null;

  const placeOrder = (e) => {
    e.preventDefault();
    setIsCheckoutOpen(false);
    setCart([]);
    setTimeout(() => {
      setIsSuccessOpen(true);
    }, 500);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[130]"
        onClick={() => setIsCheckoutOpen(false)}
      ></div>
      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#0a0a0a] border border-white/10 z-[140] p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto">
        <button 
          className="absolute top-4 right-4 text-white/50 hover:text-gold transition-colors"
          onClick={() => setIsCheckoutOpen(false)}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-10">
          <Lock className="w-6 h-6 text-gold mx-auto mb-4" />
          <h2 className="font-heading text-3xl text-white mb-2">Secure Checkout</h2>
          <p className="text-text-muted text-xs uppercase tracking-[2px]">Total: <span className="text-gold font-bold">${cartTotal.toFixed(2)}</span></p>
        </div>

        <form onSubmit={placeOrder} className="space-y-6">
          <div>
            <label className="block text-white/50 text-[10px] uppercase tracking-[2px] mb-2">Email Address</label>
            <input required type="email" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" placeholder="you@example.com" />
          </div>

          <div className="pt-4">
            <h3 className="text-white/80 text-xs uppercase tracking-[2px] mb-4">Shipping Details</h3>
            <div className="space-y-4">
              <input required type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" placeholder="Full Name" />
              <input required type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" placeholder="Street Address" />
              <div className="flex gap-4">
                <input required type="text" className="w-1/2 bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" placeholder="City" />
                <input required type="text" className="w-1/2 bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" placeholder="Postal Code" />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-white/80 text-xs uppercase tracking-[2px] mb-4">Payment Method</h3>
            <div className="space-y-4">
              <input required type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" placeholder="Card Number" />
              <div className="flex gap-4">
                <input required type="text" className="w-1/2 bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" placeholder="MM/YY" />
                <input required type="text" className="w-1/2 bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors" placeholder="CVC" />
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-gold text-dark py-4 text-xs font-bold uppercase tracking-[3px] hover:bg-gold-hover transition-colors rounded-sm mt-8 flex justify-center items-center gap-2">
            <Lock className="w-3 h-3" /> Pay ${cartTotal.toFixed(2)}
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckoutModal;
