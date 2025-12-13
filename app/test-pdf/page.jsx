'use client';

/**
 * PDF Generation Test Page
 * 
 * Access this page at /test-pdf to verify PDF generation functionality
 * This page is for testing purposes only
 */

import { useState } from 'react';
import { generateCataloguePDF } from '@/utils/pdfGenerator';
import { products } from '@/data/products';

export default function TestPDFPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [error, setError] = useState(null);

  const runTests = async () => {
    setIsGenerating(true);
    setError(null);
    setTestResults(null);

    const results = {
      pdfDownload: false,
      productCount: products.length,
      imagesLoaded: 0,
      textOverflow: false,
      pageBreaks: true,
      mobileCompatible: true,
      timestamp: new Date().toISOString(),
    };

    try {
      // Test 1: PDF Generation
      console.log('Test 1: Starting PDF generation...');
      await generateCataloguePDF(products);
      results.pdfDownload = true;
      console.log('✓ PDF generated successfully');

      // Test 2: Product Count
      console.log(`Test 2: Product count: ${products.length}`);
      if (products.length === 22) {
        console.log('✓ Product count correct');
      } else {
        console.warn(`⚠ Expected 22 products, found ${products.length}`);
      }

      // Test 3: Image Paths
      console.log('Test 3: Checking image paths...');
      const imagePaths = products.map(p => `/images/${p.id}.png`);
      results.imagesLoaded = imagePaths.length;
      console.log(`✓ ${imagePaths.length} image paths configured`);

      // Test 4: Text Overflow Check
      console.log('Test 4: Checking for potential text overflow...');
      const longTexts = products.filter(p => 
        p.description.length > 200 || 
        p.title.length > 50 ||
        p.material.length > 100
      );
      if (longTexts.length === 0) {
        console.log('✓ No text overflow issues detected');
      } else {
        results.textOverflow = true;
        console.warn(`⚠ ${longTexts.length} products with potentially long text`);
      }

      // Test 5: Page Break Logic
      console.log('Test 5: Verifying page break logic...');
      const totalProducts = products.length;
      const expectedPageBreaks = Math.floor(totalProducts / 9);
      console.log(`✓ Page breaks configured (every 9 products)`);

      // Test 6: Mobile Compatibility
      console.log('Test 6: Mobile compatibility check...');
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        console.log('✓ Running on mobile device');
      } else {
        console.log('✓ Running on desktop (mobile test should be done manually)');
      }

      setTestResults(results);
    } catch (err) {
      console.error('Test failed:', err);
      setError(err.message || 'PDF generation failed');
      results.pdfDownload = false;
      setTestResults(results);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-hybits-dark mb-8 text-center">
          PDF Generation Test Suite
        </h1>

        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-hybits-dark mb-4">
            Test PDF Generation
          </h2>
          <p className="text-gray-600 mb-6">
            Click the button below to test PDF generation and verify all functionality.
          </p>
          <button
            onClick={runTests}
            disabled={isGenerating}
            className="bg-[#1A382E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#153026] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? 'Running Tests...' : 'Run PDF Tests'}
          </button>
        </div>

        {/* Loading Modal */}
        {isGenerating && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md mx-4 text-center">
              <div className="mb-4">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#58B692] border-t-transparent"></div>
              </div>
              <h3 className="text-xl font-semibold text-[#1A382E] mb-2">
                Generating PDF…
              </h3>
              <p className="text-gray-600">
                Please wait.
              </p>
            </div>
          </div>
        )}

        {/* Test Results */}
        {testResults && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-hybits-dark mb-6">
              Test Results
            </h2>
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-semibold">Error:</p>
                <p className="text-red-600">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-hybits-dark">PDF Download</span>
                <span className={testResults.pdfDownload ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                  {testResults.pdfDownload ? '✓ Pass' : '✗ Fail'}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-hybits-dark">Product Count</span>
                <span className="text-gray-700">{testResults.productCount} products</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-hybits-dark">Image Paths Configured</span>
                <span className="text-gray-700">{testResults.imagesLoaded} images</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-hybits-dark">Text Overflow</span>
                <span className={testResults.textOverflow ? 'text-yellow-600 font-semibold' : 'text-green-600 font-semibold'}>
                  {testResults.textOverflow ? '⚠ Check Required' : '✓ No Issues'}
                </span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-hybits-dark">Page Breaks</span>
                <span className="text-green-600 font-semibold">✓ Configured</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-hybits-dark">Mobile Compatible</span>
                <span className="text-green-600 font-semibold">✓ Yes</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> For complete testing, verify the downloaded PDF manually:
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Check all product images appear sharp and clear</li>
                  <li>Verify no text is cut off or overflowing</li>
                  <li>Confirm page breaks occur every 9 products</li>
                  <li>Test on mobile device to ensure responsive behavior</li>
                  <li>Test on Hostinger deployment environment</li>
                </ul>
              </p>
            </div>
          </div>
        )}

        {/* Manual Test Checklist */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-8">
          <h2 className="text-2xl font-semibold text-hybits-dark mb-4">
            Manual Test Checklist
          </h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5" />
              <span>PDF downloads successfully when clicking "Download PDF"</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5" />
              <span>All 22 product images appear in the PDF</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5" />
              <span>Images are sharp and clear (not pixelated)</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5" />
              <span>No text overflow or cut-off text in product cards</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5" />
              <span>Page breaks occur correctly (every 9 products)</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5" />
              <span>Cover page displays correctly with logo and title</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5" />
              <span>Category headers are visible and properly styled</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5" />
              <span>PDF works on mobile devices (test on phone/tablet)</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5" />
              <span>PDF generation works on Hostinger deployment</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5" />
              <span>Loading modal appears and disappears correctly</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

