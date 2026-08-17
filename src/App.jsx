import React, { useEffect } from 'react';
import { useShop } from './context/ShopContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import SearchPanel from './components/layout/SearchPanel';
import HomeView from './components/views/HomeView';
import ShopView from './components/views/ShopView';
import QuickViewModal from './components/ui/QuickViewModal';
import CheckoutModal from './components/ui/CheckoutModal';
import SuccessModal from './components/ui/SuccessModal';
import Toast from './components/ui/Toast';

function App() {
  const { currentView } = useShop();

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="relative min-h-screen flex flex-col font-body selection:bg-gold selection:text-dark">
      {/* Glow Cursor */}
      <div className="cursor-glow hidden lg:block" id="cursor-glow"></div>
      
      <Navbar />
      <SearchPanel />
      <CartDrawer />
      
      <main className="flex-1" id="app-container">
        <div style={{ display: currentView === 'home' ? 'block' : 'none' }}>
          <HomeView />
        </div>
        <div style={{ display: currentView === 'collections' ? 'block' : 'none' }}>
          <ShopView />
        </div>
      </main>

      <Footer />
      
      {/* Modals & Overlays */}
      <QuickViewModal />
      <CheckoutModal />
      <SuccessModal />
      <Toast />
    </div>
  );
}

export default App;
