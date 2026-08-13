import React, { useState } from 'react';
import { reviews } from '../data/reviews';
import { Star, CheckCircle2, MessageSquareHeart, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number>(0);

  const filteredReviews = filterRating === 0
    ? reviews
    : reviews.filter((r) => r.rating === filterRating);

  return (
    <section id="reviews" className="section-padding" style={{ background: 'var(--bg-pure)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquareHeart size={14} />
            <span>Customer Love</span>
          </div>
          <h2 className="section-title">
            Words of <span className="signature">Appreciation</span>
          </h2>
          <p className="section-subtitle">
            Every smile and heartfelt reaction fuels our passion. Read genuine feedback from our beloved clients across the country.
          </p>
        </div>

        {/* Rating Overview Summary Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #FFF9F0 0%, #FFFFFF 100%)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px 32px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--gold-dark)', lineHeight: 1 }}>
              4.9
            </div>
            <div>
              <div className="stars-wrap" style={{ marginBottom: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#F5A623" color="#F5A623" />
                ))}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', fontWeight: 600 }}>
                Over 300+ 5-Star Reviews on Instagram & Direct Orders
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Filter:</span>
            <button
              onClick={() => setFilterRating(0)}
              className={`btn btn-sm ${filterRating === 0 ? 'btn-primary' : 'btn-secondary'}`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilterRating(5)}
              className={`btn btn-sm ${filterRating === 5 ? 'btn-primary' : 'btn-secondary'}`}
            >
              5 Stars Only ★
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-card-header">
                <div className="reviewer-meta">
                  <div
                    className="reviewer-avatar"
                    style={{ backgroundColor: rev.avatarBg }}
                  >
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="reviewer-name">{rev.name}</h4>
                    <span className="reviewer-location">{rev.location} • {rev.date}</span>
                  </div>
                </div>

                <div className="stars-wrap">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#F5A623" color="#F5A623" />
                  ))}
                </div>
              </div>

              <p className="review-comment">"{rev.comment}"</p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
                <span className="review-product-badge">
                  <Sparkles size={12} />
                  <span>{rev.productName}</span>
                </span>

                {rev.verified && (
                  <span style={{ fontSize: '0.75rem', color: '#165B66', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                    <CheckCircle2 size={13} color="#165B66" />
                    <span>Verified Order</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
