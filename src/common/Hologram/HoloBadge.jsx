import React from 'react';

/**
 * HoloBadge Component
 * Futuristic holographic chip/badge with pulsing status dot and scanline.
 *
 * @param {string} icon - Optional icon (e.g. 'bi-geo-alt-fill' or symbol '⚡')
 * @param {string} text - Text to display
 * @param {string} variant - 'cyan' | 'neon' | 'emerald' | 'amber'
 * @param {boolean} pulsing - Show pulsing status dot
 * @param {string} className - Additional CSS classes
 */
const HoloBadge = ({
  icon,
  text,
  variant = 'cyan',
  pulsing = true,
  className = '',
  style = {}
}) => {
  const isBootstrapIcon = typeof icon === 'string' && icon.startsWith('bi-');

  return (
    <div className={`holo-badge holo-${variant} ${className}`} style={style}>
      {pulsing && <span className="holo-badge-dot"></span>}
      {icon && (
        <span className="me-1">
          {isBootstrapIcon ? <i className={`bi ${icon}`}></i> : icon}
        </span>
      )}
      <span>{text}</span>
    </div>
  );
};

export default HoloBadge;
