#!/bin/bash
# Quick deployment script for static export to Hostinger
# Usage: ./deploy-static.sh

echo "🚀 Starting static export deployment..."

# Step 1: Enable static export
echo "📝 Updating next.config.js..."
sed -i.bak 's|// output: '\''export'\'',|output: '\''export'\'',|' next.config.js

# Step 2: Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .next out

# Step 3: Install dependencies (if needed)
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Step 4: Build static files
echo "🔨 Building static files..."
npm run build

# Step 5: Check if out directory exists
if [ ! -d "out" ]; then
  echo "❌ Error: 'out' directory not found. Build may have failed."
  exit 1
fi

# Step 6: Display deployment instructions
echo ""
echo "✅ Build complete! Static files are in the 'out/' directory."
echo ""
echo "📤 Next steps for Hostinger:"
echo "1. Log in to Hostinger hPanel"
echo "2. Go to File Manager"
echo "3. Navigate to public_html (or your domain root)"
echo "4. Upload ALL contents from the 'out/' folder"
echo "5. Upload the .htaccess file to public_html/"
echo "6. Ensure public/images/ folder is uploaded to public_html/images/"
echo ""
echo "📁 Files to upload:"
echo "   - All contents of 'out/' folder"
echo "   - .htaccess file"
echo "   - public/images/ folder → public_html/images/"
echo ""
echo "🌐 After upload, visit your domain to verify deployment."

