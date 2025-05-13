import { Bed, Bath, Square, Car, Workflow, Calendar } from 'lucide-react';
import { Property } from '../../types/Property';

type PropertyFeaturesProps = {
  property: Property;
};

const PropertyFeatures = ({ property }: PropertyFeaturesProps) => {
  const {
    bedrooms,
    bathrooms,
    area,
    yearBuilt,
    parkingSpaces,
    floors
  } = property;

  const features = [
    {
      icon: <Bed size={24} className="text-accent-500" />,
      label: 'Bedrooms',
      value: bedrooms,
    },
    {
      icon: <Bath size={24} className="text-accent-500" />,
      label: 'Bathrooms',
      value: bathrooms,
    },
    {
      icon: <Square size={24} className="text-accent-500" />,
      label: 'Area',
      value: `${area} sqft`,
    },
    {
      icon: <Car size={24} className="text-accent-500" />,
      label: 'Parking',
      value: parkingSpaces,
    },
    {
      icon: <Workflow size={24} className="text-accent-500" />,
      label: 'Floors',
      value: floors,
    },
    {
      icon: <Calendar size={24} className="text-accent-500" />,
      label: 'Year Built',
      value: yearBuilt,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-primary-600 mb-6">Property Details</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-3">
              {feature.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm">{feature.label}</p>
              <p className="font-medium text-primary-600">{feature.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyFeatures;