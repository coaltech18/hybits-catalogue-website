# Hybits Catalogue - Quick Reference Guide

## 🎯 Project Snapshot

**Type:** Next.js 14 App Router + React 18 + Tailwind CSS  
**Products:** 23 items across 5 categories  
**Status:** Production-ready, awaiting images  
**Deployment:** Hostinger (catalogue.hybits.in)

---

## 📁 File Structure Quick View

```
app/
├── layout.jsx              # Root layout
├── page.jsx                # Home page
├── catalogue/
│   ├── page.jsx           # Product listing
│   └── [slug]/page.jsx    # Product details
├── sustainability/page.jsx
├── contact/page.jsx
└── api/export-pdf/route.js

components/
├── Header.jsx             # Navigation
├── Footer.jsx             # Footer
├── Logo.jsx               # Logo component
├── ProductCard.jsx        # Product card
├── ProductGrid.jsx         # Grid layout
├── SearchFilter.jsx        # Filter + search
├── PlaceholderImage.jsx   # Image with fallback
└── CTAButton.jsx          # Reusable button

data/
└── products.js            # 23 products + helpers
```

---

## 🎨 Color System

| Token | Value | Usage |
|-------|-------|-------|
| `--hybits-dark` | #1A382E | Headings, primary buttons |
| `--hybits-green` | #58B692 | Accents, links |
| `--hybits-surface` | #FEFBF6 | Hero, cards |
| `--hybits-bg` | #FAFAFA | Page background |
| `--hybits-grey` | #C9C9C9 | Borders, placeholders |

**Access:** `bg-hybits-*`, `text-hybits-*`, `border-hybits-*`

---

## 📦 Product Categories & Counts

- **Dinnerware:** 7 products
- **Bowls:** 3 products
- **Glassware:** 4 products
- **Tea & Coffee:** 2 products
- **Cutlery:** 4 products

**Total:** 23 products

---

## 🔑 Key Routes

| Route | Component | Type |
|-------|-----------|------|
| `/` | Home page | Server |
| `/catalogue` | Product listing | Client |
| `/catalogue/[slug]` | Product detail | Server |
| `/sustainability` | Sustainability | Server |
| `/contact` | Contact | Server |
| `/api/export-pdf` | PDF export | API |

---

## 🧩 Component Props Quick Reference

### ProductCard
```jsx
<ProductCard product={productObject} />
```

### ProductGrid
```jsx
<ProductGrid products={productsArray} />
```

### SearchFilter
```jsx
<SearchFilter
  selectedCategory={string}
  onCategoryChange={function}
  searchQuery={string}
  onSearchChange={function}
/>
```

### PlaceholderImage
```jsx
<PlaceholderImage
  slug="product-slug"
  alt="Description"
  width={400}
  height={400}
  className="optional"
/>
```

### CTAButton
```jsx
<CTAButton
  href="url"              // Optional, makes it a link
  variant="primary|secondary"
  onClick={function}       // Optional
  className="optional"
/>
```

### Logo
```jsx
<Logo
  showTagline={boolean}
  size="small|default|large"
  variant="dark|light"
  className="optional"
/>
```

---

## 📊 Data Structure

### Product Object
```javascript
{
  id: 'slug',              // Route & image filename
  category: 'Category',
  title: 'Product Name',
  material: 'Materials',
  size: 'Size',
  weight: 'Weight',
  finish: 'Finish',
  uses: ['Use1', 'Use2'],
  hygiene: ['Hygiene1'],
  image: '/images/slug.jpg',
  description: 'Description',
  sizeOptions: ['5"', '6"'] // Optional
}
```

### Helper Functions
```javascript
getProductBySlug(slug)           // Get one product
getProductsByCategory(category)  // Filter by category
getCategories()                   // Get all categories
```

---

## 🎯 Common Tasks

### Add New Product
1. Add object to `data/products.js`
2. Add image: `public/images/[slug].jpg`
3. Add prompt to `assets/ai-image-prompts.txt`

### Update Contact Info
Search for:
- `info@hybits.in` → Replace email
- `+91-9945624643` → Replace phone
- `919945624643` → Replace WhatsApp (no +, -, spaces)

### Change Colors
Edit `app/globals.css` → `:root` variables

### Add New Page
1. Create `app/[route]/page.jsx`
2. Add link in `components/Header.jsx` (if needed)

---

## 🚀 Deployment Commands

```bash
# Development
npm install
npm run dev

# Production Build
npm run build
npm start

# Static Export
# 1. Uncomment output: 'export' in next.config.js
npm run build
# 2. Upload out/ directory
```

---

## 🔍 Search Implementation

**Location:** `app/catalogue/page.jsx`

**How it works:**
- Client-side filtering (no API)
- Searches: title, material, description
- Case-insensitive
- Real-time updates

**Performance:** Uses `useMemo` for optimization

---

## 📧 Contact Links Format

**Email:**
```javascript
mailto:info@hybits.in?subject=Subject
```

**Phone:**
```javascript
tel:+91-9945624643
```

**WhatsApp:**
```javascript
https://wa.me/919945624643?text=Message
// Note: Number without +, -, or spaces
```

---

## 🖼️ Image Requirements

**Product Images:**
- Path: `/public/images/[slug].jpg`
- Size: 1600x1600px (recommended)
- Format: JPG
- Naming: Must match product `id`

**Logo:**
- Path: `/public/images/hybits-logo.png`
- Formats: PNG, JPG, or SVG

**AI Prompts:**
- File: `assets/ai-image-prompts.txt`
- Style: Studio white background
- Resolution: 2048x2048

---

## ⚙️ Configuration Files

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js settings |
| `tailwind.config.js` | Tailwind theme |
| `postcss.config.js` | PostCSS plugins |
| `jsconfig.json` | Path aliases (@/) |
| `package.json` | Dependencies |

---

## 🐛 Troubleshooting

### 404 Errors for Static Assets
- Clear `.next` folder
- Restart dev server
- Check port conflicts

### Images Not Loading
- Check file exists: `public/images/[slug].jpg`
- Verify filename matches product `id`
- Check file permissions

### Build Errors
- Run `npm install`
- Check Node.js version (18+)
- Clear `.next` folder

### PDF Download Not Working
- Check API route: `/api/export-pdf`
- Verify server is running
- Check browser download settings

---

## 📝 File Locations for Common Edits

| What to Edit | File Location |
|--------------|---------------|
| Product data | `data/products.js` |
| Colors | `app/globals.css` |
| Navigation | `components/Header.jsx` |
| Footer | `components/Footer.jsx` |
| Home page | `app/page.jsx` |
| Catalogue | `app/catalogue/page.jsx` |
| Product detail | `app/catalogue/[slug]/page.jsx` |
| Contact info | `components/Footer.jsx`, `app/contact/page.jsx` |

---

## ✅ Checklist for New Developer

- [ ] Read `PROJECT_DOCUMENTATION.md`
- [ ] Review `data/products.js` structure
- [ ] Understand component props
- [ ] Test locally: `npm run dev`
- [ ] Review Tailwind classes usage
- [ ] Check accessibility features
- [ ] Understand routing structure
- [ ] Review SEO implementation

---

**Quick Links:**
- Full Documentation: `PROJECT_DOCUMENTATION.md`
- User Guide: `README.md`
- Status: `IMPLEMENTATION_STATUS.md`

