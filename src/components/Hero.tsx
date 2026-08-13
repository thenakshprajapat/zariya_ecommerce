import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Star } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-pill">
              <Sparkles size={14} color="var(--gold-dark)" />
              <span>Bespoke Handmade Crochet Studio</span>
            </div>

            <h1 className="hero-title">
              Timeless Crochet & Knit Art, Handcrafted with{' '}
              <span className="script-signature">Zariya</span>
            </h1>

            <p className="hero-description">
              Discover everlasting floral bouquets that never fade, aesthetic vintage granny square bags, custom-fit wearables, and adorable plushies — intricately stitched with unconditional love by <strong style={{ color: 'var(--gold-dark)' }}>Deeya</strong>.
            </p>

            <div className="hero-actions">
              <button
                onClick={onExploreClick}
                className="btn btn-primary btn-lg"
              >
                <span>Browse Collection</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <InstagramIcon size={17} color="var(--gold-dark)" />
                <span>DM {brandConfig.instagramHandle}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="hero-trust-badges">
              <div className="trust-item">
                <Star size={15} fill="#F5A623" color="#F5A623" />
                <span>4.9★ Rated on Instagram</span>
              </div>
              <div className="trust-item">
                <Heart size={15} color="var(--gold-primary)" />
                <span>100% Premium Milk Cotton Yarn</span>
              </div>
              <div className="trust-item">
                <ShieldCheck size={15} color="var(--teal-brand)" />
                <span>Custom Sizing & Colorways</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="hero-visual-card">
            <div className="hero-img-wrapper">
              <img
                src="/images/hero_banner.jpg"
                alt="Zariya Handcrafted Crochet Art Showcase"
                loading="eager"
              />
            </div>

            {/* Floating Glass Badge */}
            <div className="hero-floating-badge floating-element">
              <div className="badge-icon-wrap">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="badge-text-title">Hand-Knitted Studio</p>
                <p className="badge-text-sub">Every stitch made with love by Deeya 🧶</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
