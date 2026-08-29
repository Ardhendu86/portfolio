import React from 'react';
import HoloSymbol from './HoloSymbol';

/**
 * HoloProjector Component
 * Wraps content (e.g. Profile Image, Visual Demo) in a futuristic 3D holographic projection field.
 *
 * @param {React.ReactNode} children - The content inside the projection field
 * @param {Array} orbitSymbols - Optional array of floating symbols around the projector
 * @param {string} className - Additional CSS class names
 */
const HoloProjector = ({
  children,
  orbitSymbols = [
    { symbol: '⚛', label: 'React.js', variant: 'cyan', style: { top: '-15px', left: '-20px', animationDelay: '0s' } },
    { symbol: '☕', label: 'Java', variant: 'neon', style: { top: '35%', right: '-35px', animationDelay: '1.2s' } },
    { symbol: '⚡', label: 'Spring Boot', variant: 'emerald', style: { bottom: '25px', left: '-30px', animationDelay: '2.4s' } },
    { symbol: '🗄️', label: 'SQL DB', variant: 'cyan', style: { bottom: '-15px', right: '15px', animationDelay: '0.8s' } },
  ],
  className = ''
}) => {
  return (
    <div className={`holo-projector-container ${className}`}>
      {/* 3D Base Pedestal Emitter */}
      <div className="holo-projector-pedestal"></div>

      {/* Floating Orbit Symbols */}
      {orbitSymbols && orbitSymbols.map((item, idx) => (
        <div key={idx} className="holo-orbit-tag" style={item.style}>
          <HoloSymbol
            symbol={item.symbol}
            label={item.label}
            variant={item.variant || 'cyan'}
          />
        </div>
      ))}

      {/* Hologram Projected Content Frame */}
      <div className="holo-projector-frame">
        {children}
      </div>
    </div>
  );
};

export default HoloProjector;
