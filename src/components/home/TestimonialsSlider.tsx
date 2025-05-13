import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import TestimonialComponent from '../common/Testimonial';
import SectionTitle from '../common/SectionTitle';
import { Testimonial } from '../../types/Testimonial';
import { testimonials } from '../../data/testimonials';

const TestimonialsSlider = () => {
  const [clientTestimonials, setClientTestimonials] = useState<Testimonial[]>([]);
  
  useEffect(() => {
    setClientTestimonials(testimonials);
  }, []);

  return (
    <section className="section bg-secondary-50">
      <div className="container-custom">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from our satisfied clients"
        />
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {clientTestimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialComponent testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;