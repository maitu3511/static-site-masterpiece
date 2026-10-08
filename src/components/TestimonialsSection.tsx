import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import jigneshAvatarImgAsset from '../assets/images/client_avatar_jignesh_1791348700936.jpg.asset.json';
const jigneshAvatarImg = jigneshAvatarImgAsset.url;
import rajeshAvatarImgAsset from '../assets/images/client_avatar_rajesh_1791348721790.jpg.asset.json';
const rajeshAvatarImg = rajeshAvatarImgAsset.url;
import sandeepAvatarImgAsset from '../assets/images/client_avatar_sandeep_1791348733554.jpg.asset.json';
const sandeepAvatarImg = sandeepAvatarImgAsset.url;
import amitAvatarImgAsset from '../assets/images/client_avatar_amit_1791348745095.jpg.asset.json';
const amitAvatarImg = amitAvatarImgAsset.url;
import bhavinAvatarImgAsset from '../assets/images/client_avatar_bhavin_1791348765267.jpg.asset.json';
const bhavinAvatarImg = bhavinAvatarImgAsset.url;
import kiritAvatarImgAsset from '../assets/images/client_avatar_kirit_1791348780577.jpg.asset.json';
const kiritAvatarImg = kiritAvatarImgAsset.url;

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  avatarImage: string;
  stars: number;
  review: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Jignesh Ahajoliya",
    role: "Founder & Managing Director",
    company: "Plasto Mould Solutions",
    avatarImage: jigneshAvatarImg,
    stars: 5,
    review: "Advay Engineers delivers very superior quality moulds and very dependable work to high engineering standards. Their toolroom craftsmanship and cavity finishes have given us flawless repeatability across all production batches."
  },
  {
    id: 2,
    name: "Rajesh Patel",
    role: "Director of Operations",
    company: "Precision Automotives",
    avatarImage: rajeshAvatarImg,
    stars: 5,
    review: "Advay Engineers delivers exceptional tooling accuracy. Their high-precision injection moulds have consistently maintained strict dimensional tolerances across our multi-cavity automotive components with zero flash issues."
  },
  {
    id: 3,
    name: "Sandeep Sharma",
    role: "Head of Procurement",
    company: "AgroFlo Irrigation Systems",
    avatarImage: sandeepAvatarImg,
    stars: 5,
    review: "We partnered with Advay for heavy-wall irrigation drip fittings and sprinkler body moulds. The tool durability, cooling channel layout, and cycle time efficiency significantly improved our overall production throughput."
  },
  {
    id: 4,
    name: "Amit Chudasama",
    role: "Product Engineering Lead",
    company: "Voltrix Switchgear & Electricals",
    avatarImage: amitAvatarImg,
    stars: 5,
    review: "From initial 3D CAD modeling and DFM analysis to first-article trial validation, their engineering support was proactive, responsive, and completely turnkey for our complex flame-retardant enclosures."
  },
  {
    id: 5,
    name: "Bhavin Mehta",
    role: "Manufacturing Manager",
    company: "Apex Packaging & Storage",
    avatarImage: bhavinAvatarImg,
    stars: 5,
    review: "For our thin-wall storage boxes and presentation containers, Advay Engineers built fast-cycling, mirror-polished moulds that produce flawless surface aesthetics and tight snap-fit closures consistently."
  },
  {
    id: 6,
    name: "Kirit Vaghani",
    role: "General Manager",
    company: "Sterling Industrial Components",
    avatarImage: kiritAvatarImg,
    stars: 5,
    review: "Their dedicated setup of automatic injection moulding machines coupled with strict process control ensures that batch-to-batch repeatability is reliably maintained throughout continuous high-volume production runs."
  }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];
  if (!current) return null;

  return (
    <section 
      id="reviews"
      aria-label="Client Reviews and Testimonials"
      className="relative py-24 sm:py-32 overflow-hidden border-b border-[#E8E1D3]"
    >
      {/* Background Image - CLEAR & CRISP VIEW WITH BALANCED OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src={COMPANY_INFO.images.reviewsFactory}
          alt="Advay Engineers Manufacturing Shopfloor"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Subtle light transparent scrim so background factory is clearly visible while text stays readable */}
        <div className="absolute inset-0 bg-[#0B2545]/35" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous review"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0B2545]/85 hover:bg-[#8B1E1E] text-white backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-lg z-20"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next review"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#0B2545]/85 hover:bg-[#8B1E1E] text-white backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110 cursor-pointer shadow-lg z-20"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Client Review Content Container */}
        <div className="max-w-3xl mx-auto transition-all duration-500 ease-out flex flex-col items-center p-8 sm:p-12 rounded-3xl bg-[#0B2545]/85 backdrop-blur-md shadow-2xl border border-white/20 text-white card-hover-elevate">
          
          {/* Client Avatar Photo Image (Replaced letter with photo image as requested) */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/80 shadow-2xl mb-4 transition-transform duration-300 transform hover:scale-110 shrink-0 bg-slate-200 ring-4 ring-white/20">
            <img
              src={current.avatarImage}
              alt={current.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Client Name */}
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-md">
            {current.name}
          </h3>

          {/* Role & Company */}
          <p className="text-xs sm:text-sm text-slate-200 italic mt-0.5 mb-3 drop-shadow-md">
            {current.role}, <span className="text-white font-semibold not-italic">{current.company}</span>
          </p>

          {/* 5 Rating Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-5 text-amber-400 drop-shadow-md">
            {Array.from({ length: current.stars }).map((_, i) => (
              <span key={i} className="text-lg sm:text-xl leading-none">★</span>
            ))}
          </div>

          {/* Quote Text with Quotation Marks */}
          <div className="relative px-4 sm:px-8">
            <span className="text-2xl sm:text-3xl font-serif text-white/80 mr-1.5 select-none leading-none drop-shadow-md">“</span>
            <p className="inline text-sm sm:text-base md:text-lg text-white font-normal italic leading-relaxed [text-wrap:balance] drop-shadow-md">
              {current.review}
            </p>
            <span className="text-2xl sm:text-3xl font-serif text-white/80 ml-1.5 select-none leading-none drop-shadow-md">”</span>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setIsAutoPlay(false);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-4 h-4 bg-white shadow-lg scale-110'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
