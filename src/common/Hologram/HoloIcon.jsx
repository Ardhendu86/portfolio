import React from 'react';

/**
 * HoloIcon Component
 * Renders an icon/symbol with holographic projection effects, scanlines, glow, and optional HUD corner brackets & pedestal.
 *
 * @param {string} icon - Bootstrap icon class name (e.g. 'bi-code-slash') or symbol character (e.g. '⚛', '☕', '⚡')
 * @param {string} size - 'sm' | 'md' | 'lg' | 'xl' | 'hero' (default: 'md')
 * @param {string} variant - 'cyan' | 'neon' | 'blue' | 'emerald' | 'amber' (default: 'cyan')
 * @param {boolean} showEmitter - Show 3D holographic emitter pedestal base
 * @param {boolean} showScanline - Show scanning laser beam
 * @param {boolean} showCorners - Show HUD corner targeting brackets
 * @param {boolean} showRings - Show orbital sci-fi rings
 * @param {string} className - Additional custom classes
 * @param {React.ReactNode} children - Optional custom inner elements (e.g. custom SVG)
 */
const HoloIcon = ({
  icon,
  size = 'md',
  variant = 'cyan',
  showEmitter = false,
  showScanline = true,
  showCorners = false,
  showRings = false,
  className = '',
  children,
  style = {}
}) => {
  const isBootstrapIcon = typeof icon === 'string' && icon.startsWith('bi-');
  const isCustomSymbol = typeof icon === 'string' && !icon.startsWith('bi-');

  return (
    <div
      className={`holo-icon-wrapper holo-icon-${size} holo-${variant} ${className}`}
      style={style}
    >
      {/* 3D Emitter Base */}
      {showEmitter && <div className="holo-emitter-base"></div>}

      {/* Orbital Sci-Fi Rings */}
      {showRings && (
        <>
          <div className="holo-orbital-ring"></div>
          <div className="holo-orbital-ring-reverse"></div>
        </>
      )}

      {/* HUD Corner Brackets */}
      {showCorners && (
        <>
          <div className="holo-hud-corner holo-hud-tl"></div>
          <div className="holo-hud-corner holo-hud-tr"></div>
          <div className="holo-hud-corner holo-hud-bl"></div>
          <div className="holo-hud-corner holo-hud-br"></div>
        </>
      )}

      {/* Hologram Projection Beam */}
      {showEmitter && <div className="holo-projection-beam"></div>}

      {/* Main Holographic Body */}
      <div className="holo-icon-body holo-glimmer">
        {/* Animated Scanline overlay */}
        {showScanline && <div className="holo-scanline"></div>}

        {/* Render Icon, Symbol or Children */}
        {children ? (
          children
        ) : isBootstrapIcon ? (
          <i className={`bi ${icon}`}></i>
        ) : isCustomSymbol ? (
          <span className="holo-glyph-symbol font-monospace fw-bold">{icon}</span>
        ) : null}
      </div>
    </div>
  );
};

export default HoloIcon;
