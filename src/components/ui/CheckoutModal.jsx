import React from 'react';
import { useShop } from '../../context/ShopContext';
import { X } from 'lucide-react';

const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, setIsSuccessOpen, cartTotal } = useShop();

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-xl rounded-lg p-8 relative">
        <button 
          className="absolute top-6 right-6 text-white/50 hover:text-gold"
          onClick={() => setIsCheckoutOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="font-heading text-3xl mb-2">Secure Checkout</h2>
        <p className="text-white/60 mb-8 pb-6 border-b border-white/5">Total to pay: <span className="text-gold text-xl ml-2">${cartTotal.toFixed(2)}</span></p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full bg-[#111] border border-white/10 p-4 rounded outline-none focus:border-gold transition-colors text-white" required />
          <input type="email" placeholder="Email Address" className="w-full bg-[#111] border border-white/10 p-4 rounded outline-none focus:border-gold transition-colors text-white" required />
          <div className="flex gap-4">
            <input type="text" placeholder="Card Number" className="w-2/3 bg-[#111] border border-white/10 p-4 rounded outline-none focus:border-gold transition-colors text-white" required />
            <input type="text" placeholder="MM/YY" className="w-1/3 bg-[#111] border border-white/10 p-4 rounded outline-none focus:border-gold transition-colors text-white" required />
          </div>
          <button type="submit" className="w-full bg-gold text-[#050505] font-semibold py-4 mt-6 uppercase tracking-[2px] transition-all hover:bg-gold-hover">
            Pay ${cartTotal.toFixed(2)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
