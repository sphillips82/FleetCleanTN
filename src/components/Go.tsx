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
          <a
            href="https://www.fleetcleantn.com"
            className="block bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
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
                <p className="text-lg text-gray-600">
                  Professional fleet and commercial vehicle cleaning services
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://cleanittn.com"
            className="block bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <img
                  src="/cleanit_tn_logo_nbg.png"
                  alt="Clean It TN"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  Clean It TN
                  <ExternalLink className="w-6 h-6 text-gray-400" />
                </h2>
                <p className="text-lg text-gray-600">
                  Comprehensive cleaning solutions for your business and property
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-lg">Professional cleaning services in Tennessee</p>
        </div>
      </div>
    </div>
  );
}

export default Go;
