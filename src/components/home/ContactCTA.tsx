import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1500"
          alt="Modern house exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Get in touch with UrbanNest Realty experts today and let us help you find the property of your dreams.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a 
              href="tel:+923001234567" 
              className="btn btn-accent flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              <span>+92 300 123 4567</span>
            </a>
            <a 
              href="mailto:info@urbannest.com" 
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              <span>Email Us</span>
            </a>
          </div>
          
          <Link 
            to="/contact" 
            className="text-accent-500 font-semibold hover:text-accent-300 transition-colors underline text-lg"
          >
            Visit our contact page for more ways to reach us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;