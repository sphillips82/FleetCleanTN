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
          <div className="inline-block bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-blue-300 font-medium">Locally Owned & Operated in Tennessee</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/50"
            >
              Get Free Quote
            </button>
            <a
              href="tel:+16292099274"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              (629) 209-9274
            </a>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Keep Your Fleet <span className="text-blue-400">Spotless</span> & Professional
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Family-owned mobile fleet washing serving Tennessee businesses.
            Your neighbors, committed to keeping your fleet spotless with personalized service you can trust.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Available Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-300">Local & Family Owned</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">TN</div>
              <div className="text-gray-300">Born & Raised</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
