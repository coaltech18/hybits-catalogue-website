# Hybits Product Catalogue Website

A production-ready product catalogue web application for Hybits - Smart Dish Management Solutions, built with Next.js App Router and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
hybits-catalogue/
├── app/                    # Next.js App Router pages
│   ├── layout.jsx         # Root layout with Header/Footer
│   ├── globals.css        # Global styles and CSS variables
│   ├── page.jsx           # Home page
│   ├── catalogue/         # Catalogue pages
│   │   ├── page.jsx       # Product listing with filters
│   │   └── [slug]/        # Dynamic product detail pages
│   ├── api/               # API routes
│   │   └── export-pdf/    # PDF export endpoint
│   ├── sustainability/    # Sustainability page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Header.jsx         # Site header with navigation
│   ├── Footer.jsx         # Site footer
│   ├── ProductCard.jsx    # Product card component
│   ├── ProductGrid.jsx    # Responsive product grid
│   ├── CTAButton.jsx      # Call-to-action button
│   └── PlaceholderImage.jsx # Image placeholder component
├── data/                  # Data files
│   └── products.js        # Product data (23 products)
├── public/                # Static assets
│   └── images/            # Product images (placeholder images)
├── assets/                # Additional assets
│   └── ai-image-prompts.txt # AI image generation prompts
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Color Tokens

The application uses a consistent color palette defined in `app/globals.css`:

- `--hybits-dark`: #1A382E (Primary dark green)
- `--hybits-green`: #58B692 (Primary green)
- `--hybits-surface`: #FEFBF6 (Light surface)
- `--hybits-bg`: #FAFAFA (Background)
- `--hybits-grey`: #C9C9C9 (Grey)
- `--hybits-green-20`: rgba(88,182,146,0.2) (Green with 20% opacity)
- `--hybits-green-50`: rgba(88,182,146,0.5) (Green with 50% opacity)
- `--hybits-surface-70`: rgba(254,251,246,0.7) (Surface with 70% opacity)

### Button Styles

- **Primary**: Dark background (`bg-hybits-dark`) with light text
- **Secondary**: Outlined with green border (`border-hybits-green`) and dark text

**Important**: Never use `#58B692` background with white text. Use dark text on green backgrounds or dark backgrounds with light text.

## 📦 Product Data

All product data is stored in `data/products.js`. The file contains 23 product objects with the following structure:

```javascript
{
  id: 'product-slug',           // Used for routes and image filenames
  category: 'Category Name',    // Product category
  title: 'Product Title',       // Display name
  material: 'Material types',   // Available materials
  size: 'Size specification',   // Product size
  weight: 'Weight',             // Product weight
  finish: 'Finish type',         // Surface finish
  uses: ['Use case 1', ...],    // Use cases array
  hygiene: ['Hygiene 1', ...],  // Hygiene features array
  image: '/images/slug.jpg',    // Image path
  description: 'Description'     // Product description
}
```

## 🖼️ Product Images

### Adding Product Images

1. Place product images in `public/images/` directory
2. Name images using the product slug: `{slug}.jpg`
   - Example: `buffet-dinner-plate.jpg`
3. Images should be optimized for web (recommended: 2048x2048px, JPG format)

### AI Image Generation

See `assets/ai-image-prompts.txt` for detailed prompts for generating AI images for each product.

**Current Status**: Placeholder images are required. The application will display placeholder UI elements if images are not found.

## 🔍 Features

### Catalogue Page (`/catalogue`)

- **Category Filter**: Filter products by category (Dinnerware, Bowls, Glassware, Tea & Coffee, Cutlery)
- **Search**: Client-side search by product name, material, or description
- **Responsive Grid**: 1-4 columns depending on screen size
- **Product Cards**: Hover effects and category badges

### Product Detail Pages (`/catalogue/[slug]`)

- **Product Information**: Full specifications, uses, and hygiene details
- **JSON-LD Schema**: SEO-optimized product schema
- **CTA Buttons**: Email enquiry and WhatsApp links
- **Breadcrumb Navigation**: Easy navigation back to catalogue

### PDF Export (`/api/export-pdf`)

