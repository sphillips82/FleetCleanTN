import { Calendar, Truck, Clock, CheckCircle } from 'lucide-react';

export default function FleetPrograms() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4 font-medium">
            Scheduled Service
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fleet Washing Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide scheduled fleet washing programs for businesses that need consistent, reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Weekly, Bi-Weekly, or Monthly</h3>
            <p className="text-gray-600">Choose the schedule that fits your operation</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">On-Site Mobile Washing</h3>
            <p className="text-gray-600">We come to your location with all equipment</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Trucks, Vans, Trailers</h3>
            <p className="text-gray-600">All types of commercial vehicles and equipment</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Service times that work with your operation</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Request Your Fleet Quote
          </button>
        </div>
      </div>
    </section>
  );
}
