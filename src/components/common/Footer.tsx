import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';

type SubscribeFormData = {
  email: string;
};

const Footer = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SubscribeFormData>();

  const onSubmit = (data: SubscribeFormData) => {
    console.log('Subscribed:', data);
    // In a real app, you would send this to your backend
    alert('Thank you for subscribing to our newsletter!');
    reset();
  };

  return (
    <footer className="bg-primary-600 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="text-accent-500" size={24} />
              <h3 className="text-xl font-bold text-white">UrbanNest Realty</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Find Your Perfect Nest in Lahore's premier neighborhoods. We specialize in luxury properties in DHA & Bahria Town.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/agents" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Our Agents
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">123 Real Estate Ave, DHA Phase 5, Lahore, Pakistan</p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent-500 flex-shrink-0" />
                <a href="tel:+923001234567" className="text-gray-300 hover:text-accent-500 transition-colors">
                  +92 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent-500 flex-shrink-0" />
                <a href="mailto:info@urbannest.com" className="text-gray-300 hover:text-accent-500 transition-colors">
                  info@urbannest.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest property listings and real estate news.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none ${
                    errors.email ? 'border-2 border-error-500' : ''
                  }`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full bg-accent-500 text-white px-4 rounded-r-md hover:bg-accent-600 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              {errors.email && (
                <p className="text-error-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </form>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} UrbanNest Realty. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-accent-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-accent-500 transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-accent-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;