import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SendHorizonal } from 'lucide-react';
import { Property } from '../../types/Property';

type ContactFormProps = {
  property?: Property;
  title?: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = ({ property, title = 'Contact Us' }: ContactFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // In a real app, you would send this to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 5000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-primary-600 mb-4">{title}</h3>
      
      {isSubmitted ? (
        <div className="bg-success-100 text-success-900 p-4 rounded-lg">
          <p>Thank you for your message! We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {property && (
            <div className="mb-4 p-3 bg-secondary-100 rounded-md">
              <p className="text-sm font-medium">Inquiring about:</p>
              <p className="text-primary-600 font-semibold">{property.title}</p>
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className={`input-field ${errors.name ? 'border-error-500' : ''}`}
              {...register('name', {
                required: 'Name is required',
              })}
            />
            {errors.name && (
              <p className="text-error-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className={`input-field ${errors.email ? 'border-error-500' : ''}`}
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
          
          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="+92 300 1234567"
              className={`input-field ${errors.phone ? 'border-error-500' : ''}`}
              {...register('phone', {
                required: 'Phone number is required',
              })}
            />
            {errors.phone && (
              <p className="text-error-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder={property 
                ? `I'm interested in this property. Please provide more information.` 
                : `How can we help you?`
              }
              className={`input-field resize-none ${errors.message ? 'border-error-500' : ''}`}
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
            ></textarea>
            {errors.message && (
              <p className="text-error-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary w-full mt-2 flex items-center justify-center gap-2"
          >
            <SendHorizonal size={18} />
            <span>Send Message</span>
          </button>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            By submitting this form, you agree to our {' '}
            <a href="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</a>.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;