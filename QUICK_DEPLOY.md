# Quick Deployment Guide - Hostinger

## 🎯 Choose Your Method

### Option A: Static Export (Easiest - for public_html)
**Best for**: Traditional shared hosting with `public_html` folder

### Option B: Node.js Hosting (Recommended)
**Best for**: Full Next.js features, better performance

---

## ⚡ Quick Start: Static Export

### 1. Enable Static Export

Edit `next.config.js` and uncomment line 8:
```javascript
output: 'export',  // Uncomment this line
```

### 2. Build

```bash
npm run build
```

### 3. Upload to Hostinger

1. Go to Hostinger **File Manager** → `public_html`
2. Upload **ALL contents** from `out/` folder
3. Upload `.htaccess` file to `public_html/`
4. Upload `public/images/` → `public_html/images/`

**Done!** Visit your domain.

---

## ⚡ Quick Start: Node.js Hosting

### 1. Upload Project Files

Upload all files EXCEPT `node_modules/` and `.next/`

### 2. In Hostinger Node.js Panel

- **Application Root**: Your project folder
- **Node.js Version**: 18+ or 20+
- **Start Command**: `npm start`
- **Startup File**: `server.js`

### 3. Install & Build (via SSH or Terminal)

```bash
cd your-project-folder
npm install --production
npm run build
```

### 4. Start Application

Click **Start** in Hostinger Node.js panel.

**Done!** Visit your domain.

---

## 📋 File Checklist

### For Static Export:
- ✅ `out/` folder contents → `public_html/`
- ✅ `.htaccess` → `public_html/`
- ✅ `public/images/` → `public_html/images/`

### For Node.js:
- ✅ All project files (except `node_modules/`, `.next/`)
- ✅ `server.js` file
- ✅ `package.json` with `"start": "node server.js"`

---

## 🔍 Verify Deployment

- [ ] Home page loads: `/`
- [ ] Catalogue page: `/catalogue`
- [ ] Product pages work: `/catalogue/melamine-plate`
- [ ] Images load: Check `/images/` folder
- [ ] PDF download works (client-side)
- [ ] Mobile responsive

---

## ❓ Need More Details?

See `DEPLOYMENT_GUIDE.md` for complete instructions.

