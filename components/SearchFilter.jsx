'use client';

import { getCategories } from '@/data/products';

export default function SearchFilter({ 
  selectedCategory, 
  onCategoryChange, 
  searchQuery, 
  onSearchChange 
}) {
  const categories = getCategories();

  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-4">
      {/* Category Filter */}
      <div className="flex-1">
        <label
          htmlFor="category-filter"
          className="block text-sm font-medium text-hybits-dark mb-2"
        >
          Category
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-4 py-2 border border-[#C9C9C9] rounded-lg focus:ring-2 focus:ring-hybits-green focus:border-hybits-green bg-white text-hybits-dark"
          aria-label="Filter products by category"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Search Input */}
      <div className="flex-1">
        <label
          htmlFor="search-input"
          className="block text-sm font-medium text-hybits-dark mb-2"
        >
          Search Products
        </label>
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, material..."
          className="w-full px-4 py-2 border border-[#C9C9C9] rounded-lg focus:ring-2 focus:ring-hybits-green focus:border-hybits-green bg-white text-hybits-dark"
          aria-label="Search products"
        />
      </div>
    </div>
  );
}

