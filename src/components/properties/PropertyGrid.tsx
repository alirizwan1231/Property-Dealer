import { Property } from '../../types/Property';
import PropertyCard from '../common/PropertyCard';
import { Loader2 } from 'lucide-react';

type PropertyGridProps = {
  properties: Property[];
  loading?: boolean;
};

const PropertyGrid = ({ properties, loading = false }: PropertyGridProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <Loader2 size={40} className="animate-spin mx-auto text-primary-600 mb-4" />
          <p className="text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="bg-secondary-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-primary-600 mb-2">No properties found</h3>
        <p className="text-gray-600 mb-4">
          We couldn't find any properties matching your current filters. Try adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;