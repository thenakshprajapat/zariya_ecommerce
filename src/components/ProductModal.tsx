import React, { useState } from 'react';
import { Product } from '../data/products';
import { brandConfig, getAssetUrl } from '../data/brandConfig';
import { X, Star, Copy, Sparkles, ShieldAlert, Camera, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import confetti from 'canvas-confetti';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onShowToast
}) => {
  const [copied, setCopied] = useState(false);
  const [customNote, setCustomNote] = useState('');

  if (!product) return null;

  const generatedDmText = `Hi Deeya & Zariya! ✨
I'm interested in ordering this handcrafted crochet piece:
🧶 Item: ${product.name}
🔖 Code: ${product.code}
${customNote.trim() ? `✍️ Custom Details (Size/Colors): ${customNote.trim()}\n` : ''}
Could you please share the price quote and timeline to confirm? Thank you!`;

  const handleCopyAndDM = () => {
    navigator.clipboard.writeText(generatedDmText);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#EAA023', '#165B66', '#D9822B', '#FFFFFF']
    });
    onShowToast(`Order template for ${product.code} copied! Opening ${brandConfig.instagramHandle}...`);
    setTimeout(() => setCopied(false), 3000);
    setTimeout(() => {
      window.open(brandConfig.instagramUrl, '_blank');
    }, 600);
  };

  const handleCopyOnly = () => {
    navigator.clipboard.writeText(generatedDmText);
    setCopied(true);
    onShowToast(`Order message copied to clipboard! Paste it into Instagram DM.`);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div
        className="modal-card animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close product details"
        >
          <X size={18} />
        </button>

        <div className="product-modal-grid">
          {/* Left: Product Image & Badges */}
          <div>
            <div className="modal-img-wrapper">
              <img
                src={getAssetUrl(product.image)}
                alt={product.name}
              />
            </div>


            {/* Screenshot guide helper */}
            <div
              style={{
                marginTop: '14px',
                padding: '10px 14px',
                background: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Camera size={18} color="var(--gold-dark)" style={{ flexShrink: 0 }} />
              <p style={{ fontSize: '0.785rem', color: 'var(--text-body)' }}>
                <strong>Screenshot Friendly:</strong> Capture a screenshot or copy code to DM on Instagram!
              </p>
            </div>
          </div>

          {/* Right: Detailed specs and order options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span className="product-cat">{product.category}</span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    background: 'var(--gold-subtle)',
                    color: 'var(--gold-dark)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}
                >
                  {product.code}
                </span>
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.25 }}>
                {product.name}
              </h2>
            </div>

            {/* Rating and Custom Quote Banner */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid var(--border-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div className="stars-wrap">
                  <Star size={15} fill="#F5A623" color="#F5A623" />
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{product.rating}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>({product.reviewsCount} reviews)</span>
              </div>
              <div className="price-on-request-pill">
                <Sparkles size={12} />
                <span>DM for Price Quote</span>
              </div>
            </div>

            {/* Full description */}
            <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
              {product.fullDesc}
            </p>

            {/* Dimensions and specs */}
            {product.dimensions && (
              <div style={{ fontSize: '0.825rem', color: 'var(--text-body)', background: 'var(--bg-surface)', padding: '8px 12px', borderRadius: 'var(--radius-sm)' }}>
                <strong>Dimensions / Sizing:</strong> {product.dimensions}
              </div>
            )}

            {/* Customization Options */}
            {product.customizationOptions.length > 0 && (
              <div>
                <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--teal-brand)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={13} />
                  <span>Customization Available:</span>
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {product.customizationOptions.map((opt, i) => (
                    <li key={i} style={{ fontSize: '0.825rem', color: 'var(--text-body)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={13} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Customization Note input */}
            <div style={{ marginTop: '2px' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>
                Your Custom Details (Size, Yarn Colors, Notes):
              </label>
              <input
                type="text"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="e.g. Size M, in pastel pink & cream..."
                className="dm-input"
                style={{ fontSize: '0.825rem' }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '6px' }}>
              <button
                onClick={handleCopyAndDM}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                <InstagramIcon size={17} color="#FFF" />
                <span>{copied ? 'Copied! Opening Instagram...' : 'Copy Details & DM on Instagram'}</span>
              </button>

              <button
                onClick={handleCopyOnly}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%' }}
              >
                <Copy size={14} />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Order Text Only'}</span>
              </button>
            </div>

            {/* Policy reminder */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.725rem', color: 'var(--text-muted)', background: '#FFF9F0', padding: '8px 10px', borderRadius: 'var(--radius-xs)', border: '1px solid #FFE0B2' }}>
              <ShieldAlert size={15} color="var(--gold-dark)" style={{ flexShrink: 0 }} />
              <span><strong>Policy:</strong> Hand-crocheted custom piece. Confirmed orders cannot be cancelled.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
