import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { ShieldAlert, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react';

interface PolicySectionProps {
  onOpenFullPolicy: () => void;
}

export const PolicySection: React.FC<PolicySectionProps> = ({ onOpenFullPolicy }) => {
  return (
    <section id="policy" className="section-padding" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge" style={{ borderColor: 'var(--gold-primary)', background: '#FFF0D6' }}>
            <ShieldAlert size={14} color="var(--gold-dark)" />
            <span style={{ color: 'var(--gold-dark)' }}>Transparency & Trust</span>
          </div>
          <h2 className="section-title">
            Order & Non-Cancellation <span className="signature">Policy</span>
          </h2>
          <p className="section-subtitle">
            Because every single Zariya crochet piece is hand-knitted upon order according to your custom colors and sizing, please review our binding order confirmation terms.
          </p>
        </div>

        {/* Policy Highlight Box */}
        <div className="policy-banner-box">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginBottom: '14px' }}>
            <div className="policy-header-badge">
              <Lock size={14} />
              <span>Final & Binding Commitment</span>
            </div>

            <button
              onClick={onOpenFullPolicy}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.8rem' }}
            >
              <span>View Full Terms & FAQs</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Core Rule Alert */}
          <div className="policy-core-alert">
            ⚠️ <strong>{brandConfig.policy.coreRule}</strong>
          </div>

          <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
            {brandConfig.policy.description}
          </p>

          {/* Key Bullet points */}
          <div className="policy-bullets-grid">
            {brandConfig.policy.bulletPoints.slice(0, 4).map((pt, i) => (
              <div key={i} className="policy-bullet-item">
                <CheckCircle2 size={16} />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          {/* Bottom reaffirmation */}
          <div
            style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
              fontSize: '0.825rem',
              color: 'var(--text-muted)'
            }}
          >
            <span>🧶 Hand-knitted with precision & love by Deeya. We guarantee 100% premium quality craftsmanship.</span>
            <button
              onClick={onOpenFullPolicy}
              style={{ color: 'var(--gold-dark)', fontWeight: 700, textDecoration: 'underline', cursor: 'pointer' }}
            >
              Read Detailed FAQs →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
