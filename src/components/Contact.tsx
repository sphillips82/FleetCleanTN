import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    fleet_size: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        fleet_size: '',
        message: '',
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4 font-medium">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Request Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to keep your fleet looking professional? Contact us today for a customized quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-medium">
                (123) 456-7890
              </a>
              <p className="text-gray-600 text-sm mt-2">Mon-Fri: 7am-7pm<br />Sat-Sun: 8am-5pm</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@fleetcleantn.com" className="text-blue-600 hover:text-blue-700 font-medium break-all">
                info@fleetcleantn.com
              </a>
              <p className="text-gray-600 text-sm mt-2">We respond within 24 hours</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Service Area</h3>
              <p className="text-gray-600">
                Serving all of Tennessee and surrounding areas
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              {submitStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800">Thank you! We'll contact you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800">Something went wrong. Please try again or call us directly.</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="ABC Trucking"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="fleet_size" className="block text-gray-700 font-medium mb-2">
                  Fleet Size
                </label>
                <select
                  id="fleet_size"
                  name="fleet_size"
                  value={formData.fleet_size}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                >
                  <option value="">Select fleet size</option>
                  <option value="1-5">1-5 vehicles</option>
                  <option value="6-10">6-10 vehicles</option>
                  <option value="11-25">11-25 vehicles</option>
                  <option value="26-50">26-50 vehicles</option>
                  <option value="50+">50+ vehicles</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your fleet washing needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
