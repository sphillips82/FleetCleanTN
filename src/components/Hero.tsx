import { Truck, Phone, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-[url('/fleetcleantn(logo_no_backdrop).png')] bg-cover bg-center opacity-20"></div>

      <nav className="relative z-10 container mx-auto px-6 py-6" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-blue-400 transition-colors" aria-label="View our services">Services</a>
            <a href="#about" className="hover:text-blue-400 transition-colors" aria-label="Learn about us">About</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors" aria-label="Contact us">Contact</a>
            <a href="tel:+16292099274" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-2.5 rounded-lg transition-colors font-medium" aria-label="Call FleetCleanTN at 629-209-9274">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mobile Fleet Washing in <span className="text-blue-400">Nashville, TN</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            FleetCleanTN provides mobile fleet washing for trucks, vans, trailers, and commercial vehicles across Nashville and surrounding areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/50"
            >
              Request Fleet Quote
            </button>
            <a
              href="tel:+16292099274"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Owner-Operated</div>
              <div className="text-gray-300 text-sm">Nashville Based</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Fully Insured</div>
              <div className="text-gray-300 text-sm">Commercial Coverage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">Free Quotes</div>
              <div className="text-gray-300 text-sm">No Obligation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
