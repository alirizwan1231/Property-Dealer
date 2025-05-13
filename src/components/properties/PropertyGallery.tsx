import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { Maximize2 } from 'lucide-react';

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="mb-4 relative">
        <Swiper
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          navigation
          className="rounded-lg overflow-hidden h-[400px] md:h-[500px]"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute bottom-4 right-4 bg-white/80 hover:bg-white backdrop-blur-sm p-2 rounded-full transition-colors"
                  onClick={() => openLightbox(index)}
                  aria-label="View fullscreen"
                >
                  <Maximize2 size={18} className="text-primary-600" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumbs-gallery"
        breakpoints={{
          640: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div className={`h-16 md:h-20 overflow-hidden rounded-md ${
              activeIndex === index ? 'ring-2 ring-accent-500' : ''
            }`}>
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <Swiper
            modules={[Navigation]}
            navigation
            initialSlide={activeIndex}
            className="w-full max-w-4xl"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-[80vh]">
                  <img
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default PropertyGallery;