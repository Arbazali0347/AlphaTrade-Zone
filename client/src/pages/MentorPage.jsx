import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Camera, Play, Shield, Activity } from 'lucide-react';
import logo from "/logo.png";
import Hamza_image_1 from "../assets/hamza-1.jpg"
import Hamza_image_2 from "../assets/hamza-2.jpg"
import Hamza_image_3 from "../assets/hamza-3.jpg"
import Hamza_image_4 from "../assets/hamza-4.jpg"
import team from "../assets/team.jpg"
import team_1 from "../assets/team-1.jpg"
import tahir from "../assets/hamza-tahir.jpg"
import mentorVideo from "../assets/mentorEntry.mp4";

const MentorPage = () => {
  
  // Hamza Kayani's 4 Showcase Images
  const hamzaGallery = [
    { id: 1, image: Hamza_image_1},
    { id: 2, image: Hamza_image_2 },
    { id: 3, image: Hamza_image_3 },
    { id: 4, image: Hamza_image_4 }
  ];

  // Core Team Section Data
  const coreTeam = [
    {
      name: "Tahir Ali",
      role: "Co-Founder",
      image: tahir,
    },
    {
      name: "Hamza Kayani",
      role: "Head Mentor",
      image: team
    },
    {
      name: "Alpha Analyst",
      role: "Risk Management",
      image: team_1
    }
  ];

  return (
    <div className="bg-[#02040a] text-white min-h-screen py-16 px-4 md:px-8 relative font-sans overflow-hidden">
      
      {/* PREMIUM GLOW AMBIANCE */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/[0.07] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/[0.04] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* --- BRAND HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.04] pb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                className="h-9 w-auto filter drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]" 
                alt="TAZ" 
              />
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.25em] bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                Alpha Mentorship Hub
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
              The Mind Behind <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Trade Alpha Zone</span>
            </h1>
          </div>
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Precision . Discipline . Results
          </p>
        </div>

        {/* --- NEW ASYMMETRIC 2-COLUMN HERO VIDEO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-[#070b1e] to-[#030511] border border-white/[0.04] rounded-[2.5rem] p-6 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] relative overflow-hidden group">
          {/* Top Line Accent Effect */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent group-hover:via-cyan-400/40 transition-all duration-700" />
          
          {/* Left Side: Editorial Context */}
          <div className="lg:col-span-5 space-y-6 z-10">
            <div className="flex items-center gap-2 text-cyan-400">
              <Award size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Featured Entry Document</span>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight leading-tight text-white">
                COMMITTED TO <br />MARKET EXCELLENCE
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm font-normal tracking-wide leading-relaxed max-w-sm">
                Watch the official visual entry detailing the strategic vision, execution framework, and structural mechanics behind the TAZ trading floor operation.
              </p>
            </div>
            
            {/* Live Indicator Badges */}
            <div className="pt-4 flex flex-wrap gap-4 border-t border-white/[0.04]">
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                <Shield size={12} className="text-blue-500" /> AUTHENTICATED DATA
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                <Activity size={12} className="text-emerald-500" /> STREAM STABLE
              </div>
            </div>
          </div>

          {/* Right Side: Sleek Non-Centered Autoplay Video Container */}
          <div className="lg:col-span-7 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full aspect-video max-w-xl lg:ml-auto bg-black/80 rounded-2xl border border-white/[0.06] group-hover:border-blue-500/30 overflow-hidden shadow-2xl relative transition-all duration-500"
            >
              {/* Subtle Overlay to make it premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />
              
              <video 
                className="w-full h-full object-cover"
                src={mentorVideo}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>

              {/* Autoplay Visual Tag overlaying top right corner */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 text-[8px] font-mono tracking-widest text-zinc-400 flex items-center gap-1.5 pointer-events-none select-none z-20">
                <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping" />
                AUTOPLAY
              </div>
            </motion.div>
          </div>
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
                <img 
                  src={item.image} 
                  alt="Hamza Kayani"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />
                
                <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/90 via-transparent to-transparent">
                  <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest block">
                    {item.label || "TAZ CORE"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM SECTION: HAMZA KAYANI TEAM IMAGES --- */}
        <div className="space-y-6 pt-10 border-t border-white/[0.04]">
          <div className="flex items-center gap-2.5 text-zinc-400">
            <Users size={16} className="text-blue-500" />
            <h3 className="text-xl font-black uppercase italic tracking-tight text-white">Hamza Kayani Team</h3>
          </div>

          {/* Clean Team Pictures Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {coreTeam.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-[#030712] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col group hover:border-blue-500/20 transition-all shadow-xl"
              >
                <div className="w-full aspect-square bg-zinc-950 relative overflow-hidden border-b border-white/5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>

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