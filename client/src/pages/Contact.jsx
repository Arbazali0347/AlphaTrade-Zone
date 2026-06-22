import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaBuilding, 
  FaGlobe, 
  FaInstagram, 
  FaExternalLinkAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

const ContactPage = () => {
  const contactInfo = {
    phone: "+92 315 2939539",
    email: "contact@tradealphazone.com",
    instagram: "@trade_alpha_zone",
    website: "www.tradealphazone.com"
  };

  const campuses = [
    {
      id: "model-colony",
      name: "MODEL COLONY CAMPUS",
      type: "Linguaphile Academia Desk",
      address: "Liaquat Ali Khan Rd, Model Colony Block 10 Model Colony",
      city: "Karachi, 75080, Pakistan",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8949282249905!2d67.1931316!3d24.9015654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3376104bf53e3%3A0xbab61c641f9cfcee!2sLinguaphile%20Academia!5e0!3m2!1sen!2s!4v1779273782800!5m2!1sen!2s",
      liveMapUrl: "https://maps.google.com/?q=Model+Colony+Block+10+Karachi"
    },
    {
      id: "saudabad",
      name: "SAUDABAD CAMPUS",
      type: "Skill Box Institute Premises",
      address: "W622+HF8, Indus Mehran",
      city: "Karachi, 75080, Pakistan",
      embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.8992471596307!2d67.2012037!3d24.901418099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33737ff54109d%3A0x21738722b899efb5!2sSkillBox!5e0!3m2!1sen!2s!4v1779273864635!5m2!1sen!2s",
      liveMapUrl: "https://maps.google.com/?q=Saudabad+Malir+Karachi"
    }
  ];

  const [selectedCampus, setSelectedCampus] = useState(campuses[0]);

  return (
    <div className="bg-[#010413] text-white min-h-screen py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden font-sans">
      
      {/* BACKGROUND NEON GLOWS */}
      <div className="absolute top-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-600/10 blur-[120px] md:blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/5 blur-[120px] md:blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 md:space-y-20">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-blue-500 font-black tracking-[0.4em] text-[10px] uppercase">Connect With Alpha Panel</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
            CONTACT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">THE DESK.</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-medium max-w-xl mx-auto pt-2 px-2">
            Visit our On-Premise trading floors or reach out directly through official institutional channels.
          </p>
        </div>

        {/* --- MAIN INTERFACE SPLIT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Core Communication Details (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between bg-[#04091e]/40 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 space-y-8 backdrop-blur-md"
          >
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white border-b border-white/5 pb-4">
                Direct Channels
              </h3>

              <div className="space-y-5 md:space-y-6">
                {/* Central Phone Line */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FaPhone size={13} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Central Support Helpline</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-white font-black text-sm md:text-base hover:text-blue-400 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Corporate Mail */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <FaEnvelope size={13} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Official Inquiries</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-white font-bold text-sm md:text-base hover:text-cyan-400 transition-colors break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Active Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <FaClock size={13} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Desk Operations</p>
                    <p className="text-white font-bold text-sm md:text-base">Monday — Saturday</p>
                    <p className="text-zinc-500 font-medium text-[11px] md:text-xs mt-1 leading-relaxed">
                      Trading halls remain operational during session sequences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Footprint links */}
            <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://instagram.com/trade_alpha_zone" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-bold"
              >
                <FaInstagram size={15} className="text-blue-500" />
                <span>{contactInfo.instagram}</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold">
                <FaGlobe size={13} className="text-cyan-400" />
                <span>{contactInfo.website}</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Campus Selector & Live Embed Map (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-between bg-[#04091e]/40 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 space-y-6 relative backdrop-blur-md"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FaBuilding size={15} className="text-blue-500" />
                <h3 className="text-lg md:text-xl font-black uppercase italic tracking-tight text-white">
                  Campus Navigation Center
                </h3>
              </div>

              {/* Grid selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {campuses.map((campus) => (
                  <button
                    key={campus.id}
                    type="button"
                    onClick={() => setSelectedCampus(campus)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                      selectedCampus.id === campus.id
                        ? "bg-blue-600/10 border-blue-500/40 shadow-lg shadow-blue-950/50"
                        : "bg-black/30 border-white/5 hover:bg-white/[0.02]"
                    }`}
                  >
                    <span className={`text-[8px] font-black tracking-wider block uppercase mb-1 ${selectedCampus.id === campus.id ? 'text-blue-400' : 'text-zinc-500'}`}>
                      {campus.type}
                    </span>
                    <span className="text-white text-xs font-black tracking-tight uppercase leading-tight">
                      {campus.name.split(' ')[0]} {campus.name.split(' ')[1] || ''} {campus.name.split(' ')[2] || ''}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* LIVE DYNAMIC MAP CONTAINER */}
            <div className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-4 border border-white/10 rounded-2xl p-4 bg-black/40 overflow-hidden min-h-[360px] md:min-h-[320px]">
              
              {/* Active Campus Text Data */}
              <div className="md:col-span-4 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-500">
                    <FaMapMarkerAlt size={14} className="animate-bounce" />
                    <span className="text-[9px] font-black tracking-widest uppercase">Active Node</span>
                  </div>
                  <h4 className="text-white font-black text-sm uppercase tracking-wide leading-tight">{selectedCampus.name}</h4>
                  <p className="text-zinc-400 text-[11px] font-medium leading-relaxed">
                    {selectedCampus.address}
                  </p>
                  <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider">
                    {selectedCampus.city}
                  </p>
                </div>
              </div>

              {/* Embedded Google Map Frame */}
              <div className="md:col-span-8 h-48 md:h-full min-h-[200px] w-full rounded-xl overflow-hidden border border-white/5 relative bg-zinc-900">
                <AnimatePresence mode="wait">
                  <motion.iframe
                    key={selectedCampus.id}
                    initial={{ opacity: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    title={selectedCampus.name}
                    src={selectedCampus.embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  ></motion.iframe>
                </AnimatePresence>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;