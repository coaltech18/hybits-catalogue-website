'use client';

import Link from 'next/link';
import PlaceholderImage from './PlaceholderImage';

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/catalogue/${product.id}`}
      className="group block bg-white rounded-xl shadow-sm transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
      aria-label={`View ${product.title} details`}
    >
      <div className="w-full h-40 bg-[#FCFAF4] rounded-t-xl flex items-center justify-center p-2 overflow-hidden">
        <PlaceholderImage
          slug={product.id}
          alt={product.title}
          width={400}
          height={160}
          className="w-full h-40 object-contain"
        />
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="inline-block px-3 py-1.5 text-xs font-medium bg-[#E3F7EF] text-[#1A382E] rounded-md">
            {product.category}
          </span>
          {product.subcategory && (
            <span className="inline-block px-3 py-1.5 text-xs font-medium bg-[#E3F7EF] text-[#1A382E] rounded-md">
              {product.subcategory}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-hybits-dark mb-2 group-hover:text-hybits-green transition-colors duration-200">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600">{product.material}</p>
      </div>
    </Link>
  );
}

