'use client';

import { useState } from 'react';
import Link from 'next/link';
import CTAButton from './CTAButton';
import Logo from './Logo';
import { generateCataloguePDF } from '@/utils/pdfGenerator';
import { products } from '@/data/products';

export default function Header() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async (e) => {
    e.preventDefault();
    
    if (isGenerating) return;
    
    setIsGenerating(true);
    
    try {
      await generateCataloguePDF(products);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {/* PDF Generation Loading Modal */}
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

      <header className="bg-[#ffffff] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo showTagline={false} size="default" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/catalogue"
              className="text-hybits-dark hover:text-hybits-green transition-colors font-medium"
            >
              Catalogue
            </Link>
            <Link
              href="/sustainability"
              className="text-hybits-dark hover:text-hybits-green transition-colors font-medium"
            >
              Sustainability
            </Link>
            <Link
              href="/contact"
              className="text-hybits-dark hover:text-hybits-green transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA and Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              className="hidden md:block text-sm text-hybits-dark hover:text-hybits-green transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? 'Generating...' : 'Download PDF'}
            </button>
            <CTAButton href="mailto:info@hybits.in?subject=Quote Request" variant="secondary">
              Get a Quote
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-[#C9C9C9]">
        <div className="px-4 py-3 space-y-2">
          <Link
            href="/catalogue"
            className="block text-hybits-dark hover:text-hybits-green transition-colors font-medium"
          >
            Catalogue
          </Link>
          <Link
            href="/sustainability"
            className="block text-hybits-dark hover:text-hybits-green transition-colors font-medium"
          >
            Sustainability
          </Link>
          <Link
            href="/contact"
            className="block text-hybits-dark hover:text-hybits-green transition-colors font-medium"
          >
            Contact
          </Link>
          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="block text-sm text-hybits-dark hover:text-hybits-green transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed w-full text-left"
          >
            {isGenerating ? 'Generating...' : 'Download PDF Catalogue'}
          </button>
        </div>
      </div>
    </header>
    </>
  );
}

