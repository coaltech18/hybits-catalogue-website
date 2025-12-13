import Link from 'next/link';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Hybits - Smart Dish Management Solutions',
  description: 'Premium dishware and catering solutions for events, restaurants, and hospitality businesses.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEFBF6]">
      {/* Hero Section */}
      <section className="bg-[#FEFBF6] py-32 sm:py-40 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-hybits-dark mb-6 mx-auto">
            Smart Dish Management Solutions
          </h1>
          <p className="text-xl sm:text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Premium dishware and catering solutions for events, restaurants, and
            hospitality businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <CTAButton href="/catalogue" variant="primary" className="text-lg px-8 py-4">
              View Catalogue
            </CTAButton>
            <CTAButton href="mailto:info@hybits.in?subject=Quote Request" variant="secondary" className="text-lg px-8 py-4">
              Get Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-hybits-dark text-center mb-12">
            Why Choose Hybits?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center bg-[#FAFAFA] rounded-xl shadow-sm p-8 sm:p-10">
              <div className="w-20 h-20 bg-hybits-green-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-hybits-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-hybits-dark mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                High-quality materials and finishes for every product.
              </p>
            </div>
            <div className="text-center bg-[#FAFAFA] rounded-xl shadow-sm p-8 sm:p-10">
              <div className="w-20 h-20 bg-hybits-green-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-hybits-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-hybits-dark mb-3">
                Wide Range
              </h3>
              <p className="text-gray-600">
                Complete catalogue covering all your dishware needs.
              </p>
            </div>
            <div className="text-center bg-[#FAFAFA] rounded-xl shadow-sm p-8 sm:p-10">
              <div className="w-20 h-20 bg-hybits-green-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-hybits-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M15 11a3 3 0 11-6 0m6 0a3 3 0 10-6 0m6 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-hybits-dark mb-3">
                Sustainable
              </h3>
              <p className="text-gray-600">
                Eco-friendly solutions for responsible catering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-hybits-green-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-hybits-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Browse our complete catalogue or get in touch for a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/catalogue" variant="primary" className="text-lg px-8 py-4">
              Browse Catalogue
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" className="text-lg px-8 py-4">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}

