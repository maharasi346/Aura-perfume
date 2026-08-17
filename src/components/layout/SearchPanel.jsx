import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

const SearchPanel = () => {
  const [isOpen, setIsOpen] = useState(false); // To be replaced with context state if needed
  
  // For this port, we will just keep it simple or hook it up if you want full functionality
  // since the HTML didn't hook it up heavily, we'll just have the UI ready.
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[200] flex flex-col transition-all duration-500">
      <div className="p-8 flex justify-end">
        <button className="text-white/50 hover:text-gold transition-colors magnetic" onClick={() => setIsOpen(false)}>
          <X className="w-8 h-8" />
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl relative">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-gold" />
          <input 
            type="text" 
            placeholder="What are you looking for?" 
            className="w-full bg-transparent border-b border-white/20 text-3xl md:text-5xl lg:text-7xl font-heading text-white outline-none pl-14 md:pl-20 pb-4 focus:border-gold transition-colors placeholder:text-white/20"
            autoFocus
          />
          <div className="mt-12 flex gap-4 text-sm text-white/40 uppercase tracking-[2px] flex-wrap">
            <span>Popular:</span>
            <button className="hover:text-gold transition-colors">Oud Royale</button>
            <button className="hover:text-gold transition-colors">Floral Series</button>
            <button className="hover:text-gold transition-colors">Gifts for Him</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
