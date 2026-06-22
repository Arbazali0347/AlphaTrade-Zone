import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity, Zap, Users } from 'lucide-react';
import tazLogo from "/logo.png";
import { useNavigate } from 'react-router-dom';

const NewHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen bg-[#010413] flex items-center overflow-hidden px-6">

      {/* --- ADVANCED BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Trading Graph Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.14] mix-blend-overlay"
          style={{
            backgroundImage: `url('https://kirill-yurovskiy-trade.co.uk/wp-content/uploads/2024/02/1-trading-what-is-it.png')`,
            backgroundSize: 'cover'
          }}
        ></div>

        {/* Cyber Orbs - Glowing Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>

        {/* Scanline Effect (Optional for tech vibe) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">

        {/* --- LEFT SIDE: Content --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="space-y-10"
        >
          {/* Badge Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Zap size={12} className="text-blue-400 fill-blue-400" />
            <span className="text-blue-400 font-bold tracking-[0.2em] text-[9px] uppercase">
              Elite Trading Community
            </span>
          </div>

          {/* Main Heading with Gradient Mask */}
          <div className="space-y-2">
            <h1 className="whitespace-pre text-6xl md:text-[85px] font-black text-white leading-[0.85] tracking-tighter uppercase">
              TRADE  ALPHA <br />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 animate-gradient-x">
                  ZONE.
                </span>
                {/* Subtle line under the main name */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-1 bg-blue-500/50 rounded-full"
                />
              </span>
            </h1>
          </div>

          {/* Mission Text */}
          <p className="text-zinc-400 text-lg md:text-xl font-medium tracking-tight max-w-[500px] leading-relaxed border-l-2 border-blue-600/30 pl-6">
            Decode <span className="text-white">Institutional Market Mechanics</span> with Pakistan's most disciplined trading academy. Precision, Discipline, and Results.
          </p>

          {/* Premium CTA Group */}
          <div className="flex flex-wrap gap-5">
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-[11px] tracking-[0.2em] uppercase transition-all"
            >
              Start Your Journey <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => navigate("/academy")}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="flex items-center justify-center gap-2 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-[11px] tracking-[0.2em] uppercase transition-all"
            >
              Explore Our Story <Users size={18} className="text-white/70" />
            </motion.button>
          </div>

          {/* Minimal Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-6 border-t border-white/5">
            <div>
              <h4 className="text-white text-2xl font-black leading-none">3+</h4>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">Karachi Branches</p>
            </div>
            <div>
              <h4 className="text-white text-2xl font-black leading-none">5k+</h4>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">Active Members</p>
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: The Logo Focus --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="relative flex justify-center lg:justify-end items-center"
        >
          {/* Multi-layered Backlight */}
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute w-[250px] h-[250px] bg-cyan-400/20 blur-[80px] rounded-full animate-pulse"></div>

          {/* Logo Container with floating animation */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-20 group"
          >
            <img
              src={tazLogo}
              alt="TAZ Alpha Logo"
              className="w-[350px] md:w-[530px] object-contain drop-shadow-[0_0_60px_rgba(37,99,235,0.4)] brightness-110 transition-all duration-700 group-hover:brightness-125 group-hover:scale-[1.02]"
            />
          </motion.div>
        </motion.div>

      </div>

      {/* Background Big Text */}
      <div className="absolute left-[-2%] top-[10%] hidden xl:block pointer-events-none rotate-90 origin-left">
        <h2 className="text-[10rem] font-black text-white/[0.02] tracking-tighter uppercase">
          TRADING ACADEMY
        </h2>
      </div>

    </section>
  );
};

export default NewHero;