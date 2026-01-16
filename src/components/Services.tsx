import { Truck, Droplets, Sparkles, Shield, Clock, MapPin } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Fleet Truck Washing',
    description: 'Comprehensive exterior washing for all types of commercial trucks and trailers. Professional results that enhance your brand image.',
  },
  {
    icon: Droplets,
    title: 'Pressure Washing',
    description: 'High-powered pressure washing to remove stubborn dirt, grime, and road debris. Eco-friendly cleaning solutions.',
  },
  {
    icon: Clock,
    title: 'Scheduled Maintenance',
    description: 'Regular washing schedules tailored to your fleet\'s needs. Never worry about vehicle appearance again.',
  },
  {
    icon: MapPin,
    title: 'We Come To You',
    description: 'Mobile service throughout Tennessee. Supporting local businesses one fleet at a time.',
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
            Local Service, Professional Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Supporting Tennessee businesses with reliable fleet washing from owners who care about your success
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
              Flexible Programs for Local Businesses
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              As a family-owned business, we understand every company has unique needs. Call us directly to discuss custom washing schedules that work for you—no automated systems, just real conversation with the owners.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Talk With The Owners
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
