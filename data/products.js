// Hybits Product Catalogue Data
// Single source of truth for all product information

export const products = [
  // Dinnerware Category - Buffet Dinner Plate Subcategory
  {
    id: 'melamine-plate',
    category: 'Dinnerware',
    subcategory: 'Buffet Dinner Plate',
    title: 'Melamine Plate',
    material: 'Melamine',
    size: '10" (standard)',
    weight: '380g',
    finish: 'Matte',
    uses: ['Events', 'Catering', 'Outdoor dining'],
    hygiene: ['Dishwasher safe', 'Sanitisation'],
    image: '/images/melamine-plate.png',
    description: 'Durable melamine plate perfect for outdoor events and high-traffic catering. Lightweight yet sturdy.',
  },
  {
    id: 'ceramic-plate',
    category: 'Dinnerware',
    subcategory: 'Buffet Dinner Plate',
    title: 'Ceramic Plate',
    material: 'Ceramic',
    size: '10" (standard)',
    weight: '500g',
    finish: 'Glossy',
    uses: ['Fine dining', 'Restaurants', 'Events'],
    hygiene: ['Dishwasher safe', 'High-temp wash'],
    image: '/images/ceramic-plate.png',
    description: 'Elegant ceramic plate with premium finish, ideal for fine dining establishments and upscale events.',
  },
  {
    id: 'porcelain-plate',
    category: 'Dinnerware',
    subcategory: 'Buffet Dinner Plate',
    title: 'Porcelain Plate',
    material: 'Porcelain',
    size: '10" (standard)',
    weight: '480g',
    finish: 'Glossy',
    uses: ['Fine dining', 'Hotels', 'Events'],
    hygiene: ['Dishwasher safe', 'High-temp wash', 'Sanitisation'],
    image: '/images/porcelain-plate.png',
    description: 'Premium porcelain plate with refined elegance, perfect for luxury dining experiences.',
  },
  {
    id: 'stainless-steel-plate',
    category: 'Dinnerware',
    subcategory: 'Buffet Dinner Plate',
    title: 'Stainless Steel Plate',
    material: 'Stainless Steel',
    size: '10" (standard)',
    weight: '350g',
    finish: 'Brushed',
    uses: ['Industrial catering', 'Events', 'Outdoor dining'],
    hygiene: ['High-temp wash', 'Sanitisation', 'Sterilisation'],
    image: '/images/stainless-steel-plate.png',
    description: 'Robust stainless steel plate built for durability and easy maintenance in high-volume settings.',
  },
  {
    id: 'quarter-plate',
    category: 'Dinnerware',
    title: 'Quarter Plate',
    material: 'Ceramic / Porcelain / Melamine',
    size: '6" (quarter)',
    weight: '200g',
    finish: 'Glossy',
    uses: ['Side dishes', 'Desserts', 'Appetizers'],
    hygiene: ['Dishwasher safe', 'Sanitisation'],
    image: '/images/quarter-plate.png',
    description: 'Compact quarter plate ideal for side dishes, desserts, and appetizers. Versatile and elegant.',
  },
  {
    id: 'chat-plate',
    category: 'Dinnerware',
    title: 'Chat Plate',
    material: 'Ceramic / Melamine',
    size: '5", 6", 7"',
    weight: '120g, 150g, 180g',
    finish: 'Glossy',
    uses: ['Snacks', 'Street food', 'Appetizers'],
    hygiene: ['Dishwasher safe', 'Sanitisation'],
    image: '/images/chat-plate.png',
    description: 'Chat plate perfect for snacks, street food, and appetizers. Available in 5", 6", and 7" sizes. Compact and practical.',
    sizeOptions: ['5"', '6"', '7"'],
  },
  {
    id: 'ss-thali-5-compartment',
    category: 'Dinnerware',
    title: 'SS Thali – 5 Compartment',
    material: 'Food Grade Stainless Steel',
    size: 'Standard',
    weight: 'Approx. 450–550 g',
    finish: 'Mirror Finish',
    uses: [
      'Hotels & Restaurants',
      'Hostels & Canteens',
      'Institutional Dining',
      'Home Use',
    ],
    hygiene: [
      'Rust resistant',
      'Easy to clean',
      'Food-safe stainless steel',
      'Long-lasting durability',
    ],
    image: '/images/ss-thali-5-compartment.png',
    description:
      'Premium stainless steel 5-compartment thali designed for hygienic and organized meal serving. Ideal for hotels, hostels, canteens, and institutional dining.',
  },
  {
    id: 'melamine-thali-5-compartment',
    category: 'Dinnerware',
    title: 'Melamine Thali – 5 Compartment',
    material: 'High Quality Melamine',
    size: 'Standard',
    weight: 'Lightweight',
    finish: 'Matte / Glossy',
    uses: [
      'Catering Services',
      'Schools & Colleges',
      'Office Cafeterias',
      'Bulk Dining',
    ],
    hygiene: [
      'Break resistant',
      'Easy maintenance',
      'Stain resistant',
      'Food-safe material',
    ],
    image: '/images/melamine-thali-5-compartment.png',
    description:
      'Durable and lightweight melamine 5-compartment thali suitable for repeated use in catering, cafeterias, and institutional food services.',
  },
  
  // Bowls Category
  {
    id: 'soup-bowl',
    category: 'Bowls',
    title: 'Soup Bowl',
    material: 'Ceramic / Porcelain',
    size: '8 oz capacity',
    weight: '280g',
    finish: 'Glossy',
    uses: ['Soups', 'Stews', 'Hot beverages'],
    hygiene: ['Dishwasher safe', 'High-temp wash'],
    image: '/images/soup-bowl.png',
    description: 'Comfortable soup bowl designed to keep contents warm. Perfect for soups, stews, and hot dishes.',
  },
  {
    id: 'sambar-bowl',
    category: 'Bowls',
    title: 'Sambar Bowl',
    material: 'Stainless Steel / Ceramic',
    size: '6 oz capacity',
    weight: '220g',
    finish: 'Glossy / Brushed',
    uses: ['Sambar', 'Curries', 'Side dishes'],
    hygiene: ['Dishwasher safe', 'Sanitisation'],
    image: '/images/sambar-bowl.png',
    description: 'Traditional sambar bowl with optimal capacity for curries and side dishes. Available in multiple materials.',
  },
  {
    id: 'dessert-bowl',
    category: 'Bowls',
    title: 'Dessert Bowl',
    material: 'Ceramic / Glass',
    size: '4 oz capacity',
    weight: '150g',
    finish: 'Glossy',
    uses: ['Desserts', 'Ice cream', 'Fruits'],
    hygiene: ['Dishwasher safe', 'Sanitisation'],
    image: '/images/dessert-bowl.png',
    description: 'Elegant dessert bowl perfect for serving sweets, ice cream, and fruits. Delicate and refined.',
  },
  
  // Glassware Category
  {
    id: 'juice-glass',
    category: 'Glassware',
    title: 'Juice / Welcome Drink Glass',
    material: 'Glass',
    size: '250ml',
    weight: '180g',
    finish: 'Clear',
    uses: ['Juices', 'Welcome drinks', 'Beverages'],
    hygiene: ['Dishwasher safe', 'Sanitisation'],
    image: '/images/juice-glass.png',
    description: 'Crystal clear juice glass perfect for welcome drinks and fresh juices. Elegant and practical.',
  },
  {
    id: 'water-glass',
    category: 'Glassware',
    title: 'Water Glass',
    material: 'Glass',
    size: '300ml',
    weight: '200g',
    finish: 'Clear',
    uses: ['Water', 'Beverages', 'Dining'],
    hygiene: ['Dishwasher safe', 'Sanitisation'],
    image: '/images/water-glass.png',
    description: 'Classic water glass with generous capacity. Essential for any dining setup.',
  },
  {
    id: 'regular-glass',
    category: 'Glassware',
    title: 'Regular Glass',
    material: 'Glass',
    size: '250ml',
    weight: '180g',
    finish: 'Clear',
    uses: ['Beverages', 'Dining', 'Events'],
    hygiene: ['Dishwasher safe', 'Sanitisation'],
    image: '/images/regular-glass.png',
    description: 'Premium regular glass perfect for beverages and dining. Clear and elegant design.',
  },
  {
    id: 'ss-glass',
    category: 'Glassware',
    title: 'Stainless Steel Glass',
    material: 'Stainless Steel',
    size: '250ml',
    weight: '120g',
    finish: 'Brushed',
    uses: ['Outdoor events', 'Industrial catering', 'Durable use'],
    hygiene: ['High-temp wash', 'Sanitisation', 'Sterilisation'],
    image: '/images/ss-glass.png',
    description: 'Durable stainless steel glass perfect for outdoor events and high-traffic environments.',
  },
  
  // Tea & Coffee Category
  {
    id: 'tea-coffee-glass',
    category: 'Tea & Coffee',
    title: 'Tea / Coffee Glass',
    material: 'Glass',
    size: '200ml',
    weight: '150g',
    finish: 'Clear',
    uses: ['Tea', 'Coffee', 'Hot beverages'],
    hygiene: ['Dishwasher safe', 'Sanitisation'],
    image: '/images/tea-coffee-glass.png',
    description: 'Traditional tea and coffee glass perfect for serving hot beverages. Classic design with modern durability.',
  },
  {
    id: 'cup-saucer-set',
    category: 'Tea & Coffee',
    title: 'Cup & Saucer Set',
    material: 'Ceramic / Porcelain',
    size: '200ml cup',
    weight: '350g (set)',
    finish: 'Glossy',
    uses: ['Tea', 'Coffee', 'Fine dining'],
    hygiene: ['Dishwasher safe', 'High-temp wash'],
    image: '/images/cup-saucer-set.png',
    description: 'Elegant cup and saucer set ideal for formal tea and coffee service. Premium finish and design.',
  },
  
  // Cutlery Category
  {
    id: 'dinner-spoon',
    category: 'Cutlery',
    title: 'Dinner Spoon',
    material: 'Stainless Steel',
    size: 'Standard',
    weight: '25g',
    finish: 'Polished',
    uses: ['Main courses', 'Dining', 'Events'],
    hygiene: ['Dishwasher safe', 'Sanitisation', 'Sterilisation'],
    image: '/images/dinner-spoon.png',
    description: 'Standard dinner spoon with polished finish. Essential cutlery for any dining setup.',
  },
  {
    id: 'fork',
    category: 'Cutlery',
    title: 'Fork',
    material: 'Stainless Steel',
    size: 'Standard',
    weight: '22g',
    finish: 'Polished',
    uses: ['Main courses', 'Dining', 'Events'],
    hygiene: ['Dishwasher safe', 'Sanitisation', 'Sterilisation'],
    image: '/images/fork.png',
    description: 'Premium fork with polished finish. Durable and elegant for all dining occasions.',
  },
  {
    id: 'soup-spoon',
    category: 'Cutlery',
    title: 'Soup Spoon',
    material: 'Stainless Steel',
    size: 'Large',
    weight: '28g',
    finish: 'Polished',
    uses: ['Soups', 'Stews', 'Dining'],
    hygiene: ['Dishwasher safe', 'Sanitisation', 'Sterilisation'],
    image: '/images/soup-spoon.png',
    description: 'Large soup spoon designed for comfortable consumption of soups and stews.',
  },
  {
    id: 'baby-spoon',
    category: 'Cutlery',
    title: 'Baby Spoon',
    material: 'Stainless Steel',
    size: 'Small',
    weight: '12g',
    finish: 'Polished',
    uses: ['Baby food', 'Small portions', 'Desserts'],
    hygiene: ['Dishwasher safe', 'Sanitisation', 'Sterilisation'],
    image: '/images/baby-spoon.png',
    description: 'Small baby spoon perfect for feeding infants and serving small portions. Safe and hygienic.',
  },
];

// Helper function to get product by slug
export function getProductBySlug(slug) {
  return products.find((product) => product.id === slug);
}

// Helper function to get products by category
export function getProductsByCategory(category) {
  if (!category || category === 'All') return products;
  return products.filter((product) => product.category === category);
}

// Helper function to get products by subcategory
export function getProductsBySubcategory(subcategory) {
  if (!subcategory) return products;
  return products.filter((product) => product.subcategory === subcategory);
}

// Get all unique categories
export function getCategories() {
  return ['All', ...new Set(products.map((product) => product.category))];
}

// Get all unique subcategories (optional field)
export function getSubcategories() {
  return [...new Set(products.map((product) => product.subcategory).filter(Boolean))];
}

