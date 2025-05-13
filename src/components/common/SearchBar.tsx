import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';

type SearchBarProps = {
  onClose?: () => void;
  isHero?: boolean;
};

const SearchBar = ({ onClose, isHero = false }: SearchBarProps) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [status, setStatus] = useState('for-sale');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query parameters
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (propertyType) params.append('type', propertyType);
    if (priceRange) params.append('price', priceRange);
    params.append('status', status);
    
    // Navigate to properties page with filter
    navigate(`/properties?${params.toString()}`);
    
    // Close search bar if provided
    if (onClose) onClose();
  };

  return (
    <div className={`${isHero ? 'bg-white/90 backdrop-blur-md' : 'bg-white'} rounded-lg shadow-lg p-4 md:p-6`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-xl font-medium ${isHero ? 'text-primary-600' : ''}`}>Find Your Dream Home</h3>
        {onClose && (
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label="Close search">
            <X size={20} />
          </button>
        )}
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="form-group">
            <label htmlFor="location" className="form-label">Location</label>
            <select 
              id="location" 
              className="input-field" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="dha">DHA</option>
              <option value="bahria-town">Bahria Town</option>
              <option value="gulberg">Gulberg</option>
              <option value="johar-town">Johar Town</option>
              <option value="cantt">Cantt</option>
              <option value="model-town">Model Town</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="property-type" className="form-label">Property Type</label>
            <select 
              id="property-type" 
              className="input-field" 
              value={propertyType} 
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="commercial">Commercial</option>
              <option value="plot">Plot</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="price-range" className="form-label">Price Range</label>
            <select 
              id="price-range" 
              className="input-field" 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">Any Price</option>
              <option value="0-5000000">Under 5M PKR</option>
              <option value="5000000-10000000">5M - 10M PKR</option>
              <option value="10000000-20000000">10M - 20M PKR</option>
              <option value="20000000-50000000">20M - 50M PKR</option>
              <option value="50000000-100000000">50M - 100M PKR</option>
              <option value="100000000+">Above 100M PKR</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Property Status</label>
            <div className="flex mt-1 rounded-md overflow-hidden border border-gray-300">
              <button
                type="button"
                className={`flex-1 py-2 text-center transition-colors ${
                  status === 'for-sale' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setStatus('for-sale')}
              >
                For Sale
              </button>
              <button
                type="button"
                className={`flex-1 py-2 text-center transition-colors ${
                  status === 'for-rent' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setStatus('for-rent')}
              >
                For Rent
              </button>
            </div>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary w-full mt-4 flex items-center justify-center gap-2">
          <Search size={20} />
          <span>Search Properties</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;