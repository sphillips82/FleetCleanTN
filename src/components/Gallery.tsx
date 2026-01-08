const images = [
  {
    url: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Commercial delivery fleet',
  },
  {
    url: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Commercial truck fleet',
  },
  {
    url: 'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fleet of delivery trucks',
  },
  {
    url: 'https://images.pexels.com/photos/1118446/pexels-photo-1118446.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Commercial semi trucks',
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4 font-medium">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See The Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional results that speak for themselves
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
