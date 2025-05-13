import { CheckCircle2, Shield, Clock } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const Benefits = () => {
  const benefits = [
    {
      icon: <CheckCircle2 size={48} className="text-accent-500" />,
      title: 'Verified Listings',
      description: 'All our properties are thoroughly verified to ensure accuracy and authenticity. We personally visit each property and verify ownership details.',
    },
    {
      icon: <Shield size={48} className="text-accent-500" />,
      title: 'Local Experts',
      description: 'Our agents are specialists in Lahore\'s premium neighborhoods with deep knowledge of DHA and Bahria Town property market trends.',
    },
    {
      icon: <Clock size={48} className="text-accent-500" />,
      title: 'Fast Closings',
      description: 'With our streamlined process and expert negotiation skills, we help close deals quickly and efficiently, saving you time and hassle.',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Why Choose UrbanNest Realty"
          subtitle="We provide a premium real estate experience with our expert team and exclusive listings"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-secondary-50 p-8 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-600 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;