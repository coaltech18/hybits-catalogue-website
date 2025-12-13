# Required Images for Hybits Catalogue

## 📋 Image Requirements Summary

**Total Images Required:** 23 files (22 products + 1 logo)  
**Location:** `/public/images/`  
**Format:** PNG (for products), PNG (for logo)  
**Recommended Size:** 1600x1600px (products), variable (logo)  
**Note:** All images are in PNG format. The system will try PNG first, then fallback to JPG if needed.

**Note:** "Buffet Dinner Plate" is now a subcategory, not a product. The individual plate types (Melamine, Ceramic, Porcelain, Stainless Steel) are the products.

---

## 🖼️ Product Images (22 files)

All product images must be named exactly as the product `id` from `data/products.js` with `.png` extension.

### Dinnerware Category (6 images)

**Buffet Dinner Plate Subcategory (4 images):**

1. **melamine-plate.jpg**
   - Product: Melamine Plate (Buffet Dinner Plate subcategory)
   - Path: `/public/images/melamine-plate.png`

2. **ceramic-plate.jpg**
   - Product: Ceramic Plate (Buffet Dinner Plate subcategory)
   - Path: `/public/images/ceramic-plate.jpg`

3. **porcelain-plate.jpg**
   - Product: Porcelain Plate (Buffet Dinner Plate subcategory)
   - Path: `/public/images/porcelain-plate.jpg`

4. **stainless-steel-plate.jpg**
   - Product: Stainless Steel Plate (Buffet Dinner Plate subcategory)
   - Path: `/public/images/stainless-steel-plate.jpg`

**Other Dinnerware Products (2 images):**

5. **quarter-plate.jpg**
   - Product: Quarter Plate
   - Path: `/public/images/quarter-plate.jpg`

6. **chat-plate.jpg**
   - Product: Chat Plate
   - Path: `/public/images/chat-plate.jpg`

### Bowls Category (3 images)

8. **soup-bowl.jpg**
   - Product: Soup Bowl
   - Path: `/public/images/soup-bowl.jpg`

9. **sambar-bowl.jpg**
   - Product: Sambar Bowl
   - Path: `/public/images/sambar-bowl.jpg`

10. **dessert-bowl.jpg**
    - Product: Dessert Bowl
    - Path: `/public/images/dessert-bowl.jpg`

### Glassware Category (4 images)

11. **juice-glass.jpg**
    - Product: Juice / Welcome Drink Glass
    - Path: `/public/images/juice-glass.jpg`

12. **water-glass.jpg**
    - Product: Water Glass
    - Path: `/public/images/water-glass.jpg`

13. **regular-glass.jpg**
    - Product: Regular Glass
    - Path: `/public/images/regular-glass.jpg`

14. **ss-glass.jpg**
    - Product: Stainless Steel Glass
    - Path: `/public/images/ss-glass.jpg`

### Tea & Coffee Category (2 images)

15. **tea-coffee-glass.jpg**
    - Product: Tea / Coffee Glass
    - Path: `/public/images/tea-coffee-glass.jpg`

16. **cup-saucer-set.jpg**
    - Product: Cup & Saucer Set
    - Path: `/public/images/cup-saucer-set.jpg`

### Cutlery Category (4 images)

17. **dinner-spoon.jpg**
    - Product: Dinner Spoon
    - Path: `/public/images/dinner-spoon.jpg`

18. **fork.jpg**
    - Product: Fork
    - Path: `/public/images/fork.jpg`

19. **soup-spoon.jpg**
    - Product: Soup Spoon
    - Path: `/public/images/soup-spoon.jpg`

20. **baby-spoon.jpg**
    - Product: Baby Spoon
    - Path: `/public/images/baby-spoon.jpg`

---

## 🎨 Logo Image (1 file)

**File:** `logo.png`  
**Path:** `/public/images/logo.png`  
**Description:** Hybits logo with "hybits" text, plate icon on 'i', spoon icon on 't', and "Sterilised Dish" tagline  
**Status:** ✅ Already exists

---

## ✅ Complete File List

Copy this list to verify all images are present:

```
public/images/
├── melamine-plate.png
├── ceramic-plate.jpg
├── porcelain-plate.jpg
├── stainless-steel-plate.jpg
├── quarter-plate.jpg
├── chat-plate.jpg
├── soup-bowl.jpg
├── sambar-bowl.jpg
├── dessert-bowl.jpg
├── juice-glass.jpg
├── water-glass.jpg
├── regular-glass.jpg
├── ss-glass.jpg
├── tea-coffee-glass.jpg
├── cup-saucer-set.jpg
├── dinner-spoon.jpg
├── fork.jpg
├── soup-spoon.jpg
├── baby-spoon.jpg
└── logo.png (✅ already exists)
```

---

## 📐 Image Specifications

### Product Images

- **Resolution:** 1600x1600px (recommended minimum)
- **Format:** PNG
- **Quality:** High (80-90% compression)
- **Background:** White seamless (for AI-generated images)
- **Style:** Studio product photography
- **Aspect Ratio:** Square (1:1) preferred
- **File Size:** Optimized for web (200-500KB per image)

### Logo Image

- **Format:** PNG (transparent) or JPG/SVG
- **Resolution:** Variable (scalable)
- **Background:** Transparent or white
- **File Size:** Optimized (< 100KB)

---

## 🔍 Verification Steps

1. **Check File Names:**
   - All filenames must match product `id` exactly
   - Case-sensitive: `buffet-dinner-plate.jpg` (not `Buffet-Dinner-Plate.jpg`)
   - Extension must be `.png` (lowercase)

2. **Check File Location:**
   - All files must be in `/public/images/` directory
   - Not in subdirectories
   - Accessible via `/images/[filename]` URL

3. **Test Image Loading:**
   - Run `npm run dev`
   - Visit `/catalogue` page
   - Check browser console for 404 errors
   - Verify images load or show placeholder

4. **Verify Image Paths:**
   - Image path: `/images/[slug].jpg`
   - Component uses: `product.id` as slug
   - Example: `product.id = 'buffet-dinner-plate'` → `/images/buffet-dinner-plate.jpg`

---

## 🚨 Common Issues

### Image Not Loading

**Possible Causes:**
1. Filename mismatch (check exact spelling)
2. Wrong file extension (.JPG vs .jpg)
3. File not in `/public/images/` directory
4. File permissions issue

**Solution:**
- Verify filename matches `product.id` exactly
- Check file is in correct directory
- Ensure file extension is lowercase `.jpg`

### Placeholder Showing Instead of Image

**This is Expected If:**
- Image file doesn't exist
- Image failed to load
- Filename doesn't match

**Solution:**
- Add the image file with correct name
- Refresh the page
- Check browser console for errors

---

## 📝 AI Image Generation

See `assets/ai-image-prompts.txt` for detailed prompts for each product.

**Quick Reference:**
- Use studio white background style
- Resolution: 2048x2048px
- Format: PNG (preferred) or JPG (system supports both)
- Style: Catalogue photography

---

## ✅ Status Checklist

- [ ] All 22 product images created
- [x] Logo image added (logo.png - already exists)
- [ ] All filenames match product IDs exactly
- [ ] All files in `/public/images/` directory
- [ ] Images optimized for web
- [ ] Tested image loading in browser
- [ ] No 404 errors in console
- [ ] Placeholders show correctly for missing images

---

**Last Updated:** December 2024  
**Total Images:** 23 (22 products + 1 logo - logo.png already exists)

