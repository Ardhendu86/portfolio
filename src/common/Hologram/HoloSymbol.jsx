import React from 'react';

/**
 * HoloSymbol Component
 * Floating futuristic holographic symbol badge with animated levitation, glow aura, and scanline.
 *
 * @param {string} symbol - Symbol or glyph (e.g. '⚛', '☕', '⚡', '◈', '</>')
 * @param {string} label - Optional text label (e.g. 'React.js', 'Spring Boot')
 * @param {string} variant - 'cyan' | 'neon' | 'emerald' | 'amber' (default: 'cyan')
 * @param {string} className - Additional CSS class names
 * @param {object} style - Inline styles (e.g. position coordinates)
 */
const HoloSymbol = ({
  symbol,
  label,
  variant = 'cyan',
  className = '',
  style = {}
}) => {
  return (
    <div className={`holo-symbol-float ${variant} ${className}`} style={style}>
      {symbol && <span className="me-1 fs-6">{symbol}</span>}
      {label && <span>{label}</span>}
    </div>
  );
};

export default HoloSymbol;
