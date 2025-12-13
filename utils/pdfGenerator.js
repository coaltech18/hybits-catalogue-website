/**
 * PDF Generator Utility
 * 
 * Client-side PDF generation using html2pdf.js
 * Generates a printable catalogue PDF from product data
 */

import React from 'react';
import html2pdf from 'html2pdf.js';
import { createRoot } from 'react-dom/client';
import CataloguePDF from '@/components/pdf/CataloguePDF';

/**
 * Generate PDF catalogue from products
 * 
 * @param {Array} products - Array of product objects from data/products.js
 * @returns {Promise} - Promise that resolves when PDF is generated
 */
export function generateCataloguePDF(products) {
  // PDF generation configuration
  const pdfConfig = {
    margin: 10,
    filename: 'Hybits-Catalogue.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      allowTaint: true,
    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  // Create a temporary DOM container
  const tempContainer = document.createElement('div');
  tempContainer.id = 'pdf-temp-container';
  document.body.appendChild(tempContainer);

  // Render CataloguePDF component wrapped in a div with absolute positioning
  const root = createRoot(tempContainer);
  root.render(
    <div id="pdf-content" style={{ position: 'absolute', top: '-9999px', width: '800px', backgroundColor: '#FEFBF6' }}>
      <CataloguePDF products={products} />
    </div>
  );

  // Wait for React to render and images to load, then generate PDF
  return new Promise((resolve, reject) => {
    let renderAttempts = 0;
    const maxAttempts = 20; // 10 seconds max wait

    const checkAndGenerate = () => {
      renderAttempts++;
      
      // Check if content is rendered (look inside the pdf-content wrapper)
      const pdfContentWrapper = tempContainer.querySelector('#pdf-content');
      const pdfContent = pdfContentWrapper ? pdfContentWrapper.querySelector('.catalogue-pdf') : null;
      const hasContent = pdfContent !== null;
      const textLength = tempContainer.textContent ? tempContainer.textContent.trim().length : 0;
      const hasText = textLength > 100; // At least 100 characters
      
      // Debug logging (only first few attempts)
      if (renderAttempts <= 3) {
        console.log(`PDF render check ${renderAttempts}:`, {
          hasContent,
          hasText,
          textLength,
          childrenCount: tempContainer.children.length,
          innerHTML: tempContainer.innerHTML.substring(0, 200)
        });
      }
      
      if (hasContent && hasText) {
        // Wait for images to load (look inside the pdf-content wrapper)
        const pdfContentWrapper = tempContainer.querySelector('#pdf-content');
        const images = pdfContentWrapper ? pdfContentWrapper.querySelectorAll('img') : [];
        let imagesLoaded = 0;
        let imagesToLoad = images.length;

        if (imagesToLoad === 0) {
          // No images, proceed immediately
          generatePDF();
          return;
        }

        const imageLoadPromises = Array.from(images).map((img) => {
          if (img.complete) {
            imagesLoaded++;
            return Promise.resolve();
          }
          return new Promise((imgResolve, imgReject) => {
            const timeout = setTimeout(() => {
              imgReject(new Error('Image load timeout'));
            }, 5000);
            
            img.onload = () => {
              clearTimeout(timeout);
              imagesLoaded++;
              imgResolve();
            };
            img.onerror = () => {
              clearTimeout(timeout);
              imagesLoaded++; // Count as loaded even if error (will show placeholder)
              imgResolve();
            };
          });
        });

        Promise.all(imageLoadPromises)
          .then(() => {
            // Additional delay to ensure everything is painted
            setTimeout(() => {
              generatePDF();
            }, 500);
          })
          .catch(() => {
            // Even if some images fail, proceed with PDF generation
            setTimeout(() => {
              generatePDF();
            }, 500);
          });
      } else if (renderAttempts < maxAttempts) {
        // Content not ready yet, wait a bit more
        setTimeout(checkAndGenerate, 500);
      } else {
        // Timeout - try to generate anyway
        console.warn('PDF generation timeout - proceeding anyway');
        generatePDF();
      }
    };

    const generatePDF = () => {
      // Ensure the pdf-content wrapper is visible (not display:none) for html2canvas
      const pdfContentWrapper = tempContainer.querySelector('#pdf-content');
      if (pdfContentWrapper) {
        pdfContentWrapper.style.display = 'block';
        // Force a reflow to ensure browser has painted
        void pdfContentWrapper.offsetHeight;
      }
      
      // Additional delay to ensure everything is painted and images are loaded
      setTimeout(() => {
        // Double-check content is there (look inside the pdf-content wrapper)
        const pdfContentWrapper = tempContainer.querySelector('#pdf-content');
        const content = pdfContentWrapper ? pdfContentWrapper.querySelector('.catalogue-pdf') : null;
        if (!content || !content.textContent || content.textContent.trim().length < 100) {
          console.error('PDF content not ready:', {
            hasContent: !!content,
            textLength: content?.textContent?.length || 0,
            wrapperExists: !!pdfContentWrapper
          });
          reject(new Error('PDF content not ready'));
          return;
        }

        console.log('Generating PDF from content...', {
          textLength: tempContainer.textContent.length,
          childrenCount: tempContainer.children.length
        });

        // 300ms delay before calling html2pdf so DOM fully loads
        setTimeout(() => {
          // Target the pdf-content wrapper, not the tempContainer
          const pdfContentWrapper = tempContainer.querySelector('#pdf-content');
          const targetElement = pdfContentWrapper || tempContainer;
          
          html2pdf()
            .set(pdfConfig)
            .from(targetElement)
            .save()
          .then(() => {
            console.log('PDF generated successfully');
            // Clean up: unmount React component and remove DOM node
            root.unmount();
            setTimeout(() => {
              if (document.body.contains(tempContainer)) {
                document.body.removeChild(tempContainer);
              }
            }, 100);
            resolve();
          })
          .catch((error) => {
            // Clean up on error
            root.unmount();
            setTimeout(() => {
              if (document.body.contains(tempContainer)) {
                document.body.removeChild(tempContainer);
              }
            }, 100);
            console.error('PDF generation error:', error);
            reject(error);
          });
        }, 300); // 300ms delay before html2pdf
      }, 1000); // Wait for content to render
    };

    // Start checking after initial render delay
    setTimeout(checkAndGenerate, 1000);
  });
}

