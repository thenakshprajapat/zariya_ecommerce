import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = true,
  variant = 'dark'
}) => {
  const emblemSizes = {
    sm: { width: '36px', height: '36px', fontSize: '1.3rem' },
    md: { width: '46px', height: '46px', fontSize: '1.7rem' },
    lg: { width: '64px', height: '64px', fontSize: '2.4rem' }
  };

  const textSizes = {
    sm: { main: '1.15rem', sub: '0.62rem' },
    md: { main: '1.35rem', sub: '0.68rem' },
    lg: { main: '1.85rem', sub: '0.85rem' }
  };

  return (
    <div className="zariya-logo-container">
      {/* Brand Teal Circle Emblem with Saffron Gold Cursive Script matching user's logo */}
      <div
        className="logo-circle-emblem"
        style={{
          width: emblemSizes[size].width,
          height: emblemSizes[size].height
        }}
        title="Zariya Brand Logo"
      >
        <span
          className="emblem-script"
          style={{ fontSize: emblemSizes[size].fontSize }}
        >
          Zariya
        </span>
      </div>

      <div className="logo-text-group">
        <span
          className="logo-main-brand"
          style={{
            fontSize: textSizes[size].main,
            color: variant === 'light' ? '#FFFFFF' : 'var(--text-main)'
          }}
        >
          ZARIYA
        </span>
        {showTagline && (
          <span
            className="logo-sub-tag"
            style={{ fontSize: textSizes[size].sub }}
          >
            Handcrafted Studio
          </span>
        )}
      </div>
    </div>
  );
};
