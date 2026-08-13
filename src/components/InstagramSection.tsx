import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { Heart, MessageCircle, ExternalLink, CheckCircle } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const InstagramSection: React.FC = () => {
  const instagramPosts = [
    {
      id: 'post-1',
      image: '/images/bouquet.jpg',
      likes: '840',
      comments: '62',
      caption: 'Everlasting pastel tulip bouquet ready to be packed! Never withering flowers 🌷✨'
    },
    {
      id: 'post-2',
      image: '/images/tote_bag.jpg',
      likes: '715',
      comments: '48',
      caption: 'Vintage granny square shoulder tote bag. Hand-joined with over 15 individual floral squares 🧶'
    },
    {
      id: 'post-3',
      image: '/images/crochet_top.jpg',
      likes: '920',
      comments: '83',
      caption: 'Custom-fit crochet halter crop top with adjustable lace-up back! Made to measure 💖'
    },
    {
      id: 'post-4',
      image: '/images/amigurumi.jpg',
      likes: '630',
      comments: '54',
      caption: 'Squishy amigurumi desk buddies! Knitted with the softest chenille velvet yarn 🧸'
    }
  ];

  return (
    <section id="instagram" className="section-padding instagram-section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge" style={{ borderColor: '#F58529', background: 'rgba(245, 133, 41, 0.08)' }}>
            <InstagramIcon size={14} color="#D62976" />
            <span style={{ color: '#D62976' }}>Join Our Community</span>
          </div>
          <h2 className="section-title">
            Follow Us On <span className="signature">Instagram</span>
          </h2>
          <p className="section-subtitle">
            Watch satisfying crochet process reels, yarn hauls, new design drops, and order directly on our official page.
          </p>
        </div>

        {/* Instagram Profile Banner */}
        <div className="ig-profile-card">
          <div className="ig-profile-info">
            <div className="ig-avatar-ring">
              <div className="ig-avatar-inner">
                <span>Z</span>
              </div>
            </div>

            <div>
              <div className="ig-handle-text">
                <span>{brandConfig.instagramHandle}</span>
                <CheckCircle size={17} color="#208BFE" fill="#208BFE" />
              </div>
              <p className="ig-bio-text">
                ✨ <strong>{brandConfig.name}</strong> • Bespoke Crochet & Hand-Knitted Art<br />
                🧶 Handcrafted with love by <strong>{brandConfig.creator}</strong><br />
                📦 Custom Wearables, Bouquets & Plushies • DM to Order
              </p>
            </div>
          </div>

          <div>
            <a
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-instagram btn-lg"
              style={{ width: '100%' }}
            >
              <InstagramIcon size={19} color="#FFF" />
              <span>Follow {brandConfig.instagramHandle}</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Instagram Feed Grid */}
        <div className="ig-grid">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-post-item"
              title={`View on ${brandConfig.instagramHandle}`}
            >
              <img src={post.image} alt={post.caption} loading="lazy" />
              <div className="ig-post-overlay">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Heart size={16} fill="#FFF" />
                  <span>{post.likes}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MessageCircle size={16} fill="#FFF" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <a
            href={brandConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '11px 24px' }}
          >
            <InstagramIcon size={16} color="var(--gold-dark)" />
            <span>Open {brandConfig.instagramHandle} on Instagram</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
