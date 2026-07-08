import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Radio, Laptop, ShieldCheck, GraduationCap, Users, TrendingUp, Target, Shield, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Aap yahan apne exact assets ke paths adjust kar sakte hain:
import teacherBgImg from "../assets/Tradd.png"; // Teacher lecturing + big screen background
import phoneDeviceImg from "../assets/taz-cadet-phone.png"; // Right side phone wrapper PNG

const STATS_ITEMS = [
  { icon: ShieldCheck, title: "Discipline First", desc: "We teach risk, not luck." },
  { icon: Users, title: "50K+", desc: "Active Students Growing Together" },
  { icon: TrendingUp, title: "Live Market", desc: "Real-Time Training Real-Time Edge" },
  { icon: Target, title: "Strategy Driven", desc: "Structure. Logic. Execution." },
  { icon: Shield, title: "Transparent", desc: "No hidden agenda. No fake promises." },
];

const NewHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#010413] text-white flex flex-col justify-between overflow-hidden pb-8 px-4 sm:px-6 md:px-8">
      
      {/* ── BACKGROUND LAYER WITH TEACHER AND SCREEN ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Main Background Image - Mobile par alignment focus smooth kiya hai taake teacher clear dikhe */}
        <div 
          className="absolute inset-0 bg-cover bg-[right_25%_center] sm:bg-[right_15%_center] md:bg-[right_-150px_center] lg:bg-center no-repeat opacity-60 md:opacity-100 mix-blend-screen scale-105 transition-all duration-300"
          style={{ 
            backgroundImage: `linear-gradient(to right, #010413 15%, transparent 70%, #010413 100%), 
                              linear-gradient(to bottom, #010413 5%, transparent 45%, #010413 95%), 
                              url(${teacherBgImg})` 
          }}
        />
        {/* Glow ambient effects matching the dashboard accent */}
        <div className="absolute top-[20%] right-[25%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-blue-600/10 blur-[100px] sm:blur-[140px] rounded-full" />
        <div className="absolute top-[10%] left-[5%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-cyan-500/5 blur-[90px] sm:blur-[120px] rounded-full" />
      </div>

      {/* ── MAIN HERO LAYOUT ── */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center lg:items-start relative z-10 flex-grow mt-4 mb-auto">
        
        {/* LEFT CONTENT: Heading, Text & Main Grid Cards (Takes 8 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-8 flex flex-col items-center text-center lg:items-start lg:text-left space-y-5 md:space-y-6 pt-2"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-center lg:self-start">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-blue-500 font-extrabold tracking-[0.25em] text-[10px] md:text-xs uppercase">
              • ELITE TRADING COMMUNITY - PAKISTAN
            </span>
          </div>

          {/* Typography Exact Words */}
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.1] uppercase">
              LEARN TRADING.<br />
              FOLLOW SIGNALS.<br />
              USE SOFTWARE.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400">
                TRADE WITH CONFIDENCE.
              </span>
            </h1>
          </div>

          {/* Paragraph Descriptive Text */}
          <p className="text-zinc-400 text-xs sm:text-sm font-normal max-w-[580px] leading-relaxed">
            TAZ is a complete Trading ecosystem that combines academy training, live signal guidance, 
            entry-targets by our softwares, and platform selection guidance through our partner exchange ecosystem.
          </p>

          {/* ── INTERACTIVE FUNCTIONAL CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[680px] w-full pt-2 text-left">
            
            {/* Box 1: Join Trading Academy */}
            <div 
              onClick={() => navigate('/join')}
              className="group flex items-center justify-between p-4 bg-blue-600 hover:bg-blue-500 rounded-xl cursor-pointer transition-all duration-200 shadow-[0_4px_20px_rgba(37,99,235,0.25)]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg text-white">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-wider text-white">Join Trading Academy</h4>
                  <p className="text-[9px] text-blue-100 font-medium">Learn. Understand. Trade.</p>
                </div>
              </div>
              <ArrowRight size={14} className="text-white group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Box 2: Get Trading Signals */}
            <div 
              onClick={() => navigate('/software/autosignal-x')}
              className="group flex items-center justify-between p-4 bg-[#070c24]/80 border border-zinc-800/60 hover:border-blue-500/40 rounded-xl cursor-pointer transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Radio size={18} />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-wider text-zinc-100">Get Trading Signals</h4>
                  <p className="text-[9px] text-zinc-500 font-medium">Live Market Guidance</p>
                </div>
              </div>
              <ArrowRight size={14} className="text-zinc-500 group-hover:translate-x-1 transition-transform group-hover:text-blue-400" />
            </div>

            {/* Box 3: Entry Targets by Software */}
            <div 
              onClick={() => navigate('/software/autosignal-x')}
              className="group flex items-center justify-between p-4 bg-[#070c24]/80 border border-zinc-800/60 hover:border-blue-500/40 rounded-xl cursor-pointer transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Laptop size={18} />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-wider text-zinc-100">Entry - Targets by Softwares</h4>
                  <p className="text-[9px] text-zinc-500 font-medium">Precision. Clarity. Control.</p>
                </div>
              </div>
              <ArrowRight size={14} className="text-zinc-500 group-hover:translate-x-1 transition-transform group-hover:text-blue-400" />
            </div>

            {/* Box 4: Platform Selection Guidance */}
            <div 
              onClick={() => navigate('/mentor')}
              className="group flex items-center justify-between p-4 bg-[#070c24]/80 border border-zinc-800/60 hover:border-blue-500/40 rounded-xl cursor-pointer transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Landmark size={18} />
                </div>
                <div>
                  <h4 className="font-black text-[11px] uppercase tracking-wider text-zinc-100">Platform Selection Guidance</h4>
                  <p className="text-[9px] text-zinc-500 font-medium">Choose Smart. Trade Safe.</p>
                </div>
              </div>
              <ArrowRight size={14} className="text-zinc-500 group-hover:translate-x-1 transition-transform group-hover:text-blue-400" />
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE: Device frame optimized for mobile scaling view */}
        <div className="col-span-1 lg:col-span-4 flex justify-center lg:justify-end items-end lg:self-end relative pt-4 lg:pt-0 w-full">
          <motion.div 
            animate={{ 
              y: [0, -12, 0],
              filter: [
                "drop-shadow(0 15px 30px rgba(37,99,235,0.2))",
                "drop-shadow(0 30px 50px rgba(37,99,235,0.4))",
                "drop-shadow(0 15px 30px rgba(37,99,235,0.2))"
              ]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative max-w-[200px] sm:max-w-[240px] lg:max-w-[285px] w-full origin-bottom"
          >
            <img 
              src={phoneDeviceImg} 
              alt="TAZ Cadet Pro Device Dashboard" 
              className="w-full h-auto object-contain select-none pointer-events-none"
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default NewHero;