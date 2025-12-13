import { products } from '@/data/products';
import { NextResponse } from 'next/server';

export async function GET() {
  // Generate HTML for printable catalogue
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hybits Product Catalogue</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      color: #1A382E;
      background: #FAFAFA;
      padding: 40px 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 40px;
      border-bottom: 3px solid #58B692;
      padding-bottom: 20px;
    }
    .header h1 {
      font-size: 36px;
      color: #1A382E;
      margin-bottom: 10px;
    }
    .header p {
      color: #666;
      font-size: 16px;
    }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 30px;
      margin-top: 30px;
    }
    .product-card {
      background: white;
      border: 1px solid #C9C9C9;
      border-radius: 8px;
      padding: 20px;
      page-break-inside: avoid;
    }
    .product-card h3 {
      color: #1A382E;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .product-category {
      display: inline-block;
      background: rgba(88, 182, 146, 0.2);
      color: #1A382E;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      margin-bottom: 10px;
    }
    .product-specs {
      font-size: 14px;
      color: #666;
      margin-top: 10px;
    }
    .product-specs p {
      margin: 5px 0;
    }
    .category-section {
      margin-top: 40px;
      page-break-before: always;
    }
    .category-title {
      font-size: 24px;
      color: #1A382E;
      margin-bottom: 20px;
      border-bottom: 2px solid #58B692;
      padding-bottom: 10px;
    }
    .footer {
      margin-top: 60px;
      text-align: center;
      padding-top: 20px;
      border-top: 2px solid #C9C9C9;
      color: #666;
      font-size: 14px;
    }
    @media print {
      body {
        padding: 20px;
      }
      .category-section {
        page-break-before: always;
      }
      .product-card {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Hybits Product Catalogue</h1>
    <p>Smart Dish Management Solutions</p>
    <p style="margin-top: 10px; font-size: 14px;">Generated on ${new Date().toLocaleDateString()}</p>
  </div>

  ${(() => {
    const categories = ['Dinnerware', 'Bowls', 'Glassware', 'Tea & Coffee', 'Cutlery'];
    return categories.map(category => {
      const categoryProducts = products.filter(p => p.category === category);
      if (categoryProducts.length === 0) return '';
      
      return `
        <div class="category-section">
          <h2 class="category-title">${category}</h2>
          <div class="products-grid">
            ${categoryProducts.map(product => `
              <div class="product-card">
                <div style="margin-bottom: 10px;">
                  <span class="product-category">${product.category}</span>
                  ${product.subcategory ? `<span class="product-category" style="margin-left: 5px; background: rgba(88, 182, 146, 0.4);">${product.subcategory}</span>` : ''}
                </div>
                <h3>${product.title}</h3>
                <div class="product-specs">
                  <p><strong>Material:</strong> ${product.material}</p>
                  <p><strong>Size:</strong> ${product.size}</p>
                  <p><strong>Weight:</strong> ${product.weight}</p>
                  <p><strong>Finish:</strong> ${product.finish}</p>
                  <p style="margin-top: 10px;"><strong>Ideal For:</strong> ${product.uses.join(', ')}</p>
                  <p><strong>Hygiene:</strong> ${product.hygiene.join(', ')}</p>
                </div>
                <p style="margin-top: 10px; font-size: 13px; color: #666;">${product.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  })()}

  <div class="footer">
    <p>For enquiries, contact: info@hybits.in | +91-9945624643</p>
    <p style="margin-top: 5px;">&copy; ${new Date().getFullYear()} Hybits. All rights reserved.</p>
  </div>

  <script>
    // Auto-trigger print dialog when page loads (optional)
    // window.onload = function() { window.print(); }
  </script>
</body>
</html>
  `;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
      'Content-Disposition': 'attachment; filename="hybits-catalogue.html"',
    },
  });
}

