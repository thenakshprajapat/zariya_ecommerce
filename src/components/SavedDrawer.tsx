import React from 'react';
import { Product } from '../data/products';
import { brandConfig, getAssetUrl } from '../data/brandConfig';
import { X, Trash2, Bookmark, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import confetti from 'canvas-confetti';

interface SavedDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProducts: Product[];
  onRemove: (product: Product) => void;
  onClear: () => void;
  onShowToast: (msg: string) => void;
}

export const SavedDrawer: React.FC<SavedDrawerProps> = ({
  isOpen,
  onClose,
  savedProducts,
  onRemove,
  onClear,
  onShowToast
}) => {
  if (!isOpen) return null;

  const generatedDmText = `Hi Deeya & Zariya! ✨
I saved these crochet pieces from your website that I'd like to order:

${savedProducts.map((p, i) => `${i + 1}. ${p.name} (${p.code})`).join('\n')}

Could you please share the pricing, yarn options, and size details? Thank you!`;

  const handleCopyAndDM = () => {
    if (savedProducts.length === 0) return;
    navigator.clipboard.writeText(generatedDmText);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    onShowToast(`Saved crochet items list copied! Opening Instagram...`);
    setTimeout(() => {
      window.open(brandConfig.instagramUrl, '_blank');
    }, 600);
  };

  return (
    <div className="mobile-drawer-overlay" onClick={onClose}>
      <div
        className="mobile-drawer"
        style={{ maxWidth: '400px', width: '88%' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bookmark size={18} color="var(--gold-dark)" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Saved for DM ({savedProducts.length})
              </h3>
            </div>
            <button onClick={onClose} className="modal-close-btn" style={{ position: 'static', width: '30px', height: '30px' }}>
              <X size={16} />
            </button>
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--text-body)', marginTop: '10px' }}>
            Bookmarked crochet pieces. You can copy the combined codes directly into your Instagram message!
          </p>

          {/* Items List */}
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '52vh', overflowY: 'auto' }}>
            {savedProducts.length > 0 ? (
              savedProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 10px',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <img
                    src={getAssetUrl(product.image)}
                    alt={product.name}
                    style={{ width: '48px', height: '48px', borderRadius: '6px', objectFit: 'cover' }}
                  />
                  <div style={{ flexGrow: 1, minWidth: 0 }}>
                    <h4 style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {product.name}
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                      <span style={{ fontSize: '0.725rem', fontFamily: 'monospace', color: 'var(--gold-dark)', fontWeight: 600 }}>
                        {product.code}
                      </span>
                      <span style={{ fontSize: '0.725rem', color: 'var(--teal-brand)', fontWeight: 600 }}>
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(product)}
                    style={{ padding: '6px', color: 'var(--text-muted)' }}
                    title="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 14px', color: 'var(--text-muted)' }}>
                <Bookmark size={32} style={{ margin: '0 auto 10px auto', opacity: 0.4 }} />
                <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Your saved list is empty</p>
                <p style={{ fontSize: '0.775rem', marginTop: '4px' }}>Click the bookmark icon on any crochet piece in the showcase to save it here!</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        {savedProducts.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '14px', borderTop: '1px solid var(--border-light)' }}>
            <button
              onClick={handleCopyAndDM}
              className="btn btn-primary"
              style={{ width: '100%', padding: '12px' }}
            >
              <InstagramIcon size={16} color="#FFF" />
              <span>Copy All & DM on Instagram</span>
            </button>

            <button
              onClick={onClear}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%', color: 'var(--text-muted)' }}
            >
              Clear Saved List
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
