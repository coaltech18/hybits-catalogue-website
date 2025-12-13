'use client';

import { useState } from 'react';

export default function Logo({ className = '', showTagline = true, size = 'default', variant = 'dark' }) {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    small: { container: 'h-6', tagline: 'text-xs' },
    default: { container: 'h-8', tagline: 'text-sm' },
    large: { container: 'h-10', tagline: 'text-base' },
  };

  const sizes = sizeClasses[size];
  const taglineColor = variant === 'light' ? 'text-hybits-green' : 'text-hybits-green';
  const textColor = variant === 'light' ? 'text-[var(--hybits-surface)]' : 'text-hybits-dark';

  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Logo Image or Fallback Text */}
      {!imageError ? (
        <div className={`relative ${sizes.container} w-auto`} style={{ minWidth: '100px' }}>
          <img
            src="/images/hybits-logo.png"
            alt="Hybits"
            className={`${sizes.container} w-auto object-contain object-left`}
            onError={() => setImageError(true)}
            style={{ height: '100%', width: 'auto' }}
          />
        </div>
      ) : (
        <div className={`${sizes.container} flex items-center`}>
          <span className={`text-2xl font-bold ${textColor}`}>hybits</span>
        </div>
      )}
      
      {/* Tagline */}
      {showTagline && (
        <span className={`${sizes.tagline} ${taglineColor} font-medium mt-1`} style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 500 }}>
          Sterilised Dish
        </span>
      )}
    </div>
  );
}
