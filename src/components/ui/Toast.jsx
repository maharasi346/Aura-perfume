import React from 'react';
import { useShop } from '../../context/ShopContext';

const Toast = () => {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gold text-[#050505] px-6 py-3 rounded-full font-semibold tracking-wider text-sm z-[200] shadow-[0_10px_30px_rgba(212,175,55,0.3)] animate-[bounce_0.5s_ease-out]">
      {toastMessage}
    </div>
  );
};

export default Toast;
