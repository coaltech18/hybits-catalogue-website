# PDF Generation Test Guide

## 🧪 Automated Tests

### Run Test Script

```bash
npm run test:pdf
```

This will verify:
- ✅ PDF generator utility exists
- ✅ CataloguePDF component exists
- ✅ Products data file exists
- ✅ html2pdf.js is installed
- ✅ Image files are present
- ✅ Header component integration

### Browser Test Page

Visit: `http://localhost:3000/test-pdf`

This page provides:
- Interactive PDF generation test
- Real-time test results
- Manual test checklist
- Error reporting

---

## 📋 Manual Test Checklist

### 1. PDF Download Test

- [ ] Click "Download PDF" button in header
- [ ] Loading modal appears
- [ ] PDF file downloads successfully
- [ ] Filename is "Hybits-Catalogue.pdf"
- [ ] Loading modal disappears after download

**Expected Result:** PDF downloads without errors

---

### 2. Image Quality Test

- [ ] Open downloaded PDF
- [ ] Check all 22 product images
- [ ] Verify images are sharp and clear
- [ ] No pixelation or blur
- [ ] Images fit properly in cards
- [ ] No image cut-off or overflow

**Expected Result:** All images appear sharp and properly sized

---

### 3. Text Overflow Test

- [ ] Review all product cards in PDF
- [ ] Check product titles (no cut-off)
- [ ] Check material descriptions (no overflow)
- [ ] Check "Ideal For" text (fits in card)
- [ ] Check product descriptions (no overflow)
- [ ] Verify category badges fit properly

**Expected Result:** No text overflow or cut-off issues

---

### 4. Page Break Test

- [ ] Count products on first page after cover
- [ ] Verify page breaks occur every 9 products
- [ ] Check no product cards are split across pages
- [ ] Verify category sections start on new pages
- [ ] Check footer page appears at end

**Expected Result:** Page breaks occur correctly every 9 products

---

### 5. Mobile Compatibility Test

**On Mobile Device:**

- [ ] Open website on mobile browser
- [ ] Click "Download PDF" button
- [ ] Loading modal appears correctly
- [ ] PDF downloads successfully
- [ ] PDF opens correctly on mobile
- [ ] All content is readable on mobile

**Expected Result:** PDF generation works on mobile devices

---

### 6. Hostinger Deployment Test

**On Production Server:**

- [ ] Deploy to Hostinger
- [ ] Access website on production domain
- [ ] Click "Download PDF" button
- [ ] Verify PDF generation works
- [ ] Check all images load correctly
- [ ] Verify no console errors
- [ ] Test on different browsers

**Expected Result:** PDF generation works on Hostinger deployment

---

## 🔍 Detailed Verification Steps

### Cover Page Verification

- [ ] Logo displays correctly (or fallback text)
- [ ] Title: "Product Catalogue 2025"
- [ ] Subtitle: "Premium Sterilised Dish Solutions"
- [ ] Generation date is present
- [ ] Page background is #FEFBF6

### Product Pages Verification

- [ ] 3 products per row
- [ ] Category headers in #1A382E
- [ ] Soft borders (#C9C9C9) visible
- [ ] Light background (#FEFBF6)
- [ ] Product images display
- [ ] Category badges visible
- [ ] All product information present

### Styling Verification

- [ ] Inter/Manrope font applied
- [ ] Brand colors used correctly
- [ ] Consistent spacing
- [ ] Rounded corners on cards
- [ ] Shadows on cards
- [ ] Professional appearance

---

## 🐛 Troubleshooting

### PDF Doesn't Download

**Possible Causes:**
- Browser popup blocker
- JavaScript errors in console
- html2pdf.js not loaded

**Solutions:**
1. Check browser console for errors
2. Disable popup blocker
3. Verify html2pdf.js is installed: `npm list html2pdf.js`
4. Clear browser cache

### Images Not Appearing

**Possible Causes:**
- Image files missing
- Incorrect file paths
- CORS issues

**Solutions:**
1. Verify images exist in `/public/images/`
2. Check filenames match product IDs exactly
3. Verify image format (PNG/JPEG)
4. Check browser console for 404 errors

### Text Overflow

**Possible Causes:**
- Product descriptions too long
- Card width too narrow
- Font size too large

**Solutions:**
1. Check product descriptions in `data/products.js`
2. Verify card styling in `CataloguePDF.jsx`
3. Adjust font sizes if needed

### Page Breaks Not Working

**Possible Causes:**
- CSS page-break rules not applied
- html2canvas rendering issues

**Solutions:**
1. Verify `pageBreakAfter` styles in component
2. Check PDF viewer (some viewers handle breaks differently)
3. Test with different PDF viewers

---

## 📊 Test Results Template

```
PDF Generation Test Results
Date: ___________
Tester: ___________

✓ PDF Download: [ ] Pass [ ] Fail
✓ Image Quality: [ ] Pass [ ] Fail
✓ Text Overflow: [ ] Pass [ ] Fail
✓ Page Breaks: [ ] Pass [ ] Fail
✓ Mobile: [ ] Pass [ ] Fail
✓ Hostinger: [ ] Pass [ ] Fail

Notes:
_______________________________________
_______________________________________
_______________________________________
```

---

## 🚀 Quick Test Commands

```bash
# Run automated tests
npm run test:pdf

# Start development server
npm run dev

# Build for production
npm run build

# Test production build
npm start
```

---

## 📝 Test Environment Checklist

Before testing, ensure:

- [ ] Node.js 18+ installed
- [ ] All dependencies installed (`npm install`)
- [ ] Development server running
- [ ] All product images in `/public/images/`
- [ ] Logo file exists (`/public/images/hybits-logo.png`)
- [ ] Browser console clear of errors

---

**Last Updated:** December 2024

