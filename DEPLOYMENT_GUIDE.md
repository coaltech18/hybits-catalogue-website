# Hostinger Deployment Guide for Hybits Catalogue

This guide covers deploying your Next.js application to Hostinger using two methods:

## 🎯 Choose Your Deployment Method

### Method 1: Static Export (for Shared Hosting / public_html)
- ✅ Works with traditional shared hosting
- ✅ Upload to `public_html` folder
- ✅ No Node.js required
- ❌ API routes won't work (but PDF generation still works client-side)

### Method 2: Node.js Hosting (Recommended)
- ✅ Full Next.js functionality
- ✅ API routes work
- ✅ Better performance
- ⚠️ Requires Hostinger Node.js hosting or VPS

---

## 📦 Method 1: Static Export (public_html)

### Step 1: Enable Static Export

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Step 2: Build Static Files

```bash
npm run build
```

This will create an `out/` directory with all static files.

### Step 3: Upload to Hostinger

1. **Access Hostinger File Manager**:
   - Log in to Hostinger hPanel
   - Go to **File Manager**
   - Navigate to `public_html` (or your domain's root folder)

2. **Upload Files**:
   - Upload **ALL contents** from the `out/` directory
   - **Important**: Upload the contents of `out/`, not the `out/` folder itself
   - Structure should be:
     ```
     public_html/
     ├── _next/
     ├── catalogue/
     ├── contact/
     ├── sustainability/
     ├── images/
     ├── index.html
     └── ... (other files)
     ```

3. **Upload Images**:
   - Ensure `public/images/` folder is uploaded to `public_html/images/`
   - All product images should be in `public_html/images/`

### Step 4: Configure .htaccess (for clean URLs)

Create/update `.htaccess` in `public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle Next.js routing
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Step 5: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Test all pages:
   - Home page: `/`
   - Catalogue: `/catalogue`
   - Product pages: `/catalogue/melamine-plate`
   - Contact: `/contact`
   - Sustainability: `/sustainability`

---

## 🚀 Method 2: Node.js Hosting (Recommended)

### Prerequisites

- Hostinger Node.js hosting plan (or VPS)
- Node.js 18+ available
- SSH access (recommended)

### Step 1: Prepare Build Locally (Optional)

```bash
npm install
npm run build
```

### Step 2: Upload Project Files

**Option A: Using File Manager**
1. Create a folder in your hosting (e.g., `hybits-catalogue`)
2. Upload all project files EXCEPT:
   - `node_modules/` (don't upload this)
   - `.next/` (will be generated on server)
   - `.git/` (optional)

**Option B: Using Git (Recommended)**
```bash
# On Hostinger via SSH
cd ~/domains/yourdomain.com
git clone https://github.com/yourusername/hybits-catalogue.git
cd hybits-catalogue
npm install
npm run build
```

### Step 3: Configure Hostinger Node.js App

1. **In Hostinger hPanel**:
   - Go to **Node.js** section
   - Click **Create Application**
   - Set:
     - **Application Name**: `hybits-catalogue`
     - **Node.js Version**: `18.x` or `20.x`
     - **Application Root**: `/hybits-catalogue` (or your folder path)
     - **Application URL**: Your domain or subdomain
     - **Application Startup File**: `server.js` (create this file - see below)

2. **Create `server.js`** in project root:
```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

3. **Update `package.json`** scripts:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "node server.js",
    "lint": "next lint"
  }
}
```

### Step 4: Install Dependencies & Build

**Via SSH:**
```bash
cd ~/domains/yourdomain.com/hybits-catalogue
npm install --production
npm run build
```

**Via File Manager:**
- Use Hostinger's terminal/SSH feature to run the commands above

### Step 5: Start the Application

In Hostinger Node.js panel:
- Set **Start Command**: `npm start`
- Click **Start Application**

### Step 6: Configure Domain/Subdomain

1. **Point Domain**:
   - In Hostinger DNS settings, point your domain/subdomain to the Node.js app
   - Or configure in Node.js app settings

2. **SSL Certificate**:
   - Enable SSL/HTTPS in Hostinger
   - Let's Encrypt is usually available for free

---

## 🔧 Environment Variables (if needed)

If you need environment variables:

**For Static Export**: Not needed (everything is client-side)

**For Node.js Hosting**:
1. In Hostinger Node.js panel, add environment variables
2. Or create `.env.local` file:
```env
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

---

## ✅ Post-Deployment Checklist

- [ ] Site loads at your domain
- [ ] All pages are accessible
- [ ] Images load correctly (`/images/` folder)
- [ ] Navigation works
- [ ] Product detail pages work
- [ ] Search and filters work
- [ ] PDF download button works (client-side)
- [ ] Mobile responsive
- [ ] SSL/HTTPS enabled
- [ ] Contact links work (email, WhatsApp)

---

## 🐛 Troubleshooting

### Static Export Issues

**Problem**: 404 errors on routes
- **Solution**: Ensure `.htaccess` is uploaded and mod_rewrite is enabled

**Problem**: Images not loading
- **Solution**: Check `public_html/images/` folder exists and contains images
- Verify image paths in browser console

**Problem**: CSS/JS not loading
- **Solution**: Check `_next/` folder is uploaded correctly
- Verify file permissions (should be 644 for files, 755 for folders)

### Node.js Hosting Issues

**Problem**: Application won't start
- **Solution**: Check Node.js version (should be 18+)
- Verify `package.json` has correct start script
- Check Hostinger error logs

**Problem**: Port conflicts
- **Solution**: Hostinger usually handles this automatically
- Check Node.js app settings for port configuration

**Problem**: Build fails
- **Solution**: Ensure all dependencies are installed
- Check Node.js version compatibility
- Review build logs in Hostinger

---

## 📝 Quick Reference Commands

### Static Export
```bash
# Enable static export in next.config.js
output: 'export'

# Build
npm run build

# Upload out/ folder contents to public_html
```

### Node.js Hosting
```bash
# Install dependencies
npm install --production

# Build
npm run build

# Start (via Hostinger panel or)
npm start
```

---

## 📞 Need Help?

- Check Hostinger documentation: https://support.hostinger.com
- Next.js deployment docs: https://nextjs.org/docs/deployment
- Review error logs in Hostinger hPanel

---

**Note**: The PDF generation feature works client-side, so it will work with both deployment methods. The `/api/export-pdf` route is only needed if you want server-side PDF export (not required for this project).

