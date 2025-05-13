import { useState } from 'react';
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';

type NewsletterProps = {
  onClose: () => void;
};

type FormData = {
  email: string;
  name: string;
};

const Newsletter = ({ onClose }: NewsletterProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Newsletter signup:', data);
    // In a real app, you would send this to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full relative animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close newsletter popup"
        >
          <X size={24} />
        </button>
        
        {isSubmitted ? (
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">Thank You!</h3>
            <p className="text-gray-600">
              You've successfully subscribed to our newsletter. We'll keep you updated with the latest property listings and real estate news.
            </p>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-primary-600 mb-2">Stay Updated</h3>
              <p className="text-gray-600">
                Subscribe to our newsletter and be the first to know about exclusive property listings and market insights.
              </p>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={`input-field ${errors.name ? 'border-error-500 focus:ring-error-500' : ''}`}
                  {...register('name', {
                    required: 'Name is required',
                  })}
                />
                {errors.name && (
                  <p className="text-error-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="newsletter-email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="your@email.com"
                  className={`input-field ${errors.email ? 'border-error-500 focus:ring-error-500' : ''}`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-error-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <button type="submit" className="btn btn-primary w-full mt-4">
                Subscribe Now
              </button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By subscribing, you agree to our {' '}
                <a href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</a>
                {' '} and consent to receive property updates and occasional newsletters.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;