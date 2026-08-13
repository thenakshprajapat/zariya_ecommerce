import React, { useState } from 'react';
import { products } from '../data/products';
import { brandConfig } from '../data/brandConfig';
import { Camera, Send, PackageCheck, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import confetti from 'canvas-confetti';

interface HowToOrderProps {
  onShowToast: (msg: string) => void;
}

export const HowToOrder: React.FC<HowToOrderProps> = ({ onShowToast }) => {
  const [selectedProductCode, setSelectedProductCode] = useState(products[0]?.code || '#ZAR-CR01');
  const [customText, setCustomText] = useState('');
  const [copied, setCopied] = useState(false);

  const selectedProduct = products.find(p => p.code === selectedProductCode) || products[0];

  const generatedDm = `Hi Deeya & Zariya! ✨
I'd love to order this crochet piece from your website:
🧶 Product: ${selectedProduct.name} (${selectedProduct.code})
${customText.trim() ? `✍️ Custom Details (Size/Colors): ${customText.trim()}\n` : ''}
Please let me know the pricing, yarn options, and how to confirm. Thanks!`;

  const handleGenerateAndOpenIG = () => {
    navigator.clipboard.writeText(generatedDm);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#EAA023', '#165B66', '#D9822B', '#FFFFFF']
    });
    onShowToast(`DM message copied! Opening ${brandConfig.instagramHandle}...`);
    setTimeout(() => setCopied(false), 3000);
    setTimeout(() => {
      window.open(brandConfig.instagramUrl, '_blank');
    }, 600);
  };

  return (
    <section id="how-to-order" className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Effortless 3 Steps</span>
          </div>
          <h2 className="section-title">
            How To <span className="signature">Order</span>
          </h2>
          <p className="section-subtitle">
            Ordering your bespoke hand-crocheted piece is simple, personalized, and guided. Follow these 3 easy steps to start your custom order.
          </p>
        </div>

        {/* 3 Step Cards Container */}
        <div className="order-steps-container">
          <div className="order-steps-grid">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-number-badge">1</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Camera size={18} color="var(--gold-dark)" />
                <h3 className="step-title" style={{ margin: 0 }}>Select or Screenshot</h3>
              </div>
              <p className="step-desc">
                Browse our website gallery. Choose your favorite crochet design, copy the product code (e.g. <code>#ZAR-CR01</code>), or take a screenshot from the website.
              </p>
              <div className="step-highlight-box">
                <span>📸 Keep screenshot or item code ready</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-number-badge">2</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Send size={18} color="var(--gold-dark)" />
                <h3 className="step-title" style={{ margin: 0 }}>Share via Instagram DM</h3>
              </div>
              <p className="step-desc">
                Go to our Instagram <strong style={{ color: 'var(--teal-brand)' }}>{brandConfig.instagramHandle}</strong>. Send us a DM with your screenshot/code, preferred yarn colors, and custom size measurements.
              </p>
              <div className="step-highlight-box">
                <span>💬 Quick reply & custom price quote</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-number-badge">3</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <PackageCheck size={18} color="var(--gold-dark)" />
                <h3 className="step-title" style={{ margin: 0 }}>Confirm & Handcraft</h3>
              </div>
              <p className="step-desc">
                Once payment is confirmed, Deeya starts hand-knitting your bespoke piece stitch-by-stitch. Carefully packaged and dispatched straight to your address.
              </p>
              <div className="step-highlight-box">
                <span>🧶 Handcrafted with love & tracked dispatch</span>
              </div>
            </div>
          </div>

          {/* Interactive DM Order Builder Tool */}
          <div className="dm-helper-box">
            <h4 className="dm-helper-title">
              <Sparkles size={16} color="var(--gold-primary)" />
              <span>Interactive Instant DM Generator</span>
            </h4>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-body)' }}>
              Select a piece below, write your custom color/sizing details, and click to automatically generate and copy your message before hopping onto Instagram!
            </p>

            <div className="dm-builder-grid">
              {/* Product Select */}
              <div>
                <label style={{ fontSize: '0.785rem', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>
                  Select Crochet Design:
                </label>
                <select
                  value={selectedProductCode}
                  onChange={(e) => setSelectedProductCode(e.target.value)}
                  className="dm-input"
                  style={{ cursor: 'pointer' }}
                >
                  {products.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.code} - {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Custom note */}
              <div>
                <label style={{ fontSize: '0.785rem', fontWeight: 600, color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>
                  Custom Details (Size / Colors):
                </label>
                <input
                  type="text"
                  placeholder="e.g. Lavender & Cream colors, size S..."
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="dm-input"
                />
              </div>

              {/* Button */}
              <div style={{ alignSelf: 'flex-end' }}>
                <button
                  onClick={handleGenerateAndOpenIG}
                  className="btn btn-instagram"
                  style={{ width: '100%', padding: '11px 20px' }}
                >
                  <InstagramIcon size={16} color="#FFF" />
                  <span>{copied ? 'Copied! Opening IG...' : 'Copy & Open IG DM'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
