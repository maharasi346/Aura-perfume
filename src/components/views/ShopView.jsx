import React, { useEffect, useState } from 'react';
import { useShop } from '../../context/ShopContext';
import ProductCard from '../ui/ProductCard';
import { Filter, X, Search } from 'lucide-react';

const ShopView = () => {
  const { products } = useShop();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [priceMax, setPriceMax] = useState(400);
  const [sortOption, setSortOption] = useState('featured');
  const [selectedFamilies, setSelectedFamilies] = useState([]);
  
  // Re-run observer when products change
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up, .reveal-stagger').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredProducts]);

  useEffect(() => {
    let result = products;
    
    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    result = result.filter(p => p.price <= priceMax);
    
    if (selectedFamilies.length > 0) {
      result = result.filter(p => selectedFamilies.includes(p.family));
    }
    
    if (sortOption === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'newest') {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      // featured
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
    
    setFilteredProducts([...result]);
  }, [searchTerm, priceMax, sortOption, selectedFamilies, products]);

  const handleFamilyToggle = (family) => {
    setSelectedFamilies(prev => 
      prev.includes(family) ? prev.filter(f => f !== family) : [...prev, family]
    );
  };

  return (
    <div className="view-section active pt-[90px]">
      
      {/* Header */}
      <div className="bg-[#0a0a0a] border-b border-white/5 py-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-heading text-4xl md:text-5xl mb-4 tracking-[3px] reveal-up">Signature Fragrances</h1>
            <p className="text-text-muted tracking-wide reveal-up delay-1">Explore our masterfully crafted olfactory masterpieces.</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-8 pb-16 relative">
        
        {/* Filters Overlay */}
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] lg:hidden" onClick={() => setIsFilterOpen(false)}></div>
        )}

        {/* Sidebar Filters */}
        <aside className={`fixed top-0 ${isFilterOpen ? 'left-0' : '-left-full'} lg:static lg:block w-[320px] lg:w-auto h-screen lg:h-auto bg-[#050505] lg:bg-transparent z-[100] lg:z-auto p-8 lg:p-0 overflow-y-auto lg:overflow-visible transition-all duration-500 border-r lg:border-none border-white/5 float-left lg:mr-10 lg:w-[250px]`}>
          <div className="flex justify-between items-center mb-10 lg:hidden border-b border-white/5 pb-5">
            <h3 className="font-heading text-2xl text-gold">Filters</h3>
            <button className="text-white hover:text-gold transition-colors" onClick={() => setIsFilterOpen(false)}><X className="w-5 h-5"/></button>
          </div>
          
          <div className="mb-8 border-b border-white/5 pb-8">
            <h3 className="text-xs font-semibold uppercase tracking-[3px] mb-6 text-white/80">Scent Family</h3>
            <div className="flex flex-col gap-3">
              {['Woody', 'Floral', 'Fresh', 'Oriental', 'Aquatic'].map(family => (
                <label key={family} className="custom-checkbox flex items-center cursor-pointer text-[0.95rem] text-text-muted hover:text-white transition-colors relative pl-8 group">
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={selectedFamilies.includes(family)}
                    onChange={() => handleFamilyToggle(family)}
                  />
                  <div className="absolute left-0 top-1 w-4 h-4 border border-white/20 rounded-sm transition-colors group-hover:border-gold"></div>
                  {family}
                </label>
              ))}
            </div>
          </div>
          
          <div className="mb-8 border-b border-white/5 pb-8">
            <h3 className="text-xs font-semibold uppercase tracking-[3px] mb-6 text-white/80 flex justify-between">
              Price Range <span className="text-gold">₹{priceMax}</span>
            </h3>
            <input 
              type="range" 
              min="100" 
              max="400" 
              value={priceMax} 
              onChange={(e) => setPriceMax(e.target.value)}
              className="w-full"
            />
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:pl-[290px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 pb-4 border-b border-white/5 reveal-up">
            
            <button 
              className="magnetic bg-[#0a0a0a] border border-white/10 text-white py-3 px-6 flex items-center justify-center gap-3 rounded-md hover:border-gold transition-colors flex-1 md:flex-none lg:hidden w-full"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter className="w-4 h-4" /> Filters
            </button>
            
            <span className="font-heading text-xl text-white hidden sm:block whitespace-nowrap">
              {filteredProducts.length} Results
            </span>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-[250px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-white/5 text-sm text-white py-3 pl-10 pr-4 rounded-md outline-none focus:border-gold transition-colors placeholder:text-white/30" 
                  placeholder="Search shop..." 
                />
              </div>
              
              <div className="relative bg-[#0a0a0a] border border-white/5 rounded-md px-4 flex items-center w-full md:w-[200px]">
                <span className="text-xs text-white/40 uppercase tracking-[1px] mr-2">Sort:</span>
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-transparent text-gold outline-none cursor-pointer uppercase tracking-[1px] text-xs font-semibold appearance-none pr-6 w-full py-3"
                >
                  <option value="featured" className="bg-[#0a0a0a] text-white">Featured</option>
                  <option value="newest" className="bg-[#0a0a0a] text-white">Newest</option>
                  <option value="price-low" className="bg-[#0a0a0a] text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-[#0a0a0a] text-white">Price: High to Low</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-gold"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 reveal-stagger-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-white/50 text-xl font-heading">
                No fragrances found matching your criteria.
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ShopView;
