import { Truck, Droplets, Sparkles, Shield, Clock, MapPin } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Fleet Truck Washing',
    description: 'Comprehensive exterior washing for all types of commercial trucks. Professional results for your fleet.',
  },
  {
    icon: Droplets,
    title: 'Trailer Washing',
    description: 'Complete trailer cleaning for box trucks, dry vans, and all commercial trailers.',
  },
  {
    icon: Clock,
    title: 'Scheduled Fleet Washing',
    description: 'Weekly, bi-weekly, or monthly programs tailored to your business operations.',
  },
  {
    icon: MapPin,
    title: 'On-Site Mobile Service',
    description: 'We bring all equipment to your location across Nashville and surrounding areas.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4 font-medium">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Commercial Fleet Washing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional mobile fleet washing for trucks, vans, trailers, and commercial vehicles in Nashville, TN
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Custom Fleet Washing Programs
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              We create washing schedules that fit your operation. Contact us to discuss a program tailored to your fleet size and needs.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Request Fleet Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
