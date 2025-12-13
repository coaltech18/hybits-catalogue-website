'use client';

import Link from 'next/link';
import CTAButton from './CTAButton';
import Logo from './Logo';

export default function Header() {
  return (
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
            <Link
              href="/api/export-pdf"
              className="hidden md:block text-sm text-hybits-dark hover:text-hybits-green transition-colors font-medium"
            >
              Download PDF
            </Link>
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
          <Link
            href="/api/export-pdf"
            className="block text-sm text-hybits-dark hover:text-hybits-green transition-colors font-medium"
          >
            Download PDF Catalogue
          </Link>
        </div>
      </div>
    </header>
  );
}

