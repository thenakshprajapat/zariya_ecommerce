import { Product } from '../data/products';
import { Star, Eye, Bookmark, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { getAssetUrl } from '../data/brandConfig';

interface ProductCardProps {
  product: Product;
  isSaved: boolean;
  onToggleSave: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onCopyCode: (code: string) => void;
  copiedCode: string | null;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isSaved,
  onToggleSave,
  onQuickView,
  onCopyCode,
  copiedCode
}) => {
  const isCopied = copiedCode === product.code;

  return (
    <article className="product-card" id={product.id}>
      {/* Image Container */}
      <div className="product-image-box">
        <img
          src={getAssetUrl(product.image)}
          alt={product.name}
          loading="lazy"
        />


        {/* Badge */}
        {product.badge && (
          <span className="product-tag-badge">{product.badge}</span>
        )}

        {/* Product Code Pill with 1-Click Copy */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCopyCode(product.code);
          }}
          className="product-code-pill"
          title="Click to copy product code for Instagram DM"
          style={{ cursor: 'pointer', border: 'none' }}
        >
          {isCopied ? 'Copied ✓' : product.code}
        </button>

        {/* Quick View Button */}
        <button
          onClick={() => onQuickView(product)}
          className="quick-view-overlay-btn"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye size={15} />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Content */}
      <div className="product-info">
        <span className="product-cat">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>

        <div className="product-rating-row">
          <div className="stars-wrap">
            <Star size={13} fill="#F5A623" color="#F5A623" />
            <span style={{ fontWeight: 700, color: 'var(--text-main)', marginLeft: '4px' }}>
              {product.rating}
            </span>
          </div>
          <span>({product.reviewsCount} reviews)</span>
        </div>

        <p style={{ fontSize: '0.825rem', color: 'var(--text-body)', marginBottom: '12px', lineHeight: '1.45' }}>
          {product.shortDesc}
        </p>

        {/* Custom Price on DM Pill (No numerical price) */}
        <div className="product-pricing">
          <div className="price-on-request-pill">
            <Sparkles size={12} />
            <span>Custom Sizing • DM for Price</span>
          </div>
        </div>

        {/* Action Row */}
        <div className="product-actions-bar">
          <button
            onClick={() => onQuickView(product)}
            className="btn btn-primary btn-sm"
            style={{ width: '100%' }}
          >
            <InstagramIcon size={14} color="#FFF" />
            <span>Order on IG</span>
          </button>

          <button
            onClick={() => onToggleSave(product)}
            className="btn btn-secondary btn-sm"
            style={{
              padding: '8px 12px',
              backgroundColor: isSaved ? 'var(--gold-subtle)' : undefined,
              borderColor: isSaved ? 'var(--gold-primary)' : undefined,
              color: isSaved ? 'var(--gold-dark)' : undefined
            }}
            title={isSaved ? "Saved to DM List" : "Save for DM List"}
            aria-label="Save product to DM list"
          >
            <Bookmark size={15} fill={isSaved ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </article>
  );
};
