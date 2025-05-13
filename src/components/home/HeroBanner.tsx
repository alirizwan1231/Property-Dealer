import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../common/SearchBar';

const HeroBanner = () => {
  return (
    <div className="relative h-hero md:h-hero-mobile lg:h-hero overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1500"
          alt="Luxury home exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/70"></div>
      </div>
      
      {/* Hero content */}
      <div className="container-custom h-full flex flex-col justify-center relative z-10 pt-16">
        <div className="max-w-2xl text-white animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your Dream Home in Lahore
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Discover premium properties in DHA & Bahria Town with UrbanNest Realty
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/properties" className="btn btn-accent btn-lg">
              Browse Properties
            </Link>
            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-600 btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Search bar - only on larger screens */}
        <div className="hidden lg:block absolute -bottom-16 left-0 right-0">
          <div className="container-custom">
            <SearchBar isHero={true} />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center hidden md:block">
        <p className="text-sm mb-2">Scroll to Explore</p>
        <ArrowRight size={24} className="mx-auto transform rotate-90" />
      </div>
    </div>
  );
};

export default HeroBanner;