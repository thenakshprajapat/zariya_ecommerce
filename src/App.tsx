import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { HowToOrder } from './components/HowToOrder';
import { InstagramSection } from './components/InstagramSection';
import { ReviewsSection } from './components/ReviewsSection';
import { PolicySection } from './components/PolicySection';
import { PolicyModal } from './components/PolicyModal';
import { ProductModal } from './components/ProductModal';
import { SavedDrawer } from './components/SavedDrawer';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Product } from './data/products';
import { brandConfig } from './data/brandConfig';
import { InstagramIcon } from './components/InstagramIcon';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show floating IG button when scrolled past hero section (so it never covers hero on mobile)
      setShowFloatingBtn(window.scrollY > 320);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleToggleSave = (product: Product) => {
    setSavedProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from your saved DM list`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`Added "${product.name}" (${product.code}) to saved list!`);
        return [...prev, product];
      }
    });
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    showToast(`Copied ${code}! Paste it in your Instagram DM.`);
    setTimeout(() => {
      setCopiedCode((prev) => (prev === code ? null : prev));
    }, 2500);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-layout">
      {/* Sticky Navbar */}
      <Navbar
        savedCount={savedProducts.length}
        onOpenSaved={() => setIsSavedDrawerOpen(true)}
        onOpenPolicy={() => setIsPolicyModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 2. Product Showcase Gallery (Single Unified Collection) */}
        <ProductShowcase
          onQuickView={(product) => setSelectedProduct(product)}
          savedProducts={savedProducts}
          onToggleSave={handleToggleSave}
          onCopyCode={handleCopyCode}
          copiedCode={copiedCode}
        />

        {/* 3. How to Order (3 Steps Flow) */}
        <HowToOrder onShowToast={showToast} />

        {/* 4. Instagram Showcase & Feed (@zariya_verse) */}
        <InstagramSection />

        {/* 5. Customer Reviews */}
        <ReviewsSection />

        {/* 6. Order & Non-Cancellation Policy Banner */}
        <PolicySection onOpenFullPolicy={() => setIsPolicyModalOpen(true)} />
      </main>

      {/* Footer with Made with ❤️ by Deeya */}
      <Footer onOpenPolicy={() => setIsPolicyModalOpen(true)} />

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onShowToast={showToast}
      />

      <PolicyModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
      />

      <SavedDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedProducts={savedProducts}
        onRemove={handleToggleSave}
        onClear={() => setSavedProducts([])}
        onShowToast={showToast}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      {/* Floating Instagram Action Button - Appears smoothly on scroll */}
      {showFloatingBtn && (
        <a
          href={brandConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-element animate-fade-in floating-ig-pill"
          title={`Direct message on ${brandConfig.instagramHandle}`}
        >
          <InstagramIcon size={18} color="#FFF" />
          <span>DM @zariya_verse</span>
        </a>
      )}
    </div>
  );
}

export default App;
