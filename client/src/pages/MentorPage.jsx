import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Camera } from 'lucide-react';
import logo from "/logo.png";
import Hamza_image_1 from "../assets/hamza-1.jpeg"
import Hamza_image_2 from "../assets/hamza-2.jpeg"
import Hamza_image_3 from "../assets/hamza-3.jpeg"
import Hamza_image_4 from "../assets/hamza-4.jpeg"
import tahir from "../assets/tahir.jpeg"
const MentorPage = () => {
  
  // Hamza Kayani's 4 Showcase Images
  const hamzaGallery = [
    { id: 1, image: Hamza_image_1},
    { id: 2, image: Hamza_image_2 },
    { id: 3, image: Hamza_image_3 },
    { id: 4, image: Hamza_image_4 }
  ];

  // Core Team Section Data (Clean & Text-Free)
  const coreTeam = [
    {
      name: "Tahir Ali",
      image: tahir,
    },
    {
      image: Hamza_image_1
    },
    {
      image: Hamza_image_3
    }
  ];

  return (
    <div className="bg-[#010413] text-white min-h-screen py-16 px-4 md:px-6 relative font-sans overflow-hidden">
      
      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* --- BRAND HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                className="h-10 w-auto filter drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]" 
                alt="TAZ" 
              />
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] bg-blue-500/10 px-3 py-1 rounded-md">
                Alpha Mentorship Hub
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
              The Mind Behind <br /> <span className="text-blue-500">Trade Alpha Zone</span>
            </h1>
          </div>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Precision . Discipline . Results
          </p>
        </div>

        {/* --- CINEMATIC STORY VIDEO --- */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-cyan-400">
            <Award size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Featured Story Document</span>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full aspect-video md:max-h-[500px] bg-black/60 rounded-[2rem] border border-blue-500/20 overflow-hidden shadow-2xl relative"
          >
            <iframe 
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/kOhcq_GWPFQ?si=8xxsqf9_-gImI-W1&mute=1" 
              title="Trade Alpha Zone Story Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        {/* --- HAMZA KAYANI PROFILE & 4 IMAGES --- */}
        <div className="space-y-6">
          <div className="border-l-2 border-blue-500 pl-4">
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block">Founder & Head Mentor</span>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
              Hamza Kayani
            </h2>
          </div>

          {/* 4 Large Premium Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hamzaGallery.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                className="group aspect-[3/4] bg-[#040d21]/40 border border-white/5 rounded-2xl overflow-hidden relative shadow-lg"
              >
                {/* Image Placeholder */}
                <img 
                  src={item.image} 
                  alt="Hamza Kayani"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-102 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
                
                {/* Label Overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/90 via-transparent to-transparent">
                  <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest block">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM SECTION: HUMZA KAYANI TEAM IMAGES --- */}
        <div className="space-y-6 pt-10 border-t border-white/5">
          <div className="flex items-center gap-2.5 text-zinc-400">
            <Users size={16} className="text-blue-500" />
            <h3 className="text-xl font-black uppercase italic tracking-tight text-white">Humza Kayani Team</h3>
          </div>

          {/* Clean Team Pictures Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {coreTeam.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -4 }}
                className="bg-[#030712] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col group hover:border-blue-500/20 transition-all shadow-xl"
              >
                {/* Team Frame */}
                <div className="w-full aspect-square bg-zinc-950 relative overflow-hidden border-b border-white/5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>

                {/* Team Info (Strictly Only Name & Role) */}
                <div className="p-4 bg-gradient-to-b from-transparent to-[#020719] flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h4>
                    <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest block mt-0.5">
                      {member.role}
                    </span>
                  </div>
                  <Camera size={14} className="text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MentorPage;