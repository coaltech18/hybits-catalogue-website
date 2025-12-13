import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';
import PlaceholderImage from '@/components/PlaceholderImage';
import CTAButton from '@/components/CTAButton';

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://catalogue.hybits.in';

  return {
    title: `${product.title} - Hybits Catalogue`,
    description: product.description,
    alternates: {
      canonical: `${baseUrl}/catalogue/${product.id}`,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      images: [`${baseUrl}${product.image}`],
    },
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // JSON-LD Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://catalogue.hybits.in'}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: 'Hybits',
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
    },
  };

  const enquirySubject = encodeURIComponent(
    `Enquiry for ${product.title}`
  );
  const enquiryEmail = `info@hybits.in?subject=${enquirySubject}`;
  const whatsappNumber = '919945624643'; // WhatsApp number without +, -, or spaces
  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in ${product.title}`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-hybits-green hover:text-hybits-dark transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <a
                  href="/catalogue"
                  className="text-hybits-green hover:text-hybits-dark transition-colors"
                >
                  Catalogue
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-hybits-dark font-medium">{product.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="w-full">
              <PlaceholderImage
                slug={product.id}
                alt={product.title}
                width={600}
                height={384}
                className="w-full h-96 rounded-xl"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6 flex flex-col justify-start lg:justify-center">
              {/* Category Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-hybits-green-20 text-hybits-dark rounded">
                  {product.category}
                </span>
                {product.subcategory && (
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-hybits-green-50 text-hybits-dark rounded">
                    {product.subcategory}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-semibold text-hybits-dark">
                {product.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-700">{product.description}</p>

              {/* Specifications Table */}
              <div className="border border-[#C9C9C9] rounded-xl p-5 shadow-sm bg-white">
                <h2 className="text-xl font-semibold text-hybits-dark mb-4">
                  Specifications
                </h2>
                <dl className="space-y-3">
                  <div className="flex justify-between">
                    <dt className="font-medium text-gray-700">Material:</dt>
                    <dd className="text-gray-900">{product.material}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium text-gray-700">Size:</dt>
                    <dd className="text-gray-900">{product.size}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium text-gray-700">Weight:</dt>
                    <dd className="text-gray-900">{product.weight}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-medium text-gray-700">Finish:</dt>
                    <dd className="text-gray-900">{product.finish}</dd>
                  </div>
                </dl>
              </div>

              {/* Size Options - Show for chat plate */}
              {product.id === 'chat-plate' && product.sizeOptions && (
                <div className="border border-[#C9C9C9] rounded-xl p-5 shadow-sm bg-white">
                  <h2 className="text-xl font-semibold text-hybits-dark mb-4">
                    Available Sizes
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {product.sizeOptions.map((size, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-hybits-green-20 text-hybits-dark rounded-lg font-medium border border-hybits-green/30"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-3">
                    Available in 5", 6", and 7" diameter options. Please specify your preferred size when enquiring.
                  </p>
                </div>
              )}

              {/* Uses */}
              <div>
                <h2 className="text-xl font-semibold text-hybits-dark mb-3">
                  Ideal For
                </h2>
                <ul className="grid grid-cols-2 gap-2">
                  {product.uses.map((use, index) => (
                    <li
                      key={index}
                      className="px-3 py-1 bg-hybits-surface text-hybits-dark rounded-full text-sm"
                    >
                      {use}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hygiene */}
              <div>
                <h2 className="text-xl font-semibold text-hybits-dark mb-3">
                  Hygiene & Care
                </h2>
                <ul className="space-y-2">
                  {product.hygiene.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-hybits-green mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <CTAButton
                  href={`mailto:${enquiryEmail}`}
                  variant="primary"
                  className="flex-1 text-center"
                  aria-label={`Send enquiry email for ${product.title}`}
                >
                  Enquire
                </CTAButton>
                <CTAButton
                  href={whatsappUrl}
                  variant="secondary"
                  className="flex-1 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contact via WhatsApp about ${product.title}`}
                >
                  WhatsApp
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

