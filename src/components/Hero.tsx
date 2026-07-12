import React, { useRef } from 'react';
import { Calendar, Award, ChevronLeft, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const swiperRef = useRef<any>(null);

  const goToPreviousSlide = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    swiper.slideToLoop(swiper.realIndex - 1);
  };

  const goToNextSlide = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    swiper.slideToLoop(swiper.realIndex + 1);
  };

  const HERO_SLIDES = [
    {
      condition: 'Acne & Acne Scars',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1920',
      description: 'Advanced acne treatments that reduce breakouts, inflammation, and acne scars using modern dermatological techniques.',
    },
    {
      condition: 'Hair Loss (Alopecia)',
      image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1920',
      description: 'Personalized hair restoration treatments designed to promote healthy hair growth and improve scalp health.',
    },
    {
      condition: 'Pigmentation & Melasma',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920',
      description: 'Safe pigmentation treatments that restore an even skin tone and reduce dark spots.',
    },
    {
      condition: 'Eczema & Dermatitis',
      image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=1920',
      description: 'Expert diagnosis and treatment plans to relieve itching, inflammation, and recurring eczema.',
    },
    {
      condition: 'Psoriasis',
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=1920',
      description: 'Long-term management and advanced therapies for healthier skin and improved quality of life.',
    },
    {
      condition: 'Laser Skin Rejuvenation',
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=1920',
      description: 'Non-invasive laser treatments to improve skin texture, reduce scars, wrinkles, and pigmentation.',
    },
    {
      condition: 'Anti-Aging Solutions',
      image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=1920',
      description: 'Advanced anti-aging procedures to restore youthful, radiant, and healthy-looking skin.',
    }
  ];

  return (
    <section id="home" className="relative w-full bg-white overflow-hidden hero-swiper-section">
      <style>{`
        /* Custom Swiper Styles for Split Screen Hero */
        .hero-swiper {
          width: 100%;
          min-height: 100vh;
        }

        .hero-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(140, 29, 92, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
          border-radius: 4px;
        }
        
        .hero-pagination .swiper-pagination-bullet-active {
          background: #8c1d5c;
          width: 24px;
        }

        /* Animations for active slide */
        .swiper-slide-active .hero-bg-img {
          transform: scale(1.05);
          transition: transform 6s linear;
        }
        
        .swiper-slide:not(.swiper-slide-active) .hero-bg-img {
          transform: scale(1);
          transition: transform 0.7s ease-in-out;
        }

        .swiper-slide-active .hero-badge {
          animation: slideDownFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.2s;
        }

        .swiper-slide-active .hero-heading {
          animation: slideRightFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.4s;
        }

        .swiper-slide-active .hero-desc {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.6s;
        }
        
        .swiper-slide-active .hero-tags {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.7s;
        }

        .swiper-slide-active .hero-buttons {
          animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.8s;
        }
        
        .hero-badge,
        .hero-heading,
        .hero-desc,
        .hero-tags,
        .hero-buttons {
          opacity: 0;
        }

        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDownFade {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRightFade {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .hero-container-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: center;
          gap: 80px;
          width: 100%;
        }
        .hero-left-col {
          min-width: 0;
          position: relative;
          z-index: 2;
        }
        .hero-right-col {
          min-width: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .hero-img-element {
          width: 100%;
          max-width: 500px;
          height: 600px;
          object-fit: cover;
          border-radius: 24px;
          display: block;
        }
        @media (max-width: 768px) {
          .hero-container-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-img-element {
            height: 400px;
          }
        }
      `}</style>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation, Keyboard]}
        effect="fade"
        speed={1000}
        loop={true}
        keyboard={{ enabled: true }}
        pagination={{ 
          el: '.hero-pagination',
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="hero-swiper"
      >
        {HERO_SLIDES.map((slide, idx) => (
          <SwiperSlide key={idx} className="w-full bg-white flex items-center justify-center">
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 hero-container-layout min-h-[90vh] pt-32 pb-40 lg:pt-28 lg:pb-32">
              
              {/* Left Side (Text) */}
              <div className="hero-left-col relative z-20">
                <div className="max-w-[560px]">
                  {/* Badge */}
                  <div className="hero-badge inline-flex w-max items-center gap-1.5 bg-[#8c1d5c]/10 text-[#8c1d5c] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                    <Award className="w-4 h-4" />
                    <span>Premium Dermatology</span>
                  </div>

                  {/* Heading */}
                  <h1 
                    className="hero-heading font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-gray-900 leading-[1.1] mb-6"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {slide.condition}
                  </h1>

                  {/* Description */}
                  <p className="hero-desc text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-7 font-sans">
                    {slide.description}
                  </p>

                  {/* Tags / List */}
                  <ul className="hero-tags flex flex-wrap gap-4 sm:gap-6 mb-10">
                    <li className="flex items-center text-gray-700 text-sm md:text-base font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#8c1d5c] mr-2 shrink-0" /> Symptoms
                    </li>
                    <li className="flex items-center text-gray-700 text-sm md:text-base font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#8c1d5c] mr-2 shrink-0" /> Causes
                    </li>
                    <li className="flex items-center text-gray-700 text-sm md:text-base font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#8c1d5c] mr-2 shrink-0" /> Treatments
                    </li>
                  </ul>

                  {/* Buttons */}
                  <div className="hero-buttons flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:flex-nowrap relative z-30">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        onBookClick();
                      }}
                      className="w-full sm:w-auto h-[56px] flex items-center justify-center gap-2 bg-[#8c1d5c] hover:bg-[#73164b] text-white px-8 rounded-full font-medium text-sm sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap"
                    >
                      <Calendar className="w-5 h-5 shrink-0" />
                      <span>Book Consultation</span>
                    </button>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto h-[56px] flex items-center justify-center gap-2 text-gray-700 hover:text-[#8c1d5c] bg-white border border-gray-200 hover:border-[#8c1d5c]/30 px-8 rounded-full font-medium text-sm sm:text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 whitespace-nowrap"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 text-[#8c1d5c] shrink-0" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side (Image) */}
              <div className="hero-right-col relative z-10">
                <img
                  src={slide.image}
                  alt={slide.condition}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="hero-bg-img hero-img-element shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation & Pagination positioned absolutely over the slider section */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-8 lg:bottom-10 z-30 flex items-center gap-6 lg:gap-8 bg-white/90 backdrop-blur-md py-3 px-6 rounded-full shadow-lg border border-gray-100">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToPreviousSlide}
            className="hero-prev w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-[#8c1d5c] hover:border-[#8c1d5c] hover:shadow-md transition-all shadow-sm cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goToNextSlide}
            className="hero-next w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:text-[#8c1d5c] hover:border-[#8c1d5c] hover:shadow-md transition-all shadow-sm cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="hero-pagination flex items-center gap-2"></div>
      </div>
    </section>
  );
}

