import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Tag } from 'lucide-react';
import { Property } from '../../types/Property';
import { formatCurrency } from '../../utils/formatters';

type PropertyCardProps = {
  property: Property;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  const {
    id,
    title,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    images,
    type,
    status
  } = property;

  return (
    <div className="property-card group">
      <Link to={`/properties/${id}`} className="block">
        <div className="relative overflow-hidden h-60">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
              status === 'for-sale' 
                ? 'bg-accent-500 text-white' 
                : 'bg-primary-600 text-white'
            }`}>
              {status === 'for-sale' ? 'For Sale' : 'For Rent'}
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-primary-600">
              {type}
            </span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-primary-600 line-clamp-1">
              {title}
            </h3>
            <p className="text-accent-500 font-bold text-lg">
              {formatCurrency(price)}
            </p>
          </div>
          
          <div className="flex items-center mt-2 text-gray-500">
            <MapPin size={16} className="mr-1" />
            <p className="text-sm line-clamp-1">{location}</p>
          </div>
          
          <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
            <div className="flex items-center">
              <Bed size={16} className="mr-1" />
              <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
            <div className="flex items-center">
              <Bath size={16} className="mr-1" />
              <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            <div className="flex items-center">
              <Square size={16} className="mr-1" />
              <span>{area} sqft</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;