import { Truck, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Truck className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">
                FleetClean<span className="text-blue-400">TN</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Tennessee's premier mobile fleet washing service. Professional, reliable, and eco-friendly cleaning for commercial vehicles.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-5 h-5" />
              <span>Available 24/7</span>
            </div>
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
              <li>Pressure Washing</li>
              <li>Detailing Services</li>
              <li>Protective Coating</li>
              <li>Scheduled Maintenance</li>
              <li>Mobile Service</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                    (123) 456-7890
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
                  Serving all of Tennessee<br />and surrounding areas
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} FleetCleanTN. All rights reserved.
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
