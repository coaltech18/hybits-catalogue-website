'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-hybits-dark text-[var(--hybits-surface)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo showTagline={true} size="default" variant="light" />
            </div>
            <p className="text-sm opacity-90 mt-2">
              Bangalore, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/catalogue"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Catalogue
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a
                  href="mailto:info@hybits.in"
                  className="hover:opacity-100 transition-opacity"
                >
                  info@hybits.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+91-9945624643"
                  className="hover:opacity-100 transition-opacity"
                >
                  +91-9945624643
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919945624643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition-opacity"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-hybits-green-50 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Hybits. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

