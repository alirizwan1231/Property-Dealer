import { Building, Users, Trophy, Home } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <SectionTitle
            title="About UrbanNest Realty"
            subtitle="Your trusted partner in finding the perfect property in Lahore"
          />
        </div>
        
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-primary-600 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Founded in 2015 by Sana Qureshi, UrbanNest Realty started with a simple mission: to transform the real estate experience in Lahore by prioritizing client satisfaction, transparency, and personalized service.
              </p>
              <p>
                After years working for large agencies, Sana noticed a gap in the market for a boutique agency that could provide the attention and care that clients deserved. What began as a small office with just two agents has now grown into a respected team of experienced professionals specializing in Lahore's premium neighborhoods.
              </p>
              <p>
                Our name "UrbanNest" reflects our commitment to helping you find not just a property, but a home—a place where you can build your nest and create lasting memories. We understand that real estate decisions are among the most significant investments you'll make, and we're dedicated to guiding you through every step of the process.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1560065/pexels-photo-1560065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="UrbanNest Realty office"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-500 rounded-lg -z-10 -ml-6 -mt-6"></div>
          </div>
        </div>
        
        {/* Mission & Values */}
        <div className="bg-secondary-50 rounded-lg p-10 mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">Our Mission & Values</h2>
            <p className="text-gray-700">
              We believe in creating meaningful relationships with our clients through honest communication, expert knowledge, and a commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To provide exceptional real estate services through expertise, integrity, and personalized attention, helping our clients make informed decisions and find properties that truly meet their needs and aspirations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Integrity:</strong> We operate with honesty and transparency in all our dealings.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Excellence:</strong> We strive for the highest quality in our service and properties.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Client-Centric:</strong> We put our clients' needs and satisfaction first.</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span><strong>Community:</strong> We are invested in the neighborhoods and communities we serve.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-primary-600 text-white rounded-lg p-6 text-center shadow-md transform transition-transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <Home size={40} className="text-accent-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">500+</h3>
              <p className="text-gray-200">Properties Sold</p>
            </div>
            
            <div className="bg-primary-600 text-white rounded-lg p-6 text-center shadow-md transform transition-transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <Users size={40} className="text-accent-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">300+</h3>
              <p className="text-gray-200">Happy Clients</p>
            </div>
            
            <div className="bg-primary-600 text-white rounded-lg p-6 text-center shadow-md transform transition-transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <Trophy size={40} className="text-accent-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">10</h3>
              <p className="text-gray-200">Years in Business</p>
            </div>
            
            <div className="bg-primary-600 text-white rounded-lg p-6 text-center shadow-md transform transition-transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <Building size={40} className="text-accent-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2 text-white">4.9/5</h3>
              <p className="text-gray-200">Client Rating</p>
            </div>
          </div>
        </div>
        
        {/* Team Image */}
        <div className="relative rounded-lg overflow-hidden mb-20">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1500"
            alt="UrbanNest Realty Team"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent flex items-end">
            <div className="p-8 text-white max-w-3xl">
              <h3 className="text-2xl font-bold mb-3 text-white">Our Team</h3>
              <p className="text-gray-200">
                At UrbanNest Realty, our team is our greatest asset. We bring together experienced professionals who share a passion for real estate and a commitment to exceptional client service.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-accent-500 text-white rounded-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Find Your Perfect Nest?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to guide you through your real estate journey. Whether you're buying, selling, or renting, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/properties" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Browse Properties
            </a>
            <a href="/contact" className="btn bg-primary-600 text-white hover:bg-primary-700">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;