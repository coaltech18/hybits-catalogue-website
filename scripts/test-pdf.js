/**
 * PDF Generation Test Script
 * 
 * Run this script to verify PDF generation functionality
 * Usage: node scripts/test-pdf.js
 */

const fs = require('fs');
const path = require('path');

// Test configuration
const tests = {
  pdfGeneratorExists: false,
  cataloguePDFComponentExists: false,
  productsDataExists: false,
  html2pdfInstalled: false,
  imagePathsValid: false,
};

// Test results
const results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  errors: [],
};

console.log('🧪 PDF Generation Test Suite\n');
console.log('=' .repeat(50));

// Test 1: Check if PDF generator exists
console.log('\n1. Checking PDF generator utility...');
const pdfGeneratorPath = path.join(__dirname, '../utils/pdfGenerator.js');
if (fs.existsSync(pdfGeneratorPath)) {
  tests.pdfGeneratorExists = true;
  results.passed++;
  console.log('   ✓ utils/pdfGenerator.js exists');
} else {
  results.failed++;
  results.errors.push('utils/pdfGenerator.js not found');
  console.log('   ✗ utils/pdfGenerator.js not found');
}

// Test 2: Check if CataloguePDF component exists
console.log('\n2. Checking CataloguePDF component...');
const cataloguePDFPath = path.join(__dirname, '../components/pdf/CataloguePDF.jsx');
if (fs.existsSync(cataloguePDFPath)) {
  tests.cataloguePDFComponentExists = true;
  results.passed++;
  console.log('   ✓ components/pdf/CataloguePDF.jsx exists');
} else {
  results.failed++;
  results.errors.push('components/pdf/CataloguePDF.jsx not found');
  console.log('   ✗ components/pdf/CataloguePDF.jsx not found');
}

// Test 3: Check if products data exists
console.log('\n3. Checking products data...');
const productsPath = path.join(__dirname, '../data/products.js');
if (fs.existsSync(productsPath)) {
  tests.productsDataExists = true;
  results.passed++;
  console.log('   ✓ data/products.js exists');
  
  // Try to read and validate products
  try {
    const productsContent = fs.readFileSync(productsPath, 'utf8');
    const productMatches = productsContent.match(/id:\s*'[^']+'/g);
    if (productMatches) {
      console.log(`   ✓ Found ${productMatches.length} products`);
      if (productMatches.length === 22) {
        console.log('   ✓ Product count is correct (22)');
      } else {
        results.warnings++;
        console.log(`   ⚠ Expected 22 products, found ${productMatches.length}`);
      }
    }
  } catch (error) {
    results.warnings++;
    console.log('   ⚠ Could not parse products file');
  }
} else {
  results.failed++;
  results.errors.push('data/products.js not found');
  console.log('   ✗ data/products.js not found');
}

// Test 4: Check if html2pdf.js is installed
console.log('\n4. Checking html2pdf.js installation...');
const packageJsonPath = path.join(__dirname, '../package.json');
if (fs.existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    if (packageJson.dependencies && packageJson.dependencies['html2pdf.js']) {
      tests.html2pdfInstalled = true;
      results.passed++;
      console.log(`   ✓ html2pdf.js installed (v${packageJson.dependencies['html2pdf.js']})`);
    } else {
      results.failed++;
      results.errors.push('html2pdf.js not found in dependencies');
      console.log('   ✗ html2pdf.js not found in package.json');
    }
  } catch (error) {
    results.warnings++;
    console.log('   ⚠ Could not read package.json');
  }
} else {
  results.failed++;
  results.errors.push('package.json not found');
  console.log('   ✗ package.json not found');
}

// Test 5: Check image paths
console.log('\n5. Checking product image paths...');
const imagesDir = path.join(__dirname, '../public/images');
if (fs.existsSync(imagesDir)) {
  const imageFiles = fs.readdirSync(imagesDir).filter(file => 
    file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
  );
  console.log(`   ✓ Found ${imageFiles.length} image files in public/images/`);
  
  if (imageFiles.length >= 20) {
    tests.imagePathsValid = true;
    results.passed++;
    console.log('   ✓ Sufficient images found');
  } else {
    results.warnings++;
    console.log(`   ⚠ Expected at least 20 images, found ${imageFiles.length}`);
  }
} else {
  results.warnings++;
  console.log('   ⚠ public/images/ directory not found');
}

// Test 6: Check Header component integration
console.log('\n6. Checking Header component integration...');
const headerPath = path.join(__dirname, '../components/Header.jsx');
if (fs.existsSync(headerPath)) {
  try {
    const headerContent = fs.readFileSync(headerPath, 'utf8');
    if (headerContent.includes('generateCataloguePDF')) {
      results.passed++;
      console.log('   ✓ PDF generation integrated in Header');
    } else {
      results.warnings++;
      console.log('   ⚠ PDF generation not found in Header component');
    }
  } catch (error) {
    results.warnings++;
    console.log('   ⚠ Could not read Header component');
  }
} else {
  results.warnings++;
  console.log('   ⚠ Header component not found');
}

// Summary
console.log('\n' + '='.repeat(50));
console.log('\n📊 Test Summary\n');
console.log(`   ✓ Passed: ${results.passed}`);
console.log(`   ✗ Failed: ${results.failed}`);
console.log(`   ⚠ Warnings: ${results.warnings}`);

if (results.errors.length > 0) {
  console.log('\n❌ Errors:');
  results.errors.forEach(error => {
    console.log(`   - ${error}`);
  });
}

if (results.failed === 0) {
  console.log('\n✅ All critical tests passed!');
  console.log('\n📝 Next Steps:');
  console.log('   1. Run the app: npm run dev');
  console.log('   2. Visit: http://localhost:3000/test-pdf');
  console.log('   3. Click "Run PDF Tests" button');
  console.log('   4. Manually verify the downloaded PDF');
  console.log('   5. Test on mobile device');
  console.log('   6. Test on Hostinger deployment');
  process.exit(0);
} else {
  console.log('\n❌ Some tests failed. Please fix the errors above.');
  process.exit(1);
}

