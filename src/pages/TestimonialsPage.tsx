import { useState, useEffect } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import TestimonialComponent from '../components/common/Testimonial';
import { Testimonial } from '../types/Testimonial';
import { testimonials } from '../data/testimonials';

const TestimonialsPage = () => {
  const [clientTestimonials, setClientTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setClientTestimonials(testimonials);
      setLoading(false);
    }, 800);
  }, []);

  // Filter testimonials by rating
  const filteredTestimonials = selectedRating 
    ? clientTestimonials.filter(t => t.rating === selectedRating)
    : clientTestimonials;

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Client Testimonials"
          subtitle="Hear what our clients have to say about their experience with UrbanNest Realty"
        />
        
        {/* Rating filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => setSelectedRating(null)}
              className={`px-4 py-2 font-medium ${
                selectedRating === null 
                  ? 'bg-primary-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Ratings
            </button>
            {[5, 4, 3].map(rating => (
              <button
                key={rating}
                onClick={() => setSelectedRating(rating)}
                className={`px-4 py-2 font-medium ${
                  selectedRating === rating 
                    ? 'bg-primary-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {rating} Star
              </button>
            ))}
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600">Loading testimonials...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialComponent key={index} testimonial={testimonial} />
            ))}
          </div>
        )}
        
        {/* Add Testimonial CTA */}
        <div className="mt-16 bg-primary-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Share Your Experience</h3>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Have you worked with UrbanNest Realty? We'd love to hear about your experience. Share your story and help others in their real estate journey.
          </p>
          <button className="btn bg-accent-500 hover:bg-accent-600 text-white">
            Submit Your Testimonial
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;