export const metadata = {
  title: 'Sustainability - Hybits',
  description: 'Learn about Hybits commitment to sustainable and eco-friendly dishware solutions.',
};

export default function SustainabilityPage() {
  const commitments = [
    {
      title: 'Durable products designed for long-term use, reducing waste',
    },
    {
      title: 'Recyclable materials where possible',
    },
    {
      title: 'Energy-efficient manufacturing processes',
    },
    {
      title: 'Reusable products that reduce single-use waste',
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-hybits-dark mb-6">
          Sustainability
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-10">
            At Hybits, we are committed to providing sustainable and
            eco-friendly dishware solutions that minimize environmental impact
            while maintaining the highest quality standards.
          </p>
          <h2 className="text-2xl font-semibold text-hybits-dark mt-8 mb-8">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border-l-4 border-[#58B692] shadow-sm"
              >
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-[#58B692] mr-4 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">
                    {commitment.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

