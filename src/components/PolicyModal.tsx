import React from 'react';
import { brandConfig } from '../data/brandConfig';
import { X, ShieldAlert, CheckCircle2, HelpCircle, FileText } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div
        className="modal-card animate-scale-up"
        style={{ maxWidth: '720px', padding: '32px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close policy">
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '20px' }}>
          <div className="section-badge" style={{ borderColor: 'var(--gold-primary)', background: '#FFF0D6' }}>
            <ShieldAlert size={13} color="var(--gold-dark)" />
            <span>Studio Guidelines</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>
            ZARIYA Crochet Order, Acceptance & Non-Cancellation Policy
          </h2>
        </div>

        {/* Core highlight */}
        <div className="policy-core-alert" style={{ marginBottom: '20px' }}>
          🛑 <strong>Strict No-Cancellation Rule:</strong> Once an order is confirmed on Instagram DM (@zariya_verse) and payment is received, the order is strictly final. There is no cancellation, refund, or return permitted. You must accept and receive the order upon arrival.
        </div>

        {/* Detailed Points */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={16} color="var(--gold-dark)" />
            <span>Detailed Terms of Service</span>
          </h3>

          {brandConfig.policy.bulletPoints.map((point, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: '1.5' }}>
              <CheckCircle2 size={15} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={16} color="var(--teal-brand)" />
            <span>Frequently Asked Policy Questions</span>
          </h3>

          {brandConfig.policy.faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: 'var(--bg-surface)',
                padding: '12px 16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)'
              }}
            >
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                {faq.q}
              </h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-body)', lineHeight: '1.45' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <button
            onClick={onClose}
            className="btn btn-primary"
            style={{ width: '100%', padding: '12px' }}
          >
            I Understand & Accept Terms
          </button>
        </div>
      </div>
    </div>
  );
};
