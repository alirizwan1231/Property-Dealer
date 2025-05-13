import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PropertyCard from '../common/PropertyCard';
import SectionTitle from '../common/SectionTitle';
import { Property } from '../../types/Property';
import { properties } from '../../data/properties';

const FeaturedProperties = () => {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  
  useEffect(() => {
    // Filter properties with featured: true flag
    const featured = properties.filter(property => property.featured);
    setFeaturedProperties(featured);
  }, []);

  return (
    <section className="section bg-secondary-50 py-24">
      <div className="container-custom">
        <SectionTitle
          title="Featured Properties"
          subtitle="Discover our handpicked selection of premium properties in prime locations"
        />
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
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
          className="property-slider"
        >
          {featuredProperties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="mt-12 text-center">
          <Link 
            to="/properties" 
            className="btn btn-primary flex items-center gap-2 mx-auto"
          >
            <span>View All Properties</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;