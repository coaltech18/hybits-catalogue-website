'use client';

import { useState, useEffect } from 'react';

/**
 * PlaceholderImage Component
 * 
 * Handles product image loading with graceful fallback.
 * 
 * Behavior:
 * 1. Attempts to load image from /public/images/[slug].png (tries PNG first)
 * 2. Falls back to /public/images/[slug].jpg if PNG not found
 * 3. Falls back to /public/images/[slug].jpeg if JPG not found
 * 4. If all missing → shows premium placeholder UI
 * 5. Never throws errors or breaks UI
 * 
 * @param {string} slug - Product slug (product.id from data/products.js)
 * @param {string} alt - Alt text for accessibility
 * @param {number} width - Image width (default: 400)
 * @param {number} height - Image height (default: 400)
 * @param {string} className - Additional CSS classes
 */
export default function PlaceholderImage({ slug, alt, width = 400, height = 400, className = '' }) {
  const [imageError, setImageError] = useState(false);
  const [currentFormat, setCurrentFormat] = useState('png');
  
  // Formats to try in order: PNG (most common), then JPEG, then JPG
  // Note: JPEG and JPG are the same format, but some files use .jpeg extension
  const formats = ['png', 'jpeg', 'jpg'];
  const currentFormatIndex = formats.indexOf(currentFormat);
  
  // Construct image path: /images/[slug].{format}
  const imagePath = `/images/${slug}.${currentFormat}`;

  // Premium placeholder component - shown when image is missing
  const PremiumPlaceholder = () => (
    <div
      className={`w-full bg-hybits-green-20 rounded-md border border-[#C9C9C9] shadow-inner flex flex-col items-center justify-center ${className}`}
      style={{ width: '100%', height, minHeight: height }}
      aria-label={alt || 'Image placeholder'}
      role="img"
    >
      <svg
        className="w-16 h-16 text-hybits-grey mb-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="text-sm text-hybits-grey font-medium">Image coming soon</span>
    </div>
  );

  // Handle image load error gracefully - try next format
  const handleImageError = () => {
    const nextIndex = currentFormatIndex + 1;
    
    // If there's a next format to try
    if (nextIndex < formats.length) {
      setCurrentFormat(formats[nextIndex]);
      setImageError(false);
    } else {
      // All formats failed
      setImageError(true);
    }
  };

  // Reset when slug changes
  useEffect(() => {
    setCurrentFormat('png');
    setImageError(false);
  }, [slug]);

  // Show placeholder if all formats failed
  if (imageError) {
    return <PremiumPlaceholder />;
  }

  // Attempt to load the actual image
  return (
    <img
      src={imagePath}
      alt={alt || 'Product image'}
      className={`w-full h-full object-contain object-center block rounded-md ${className}`}
      style={{ height, width: '100%' }}
      onError={handleImageError}
      onLoad={() => setImageError(false)}
      loading="lazy"
      decoding="async"
      key={`${slug}-${currentFormat}`} // Force re-render when format changes
    />
  );
}
