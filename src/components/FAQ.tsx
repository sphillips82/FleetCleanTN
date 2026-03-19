import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you offer recurring fleet washing programs?",
      answer: "Yes, we specialize in scheduled fleet washing programs. We offer weekly, bi-weekly, and monthly service plans tailored to your fleet's needs and your operation's schedule."
    },
    {
      question: "Do you clean trucks and trailers on-site?",
      answer: "Absolutely. We're a mobile fleet washing service, which means we bring all our equipment to your location in Nashville or surrounding areas. No need to take vehicles out of service or drive them anywhere."
    },
    {
      question: "What areas do you serve around Nashville?",
      answer: "We serve Nashville and surrounding areas including Murfreesboro, Franklin, Brentwood, Clarksville, Smyrna, Hendersonville, Lebanon, Gallatin, and Mount Juliet. Contact us to confirm service availability for your specific location."
    },
    {
      question: "Can you clean both small and large fleets?",
      answer: "Yes, we work with fleets of all sizes. Whether you have a few vehicles or a large commercial fleet, we can create a washing program that fits your needs and budget."
    },
    {
      question: "How long does it take to wash a truck or trailer?",
      answer: "Typical wash times vary based on vehicle size and condition, but we work efficiently to minimize downtime. We'll discuss timing during your quote to ensure our service fits your operational schedule."
    },
    {
      question: "Are you insured?",
      answer: "Yes, FleetCleanTN is fully insured for commercial fleet washing services. We carry proper insurance to protect your vehicles and property."
    },
    {
      question: "Do you provide water and electricity, or do we need to provide it?",
      answer: "We typically use your water source and may need access to electricity depending on the service. We'll discuss specific requirements during your quote so you know exactly what to expect."
    },
    {
      question: "How do I get started?",
      answer: "Simply request a quote through our contact form or call us at (629) 209-9274. We'll discuss your fleet size, washing needs, preferred schedule, and provide you with a customized quote."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4 font-medium">
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our mobile fleet washing services in Nashville
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
