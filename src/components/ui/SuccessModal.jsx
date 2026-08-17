import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Check } from 'lucide-react';

const SuccessModal = () => {
  const { isSuccessOpen, setIsSuccessOpen, cart, removeFromCart } = useShop();

  if (!isSuccessOpen) return null;

  const handleClose = () => {
    cart.forEach(item => removeFromCart(item.id));
    setIsSuccessOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
      <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-md rounded-lg p-10 text-center relative reveal-up in-view">
        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-gold" />
        </div>
        <h2 className="font-heading text-3xl mb-4">Order Confirmed</h2>
        <p className="text-white/60 mb-8">Thank you for your purchase. Your signature scent is on its way to you.</p>
        <button 
          className="w-full bg-gold text-[#050505] font-semibold py-4 uppercase tracking-[2px] transition-all hover:bg-gold-hover"
          onClick={handleClose}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
