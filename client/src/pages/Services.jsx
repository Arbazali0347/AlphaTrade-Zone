import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  ShieldAlert,
  Zap,
  Award,
  ArrowRight,
  CheckCircle2,
  Play,
  Layers,
  Target,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

// Naye Icons image context ke liye
import { FiSearch, FiLayers, FiRadio } from 'react-icons/fi';
import { IoIosApps, IoLogoYoutube } from 'react-icons/io';
import { FaChartLine, FaChalkboardTeacher, FaBookOpen, FaBriefcase, FaCodeBranch } from 'react-icons/fa';

// Existing local image assets
import Hamza_image_1 from "../assets/hamza-1.jpeg"
import Hamza_image_2 from "../assets/hamza-4.jpeg"
import image_1 from "../assets/services-1.png";
import image_2 from "../assets/services-2.png";

const ServicesPage = () => {
  // Navigation trigger to contact
  const handleEnrollRedirect = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };
  const mainEcosystemServices = [
    {
      icon: <FaChartLine size={22} />,
      title: "Professional Trading Training",
      subtitle: "Master the Markets",
      desc: "Advance technical patterns, liquidity sweeps, aur pure price action trading mechanics.",
      image: "https://zak-learning.com/wp-content/uploads/2020/10/AdobeStock_330702318-2.jpeg"
    },
    {
      icon: <FaChalkboardTeacher size={22} />,
      title: "Expert Mentorship",
      subtitle: "Learn from Pros",
      desc: "Live market streaming sessions aur professional trading community ka direct access.",
      image: "https://www.colibritrader.com/wp-content/uploads/2025/06/thumbnail-10.jpg"
    },
    {
      icon: <FaBookOpen size={22} />,
      title: "Practical Learning",
      subtitle: "Real Market Setup",
      desc: "Simulation tracking aur functional real-time dynamic dashboard integration.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLwHejpjxqk--XtZF6aAYcur3kNLFyBVuObELq-uqCpDxpAOYsJz3lXUtU&s=10"
    },
    {
      icon: <FaBriefcase className="text-blue-500" size={22} />,
      title: "TAZ Softwares",
      subtitle: "Taz Software",
      desc: "Taz Cadet & Taz Cadet Pro - Professional trading software suite for market analysis and execution.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRkWqLToFl5dYw6nUlgqAQa0qXADxFTonmOrV6bYbOLt71d1sUHSxQhjg&s=10"
    }
  ];

  const curriculumModules = [
    {
      icon: <BarChart3 className="text-blue-500" size={20} />,
      title: "Institutional Flow",
      desc: "Bank level algorithms aur smart money footprints sikhna."
    },
    {
      icon: <ShieldAlert className="text-cyan-400" size={20} />,
      title: "Risk Protocols",
      desc: "Capital protection aur professional position sizing."
    },
    {
      icon: <Zap className="text-blue-400" size={20} />,
      title: "Fast Execution",
      desc: "Intraday scalping aur high-speed execution setups."
    },
    {
      icon: <Award className="text-cyan-500" size={20} />,
      title: "Pro Psychology",
      desc: "Mechanical discipline aur professional trading mindset."
    }
  ];

  return (
    <div className="bg-[#010413] text-white min-h-screen py-16 px-4 md:px-6 relative font-sans overflow-hidden">

      {/* BACKGROUND NEON GLOWS */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">

        {/* --- GLOBAL APP HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
          <div className="space-y-4">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src="/logo.png"
              className="h-10 w-auto mb-2 filter drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]"
              alt="TAZ"
            />
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
              TAZ SYSTEM <br /> <span className="text-blue-500">SERVICES & NODES</span>
            </h1>
          </div>
          <p className="text-zinc-500 text-xs font-bold max-w-xs uppercase tracking-widest leading-relaxed">
            Premium infrastructure designed for structured market deployment.
          </p>
        </div>

        {/* --- SECTION 1: CORE SERVICES SHOWCASE (Existing) --- */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 border-l-2 border-cyan-500 pl-4">
            <div>
              <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest block">Operational Core</span>
              <h2 className="text-2xl font-black uppercase italic tracking-tight">Our Services Ecosystem</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainEcosystemServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#040d21]/40 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-full hover:border-blue-500/20 transition-all shadow-xl"
              >
                {/* Visual Image Asset */}
                <div className="w-full aspect-[4/3] bg-zinc-950 rounded-xl overflow-hidden mb-5 shrink-0 border border-white/5 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-blue-500/5 mix-blend-color pointer-events-none"></div>
                </div>

                {/* Info Text Content Container */}
                <div className="flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-black text-blue-400 uppercase tracking-widest bg-blue-600/5 px-2 py-0.5 rounded">
                        {service.subtitle}
                      </span>
                      <div className="text-zinc-400 group-hover:text-blue-400 transition-colors">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-base font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-[11px] leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECTION 3: FLAGSHIP CURRICULUM (Existing Bento Grid) --- */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between border-b border-white/5 pb-4">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter">Academy Flagship Program</h2>
            <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest">Premium Institutional Curriculum</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* BIG COURSE INSIGHT PANEL (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 bg-[#050b1d] border border-blue-500/20 rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden group"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-0.5 rounded-full uppercase tracking-widest">Enrollment Open</span>
                    <span className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest">Batch 2026</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-none">
                    TAZ TRADING <br /> COURSE.
                  </h2>
                  <p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">
                    We start teaching you from absolute scratch and take you all the way to an institutional pro level. Complete mapping matrices guide.
                  </p>

                  <div className="flex flex-wrap gap-4 py-2">
                    <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-xl">
                      <Layers className="text-blue-500" size={16} />
                      <span className="text-xs font-bold uppercase tracking-tight">Comprehensive Modules</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-xl">
                      <Target className="text-cyan-400" size={16} />
                      <span className="text-xs font-bold uppercase tracking-tight">Result Oriented</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={handleEnrollRedirect}
                    className="group inline-flex items-center gap-3 bg-white text-black px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    Join the academy <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative visuals */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent pointer-events-none"></div>
              <Play className="absolute -bottom-10 -right-10 text-blue-600/5 size-48 pointer-events-none" />
            </motion.div>

            {/* SIDE METRIC CARDS (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* INVESTMENT MODEL */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-blue-600 rounded-[2.5rem] p-6 text-white relative overflow-hidden shadow-lg shadow-blue-600/10"
              >
                <h3 className="text-[9px] font-black uppercase tracking-[0.3em] opacity-80 mb-1">Investment Model</h3>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-black italic tracking-tighter">FREE.</span>
                  <span className="text-[10px] font-bold opacity-70 uppercase tracking-wider">Tuition</span>
                </div>
                <p className="text-xs font-medium mt-3 leading-relaxed opacity-90">
                  The course fee is completely zero. You only need to pay the <span className="underline font-black">Center Charges</span> for luxury premium facility lab access.
                </p>
                <ShieldCheck className="absolute top-6 right-6 opacity-15" size={36} />
              </motion.div>

              {/* TIMEFRAME DURATION */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-0.5">Timeframe</h3>
                  <p className="text-2xl font-black italic uppercase">01 Month</p>
                  <p className="text-[11px] text-blue-400 font-bold tracking-tight">Intensive High-Speed Training</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-blue-500" size={22} />
                </div>
              </motion.div>

            </div>
          </div>

          {/* WHAT YOU MASTER ELEMENT SUBGRID */}
          <div className="space-y-6 pt-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500">Core Curriculum Pillars</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {curriculumModules.map((mod, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-[#04091e]/60 border border-white/5 p-6 rounded-2xl hover:border-blue-500/20 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <div className="group-hover:text-white transition-colors">
                      {mod.icon}
                    </div>
                  </div>
                  <h4 className="text-base font-black uppercase italic tracking-tight mb-1">{mod.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed font-medium">
                    {mod.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* --- NEW SECTION 4: LIVE STREAM BANNER (Read from Image Context) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#030712] border-t border-white/5 rounded-[2.5rem] p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          {/* Node Identity */}
          <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center shrink-0 text-zinc-600 group-hover:text-cyan-400 transition-colors">
              <FiRadio size={24} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-0.5">Stream Matrix</span>
              <h4 className="text-white font-black text-xs uppercase tracking-tight leading-tight">TAZ Operations Node</h4>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-6 space-y-1.5 flex-grow border-l border-white/5 pl-6">
            <span className="text-[8px] font-bold text-blue-500 uppercase tracking-[0.2em] block">Continuous Learning Loop</span>
            <h3 className="text-xl font-black uppercase italic text-white group-hover:text-blue-400 transition-colors leading-none">
              TAZ OPERATIONS: LIVE STREAM <span className="text-white/50">24/7.</span>
            </h3>
            <p className="text-zinc-500 text-[10px] font-medium leading-relaxed max-w-sm">
              Continuous operational stream loop for advanced system tracking and functional dynamic updates.
            </p>
          </div>

          {/* Call to Action */}
          <div className="md:col-span-3 flex justify-end">
            <button onClick={() => window.open("https://www.youtube.com/@tradealphazone")} target="_blank" className="flex items-center gap-2.5 bg-red-600/10 border border-red-500/20 hover:bg-red-600 hover:text-white transition-all text-white font-bold text-[10px] tracking-widest uppercase py-3 px-6 rounded-xl shadow-lg shadow-red-600/10">
              <IoLogoYoutube size={16} /> Watch Channel
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ServicesPage;