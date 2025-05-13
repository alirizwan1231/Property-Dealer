import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropertyFilters from '../components/properties/PropertyFilters';
import PropertyGrid from '../components/properties/PropertyGrid';
import SectionTitle from '../components/common/SectionTitle';
import { Property } from '../types/Property';
import { properties } from '../data/properties';

const PropertiesPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    setTimeout(() => {
      // Get filter parameters from URL
      const location = searchParams.get('location');
      const propertyType = searchParams.get('type');
      const priceRange = searchParams.get('price');
      const bedrooms = searchParams.get('bedrooms');
      const status = searchParams.get('status') || 'for-sale';
      const sortBy = searchParams.get('sort') || 'newest';
      
      // Filter properties based on URL parameters
      let filtered = [...properties];
      
      // Filter by location
      if (location) {
        filtered = filtered.filter(property => 
          property.location.toLowerCase().includes(location.toLowerCase())
        );
      }
      
      // Filter by property type
      if (propertyType) {
        filtered = filtered.filter(property => 
          property.type.toLowerCase() === propertyType.toLowerCase()
        );
      }
      
      // Filter by price range
      if (priceRange) {
        const [min, max] = priceRange.split('-').map(value => parseInt(value));
        if (max) {
          filtered = filtered.filter(property => 
            property.price >= min && property.price <= max
          );
        } else {
          // Handle cases like "100000000+"
          filtered = filtered.filter(property => property.price >= min);
        }
      }
      
      // Filter by bedrooms
      if (bedrooms) {
        const bedroomsCount = parseInt(bedrooms);
        filtered = filtered.filter(property => property.bedrooms >= bedroomsCount);
      }
      
      // Filter by status
      filtered = filtered.filter(property => property.status === status);
      
      // Sort properties
      switch (sortBy) {
        case 'price-high-low':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'price-low-high':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'area-high-low':
          filtered.sort((a, b) => b.area - a.area);
          break;
        case 'bedrooms':
          filtered.sort((a, b) => b.bedrooms - a.bedrooms);
          break;
        case 'newest':
        default:
          // Assuming the properties already have newest first
          break;
      }
      
      setFilteredProperties(filtered);
      setLoading(false);
    }, 800); // Simulate a network delay
  }, [searchParams]);

  // Get the title based on filters
  const getTitle = () => {
    const status = searchParams.get('status') || 'for-sale';
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    
    let title = '';
    
    if (status === 'for-sale') {
      title = 'Properties for Sale';
    } else {
      title = 'Properties for Rent';
    }
    
    if (location) {
      title += ` in ${location.charAt(0).toUpperCase() + location.slice(1)}`;
    }
    
    if (type) {
      title += ` - ${type.charAt(0).toUpperCase() + type.slice(1)}s`;
    }
    
    return title;
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-8">
          <SectionTitle
            title={getTitle()}
            subtitle="Browse our selection of premium properties in Lahore's most desirable neighborhoods"
            alignment="left"
          />
        </div>
        
        <PropertyFilters />
        
        <PropertyGrid properties={filteredProperties} loading={loading} />
        
        {/* Pagination - would be dynamic in a real app */}
        {!loading && filteredProperties.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button type="button" className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-l-lg hover:bg-primary-700">
                Previous
              </button>
              <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100">
                1
              </button>
              <button type="button" className="px-4 py-2 text-sm font-medium text-white bg-accent-500 border border-accent-500 hover:bg-accent-600">
                2
              </button>
              <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100">
                3
              </button>
              <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;