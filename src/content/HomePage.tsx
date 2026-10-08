import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  COMPANY_INFO, 
  CAPABILITIES, 
  PROCESS_STAGES, 
  INFRASTRUCTURE_HIGHLIGHTS, 
  INDUSTRIES, 
  FAQ_ITEMS,
  WHY_ADVAY_POINTS
} from '../data/companyData';
import { IconRenderer } from '../components/IconRenderer';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ReadyForProductionSection } from '../components/ReadyForProductionSection';
import { ScrollCounter } from '../components/ScrollCounter';
import { SectionHeader } from '../components/SectionHeader';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronRight,
  Award, 
  ShieldCheck, 
  Clock, 
  Users,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);
  const [activeMachineryIndex, setActiveMachineryIndex] = useState<number>(0);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES[0].id);

  const activeProcess = PROCESS_STAGES[activeProcessStep] || PROCESS_STAGES[0];
  const activeMachinery = INFRASTRUCTURE_HIGHLIGHTS[activeMachineryIndex] || INFRASTRUCTURE_HIGHLIGHTS[0];
  const activeIndustry = INDUSTRIES.find(ind => ind.id === selectedIndustryId) || INDUSTRIES[0];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION - NATURAL BACKGROUND (NO HEAVY BLUE TINT), TEXT IN WEBSITE BRAND COLORS */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#E8E1D3]">
        {/* Background Image - Natural and crisp */}
        <div className="absolute inset-0 z-0">
          <img
            src={COMPANY_INFO.images.hero}
            alt="Advay Engineers Precision Injection Moulding"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
            referrerPolicy="no-referrer"
          />
          {/* Neutral dark cinematic overlay (No heavy blue color cast, machinery remains fully visible and natural) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          
          {/* Top Pill / Badge in Website Brand Colors */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/95 text-[#0B2545] border border-[#E8E1D3] text-xs sm:text-sm font-bold mb-6 shadow-lg animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B1E1E] animate-pulse" />
            <span className="tracking-wide">ESTABLISHED 2016 • RAJKOT, GUJARAT, INDIA</span>
          </div>

          {/* Main Headline - In Website Brand Colors (Crisp White + Crimson Red #8B1E1E) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-4 drop-shadow-xl animate-heading-side text-white">
            Redefine Excellence in <br className="hidden sm:inline" />
            <span className="text-[#8B1E1E] bg-white/95 px-4 py-1 rounded-2xl shadow-lg inline-block mt-2 sm:mt-1">
              Plastic Injection Moulding
            </span>
          </h1>

          {/* Sleek 2-Color Brand Animated line under main heading (#0B2545 Deep Blue & #8B1E1E Crimson Red scrolling continuously) */}
          <div className="relative w-32 sm:w-40 h-1.5 mx-auto mt-4 mb-8 rounded-full overflow-hidden animate-color-scroll shadow-md border border-white/30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
          </div>

          {/* Subheading - High Contrast Crisp Text */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl lg:text-2xl text-slate-100 font-normal leading-relaxed mb-10 drop-shadow-md">
            From product development and precision tooling to injection moulding and production — engineered for consistency, quality and dependable performance.
          </p>

          {/* Action Buttons in Website Brand Colors */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all cursor-pointer group"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('capabilities')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#0B2545] font-bold text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all cursor-pointer border border-white"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. WHO WE ARE • ESTABLISHED 2016 */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="ESTABLISHED 2016"
            title="WHO WE ARE"
            subtitle="Advay Engineers is a high-precision plastic injection mould manufacturer and custom OEM plastic component production partner based in Rajkot, Gujarat."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual with hover zoom */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-xl group">
                <img
                  src={COMPANY_INFO.images.facility}
                  alt="Advay Engineers Manufacturing Facility"
                  className="w-full h-80 sm:h-96 object-cover object-center img-zoom-hover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8E1D3] text-[#0B2545]">
                  <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">WORKS LOCATION</span>
                  <p className="text-sm font-semibold">{COMPANY_INFO.address.line2}, Rajkot – {COMPANY_INFO.address.pincode}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Integrated Toolroom &amp; Modern Injection Moulding Plant
              </h3>
              <p className="text-base text-[#0B2545]/80 leading-relaxed">
                Founded with a vision for uncompromising precision, Advay Engineers bridges the gap between intricate mould design and mass component manufacturing. Under one unified roof, we combine Haas CNC machining, micro-fine tool fitting, and automated injection moulding.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3] shadow-sm box-scroll-reveal card-hover-elevate">
                  <span className="font-mono text-xs font-bold text-[#8B1E1E] uppercase">Core Philosophy</span>
                  <h4 className="font-bold text-[#0B2545] text-base mt-1">Zero Blame-Game</h4>
                  <p className="text-xs text-[#0B2545]/70 mt-1">Toolmaker and molder are the exact same team, ensuring perfect accountability.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3] shadow-sm box-scroll-reveal card-hover-elevate">
                  <span className="font-mono text-xs font-bold text-[#8B1E1E] uppercase">Quality Focus</span>
                  <h4 className="font-bold text-[#0B2545] text-base mt-1">Micron Repeatability</h4>
                  <p className="text-xs text-[#0B2545]/70 mt-1">Hardened tool steels machined to ±0.005mm tolerances for million-cycle runs.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#8B1E1E] hover:text-[#731717] group cursor-pointer"
                >
                  <span>Learn more about our journey &amp; leadership</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. WHAT WE DO • 1 LINE BOXES WITH INTERACTIVE DETAILS & SIDE IMAGE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="END-TO-END PROCESS"
            title="WHAT WE DO"
            subtitle="From the initial 3D sketch to serial component production, our turnkey workflow guarantees technical accuracy at every single milestone."
          />

          {/* 1 Line of Boxes with Stage Names */}
          <div className="flex items-stretch gap-2.5 sm:gap-3 overflow-x-auto pb-3 mb-8 scrollbar-none snap-x snap-mandatory">
            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = activeProcessStep === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`min-w-[130px] sm:min-w-[145px] flex-1 p-3 sm:p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between snap-start group shrink-0 sm:shrink ${
                    isActive
                      ? 'bg-[#0B2545] text-white border-[#0B2545] shadow-lg ring-2 ring-[#8B1E1E]'
                      : 'bg-[#FAF8F5] text-[#0B2545] border-[#E8E1D3] hover:border-[#8B1E1E]/50 hover:bg-white'
                  }`}
                >
                  <div className={`font-mono text-[11px] font-black mb-1 ${isActive ? 'text-red-300' : 'text-[#8B1E1E]'}`}>
                    STEP {stage.step}
                  </div>
                  <h3 className={`text-xs sm:text-sm font-bold leading-tight line-clamp-2 ${isActive ? 'text-white' : 'text-[#0B2545]'}`}>
                    {stage.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Expanded Showcase: On Click Details on 1 Side, High-Res Image on the other Side */}
          <div className="rounded-3xl border border-[#E8E1D3] bg-[#FAF8F5] p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* DETAILS (Left Column) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2545] text-white text-xs font-mono font-bold">
                  <span>STEP {activeProcess.step} OF 07</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
                  {activeProcess.title}
                </h3>

                {/* Sleek 2-color line with scrolling colors */}
                <div className="relative w-24 h-1 rounded-full overflow-hidden animate-color-scroll">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
                </div>

                <p className="text-base text-[#0B2545]/85 leading-relaxed">
                  {activeProcess.details || activeProcess.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                {activeProcess.keyDeliverables && (
                  <div className="space-y-2.5 pt-2 border-t border-[#E8E1D3]">
                    <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                      KEY DELIVERABLES &amp; STANDARDS:
                    </span>
                    {activeProcess.keyDeliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B2545]/80">
                        <CheckCircle2 className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-3">
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>REQUEST PROJECT FEASIBILITY FOR THIS STEP</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* IMAGE (Right Column) */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-200">
                  <img
                    src={activeProcess.image}
                    alt={activeProcess.title}
                    className="w-full h-72 sm:h-96 object-cover object-center img-zoom-hover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B2545]/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-red-300 font-bold uppercase">ADVAY WORKFLOW</span>
                      <p className="text-xs sm:text-sm font-bold">{activeProcess.title}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#8B1E1E] text-white text-xs font-mono font-bold">
                      {activeProcess.step}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. PRODUCTS & CAPABILITIES - 1 LINE LAYOUT WITH TOP IMAGE, 1-LINE DESC, AND DETAILS BUTTON */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="MANUFACTURING EXCELLENCE"
            title="PRODUCTS & CAPABILITIES"
            subtitle="Explore our core production solutions. Click details on any capability to view full technical specifications, mold steels, and tolerance dossiers."
          />

          {/* Arranged in 1 line: 5 columns across desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CAPABILITIES.map((cap) => (
              <div 
                key={cap.id}
                className="flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-sm hover:shadow-xl transition-all duration-300 group box-scroll-reveal card-hover-elevate"
              >
                {/* Top Image with zoom-on-hover */}
                <div className="h-44 overflow-hidden relative bg-slate-100">
                  <img
                    src={cap.image}
                    alt={cap.name}
                    className="w-full h-full object-cover object-center img-zoom-hover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#0B2545]/80 backdrop-blur-sm text-white text-[11px] font-mono font-semibold">
                    ADVAY ENG.
                  </div>
                </div>

                {/* Body: Title + 1-line description + Details button */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#0B2545] text-base mb-2 group-hover:text-[#8B1E1E] transition-colors leading-snug">
                      {cap.name}
                    </h3>
                    <p className="text-xs text-[#0B2545]/70 line-clamp-2 leading-relaxed mb-4">
                      {cap.description}
                    </p>
                  </div>

                  {/* Details Button - redirects to capabilities page */}
                  <button
                    onClick={() => onNavigate('capabilities')}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF8F5] hover:bg-[#8B1E1E] text-[#0B2545] hover:text-white font-bold text-xs uppercase tracking-wider border border-[#E8E1D3] hover:border-[#8B1E1E] transition-all cursor-pointer group/btn"
                  >
                    <span>DETAILS</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. PRECISION MANUFACTURING • TOOLROOM EXCELLENCE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="TOOLROOM EXCELLENCE"
            title="PRECISION MANUFACTURING"
            subtitle="Advanced Haas VMC machining centers, high-rigidity toolroom fitting benches, and precision surface grinders guarantee repeatable mould performance."
          />

          {/* 1 Line of Boxes with Names */}
          <div className="flex items-stretch gap-3 overflow-x-auto pb-3 mb-8 scrollbar-none snap-x snap-mandatory">
            {INFRASTRUCTURE_HIGHLIGHTS.map((item, idx) => {
              const isActive = activeMachineryIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveMachineryIndex(idx)}
                  className={`min-w-[180px] sm:min-w-[210px] flex-1 p-3.5 sm:p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between snap-start group shrink-0 sm:shrink ${
                    isActive
                      ? 'bg-[#0B2545] text-white border-[#0B2545] shadow-lg ring-2 ring-[#8B1E1E]'
                      : 'bg-[#FAF8F5] text-[#0B2545] border-[#E8E1D3] hover:border-[#8B1E1E]/50 hover:bg-white'
                  }`}
                >
                  <div className={`font-mono text-[11px] font-black uppercase mb-1.5 ${isActive ? 'text-red-300' : 'text-[#8B1E1E]'}`}>
                    {item.sub}
                  </div>
                  <h3 className={`text-xs sm:text-sm font-bold leading-snug line-clamp-2 ${isActive ? 'text-white' : 'text-[#0B2545]'}`}>
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Expanded Showcase: On Click Details on 1 Side, Side Image on the other Side */}
          <div className="rounded-3xl border border-[#E8E1D3] bg-[#FAF8F5] p-6 sm:p-10 shadow-lg mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* DETAILS (Left Column) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2545] text-white text-xs font-mono font-bold">
                  <span>{activeMachinery.sub}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
                  {activeMachinery.title}
                </h3>

                {/* Sleek 2-color line with scrolling colors */}
                <div className="relative w-24 h-1 rounded-full overflow-hidden animate-color-scroll">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
                </div>

                <p className="text-base text-[#0B2545]/85 leading-relaxed font-medium">
                  {activeMachinery.description}
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3] shadow-xs">
                  <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase block mb-1.5">
                    TECHNICAL SETUP &amp; CAPACITY:
                  </span>
                  <p className="text-xs sm:text-sm text-[#0B2545]/80 leading-relaxed">
                    {activeMachinery.detail}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => onNavigate('infrastructure')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#081B33] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>VIEW FULL MACHINERY SETUP</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>INQUIRE CAPACITY</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* IMAGE (Right Column) */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-200">
                  <img
                    src={activeMachinery.image}
                    alt={activeMachinery.title}
                    className="w-full h-72 sm:h-96 object-cover object-center img-zoom-hover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B2545]/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-red-300 font-bold uppercase">{activeMachinery.sub}</span>
                      <p className="text-xs sm:text-sm font-bold">{activeMachinery.title}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#8B1E1E] text-white text-xs font-mono font-bold">
                      IN-HOUSE
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE • 1 SIDE ALL NAMES, OPPOSITE SIDE IMAGE & DETAILS OPEN ON CLICK */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="10 INDUSTRIAL APPLICATIONS"
            title="INDUSTRIES WE SERVE"
            subtitle="Click on any industry from the list to explore component applications, engineered plastic polymers, and tooling tolerances."
          />

          {/* Master-Detail Layout: 1 Side All Names, Facing Side Image & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 1 SIDE: ALL 10 INDUSTRY NAMES */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="p-3 bg-white rounded-xl border border-[#E8E1D3] flex items-center justify-between mb-3 shadow-xs">
                <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                  SELECT APPLICATION ({INDUSTRIES.length})
                </span>
                <span className="text-[11px] text-[#0B2545]/60 font-medium">Click to inspect</span>
              </div>

              <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin">
                {INDUSTRIES.map((ind) => {
                  const isSelected = selectedIndustryId === ind.id;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustryId(ind.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                        isSelected
                          ? 'bg-[#0B2545] text-white border-[#0B2545] shadow-md ring-2 ring-[#8B1E1E]'
                          : 'bg-white text-[#0B2545] border-[#E8E1D3] hover:border-[#8B1E1E]/40 hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'bg-[#8B1E1E] text-white' : 'bg-[#FAF8F5] text-[#8B1E1E] group-hover:bg-[#8B1E1E] group-hover:text-white'
                        }`}>
                          <IconRenderer name={ind.iconName} className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-xs sm:text-sm truncate">{ind.name}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-red-300 translate-x-1' : 'text-[#0B2545]/40 group-hover:translate-x-1'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* OPPOSITE SIDE (USKE SAMNE): IMAGE & DETAILS OPEN FOR SELECTED INDUSTRY */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-[#E8E1D3] bg-white p-6 sm:p-8 shadow-xl">
                
                {/* Sector Image */}
                <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-md mb-6 bg-slate-100 group">
                  <img
                    src={activeIndustry.image}
                    alt={activeIndustry.name}
                    className="w-full h-64 sm:h-80 object-cover object-center img-zoom-hover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-[#8B1E1E] shadow-sm flex items-center gap-2">
                    <IconRenderer name={activeIndustry.iconName} className="w-5 h-5" />
                    <span className="text-xs font-mono font-bold text-[#0B2545] uppercase">
                      ADVAY APPLICATION
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
                      {activeIndustry.name}
                    </h3>
                  </div>

                  {/* Sleek 2-color line with scrolling colors */}
                  <div className="relative w-24 h-1 rounded-full overflow-hidden animate-color-scroll">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
                  </div>

                  <p className="text-sm sm:text-base text-[#0B2545]/85 leading-relaxed font-medium">
                    {activeIndustry.description}
                  </p>

                  {/* Highlight Parts Box */}
                  <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3]">
                    <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase block mb-1.5">
                      TYPICAL COMPONENTS &amp; APPLICATIONS:
                    </span>
                    <p className="text-xs sm:text-sm text-[#0B2545] font-semibold leading-relaxed">
                      {activeIndustry.highlightPart}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={onOpenQuote}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <span>REQUEST APPLICATION QUOTE</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => onNavigate('industries')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#081B33] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <span>EXPLORE ALL 10 APPLICATIONS</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. OUR ACHIEVEMENTS • DELIVERED EXCELLENCE */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="DELIVERED EXCELLENCE"
            title="OUR ACHIEVEMENTS"
            subtitle="Track record of reliability built across hundreds of successful mould trials, long-term OEM contracts, and zero-defect deliveries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] text-center shadow-sm hover:shadow-md transition-shadow box-scroll-reveal card-hover-elevate">
              <div className="w-14 h-14 rounded-2xl bg-[#0B2545] text-white flex items-center justify-center mx-auto mb-5 shadow-sm animate-float">
                <Award className="w-7 h-7" />
              </div>
              <ScrollCounter
                target={500}
                suffix="+"
                duration={1800}
                className="text-4xl font-black text-[#0B2545] font-mono mb-2"
              />
              <h3 className="font-bold text-base text-[#0B2545] mb-2">Moulds Commissioned</h3>
              <p className="text-xs text-[#0B2545]/70 leading-relaxed">
                Precision single and multi-cavity injection moulds engineered and validated for high-volume duty.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] text-center shadow-sm hover:shadow-md transition-shadow box-scroll-reveal card-hover-elevate">
              <div className="w-14 h-14 rounded-2xl bg-[#8B1E1E] text-white flex items-center justify-center mx-auto mb-5 shadow-sm animate-float">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <ScrollCounter
                target={99.8}
                decimals={1}
                suffix="%"
                duration={1800}
                className="text-4xl font-black text-[#8B1E1E] font-mono mb-2"
              />
              <h3 className="font-bold text-base text-[#0B2545] mb-2">Quality Acceptance</h3>
              <p className="text-xs text-[#0B2545]/70 leading-relaxed">
                First-article trial validation and CMM dimensional metrology conforming strictly to CAD models.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] text-center shadow-sm hover:shadow-md transition-shadow box-scroll-reveal card-hover-elevate">
              <div className="w-14 h-14 rounded-2xl bg-[#0B2545] text-white flex items-center justify-center mx-auto mb-5 shadow-sm animate-float">
                <Clock className="w-7 h-7" />
              </div>
              <ScrollCounter
                target={9}
                suffix="+ Years"
                duration={1600}
                className="text-4xl font-black text-[#0B2545] font-mono mb-2"
              />
              <h3 className="font-bold text-base text-[#0B2545] mb-2">Industry Leadership</h3>
              <p className="text-xs text-[#0B2545]/70 leading-relaxed">
                Operating continuously in Rajkot since 2016, building trusted relationships with pan-India clients.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] text-center shadow-sm hover:shadow-md transition-shadow box-scroll-reveal card-hover-elevate">
              <div className="w-14 h-14 rounded-2xl bg-[#8B1E1E] text-white flex items-center justify-center mx-auto mb-5 shadow-sm animate-float">
                <Users className="w-7 h-7" />
              </div>
              <ScrollCounter
                target={120}
                suffix="+"
                duration={1800}
                className="text-4xl font-black text-[#8B1E1E] font-mono mb-2"
              />
              <h3 className="font-bold text-base text-[#0B2545] mb-2">Satisfied OEM Clients</h3>
              <p className="text-xs text-[#0B2545]/70 leading-relaxed">
                Repeat manufacturing partnerships across automotive, irrigation, electrical, and appliance brands.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. STRATEGIC FOUNDATION - WHY ADVAY ENGINEERS */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="STRATEGIC FOUNDATION"
            title="WHY ADVAY ENGINEERS"
            subtitle="We eliminate the traditional friction of custom plastic manufacturing by integrating mould building and component moulding in one cohesive operation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ADVAY_POINTS.map((pt, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#E8E1D3] shadow-sm hover:shadow-md hover:border-[#8B1E1E]/30 transition-all box-scroll-reveal card-hover-elevate"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3] text-[#8B1E1E] flex items-center justify-center mb-5">
                  <IconRenderer name={pt.iconName} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B2545] mb-2">
                  {pt.title}
                </h3>
                <p className="text-sm text-[#0B2545]/75 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CLIENT REVIEW - CAROUSEL */}
      <TestimonialsSection />

      {/* 10. FAQS */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            kicker="QUESTIONS & ANSWERS"
            title="FREQUENTLY ASKED QUESTIONS"
            subtitle="Clear answers regarding mould feasibility, quotation formats, engineering resins, and project confidentialities."
          />

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="rounded-2xl border border-[#E8E1D3] bg-[#FAF8F5] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg text-[#0B2545]">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-[#E8E1D3] flex items-center justify-center text-[#0B2545] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-[#8B1E1E] text-white border-[#8B1E1E]' : 'bg-white'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#0B2545]/80 leading-relaxed border-t border-[#E8E1D3]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. READY FOR PRODUCTION - EXACT REQUESTED CONTENT & 2 BUTTONS */}
      <ReadyForProductionSection onOpenQuote={onOpenQuote} />

    </div>
  );
};
