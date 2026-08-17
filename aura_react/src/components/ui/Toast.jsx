import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CheckCircle } from 'lucide-react';

const Toast = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#0a0a0a] border border-gold text-gold px-8 py-4 z-[9999] text-xs uppercase tracking-[2px] shadow-[0_0_20px_rgba(212,175,55,0.2)] rounded-sm flex items-center gap-3 animate-[slideUp_0.3s_ease-out]">
      <CheckCircle className="w-4 h-4" /> {toastMessage}
    </div>
  );
};

export default Toast;
