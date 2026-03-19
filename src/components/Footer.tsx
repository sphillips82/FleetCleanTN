import { Truck, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img src="/fleetcleantn(logo_no_backdrop).png" alt="FleetClean TN" className="h-24 w-auto object-contain" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Owner-operated mobile fleet washing in Nashville, TN. Professional truck and trailer cleaning for commercial fleets.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Get Quote
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>Fleet Truck Washing</li>
              <li>Trailer Washing</li>
              <li>Scheduled Fleet Washing</li>
              <li>On-Site Mobile Service</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+16292099274" className="hover:text-blue-400 transition-colors">
                    (629) 209-9274
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@fleetcleantn.com" className="hover:text-blue-400 transition-colors break-all">
                    info@fleetcleantn.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  Nashville, TN<br />and surrounding areas
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} FleetCleanTN. Locally Owned & Operated. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
