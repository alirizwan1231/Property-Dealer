import HeroBanner from '../components/home/HeroBanner';
import FeaturedProperties from '../components/home/FeaturedProperties';
import Benefits from '../components/home/Benefits';
import FeaturedAgents from '../components/home/FeaturedAgents';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import BlogPreview from '../components/home/BlogPreview';
import ContactCTA from '../components/home/ContactCTA';
import SearchBar from '../components/common/SearchBar';

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      
      {/* Mobile Search Bar - only visible on small screens */}
      <div className="lg:hidden py-8 px-4 bg-secondary-100">
        <div className="container-custom ">
          <SearchBar  />
        </div>
      </div>
      
      <FeaturedProperties />
      <Benefits />
      <FeaturedAgents />
      <TestimonialsSlider />
      <BlogPreview />
      <ContactCTA />
    </div>
  );
};

export default HomePage;