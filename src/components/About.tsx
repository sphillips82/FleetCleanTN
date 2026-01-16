import { Users, ThumbsUp, Leaf, Home } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Locally Owned',
    description: 'A family business rooted in Tennessee. We live here, work here, and care about our community.',
  },
  {
    icon: Users,
    title: 'Personal Service',
    description: 'You\'ll work directly with the owners. No corporate red tape, just honest, reliable service.',
  },
  {
    icon: ThumbsUp,
    title: 'Small Business Values',
    description: 'Your satisfaction is our reputation. We treat every customer like family.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Protecting Tennessee\'s environment with responsible cleaning products and practices.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4 font-medium">
              About FleetCleanTN
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Local Fleet Washing Partner
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              FleetCleanTN is a family-owned business proudly serving Tennessee's local businesses. We're not a national chain—we're your neighbors who understand the importance of building lasting relationships and delivering personalized service.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When you work with us, you're supporting a local family and getting the hands-on attention your fleet deserves. We take pride in every job because our reputation in this community depends on it. That's the difference between a local business and everyone else.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-gray-700 italic leading-relaxed">
                "We started this business to serve our local community with integrity and quality. Every fleet we clean represents a Tennessee business owner working hard just like us. That's why we treat your vehicles like our own."
              </p>
              <p className="text-gray-900 font-semibold mt-3">— The FleetCleanTN Family</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/1000_f_908633143_lfrg9khi6qqu5brer7xbdrgqxokteint-2.jpg"
                alt="Professional fleet washing service"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
