const images = [
  {
    url: 'https://images.pexels.com/photos/6894420/pexels-photo-6894420.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fleet truck washing service',
  },
  {
    url: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Commercial vehicle cleaning',
  },
  {
    url: 'https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Professional truck detailing',
  },
  {
    url: 'https://images.pexels.com/photos/4489744/pexels-photo-4489744.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mobile fleet washing',
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

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-100 rounded-2xl p-8 max-w-3xl">
            <p className="text-gray-700 text-lg mb-6 italic">
              "FleetCleanTN has been servicing our fleet of 45 trucks for over 3 years. They're always on time, professional, and our trucks look brand new after every wash. Highly recommend!"
            </p>
            <div className="font-bold text-gray-900">— Mike Johnson</div>
            <div className="text-gray-600">Operations Manager, ABC Logistics</div>
          </div>
        </div>
      </div>
    </section>
  );
}
