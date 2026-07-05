import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data';

export default function BeforeAfterGallery() {
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);
  const [viewState, setViewState] = useState<'after' | 'before'>('after');

  const currentCase = BEFORE_AFTER_CASES[activeCaseIdx];

  const handleNext = () => {
    setActiveCaseIdx((prev) => (prev + 1) % BEFORE_AFTER_CASES.length);
    setViewState('after'); // reset to show results first
  };

  const handlePrev = () => {
    setActiveCaseIdx((prev) => (prev - 1 + BEFORE_AFTER_CASES.length) % BEFORE_AFTER_CASES.length);
    setViewState('after');
  };

  return (
    <section id="results" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-24">
      {/* Visual background decorations */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-emerald-50 rounded-full filter blur-3xl opacity-60"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-gray-900 font-medium">Treatment Outcomes</h2>
          <div className="w-16 h-1 bg-[#8c1d5c] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-base text-gray-500 font-sans">
            Real clinical and aesthetic results demonstrating the effectiveness of personalized, evidence-based dermatology care.
          </p>
        </div>

        {/* Interactive Case Showcase */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 max-w-5xl mx-auto">
          
          {/* Case Description Pane (5 cols) */}
          <div className="p-8 md:p-12 lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-slate-50 to-white">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Patient Case</span>
              </span>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {currentCase.title}
                </h3>
                <p className="text-sm font-semibold text-[#8c1d5c] font-sans">
                  {currentCase.subtitle}
                </p>
              </div>

              <div className="h-px bg-gray-100"></div>

              <p className="text-sm text-gray-600 font-sans leading-relaxed">
                {currentCase.description}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 font-sans bg-slate-50 p-3.5 rounded-xl border border-slate-100 w-fit">
                <Calendar className="w-4 h-4 text-[#8c1d5c]" />
                <span className="font-semibold">Treatment Duration:</span>
                <span>{currentCase.duration}</span>
              </div>
            </div>

            {/* Pagination controls */}
            <div className="flex items-center gap-3 mt-10 pt-6 border-t border-gray-100">
              <button
                onClick={handlePrev}
                className="p-3 border border-gray-200 hover:border-[#8c1d5c]/30 rounded-full hover:bg-slate-50 transition-all text-gray-600"
                aria-label="Previous Case"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-gray-500 font-sans">
                Case {activeCaseIdx + 1} of {BEFORE_AFTER_CASES.length}
              </span>
              <button
                onClick={handleNext}
                className="p-3 border border-gray-200 hover:border-[#8c1d5c]/30 rounded-full hover:bg-slate-50 transition-all text-gray-600"
                aria-label="Next Case"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Image Slider Pane (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950 min-h-[350px] relative flex items-center justify-center overflow-hidden p-6">
            
            {/* Background blur representation of skin glow */}
            <div className="absolute inset-0 z-0 opacity-40 bg-radial-gradient">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-emerald-400 filter blur-3xl"></div>
            </div>

            {/* Main Interactive Slide Visual */}
            <div className="relative z-10 w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border-2 border-slate-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeCaseIdx}-${viewState}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={viewState === 'after' ? currentCase.after : currentCase.before}
                  alt={`${currentCase.title} ${viewState}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>

              {/* Dynamic Overlay Tag */}
              <div className={`absolute top-4 left-4 font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-md ${
                viewState === 'after' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
              }`}>
                {viewState === 'after' ? 'AFTER TREATMENT' : 'BEFORE TREATMENT'}
              </div>
            </div>

            {/* Slider Toggle Controls */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-black/70 backdrop-blur-md border border-white/15 px-1.5 py-1.5 rounded-full flex gap-1">
              <button
                onClick={() => setViewState('before')}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                  viewState === 'before'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setViewState('after')}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                  viewState === 'after'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                After (Result)
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
