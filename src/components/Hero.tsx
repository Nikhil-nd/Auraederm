import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data';

import doctorPortraitPath from '../assets/images/doctor_portrait_1782883002577.jpg';
import skincareTreatmentPath from '../assets/images/skincare_treatment_1782883034252.jpg';

interface HeroProps {
  onBookClick: () => void;
  clinicHeroPath: string;
}

export default function Hero({ onBookClick, clinicHeroPath }: HeroProps) {
  const backgroundImages = [
    clinicHeroPath,
    skincareTreatmentPath,
    doctorPortraitPath
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      {/* Dynamic Background Image Gallery with smooth transitions & translucent light-colored appearance */}
      <div className="absolute inset-0 z-0 bg-slate-50">
        {backgroundImages.map((image, idx) => (
          <img
            key={idx}
            src={image}
            alt="Auraederm Skin Solutions Gallery Backdrop"
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              idx === currentImageIndex 
                ? 'opacity-20 sm:opacity-15 lg:opacity-20' 
                : 'opacity-0 pointer-events-none'
            }`}
          />
        ))}
        {/* Elegant light gradient overlay for readability and premium ambiance */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        {/* Soft floating blur circles for luxury atmosphere */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#8c1d5c]/5 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/5 filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Soft trust pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 self-center lg:self-start bg-rose-50 border border-rose-100/50 text-[#8c1d5c] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Premium Skincare & Scalp Solutions</span>
            </motion.div>

            {/* Display Headings - Serif font like Playfair/Georgia matching the mock image */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-gray-900 leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Expert Care <br className="hidden sm:inline" />
              for Healthy Skin
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Medical dermatology, hair & scalp care, and aesthetic skin treatments tailored to your individual needs.
            </motion.p>

            {/* Call to Actions - matches Dr. Aishwarya's mockup design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 w-full"
            >
              <div className="relative group w-1/2 sm:w-auto">
                {/* Glowing ambient background ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#8c1d5c] to-rose-500 rounded-full blur-md opacity-50 group-hover:opacity-85 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <button
                  id="hero-book-btn"
                  onClick={onBookClick}
                  className="relative w-full sm:w-auto flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#8c1d5c] to-[#a6246d] hover:from-[#73164b] hover:to-[#8c1d5c] text-white px-3 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="truncate">Book Appointment</span>
                </button>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('clinic-map')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-1/2 sm:w-auto flex items-center justify-center gap-1 sm:gap-1.5 text-gray-700 hover:text-[#8c1d5c] bg-white border border-gray-200 hover:border-[#8c1d5c]/30 px-3 sm:px-6 py-3.5 sm:py-4 rounded-full font-medium text-xs sm:text-sm shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8c1d5c] shrink-0" />
                <span className="truncate">Gurugram Clinic</span>
              </button>
            </motion.div>

          </div>

          {/* Hero Right Media Column - Aesthetic Card Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white"
            >
              {/* Overlapping small detail badge */}
              <div className="absolute top-4 right-4 z-10 bg-[#8c1d5c] text-white font-medium text-xs px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sector 23, Gurugram</span>
              </div>

              {/* Clinic Hero Image in right pane */}
              <img
                src={clinicHeroPath}
                alt="Dr. Aishwarya Devaraj Consultation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white text-center">
                <p className="font-serif text-lg font-medium">State-of-the-Art Care</p>
                <p className="text-xs text-gray-300 mt-1 font-sans">
                  Aesthetic Excellence & Clinical Safety combined
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
