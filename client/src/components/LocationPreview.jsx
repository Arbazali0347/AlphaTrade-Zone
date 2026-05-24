import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, Building2 } from 'lucide-react';

const LocationPreview = () => {
  // Teeno actual campuses ka state-driven data updated with client details
  const campuses = [
    {
      id: "shah-faisal",
      title: "SHAH FAISAL CAMPUS",
      subtitle: "Trade Alpha Zone Head Office",
      address: "S.R ACADEMY (SHAH FAISAL CAMPUS)",
      city: "Karachi, Pakistan",
      timing: "12:00 PM - 09:00 PM",
      phone: "+92 335 1398283",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.42292456852!2d67.15251409999999!3d24.883551699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3392be2b586cf%3A0xc76e3e8ce37ffe8e!2sS.R%20ACADEMY%20(SHAH%20FAISAL%20CAMPUS)!5e0!3m2!1sen!2s!4v1779273652382!5m2!1sen!2s"
    },
    {
      id: "model-colony",
      title: "COGITO CAMPUS",
      subtitle: "Linguaphile Academia Collaboration",
      address: "Liaquat Ali Khan Rd, Model Colony Block 10 Model Colony",
      city: "Karachi, 75080, Pakistan",
      timing: "02:00 PM - 10:00 PM",
      phone: "+92 335 1398283",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8949282249905!2d67.1931316!3d24.9015654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3376104bf53e3%3A0xbab61c641f9cfcee!2sLinguaphile%20Academia!5e0!3m2!1sen!2s!4v1779273782800!5m2!1sen!2s"
    },
    {
      id: "saudabad",
      title: "SKILLBOX CENTER",
      subtitle: "Skill Box Institute Premises",
      address: "W622+HF8, Indus Mehran",
      city: "Karachi, 75080, Pakistan",
      timing: "03:00 PM - 11:00 PM",
      phone: "+92 335 1398283",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8992471596307!2d67.2012037!3d24.901418099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33737ff54109d%3A0x21738722b899efb5!2sSkillBox!5e0!3m2!1sen!2s!4v1779273864635!5m2!1sen!2s"
    }
  ];

  const [activeCampus, setActiveCampus] = useState(campuses[0]);

  // Function to open the active map link in a new tab
  const handleOpenMap = () => {
    window.open(activeCampus.mapSrc, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative bg-[#010413] py-24 md:py-32 px-6 overflow-hidden min-h-screen flex items-center">

      {/* BACKGROUND LARGE WATERMARK */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.015]">
        <h2 className="text-[25vw] font-black leading-none tracking-tighter uppercase italic text-white">
          ALPHA
        </h2>
        <h2 className="text-[20vw] font-black leading-none tracking-tighter uppercase italic text-blue-600">
          HUBS.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* HEADER SECTION */}
        <div className="mb-16 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-full w-fit mx-auto lg:mx-0 mb-4">
            <Building2 size={12} className="text-blue-500" />
            <span className="text-blue-400 font-bold tracking-[0.2em] text-[9px] uppercase">Regional Campuses</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
            OUR TRADING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">LOCATIONS.</span>
          </h2>
        </div>

        {/* Adjusted Grid Layout Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT SIDE: Campus Selection Controls & Details */}
          <div className="lg:col-span-6 space-y-8 w-full">

            {/* Interactive Campus Selector List */}
            <div className="flex flex-col gap-3">
              {campuses.map((campus) => (
                <button
                  key={campus.id}
                  onClick={() => setActiveCampus(campus)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-1 ${activeCampus.id === campus.id
                      ? "bg-blue-600/10 border-blue-500/50 shadow-lg shadow-blue-500/5"
                      : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
                    }`}
                >
                  <p className={`text-[10px] font-black tracking-widest uppercase ${activeCampus.id === campus.id ? 'text-blue-400' : 'text-zinc-500'}`}>
                    {campus.subtitle}
                  </p>
                  <h4 className="text-white text-lg font-black tracking-tight uppercase">
                    {campus.title.split(' — ')[0]}
                  </h4>
                </button>
              ))}
            </div>

            {/* Dynamic Active Campus Information View */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCampus.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-l-2 border-blue-500/30 pl-6 pt-4"
              >
                {/* Full Physical Address Box */}
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Campus Address</p>
                  <p className="text-white text-sm font-bold leading-snug">
                    {activeCampus.address} <br />
                    <span className="text-zinc-400 font-medium">{activeCampus.city}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT SIDE: Map Container Frame (Optimized Height & Sizing) */}
          <div className="lg:col-span-6 w-full relative">
            <div className="absolute -inset-4 bg-blue-600/5 blur-3xl rounded-[3rem] pointer-events-none"></div>

            {/* FIXED ASPECT RATIO: Changed aspect-square to aspect-[4/3] on mobile and aspect-video on large screens */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] md:aspect-video bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={activeCampus.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={activeCampus.mapSrc}
                  className="w-full h-full grayscale invert contrast-[1.15] brightness-[0.85] hover:opacity-100 transition-all duration-500"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></motion.iframe>
              </AnimatePresence>

              {/* Glassmorphism Dynamic Footer Label Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-xl border border-white/5 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Phone size={14} />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest leading-none mb-1">Campus Desk</p>
                    <p className="text-white font-bold tracking-tight text-xs leading-none">{activeCampus.phone}</p>
                  </div>
                </div>
                <div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest text-center sm:text-right w-full sm:w-auto leading-tight">
                  Trading Hall & <br />Learning Desk Open
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationPreview;