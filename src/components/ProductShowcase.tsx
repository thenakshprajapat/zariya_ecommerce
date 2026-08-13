import React, { useState, useMemo } from 'react';
import { products, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { Sparkles, Search } from 'lucide-react';

import { BookOpen, Download } from 'lucide-react';
import { getAssetUrl } from '../data/brandConfig';

interface ProductShowcaseProps {
  onQuickView: (product: Product) => void;
  savedProducts: Product[];
  onToggleSave: (product: Product) => void;
  onCopyCode: (code: string) => void;
  copiedCode: string | null;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onQuickView,
  savedProducts,
  onToggleSave,
  onCopyCode,
  copiedCode
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const query = searchQuery.toLowerCase();
    return products.filter((p) => {
      return (
        p.name.toLowerCase().includes(query) ||
        p.code.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  const savedIds = useMemo(() => new Set(savedProducts.map((p) => p.id)), [savedProducts]);

  return (
    <section id="collection" className="section-padding" style={{ backgroundColor: 'var(--bg-pure)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Handmade Studio</span>
          </div>
          <h2 className="section-title">
            Our <span className="signature">Collection</span>
          </h2>
          <p className="section-subtitle">
            Explore our handcrafted crochet pieces — from everlasting floral bouquets and vintage granny square tote bags to custom-fit wearables and plushies. Hand-knitted to order with premium milk cotton yarn.
          </p>
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '640px', margin: '0 auto 24px auto', width: '100%' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search by name, code (#ZAR-CR01), or design..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="dm-input"
              style={{
                paddingLeft: '42px',
                paddingRight: '16px',
                borderRadius: 'var(--radius-pill)',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
            <Search
              size={17}
              color="var(--gold-dark)"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
            />
          </div>
        </div>

        {/* PDF Catalogue Download Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--teal-subtle) 0%, rgba(22, 91, 102, 0.03) 100%)',
            border: '1px solid rgba(22, 91, 102, 0.15)',
            borderRadius: 'var(--radius-md)',
            padding: '16px 20px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--teal-brand)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFF',
                flexShrink: 0
              }}
            >
              <BookOpen size={18} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.925rem', fontWeight: 700, color: 'var(--teal-dark)', margin: 0 }}>
                Looking for our full catalog?
              </h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-body)', margin: '2px 0 0 0' }}>
                Download our offline studio catalog containing all 50+ premium designs and colorways.
              </p>
            </div>
          </div>
          <a
            href={getAssetUrl('/zariya_catalogue.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ borderColor: 'var(--teal-brand)', color: 'var(--teal-brand)', backgroundColor: '#FFF' }}
          >
            <Download size={14} />
            <span>Download Catalog (PDF)</span>
          </a>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (

          <div className="products-grid">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                isSaved={savedIds.has(prod.id)}
                onToggleSave={onToggleSave}
                onQuickView={onQuickView}
                onCopyCode={onCopyCode}
                copiedCode={copiedCode}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '48px 16px',
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--border-medium)',
              maxWidth: '540px',
              margin: '0 auto'
            }}
          >
            <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
              No crochet creations found matching "{searchQuery}"
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Try searching for something else or view all pieces.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="btn btn-primary btn-sm"
            >
              View Full Collection
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
