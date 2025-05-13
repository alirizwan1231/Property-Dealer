import { Star } from 'lucide-react';
import { Testimonial as TestimonialType } from '../../types/Testimonial';

type TestimonialProps = {
  testimonial: TestimonialType;
};

const Testimonial = ({ testimonial }: TestimonialProps) => {
  const { name, photo, rating, date, text, property } = testimonial;

  // Generate an array of 5 stars
  const stars = Array(5).fill(0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={photo || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-primary-600">{name}</h4>
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {stars.map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < rating
                ? 'text-accent-500 fill-accent-500'
                : 'text-gray-300 fill-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 flex-grow">{text}</p>
      
      {property && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">Property: {property}</p>
        </div>
      )}
    </div>
  );
};

export default Testimonial;