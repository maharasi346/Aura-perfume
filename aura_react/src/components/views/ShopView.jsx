import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import ProductCard from '../ui/ProductCard';
import { Menu, Search, ChevronDown } from 'lucide-react';

const ShopView = () => {
  const { products } = useShop();

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(400);
  const [sortMethod, setSortMethod] = useState('popular');
  
  // Sidebar filters
  const [selectedFamilies, setSelectedFamilies] = useState([]);
  const [selectedVolumes, setSelectedVolumes] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = ['All', 'Men', 'Women', 'Unisex', 'Best Sellers', 'New Arrivals'];

  const toggleFamily = (family) => {
    setSelectedFamilies(prev => prev.includes(family) ? prev.filter(f => f !== family) : [...prev, family]);
  };

  const toggleVolume = (volume) => {
    setSelectedVolumes(prev => prev.includes(volume) ? prev.filter(v => v !== volume) : [...prev, volume]);
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => {
      // Category Tab filter
      let matchCategory = true;
      if (activeCategory === 'Men') matchCategory = p.gender === 'Men';
      if (activeCategory === 'Women') matchCategory = p.gender === 'Women';
      if (activeCategory === 'Unisex') matchCategory = p.gender === 'Unisex';
      if (activeCategory === 'Best Sellers') matchCategory = p.isBestSeller;
      if (activeCategory === 'New Arrivals') matchCategory = p.isNew;

      // Search Filter
      let matchSearch = true;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        matchSearch = p.name.toLowerCase().includes(query) || 
                      p.notes.toLowerCase().includes(query) || 
                      p.family.toLowerCase().includes(query);
      }

      const matchFam = selectedFamilies.length === 0 || selectedFamilies.includes(p.family);
      const matchVol = selectedVolumes.length === 0 || selectedVolumes.includes(p.volume);
      const matchPrice = p.price <= maxPrice;
      
      return matchCategory && matchSearch && matchFam && matchVol && matchPrice;
    });

    // Sorting
    if (sortMethod === 'price-low') result.sort((a,b) => a.price - b.price);
    else if (sortMethod === 'price-high') result.sort((a,b) => b.price - a.price);
    else if (sortMethod === 'popular') result.sort((a,b) => (b.popularity || 0) - (a.popularity || 0));
    else if (sortMethod === 'newest') result.sort((a,b) => new Date(b.date) - new Date(a.date));

    return result;
  }, [products, activeCategory, searchQuery, maxPrice, sortMethod, selectedFamilies, selectedVolumes]);

  const resetFilters = () => {
    setSelectedFamilies([]);
    setSelectedVolumes([]);
    setMaxPrice(400);
    setSortMethod('popular');
    setSearchQuery('');
    setActiveCategory('All');
  };

  return (
    <section className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-16 reveal-up in-view">
          <span className="text-gold tracking-[4px] uppercase text-[10px] font-bold mb-4 block">Shop All</span>
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-tight">The Collection</h1>
          <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto">
            Discover our complete portfolio of artisanal fragrances. Filter by scent family, volume, or explore our curated categories.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Mobile Overlay */}
          {isSidebarOpen && (
            <div className="fixed inset-0 bg-black/80 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
          )}

          {/* Sidebar Filters */}
          <aside className={`w-[300px] shrink-0 fixed lg:static top-0 h-full lg:h-auto bg-[#0a0a0a] lg:bg-transparent z-50 lg:z-0 p-8 lg:p-0 border-r border-white/5 lg:border-none transition-all duration-500 overflow-y-auto ${isSidebarOpen ? 'left-0' : '-left-full lg:translate-x-0'}`}>
            <div className="flex justify-between items-center mb-10 lg:hidden">
              <h2 className="font-heading text-2xl text-white tracking-wider">Filters</h2>
              <button className="text-white/50 hover:text-gold" onClick={() => setIsSidebarOpen(false)}>✕</button>
            </div>

            {/* Scent Family */}
            <div className="mb-12">
              <h3 className="text-xs font-semibold uppercase tracking-[3px] text-white/80 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full"></span> Scent Family
              </h3>
              <div className="flex flex-col gap-4">
                {['Woody', 'Floral', 'Fresh', 'Oriental', 'Aquatic'].map(fam => (
                  <label key={fam} className="custom-checkbox flex items-center cursor-pointer text-[0.95rem] text-text-muted hover:text-white transition-colors relative pl-8 group">
                    <input type="checkbox" checked={selectedFamilies.includes(fam)} onChange={() => toggleFamily(fam)} className="absolute opacity-0 cursor-pointer h-0 w-0" /> 
                    <div className="absolute left-0 top-1 w-4 h-4 border border-white/20 rounded-sm transition-all group-hover:border-gold"></div> 
                    {fam}
                  </label>
                ))}
              </div>
            </div>

            {/* Volume */}
            <div className="mb-12">
              <h3 className="text-xs font-semibold uppercase tracking-[3px] text-white/80 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full"></span> Volume
              </h3>
              <div className="flex flex-col gap-4">
                {['50ml', '100ml'].map(vol => (
                  <label key={vol} className="custom-checkbox flex items-center cursor-pointer text-[0.95rem] text-text-muted hover:text-white transition-colors relative pl-8 group">
                    <input type="checkbox" checked={selectedVolumes.includes(vol)} onChange={() => toggleVolume(vol)} className="absolute opacity-0 cursor-pointer h-0 w-0" /> 
                    <div className="absolute left-0 top-1 w-4 h-4 border border-white/20 rounded-sm transition-all group-hover:border-gold"></div> 
                    {vol}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4 text-xs font-semibold uppercase tracking-[3px] text-white/80">
                <h3>Max Price</h3>
                <span className="text-gold">${maxPrice}</span>
              </div>
              <input type="range" min="100" max="400" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
            </div>
            
            <div className="flex flex-col gap-3">
              <button className="w-full bg-gold text-dark py-3 text-xs font-bold uppercase tracking-[2px] hover:bg-gold-hover transition-colors rounded-sm" onClick={() => setIsSidebarOpen(false)}>Apply Filters</button>
              <button className="w-full border border-white/10 text-text-muted py-3 text-xs font-bold uppercase tracking-[2px] hover:border-gold hover:text-gold transition-colors rounded-sm" onClick={resetFilters}>Reset</button>
            </div>
          </aside>

          {/* Catalog Content */}
          <div className="w-full">
            {/* Category Tabs */}
            <div className="flex overflow-x-auto custom-scrollbar gap-8 mb-8 pb-4 border-b border-white/5 whitespace-nowrap reveal-up in-view">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm font-semibold tracking-[2px] uppercase pb-2 border-b-2 transition-colors ${activeCategory === cat ? 'text-gold border-gold' : 'text-white/50 hover:text-white border-transparent hover:border-white/20'}`}
                >
                  {cat === 'All' ? 'All Fragrances' : cat}
                </button>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 reveal-up in-view">
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button className="magnetic bg-[#0a0a0a] border border-white/10 text-white py-3 px-6 flex items-center justify-center gap-3 rounded-md lg:hidden hover:border-gold transition-colors flex-1 md:flex-none" onClick={() => setIsSidebarOpen(true)}>
                  <Menu className="w-5 h-5 text-gold" /> <span className="tracking-[2px] uppercase text-xs font-semibold">Filters</span>
                </button>
                <span className="font-heading text-xl text-white hidden sm:block whitespace-nowrap">{filteredProducts.length} Results</span>
              </div>

              {/* Search & Sort */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <div className="relative w-full sm:w-[250px]">
                  <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/5 text-sm text-white py-3 pl-10 pr-4 rounded-md outline-none focus:border-gold transition-colors placeholder:text-white/30" 
                    placeholder="Search shop..." 
                  />
                </div>

                <div className="flex items-center gap-3 bg-[#0a0a0a] border border-white/5 py-2.5 px-4 rounded-md w-full sm:w-auto justify-between sm:justify-start">
                  <label htmlFor="sort-select" className="text-xs uppercase tracking-[2px] text-white/50 whitespace-nowrap">Sort:</label>
                  <div className="relative flex items-center">
                    <select 
                      id="sort-select" 
                      value={sortMethod}
                      onChange={(e) => setSortMethod(e.target.value)}
                      className="bg-transparent text-gold outline-none cursor-pointer uppercase tracking-[1px] text-xs font-semibold appearance-none pr-6 w-full"
                    >
                      <option value="popular" className="bg-dark text-white">Popularity</option>
                      <option value="price-low" className="bg-dark text-white">Price: Low to High</option>
                      <option value="price-high" className="bg-dark text-white">Price: High to Low</option>
                      <option value="newest" className="bg-dark text-white">New Arrivals</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-gold absolute right-0 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 reveal-stagger-container">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-20 text-center text-text-muted">
                  <Search className="w-12 h-12 text-white/20 mx-auto mb-4" />
                  <p>No fragrances match your selected filters.</p>
                  <button onClick={resetFilters} className="text-gold mt-4 uppercase tracking-[2px] text-xs hover:underline">Clear all filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopView;
