const images = [
  {
    url: 'https://images.pexels.com/photos/1619788/pexels-photo-1619788.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Semi truck fleet',
  },
  {
    url: 'https://images.pexels.com/photos/1051373/pexels-photo-1051373.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Garbage truck',
  },
  {
    url: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Dump truck',
  },
  {
    url: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Heavy equipment excavator',
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
