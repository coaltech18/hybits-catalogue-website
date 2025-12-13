'use client';

/**
 * CataloguePDF Component
 * 
 * Hidden component for PDF generation only.
 * Renders a clean, print-ready catalogue layout.
 * 
 * DO NOT display this component in the UI - it's only for PDF generation.
 */

export default function CataloguePDF({ products = [] }) {
  // Group products by category
  const categories = ['Dinnerware', 'Bowls', 'Glassware', 'Tea & Coffee', 'Cutlery'];
  
  const groupedProducts = categories.reduce((acc, category) => {
    acc[category] = products.filter(p => p.category === category);
    return acc;
  }, {});

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="catalogue-pdf" style={pdfContainerStyle} data-pdf-content="true">
      {/* Cover Page */}
      <div style={coverPageStyle}>
        <div style={coverContentStyle}>
          <div style={logoContainerStyle}>
            <img
              src={typeof window !== 'undefined' ? `${window.location.origin}/images/hybits-logo.png` : '/images/hybits-logo.png'}
              alt="Hybits Logo"
              style={logoStyle}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={logoFallbackStyle} className="logo-fallback">
              <h1 style={logoTextStyle}>hybits</h1>
            </div>
          </div>
          <h2 style={coverTitleStyle}>Product Catalogue 2025</h2>
          <p style={coverSubtitleStyle}>Premium Sterilised Dish Solutions</p>
          <div style={coverFooterStyle}>
            <p style={coverDateStyle}>Generated on {currentDate}</p>
          </div>
        </div>
      </div>

      {/* Catalogue Content */}
      {categories.map((category, categoryIndex) => {
        const categoryProducts = groupedProducts[category];
        if (!categoryProducts || categoryProducts.length === 0) return null;

        return (
          <div
            key={category}
            style={{
              ...categorySectionStyle,
              pageBreakBefore: categoryIndex > 0 ? 'always' : 'auto',
            }}
          >
            {/* Category Header */}
            <div style={categoryHeaderStyle}>
              <h2 style={categoryTitleStyle}>{category}</h2>
            </div>

            {/* Products Grid */}
            <div style={productsGridStyle}>
              {categoryProducts.map((product, productIndex) => {
                // Add page break after every 9 products (every 3 rows of 3)
                const shouldPageBreak = (productIndex + 1) % 9 === 0 && productIndex < categoryProducts.length - 1;
                
                return (
                <div 
                  key={product.id} 
                  style={{
                    ...productCardStyle,
                    pageBreakAfter: shouldPageBreak ? 'always' : 'auto',
                  }}
                >
                  {/* Product Image */}
                  <div style={productImageContainerStyle}>
                    <img
                      src={typeof window !== 'undefined' ? `${window.location.origin}/images/${product.id}.png` : `/images/${product.id}.png`}
                      alt={product.title}
                      style={productImageStyle}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div style={productInfoStyle}>
                    {/* Category Badges */}
                    <div style={badgesContainerStyle}>
                      {product.subcategory && (
                        <span style={subcategoryBadgeStyle}>{product.subcategory}</span>
                      )}
                      <span style={categoryBadgeStyle}>{product.category}</span>
                    </div>

                    {/* Title */}
                    <h3 style={productTitleStyle}>{product.title}</h3>

                    {/* Material */}
                    <p style={productMaterialStyle}>
                      <strong>Material:</strong> {product.material}
                    </p>

                    {/* Uses */}
                    {product.uses && product.uses.length > 0 && (
                      <div style={usesContainerStyle}>
                        <strong style={usesLabelStyle}>Ideal For:</strong>
                        <span style={usesListStyle}>{product.uses.join(', ')}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p style={productDescriptionStyle}>{product.description}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Footer Page */}
      <div style={footerPageStyle}>
        <div style={footerContentStyle}>
          <h3 style={footerTitleStyle}>Contact Us</h3>
          <div style={contactInfoStyle}>
            <p style={contactItemStyle}>
              <strong>Email:</strong> info@hybits.in
            </p>
            <p style={contactItemStyle}>
              <strong>Phone:</strong> +91-9945624643
            </p>
            <p style={contactItemStyle}>
              <strong>WhatsApp:</strong> +91-9945624643
            </p>
          </div>
          <p style={copyrightStyle}>
            &copy; {new Date().getFullYear()} Hybits. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

// PDF Styling Constants
const pdfContainerStyle = {
  width: '800px',
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: '#FEFBF6',
  fontFamily: "'Inter', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  color: '#1A382E',
  lineHeight: '1.6',
};

// Cover Page Styles
const coverPageStyle = {
  minHeight: '1123px', // A4 height in pixels at 96 DPI
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FEFBF6',
  padding: '60px 40px',
  pageBreakAfter: 'always',
};

const coverContentStyle = {
  textAlign: 'center',
  width: '100%',
};

const logoContainerStyle = {
  marginBottom: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const logoStyle = {
  maxWidth: '280px',
  height: 'auto',
  display: 'block',
};

const logoFallbackStyle = {
  display: 'none',
};

const logoTextStyle = {
  fontSize: '48px',
  fontWeight: '700',
  color: '#1A382E',
  margin: 0,
};


const coverTitleStyle = {
  fontSize: '48px',
  fontWeight: '700',
  color: '#1A382E',
  marginBottom: '20px',
  letterSpacing: '-0.02em',
};

const coverSubtitleStyle = {
  fontSize: '26px',
  color: '#58B692',
  marginBottom: '60px',
  fontWeight: '500',
};

const coverFooterStyle = {
  marginTop: '100px',
  paddingTop: '40px',
  borderTop: '2px solid #C9C9C9',
};

const coverDateStyle = {
  fontSize: '14px',
  color: '#666',
  margin: 0,
};

// Category Section Styles
const categorySectionStyle = {
  padding: '40px',
  backgroundColor: '#FEFBF6',
  pageBreakInside: 'avoid',
};

const categoryHeaderStyle = {
  marginBottom: '30px',
  paddingBottom: '15px',
  borderBottom: '3px solid #58B692',
};

const categoryTitleStyle = {
  fontSize: '32px',
  fontWeight: '600',
  color: '#1A382E',
  margin: 0,
  letterSpacing: '-0.01em',
};

// Products Grid Styles - 3 products per row
const productsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  marginTop: '20px',
};

// Product Card Styles
const productCardStyle = {
  backgroundColor: '#FFFFFF',
  border: '1px solid #C9C9C9',
  borderRadius: '12px',
  padding: '20px',
  pageBreakInside: 'avoid',
  minHeight: '380px',
  display: 'flex',
  flexDirection: 'column',
};

const productImageContainerStyle = {
  width: '100%',
  height: '160px',
  backgroundColor: '#FEFBF6',
  borderRadius: '8px',
  marginBottom: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  border: '1px solid #C9C9C9',
};

const productImageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  borderRadius: '8px',
};

const productInfoStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

const badgesContainerStyle = {
  marginBottom: '12px',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
};

const categoryBadgeStyle = {
  display: 'inline-block',
  padding: '4px 10px',
  backgroundColor: '#E3F7EF',
  color: '#1A382E',
  borderRadius: '6px',
  fontSize: '11px',
  fontWeight: '500',
};

const subcategoryBadgeStyle = {
  display: 'inline-block',
  padding: '4px 10px',
  backgroundColor: 'rgba(88, 182, 146, 0.3)',
  color: '#1A382E',
  borderRadius: '6px',
  fontSize: '11px',
  fontWeight: '500',
};

const productTitleStyle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#1A382E',
  marginBottom: '10px',
  marginTop: 0,
  lineHeight: '1.3',
};

const productMaterialStyle = {
  fontSize: '13px',
  color: '#666',
  marginBottom: '10px',
  marginTop: 0,
};

const usesContainerStyle = {
  marginBottom: '12px',
  fontSize: '13px',
};

const usesLabelStyle = {
  color: '#1A382E',
  marginRight: '6px',
};

const usesListStyle = {
  color: '#666',
};

const productDescriptionStyle = {
  fontSize: '12px',
  color: '#666',
  lineHeight: '1.6',
  marginTop: 'auto',
  marginBottom: 0,
};

// Footer Page Styles
const footerPageStyle = {
  minHeight: '1123px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FEFBF6',
  padding: '60px 40px',
  pageBreakBefore: 'always',
};

const footerContentStyle = {
  textAlign: 'center',
  width: '100%',
};

const footerTitleStyle = {
  fontSize: '32px',
  fontWeight: '600',
  color: '#1A382E',
  marginBottom: '30px',
};

const contactInfoStyle = {
  marginBottom: '40px',
  fontSize: '16px',
  color: '#666',
};

const contactItemStyle = {
  marginBottom: '12px',
  marginTop: 0,
};

const copyrightStyle = {
  fontSize: '14px',
  color: '#666',
  marginTop: '40px',
  paddingTop: '30px',
  borderTop: '2px solid #C9C9C9',
  marginBottom: 0,
};

