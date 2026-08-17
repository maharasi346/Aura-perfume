import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle } from 'lucide-react';

const SuccessModal = () => {
  const { isSuccessOpen, setIsSuccessOpen, setCurrentView } = useShop();

  if (!isSuccessOpen) return null;

  const close = () => {
    setIsSuccessOpen(false);
    setCurrentView('home');
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150]"
        onClick={close}
      ></div>
      
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-[#0a0a0a] border border-white/10 z-[160] p-12 text-center shadow-[0_0_50px_rgba(212,175,55,0.15)]">
        <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
        <h2 className="font-heading text-3xl text-white mb-4">Order Confirmed</h2>
        <p className="text-text-muted text-sm leading-relaxed mb-8">
          Your aura is being prepared. You will receive an email confirmation with tracking details shortly.
        </p>
        <button 
          className="w-full border border-white/20 text-white py-4 text-xs font-bold uppercase tracking-[3px] hover:border-gold hover:text-gold transition-colors rounded-sm"
          onClick={close}
        >
          Return to Home
        </button>
      </div>
    </>
  );
};

export default SuccessModal;
