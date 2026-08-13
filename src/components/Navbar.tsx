import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { brandConfig } from '../data/brandConfig';
import { Menu, X, Bookmark, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenPolicy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSaved,
  onOpenPolicy
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            {/* Logo */}
            <a href="#" aria-label="Zariya Home" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <Logo size="md" />
            </a>

            {/* Desktop Navigation */}
            <nav className="nav-links-desktop" aria-label="Main Navigation">
              <a href="#collection" className="nav-link">Collection</a>
              <a href="#how-to-order" className="nav-link">How to Order</a>
              <a href="#instagram" className="nav-link">Instagram</a>
              <a href="#reviews" className="nav-link">Reviews</a>
              <button
                onClick={onOpenPolicy}
                className="nav-link"
                style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
              >
                Policy
              </button>
            </nav>

            {/* Actions: Desktop vs Mobile */}
            <div className="nav-actions">
              {/* Saved Items Button */}
              <button
                onClick={onOpenSaved}
                className="btn btn-secondary btn-sm nav-saved-btn"
                title="Saved Items for Instagram DM"
                aria-label="View Saved Items"
              >
                <Bookmark size={16} color="var(--gold-dark)" />
                <span className="saved-btn-label">Saved</span>
                {savedCount > 0 && (
                  <span className="saved-badge-count">
                    {savedCount}
                  </span>
                )}
              </button>

              {/* Instagram Direct Link (Hidden on Mobile to avoid header cramping) */}
              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-instagram btn-sm nav-ig-desktop-btn"
                title={`Visit ${brandConfig.instagramHandle} on Instagram`}
              >
                <InstagramIcon size={16} color="#FFF" />
                <span>DM on IG</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMobile}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)' }}>
                <Logo size="sm" />
                <button
                  onClick={closeMobile}
                  style={{
                    padding: '8px',
                    borderRadius: '50%',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mobile-drawer-links">
                <a href="#collection" className="mobile-drawer-link" onClick={closeMobile}>
                  <span>Collection</span>
                  <Sparkles size={16} color="var(--gold-primary)" />
                </a>
                <a href="#how-to-order" className="mobile-drawer-link" onClick={closeMobile}>
                  <span>How to Order (3 Steps)</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: 700, background: 'var(--gold-subtle)', padding: '2px 8px', borderRadius: '4px' }}>1-2-3</span>
                </a>
                <a href="#instagram" className="mobile-drawer-link" onClick={closeMobile}>
                  <span>Instagram Feed</span>
                  <InstagramIcon size={16} color="#D62976" />
                </a>
                <a href="#reviews" className="mobile-drawer-link" onClick={closeMobile}>
                  <span>Customer Reviews</span>
                  <span style={{ color: '#F5A623', fontSize: '0.85rem' }}>★★★★★</span>
                </a>
                <button
                  className="mobile-drawer-link"
                  onClick={() => {
                    closeMobile();
                    onOpenPolicy();
                  }}
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', borderBottom: '1px solid var(--border-light)', cursor: 'pointer' }}
                >
                  <span>Order & Cancellation Policy</span>
                  <span style={{ fontSize: '0.725rem', background: '#FFF0D6', color: 'var(--gold-dark)', padding: '2px 8px', borderRadius: '4px' }}>Strict</span>
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-instagram"
                style={{ width: '100%', padding: '12px' }}
              >
                <InstagramIcon size={18} color="#FFF" />
                <span>Visit {brandConfig.instagramHandle}</span>
              </a>
              <p style={{ textAlign: 'center', fontSize: '0.785rem', color: 'var(--text-muted)' }}>
                Handcrafted with love by <strong style={{ color: 'var(--gold-dark)' }}>Deeya</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
