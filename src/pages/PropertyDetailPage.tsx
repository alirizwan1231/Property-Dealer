import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Share2, Heart, Printer, Download, Phone, Mail, User } from 'lucide-react';
import PropertyGallery from '../components/properties/PropertyGallery';
import PropertyFeatures from '../components/properties/PropertyFeatures';
import ContactForm from '../components/common/ContactForm';
import { Property } from '../types/Property';
import { Agent } from '../types/Agent';
import { properties } from '../data/properties';
import { agents } from '../data/agents';
import { formatCurrency } from '../utils/formatters';

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [agent, setAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate API call
    setTimeout(() => {
      if (id) {
        const foundProperty = properties.find(p => p.id === id);
        
        if (foundProperty) {
          setProperty(foundProperty);
          
          // Find agent
          if (foundProperty.agentId) {
            const propertyAgent = agents.find(a => a.id === foundProperty.agentId);
            if (propertyAgent) {
              setAgent(propertyAgent);
            }
          }
        }
      }
      
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="flex justify-center items-center h-96">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600">Loading property details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-600 mb-4">Property Not Found</h2>
            <p className="text-gray-600 mb-6">
              The property you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/properties" className="btn btn-primary">
              Browse All Properties
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/properties" className="text-gray-500 hover:text-primary-600">Properties</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-primary-600 font-medium">{property.title}</span>
          </nav>
        </div>
        
        {/* Property Header */}
        <div className="mb-8 flex flex-wrap justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary-600 mb-3">
              {property.title}
            </h1>
            <div className="flex items-center mb-2">
              <MapPin size={18} className="text-accent-500 mr-1" />
              <p className="text-gray-600">{property.location}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-accent-500">
                {formatCurrency(property.price)}
              </span>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                property.status === 'for-sale' 
                  ? 'bg-accent-500 text-white' 
                  : 'bg-primary-600 text-white'
              }`}>
                {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button className="btn btn-sm btn-outline flex items-center gap-1">
              <Share2 size={16} />
              <span>Share</span>
            </button>
            <button className="btn btn-sm btn-outline flex items-center gap-1">
              <Heart size={16} />
              <span>Save</span>
            </button>
            <button className="btn btn-sm btn-outline flex items-center gap-1">
              <Printer size={16} />
              <span>Print</span>
            </button>
            <button className="btn btn-sm btn-outline flex items-center gap-1">
              <Download size={16} />
              <span>Download</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Property Gallery */}
            <PropertyGallery images={property.images} title={property.title} />
            
            {/* Property Features */}
            <div className="mt-8">
              <PropertyFeatures property={property} />
            </div>
            
            {/* Property Description */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Description</h3>
              <div className="text-gray-700 space-y-4">
                {property.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            
            {/* Property Amenities */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Amenities & Features</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Property Location */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Location</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.544716249464!2d74.26938307559862!3d31.483940149440866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903ccb356db27%3A0x4693c6196275ef37!2sDHA%20Lahore!5e0!3m2!1sen!2s!4v1695985358048!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Property Location"
                />
              </div>
              <p className="mt-4 text-gray-700 flex items-start">
                <MapPin size={18} className="text-accent-500 mr-2 mt-1 flex-shrink-0" />
                <span>{property.location}</span>
              </p>
            </div>
          </div>
          
          <div>
            {/* Agent Information */}
            {agent && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-primary-600">{agent.name}</h3>
                    <p className="text-sm text-gray-600">{agent.role}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <Phone size={16} className="mr-2 text-accent-500" />
                    <span>{agent.phone}</span>
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    <Mail size={16} className="mr-2 text-accent-500" />
                    <span>{agent.email}</span>
                  </a>
                </div>
                
                <Link
                  to={`/agents/${agent.id}`}
                  className="btn btn-outline w-full flex items-center justify-center gap-2 mt-4"
                >
                  <User size={16} />
                  <span>View Profile</span>
                </Link>
              </div>
            )}
            
            {/* Contact Form */}
            <ContactForm 
              property={property} 
              title="Interested in this property?" 
            />
            
            {/* Related Properties - Would be dynamic in a real app */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Similar Properties</h3>
              <div className="space-y-4">
                {properties
                  .filter(p => p.id !== property.id && p.type === property.type)
                  .slice(0, 3)
                  .map(relatedProperty => (
                    <Link 
                      key={relatedProperty.id} 
                      to={`/properties/${relatedProperty.id}`}
                      className="flex gap-3 hover:bg-secondary-50 rounded-md p-2 transition-colors"
                    >
                      <img
                        src={relatedProperty.images[0]}
                        alt={relatedProperty.title}
                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-medium text-primary-600 line-clamp-1">
                          {relatedProperty.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{relatedProperty.location}</p>
                        <p className="text-accent-500 font-semibold">
                          {formatCurrency(relatedProperty.price)}
                        </p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;