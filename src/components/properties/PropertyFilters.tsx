import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search } from 'lucide-react';

const PropertyFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  // Initialize states from URL params
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [propertyType, setPropertyType] = useState(searchParams.get('type') || '');
  const [priceRange, setPriceRange] = useState(searchParams.get('price') || '');
  const [bedrooms, setBedrooms] = useState(searchParams.get('bedrooms') || '');
  const [status, setStatus] = useState(searchParams.get('status') || 'for-sale');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'newest');

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    
    // Only add params if they have values
    if (location) params.append('location', location);
    if (propertyType) params.append('type', propertyType);
    if (priceRange) params.append('price', priceRange);
    if (bedrooms) params.append('bedrooms', bedrooms);
    params.append('status', status);
    params.append('sort', sortBy);
    
    setSearchParams(params);
    
    // On mobile, hide filters after applying
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
  };

  const handleResetFilters = () => {
    setLocation('');
    setPropertyType('');
    setPriceRange('');
    setBedrooms('');
    setStatus('for-sale');
    setSortBy('newest');
    
    setSearchParams({});
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-8">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-primary-600 flex items-center">
          <Filter size={20} className="mr-2" /> Property Filters
        </h2>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleFilters}
            className="md:hidden flex items-center gap-1 text-sm px-3 py-1.5 bg-secondary-100 rounded-md"
          >
            <SlidersHorizontal size={16} />
            <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
          </button>
          <div className="hidden md:block">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium text-primary-600">20</span> properties
            </p>
          </div>
        </div>
      </div>
      
      <div className={`p-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="form-group">
            <label htmlFor="location-filter" className="form-label">Location</label>
            <select 
              id="location-filter" 
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
            <label htmlFor="property-type-filter" className="form-label">Property Type</label>
            <select 
              id="property-type-filter" 
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
            <label htmlFor="price-range-filter" className="form-label">Price Range</label>
            <select 
              id="price-range-filter" 
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
            <label htmlFor="bedrooms-filter" className="form-label">Bedrooms</label>
            <select 
              id="bedrooms-filter" 
              className="input-field" 
              value={bedrooms} 
              onChange={(e) => setBedrooms(e.target.value)}
            >
              <option value="">Any</option>
              <option value="1">1+ Bedroom</option>
              <option value="2">2+ Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
              <option value="5">5+ Bedrooms</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
          
          <div className="form-group">
            <label htmlFor="sort-by" className="form-label">Sort By</label>
            <select 
              id="sort-by" 
              className="input-field" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="area-high-low">Area: Largest First</option>
              <option value="bedrooms">Most Bedrooms</option>
            </select>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            type="button"
            onClick={handleApplyFilters}
            className="btn btn-primary flex-1 flex items-center justify-center gap-2"
          >
            <Search size={18} />
            <span>Apply Filters</span>
          </button>
          <button
            type="button"
            onClick={handleResetFilters}
            className="btn btn-outline flex-1"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;