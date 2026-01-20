import { ExternalLink } from 'lucide-react';

function Go() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome</h1>
          <p className="text-xl text-gray-600">Choose your cleaning service below</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/fleetclean_tn_vest_logo.png"
                  alt="Fleet Clean TN"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  Fleet Clean TN
                  <ExternalLink className="w-6 h-6 text-gray-400" />
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Professional fleet and commercial vehicle cleaning services
                </p>
                <a
                  href="https://www.fleetcleantn.com"
                  className="inline-block px-6 py-3 bg-blue-50 text-blue-700 font-semibold rounded-lg hover:bg-blue-100 transition-colors duration-200"
                >
                  Visit www.fleetcleantn.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 flex items-center justify-center w-32 h-32">
                <div className="relative">
                  <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
                    <path d="M50 10 L70 30 L90 25 L85 45 L95 65 L75 70 L65 90 L50 80 L35 90 L25 70 L5 65 L15 45 L10 25 L30 30 Z" fill="#10b981" opacity="0.2"/>
                    <path d="M50 20 L65 35 L80 32 L77 47 L85 60 L70 63 L63 78 L50 70 L37 78 L30 63 L15 60 L23 47 L20 32 L35 35 Z" fill="#10b981"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-12 bg-gray-800 rounded-b-full" style={{clipPath: 'polygon(30% 0, 70% 0, 60% 100%, 40% 100%)'}}></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  Clean It TN
                  <ExternalLink className="w-6 h-6 text-gray-400" />
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  Comprehensive cleaning solutions for your business and property
                </p>
                <a
                  href="https://cleanittn.com"
                  className="inline-block px-6 py-3 bg-green-50 text-green-700 font-semibold rounded-lg hover:bg-green-100 transition-colors duration-200"
                >
                  Visit cleanittn.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg">Professional cleaning services in Tennessee</p>
        </div>
      </div>
    </div>
  );
}

export default Go;
