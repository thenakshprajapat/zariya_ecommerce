import React from 'react';
import { Logo } from './Logo';
import { brandConfig } from '../data/brandConfig';
import { Heart, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface FooterProps {
  onOpenPolicy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Logo size="md" variant="light" />
            </div>
            <p className="footer-desc">
              {brandConfig.description}
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '10px' }}>
              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-instagram btn-sm"
                title={`Visit ${brandConfig.instagramHandle}`}
              >
                <InstagramIcon size={15} color="#FFF" />
                <span>{brandConfig.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-col-title">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#collection" className="footer-link">Collection</a></li>
              <li><a href="#how-to-order" className="footer-link">How to Order (3 Steps)</a></li>
              <li><a href="#instagram" className="footer-link">Instagram Feed</a></li>
              <li><a href="#reviews" className="footer-link">Customer Reviews</a></li>
              <li>
                <button
                  onClick={onOpenPolicy}
                  className="footer-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                >
                  Order & Cancellation Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Handcraft Studio Promise */}
          <div>
            <h4 className="footer-col-title">Studio Guarantee</h4>
            <p style={{ fontSize: '0.85rem', color: '#A0AAB8', lineHeight: '1.55', marginBottom: '12px' }}>
              🧶 100% Premium Milk Cotton Yarn<br />
              📦 Protective Box Packaging<br />
              🔒 Final & Confirmed Production Process
            </p>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 14px',
                fontSize: '0.785rem',
                color: '#E2E8F0'
              }}
            >
              <span style={{ color: 'var(--gold-light)', fontWeight: 700 }}>Note:</span> Once confirmed on IG DM, all crochet orders are final & strictly non-cancellable.
            </div>
          </div>
        </div>

        {/* Bottom Bar with User's Exact Requirement: "made with love by deeya, and deeya highlighted and love logo" */}
        <div className="footer-bottom-bar">
          <p style={{ fontSize: '0.8rem', color: '#8E9AA8' }}>
            © {new Date().getFullYear()} {brandConfig.name}. All rights reserved. Hand-knitted with love in India.
          </p>

          {/* The signature highlight requested by user */}
          <div className="footer-creator-signature">
            <span>Made with</span>
            <span className="heart-pulse" title="Made with Love">
              <Heart size={20} fill="#E63946" color="#E63946" />
            </span>
            <span>by</span>
            <span className="creator-name">
              {brandConfig.creator}
            </span>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#FFF', borderColor: 'rgba(255, 255, 255, 0.2)' }}
            title="Scroll to top"
          >
            <ArrowUp size={15} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