- Printable HTML catalogue
- Organized by category
- All product specifications included
- Print-friendly styling

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus states on all interactive elements
- ARIA labels for icons
- Alt text for all product images
- WCAG AA color contrast compliance

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_BASE_URL=https://catalogue.hybits.in
```

### Next.js Configuration

The `next.config.js` file is configured for:
- Image optimization (can be disabled for static export)
- React strict mode
- Static export support (commented out by default)

## 🚀 Deployment to Hostinger

### Option 1: Node.js Application (Recommended)

1. **Prepare the application**:
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Hostinger**:
   - Upload all project files to your Hostinger hosting account
   - Ensure Node.js version is set to 18+ in Hostinger control panel

3. **Configure Hostinger**:
   - Set the application root to your project directory
   - Set the start command to: `npm start`
   - Ensure the Node.js version is 18 or higher
   - Point your subdomain `catalogue.hybits.in` to the application

4. **DNS Configuration**:
   - In Hostinger DNS settings, create an A record or CNAME pointing `catalogue.hybits.in` to your server IP/hostname
   - Wait for DNS propagation (can take up to 24 hours)

### Option 2: Static Export

1. **Modify `next.config.js`**:
   ```javascript
   const nextConfig = {
     output: 'export',
     // ... other config
   }
   ```

2. **Build and export**:
   ```bash
   npm run build
   ```

3. **Upload to Hostinger**:
   - Upload the contents of the `out/` directory to your subdomain's `public_html` folder
   - Ensure all files are uploaded correctly

4. **DNS Configuration**:
   - Point `catalogue.hybits.in` to your Hostinger hosting via A record or CNAME

### Post-Deployment Checklist

- [ ] Verify the site loads at `https://catalogue.hybits.in`
- [ ] Test all navigation links
- [ ] Verify product images load (or placeholders display)
- [ ] Test category filter and search functionality
- [ ] Test product detail pages
- [ ] Verify PDF export endpoint works
- [ ] Check mobile responsiveness
- [ ] Test keyboard navigation
- [ ] Verify email and WhatsApp links work (update placeholder number)

## 📝 Customization

### Updating Product Data

Edit `data/products.js` to add, remove, or modify products. The changes will be reflected across all pages automatically.

### Updating Contact Information

1. **Email**: `info@hybits.in` (already configured in all components)
2. **Phone**: `+91-9945624643` (already configured)
3. **WhatsApp**: `+91-9945624643` (already configured as `919945624643` for WhatsApp links)

### Adding New Pages

1. Create a new file in `app/` directory
2. Export a default React component
3. Add navigation link in `components/Header.jsx` if needed

## ✅ Acceptance Criteria Checklist

- [x] Running `npm run dev` shows Home and `/catalogue` with 23 placeholder product cards
- [x] Clicking a product opens its detail page populated from `data/products.js`
- [x] Category filter & search work on `/catalogue`
- [x] Colors and buttons match the Hybits tokens and accessibility rules
- [x] README contains deploy instructions for Hostinger subdomain
- [x] Responsive layout across mobile/tablet/desktop
- [x] Keyboard navigation and focus outlines work
- [x] Color contrast passes WCAG AA standards
- [x] PDF export endpoint returns printable HTML catalogue
- [x] JSON-LD Product schema included on product pages
- [x] All images have alt text and proper accessibility attributes

## 🐛 Troubleshooting

### Images not displaying

- Ensure images are in `public/images/` directory
- Check image filenames match product slugs exactly
- Verify image file extensions are `.jpg`

### Build errors

- Ensure Node.js version is 18+
- Run `npm install` to install all dependencies
- Clear `.next` directory and rebuild

### Deployment issues

- Verify Node.js version on Hostinger is 18+
- Check that all files are uploaded correctly
- Ensure environment variables are set if needed
- Check Hostinger error logs for specific issues

## 📄 License

Copyright © 2024 Hybits. All rights reserved.

## 📞 Support

For issues or questions:
- Email: info@hybits.in
- Phone: +91-9945624643
- Check the documentation in code comments
- Review Next.js documentation: https://nextjs.org/docs

---

**Note**: All contact information (email, phone, WhatsApp) is already configured and ready to use.

