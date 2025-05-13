import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/common/ContactForm';
import { MapPin, Phone, Mail, Clock, MapIcon } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch with our expert team for any inquiries or property consultations"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="aspect-video w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.544716249464!2d74.26938307559862!3d31.483940149440866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903ccb356db27%3A0x4693c6196275ef37!2sDHA%20Lahore!5e0!3m2!1sen!2s!4v1695985358048!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UrbanNest Realty Office Location"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <ContactForm title="Send Us a Message" />
          </div>
          
          <div>
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold text-primary-600 mb-6">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex">
                  <MapPin size={24} className="text-accent-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary-600 mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      123 Real Estate Ave, DHA Phase 5<br />
                      Lahore, Pakistan
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <Phone size={24} className="text-accent-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary-600 mb-1">Phone Number</h4>
                    <p className="text-gray-600">
                      <a href="tel:+923001234567" className="hover:text-accent-500 transition-colors">
                        +92 300 123 4567
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+924237654321" className="hover:text-accent-500 transition-colors">
                        +92 42 3765 4321
                      </a>
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <Mail size={24} className="text-accent-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary-600 mb-1">Email Address</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@urbannest.com" className="hover:text-accent-500 transition-colors">
                        info@urbannest.com
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="mailto:sales@urbannest.com" className="hover:text-accent-500 transition-colors">
                        sales@urbannest.com
                      </a>
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <Clock size={24} className="text-accent-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary-600 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Our Locations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-6">Our Locations</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <MapIcon size={24} className="text-accent-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary-600 mb-1">Main Office - DHA</h4>
                    <p className="text-gray-600 mb-1">
                      123 Real Estate Ave, DHA Phase 5, Lahore
                    </p>
                    <a href="https://goo.gl/maps/1234" target="_blank" rel="noopener noreferrer" className="text-accent-500 text-sm hover:underline">
                      Get Directions
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <MapIcon size={24} className="text-accent-500 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-primary-600 mb-1">Bahria Town Branch</h4>
                    <p className="text-gray-600 mb-1">
                      45 Property Street, Bahria Town, Lahore
                    </p>
                    <a href="https://goo.gl/maps/5678" target="_blank" rel="noopener noreferrer" className="text-accent-500 text-sm hover:underline">
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary-600 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-primary-600 mb-3">What areas do you specialize in?</h3>
              <p className="text-gray-600">
                We specialize in premium properties in Lahore, with a focus on DHA and Bahria Town. However, we also handle properties in other upscale neighborhoods like Gulberg, Model Town, and Cantt.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-primary-600 mb-3">How can I list my property with UrbanNest Realty?</h3>
              <p className="text-gray-600">
                You can list your property by contacting our office, filling out the contact form on this page, or calling our dedicated listing hotline. One of our agents will get in touch to collect details and arrange a property visit.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-primary-600 mb-3">What services do you offer to property sellers?</h3>
              <p className="text-gray-600">
                We offer comprehensive services including professional photography, detailed property listings, targeted marketing, screening potential buyers, arranging viewings, negotiating offers, and handling paperwork to ensure a smooth transaction.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-primary-600 mb-3">Do you handle rental properties?</h3>
              <p className="text-gray-600">
                Yes, we handle both sales and rentals. Our rental service includes tenant screening, property management options, lease preparation, and regular property inspections if required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;