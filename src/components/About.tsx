import { Award, Users, ThumbsUp, Leaf } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Over 10 years of experience in commercial fleet maintenance and washing services.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Trained and certified technicians who treat your fleet with the utmost care.',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Guarantee',
    description: '100% satisfaction guaranteed or we\'ll make it right. Your trust is our priority.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Environmentally responsible cleaning products and water reclamation systems.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-4 font-medium">
              About FleetCleanTN
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tennessee's Most Trusted Fleet Washing Service
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At FleetCleanTN, we understand that your fleet is more than just vehicles—it's your business's mobile billboard. A clean fleet projects professionalism, builds customer trust, and protects your investment.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're committed to delivering exceptional mobile washing services that fit seamlessly into your operations. Our state-of-the-art equipment and eco-friendly products ensure your fleet looks its best while minimizing environmental impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fleet washing in action"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
