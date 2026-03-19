import { Users, ThumbsUp, Leaf, Home } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Locally Owned',
    description: 'Owner-operated business based in Nashville, Tennessee.',
  },
  {
    icon: Users,
    title: 'Commercial Focused',
    description: 'Specializing in fleet washing for businesses and contractors.',
  },
  {
    icon: ThumbsUp,
    title: 'Reliable Service',
    description: 'Consistent, scheduled washing programs for your fleet.',
  },
  {
    icon: Leaf,
    title: 'Mobile Service',
    description: 'We bring all equipment to your location across Nashville and surrounding areas.',
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
              Local Fleet Washing in Nashville
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              FleetCleanTN is an owner-operated mobile fleet washing service serving Nashville and surrounding areas. We provide professional truck and trailer cleaning for commercial fleets.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We specialize in scheduled washing programs tailored to your fleet size and business operations. Our mobile service brings all equipment to your location.
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
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Serving Nashville and surrounding areas:</strong> Murfreesboro, Franklin, Brentwood, Clarksville, Smyrna, Hendersonville, Lebanon, Gallatin, and Mount Juliet.
              </p>
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
