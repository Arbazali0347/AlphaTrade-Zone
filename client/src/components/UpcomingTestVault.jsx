import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHourglassHalf, FaTrophy, FaChevronRight } from 'react-icons/fa';
import image_1 from "../assets/past-fetival-1.jpeg";
import image_2 from "../assets/team.jpg";
import { useNavigate } from 'react-router-dom';
const UpcomingTestVault = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#020617] text-white py-10 px-4 relative overflow-hidden font-sans border-b border-white/5">
      
      {/* Background Neon Grid Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-5">
        
        {/* --- HEADER --- */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500/10 border border-blue-500/30 p-2 rounded-lg text-blue-400">
              <FaTrophy size={14} />
            </div>
            <div>
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest block">Timeline Tracker</span>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">Evaluation Nodes</h2>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC VISUAL GRID --- */}
        <div onClick={()=> navigate("/festivals")} className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          
          {/* LEFT NODE: 2025 (Archived & Fully Clear Image Panel) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col sm:flex-row bg-[#040d21]/60 border border-emerald-500/20 rounded-2xl overflow-hidden shadow-xl"
          >
            {/* 100% Clear Image Container */}
            <div className="w-full sm:w-[55%] aspect-video sm:aspect-auto relative bg-zinc-950 overflow-hidden shrink-0 border-b sm:border-b-0 sm:border-r border-white/5">
              <img 
                src={image_1} 
                alt="2025 Performance Chart"
                className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none mix-blend-color"></div>
            </div>

            {/* Structured Text & Status Side Panel */}
            <div className="w-full sm:w-[45%] p-4 flex flex-col justify-between items-start space-y-6 bg-gradient-to-br from-transparent to-[#02081c]">
              <div className="w-full flex items-center justify-between">
                <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded">
                  Node Archived
                </span>
                <span className="text-zinc-500 font-black text-xs">2025</span>
              </div>

              <div className="space-y-1">
                <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest block">Phase 01 Complete</span>
                <h3 className="text-white font-black text-base uppercase tracking-tight leading-tight group-hover:text-emerald-400 transition-colors">
                  Alpha Core Evaluation Matrix
                </h3>
              </div>
            </div>
          </motion.div>

          {/* RIGHT NODE: 2026 (Upcoming Live Focus Panel) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col sm:flex-row bg-[#040d21]/60 border border-blue-500/30 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/5"
          >
            {/* 100% Clear Image Container */}
            <div className="w-full sm:w-[55%] aspect-video sm:aspect-auto relative bg-zinc-950 overflow-hidden shrink-0 border-b sm:border-b-0 sm:border-r border-white/5">
              <img 
                src={image_2} 
                alt="2026 Strategy Grid"
                className="w-full h-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-blue-500/5 pointer-events-none mix-blend-color"></div>
            </div>

            {/* Structured Text & Status Side Panel */}
            <div className="w-full sm:w-[45%] p-4 flex flex-col justify-between items-start space-y-6 bg-gradient-to-br from-transparent to-[#02081c]">
              <div className="w-full flex items-center justify-between">
                <span className="bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded shadow-sm ">
                  achieved Node
                </span>
                <span className="text-blue-400 font-black text-xs">2026</span>
              </div>

              <div className="w-full flex items-end justify-between gap-2">
                <div className="space-y-1">
                  <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest block">Phase 02 Next Up</span>
                  <h3 className="text-white font-black text-base uppercase tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                    Next Institutional Sequence
                  </h3>
                </div>
                
                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center border border-blue-400 shrink-0 group-hover:bg-blue-500 transition-colors shadow-md">
                  <FaChevronRight size={8} />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default UpcomingTestVault;