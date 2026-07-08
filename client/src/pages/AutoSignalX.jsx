import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu, Layers, Target, GraduationCap, LineChart, Compass,
  AlertTriangle, ShieldCheck, Zap, Video, Play, Terminal,
  ShoppingCart, FileText, Download
} from 'lucide-react';
import { FaCodepen } from 'react-icons/fa';
import tazcadet from "../assets/TazCadet.mp4"
import cadetPdf from '../assets/taz-cadet-guide.pdf';
import cadetpro from '../assets/TAZ_CADET_PRO.pdf';
import tazprime from "../assets/Taz_Cadet_Pro.mp4"
import tazProLogo from "../assets/taz-cadet-pro.jpeg";
import autoSignalImage from "../assets/tazAuto.jpeg";
import cadetImage from "../assets/softwareCAD.jpeg";

const TazAutoSignal = () => {
  // AutoSignalX Main Core Features
  const mainFeatures = [
    {
      icon: <Target className="text-emerald-400" size={24} />,
      title: "TAZ Scout",
      desc: "An advanced algorithmic scouting node designed to identify and map institutional flow footprints and market inefficiencies in real-time."
    },
    {
      icon: <Layers className="text-blue-400" size={24} />,
      title: "TAZ Tratry",
      desc: "A proprietary execution framework that structures raw trade ideas into complete mechanical strategy scripts with functional mapping matrices."
    },
    {
      icon: <FaCodepen className="text-cyan-400" size={24} />,
      title: "AUTO TRADING",
      desc: "Completely hands-free algorithmic execution node. The system processes market data and deploys trades instantly without human emotional bias."
    }
  ];

  const whatsappOpen = () => {
    window.open("https://api.whatsapp.com/send/?phone=03152939539&text&type=phone_number&app_absent=0", "_blank");
  };

  // Old Cadet Version: Kept Simple and Clear
  const deploymentSteps = [
    {
      num: "01",
      title: "Easy Settings",
      desc: "Students can easily change basic input settings to see how buy and sell signals change on the chart instantly."
    },
    {
      num: "02",
      title: "Simple Trade Tracking",
      desc: "Easily watch and follow a live trade from the starting point to the final profit or loss targets step-by-step."
    },
    {
      num: "03",
      title: "Basic Risk Practice",
      desc: "Learn how to use regular Stop Loss points, take-profit areas (TP1, TP2), and simple risk rewards to protect your balance."
    },
    {
      num: "04",
      title: "Trading Patience",
      desc: "Build good daily habits by waiting for regular trade alerts to complete their setup without rushing your moves."
    }
  ];

  // TAZ CADET PRO: Heavy, Cyberpunk, Advanced Scientific Wording
  const primeSteps = [
    {
      num: "01",
      title: "Liquidity Counter-Sensing",
      desc: "Neutralizes retail retail-pattern traps by running real-time calculations on order-book imbalances and high-frequency liquidity pools."
    },
    {
      num: "02",
      title: "Asymmetric Market Validation",
      desc: "Bypasses superficial chart art. The core compiler mandates multi-variate statistical verification before opening any computational risk vectors."
    },
    {
      num: "03",
      title: "Automated Invalidation Framework",
      desc: "Continuously back-tests active market velocity to detect spoofing orders and isolate institutional mitigation blocks natively."
    },
    {
      num: "04",
      title: "Predictive Intelligence Core",
      desc: "Transforms standard manual execution into a heavily fortified, rule-driven algorithmic execution model with maximum quantitative authority."
    }
  ];

  // Core Pillars for Footer Metrics
  const corePillars = [
    { label: "ANALYZE", desc: "Data Science" },
    { label: "AUTOMATE", desc: "Algo Protocol" },
    { label: "EXECUTE", desc: "Low Latency" },
    { label: "ACHIEVE", desc: "Consistent Growth" }
  ];

  return (
    <div className="bg-[#010413] text-white min-h-screen overflow-hidden font-sans relative pt-24 pb-16">

      {/* -------------------- DYNAMIC BACKGROUND GLOWS -------------------- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-[40%] left-1/4 w-[500px] h-[500px] bg-amber-500/[0.02] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/[0.02] blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-32">

        {/* ================================================================= */}
        {/* 1. HERO SECTION: TAZ AUTOSIGNALX MAIN SUITE                        */}
        {/* ================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">

          {/* Left Block: Main Brand Core */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 font-black tracking-[0.2em] text-[9px] uppercase">TAZ PROPRIETARY SYSTEM HUB</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.85]">
              TRADE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-cyan-400">
                AutoSignalX
              </span>
            </h1>

            <p className="text-zinc-500 font-black tracking-[0.4em] text-xs uppercase block pt-1">
              AUTOMATED SIGNALS. ADVANCED RESULTS.
            </p>

            <p className="text-zinc-400 text-sm md:text-base font-medium max-w-xl mx-auto lg:mx-0 pt-4 leading-relaxed">
              We don’t predict the market. We execute with structural precision. TAZ AutoSignalX is an in-house developed algorithmic ecosystem engineered to automate strategy execution, manage strict risk parameters, and anchor a consistent mechanical edge.
            </p>
          </div>

          {/* Right Block: Core System Logo Representation */}
          <div className="lg:col-span-5 flex justify-center w-full relative">
            <div className="absolute -inset-10 bg-emerald-500/[0.04] blur-3xl rounded-full pointer-events-none"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[440px] aspect-square rounded-full overflow-hidden border-2 border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.15)] bg-slate-950/40 relative flex items-center justify-center p-6 group cursor-pointer"
            >
              <img
                src={autoSignalImage}
                alt="TAZ AutoSignalX Flagship System Concept"
                className="w-full h-full object-contain rounded-full filter brightness-110 contrast-105 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 rounded-full flex-col items-center justify-center p-6 text-center space-y-3 bg-[#03091e]/80">
                <Cpu size={40} className="text-emerald-400 animate-pulse" />
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">[ tazAuto.jpeg Missing ]</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* ECOSYSTEM LAYER LINK BAR                                         */}
        {/* ================================================================= */}
        <section className="bg-[#03081a]/60 border border-white/5 rounded-3xl p-6 md:p-8 space-y-4 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-4 gap-2">
            <div>
              <h3 className="text-xs font-black tracking-[0.15em] text-emerald-400 uppercase">AUTOSIGNALX INTEGRATED PLATFORMS</h3>
              <p className="text-zinc-500 text-[11px] font-medium">Click on any underlying execution element to anchor scroll directly to its architecture window.</p>
            </div>
            <span className="text-[9px] font-mono font-bold text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-md h-fit w-fit">
              Nodes Operational: 02
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="#cadets-suite" className="group p-5 rounded-2xl bg-amber-500/[0.01] border border-amber-500/10 hover:border-amber-500/30 transition-all flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-amber-500 font-bold block">PLATFORM MATRIX 01</span>
                <h4 className="text-base font-black uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">TAZ Cadet Software</h4>
              </div>
            </a>
            <a href="#prime-indicator" className="group p-5 rounded-2xl bg-purple-500/[0.01] border border-purple-500/10 hover:border-purple-500/30 transition-all flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-purple-500 font-bold block">PLATFORM MATRIX 02</span>
                <h4 className="text-base font-black uppercase tracking-tight text-white group-hover:text-purple-400 transition-colors">No.2 TAZ CADET PRO</h4>
              </div>
            </a>
          </div>
        </section>

        {/* ================================================================= */}
        {/* TAZ CADET PRO (HEAVY ADVANCED STYLING WORDS)                       */}
        {/* ================================================================= */}
        <section id="prime-indicator" className="scroll-mt-28 border-t border-white/5 pt-24 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#060b26] to-[#111a4e] border border-purple-500/20 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                  <img
                    src={tazProLogo}
                    alt="TAZ Pro System Authority Logo"
                    className="w-full rounded-2xl h-full object-contain filter brightness-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden text-[10px] font-black text-purple-400 font-mono">TAZ</div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full w-fit h-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                  <span className="text-purple-400 font-black tracking-[0.2em] text-[9px] uppercase">PREMIUM PROTOCOL NODE</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
                <br /> TAZ <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">CADET PRO</span>
              </h2>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-xl">
                A high-fidelity market intelligence matrix engineered for professional quantitative extraction. TAZ Cadet Pro deploys micro-structure diagnostic filters to systematically cross-reference algorithmic depth fields.
              </p>

              <div className="bg-[#070f2e]/30 border border-purple-500/10 p-6 rounded-2xl border-l-4 border-l-purple-500">
                <p className="text-zinc-400 text-xs leading-relaxed italic font-medium">
                  The infrastructure runs high-frequency mathematical validation models across localized mitigation vectors, authorizing entry triggers backed strictly by institutional order flows.
                </p>
              </div>

              {/* ACTION LINKS IN CADET PRO */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-[700px]">
                {/* BUY NOW BUTTON */}
                <button
                  onClick={whatsappOpen}
                  className="w-full sm:w-auto justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs tracking-widest uppercase flex items-center gap-2.5 transform active:scale-95 shadow-[0_10px_35px_rgba(168,85,247,0.2)] transition-all duration-300 group"
                >
                  <ShoppingCart size={14} className="text-white fill-white group-hover:scale-110 transition-transform" />
                  <span>BUY NOW</span>
                </button>

                {/* DOWNLOAD LINK */}
                <a
                  href={cadetpro}
                  download="TAZ-Cadet-Guide.pdf"
                  className="w-full sm:max-w-[460px] group flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-indigo-500/5 hover:from-purple-500/20 hover:to-indigo-500/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3 mechanical-layout">
                    <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors shrink-0">
                      <FileText size={16} />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-xs font-black text-white uppercase tracking-wider truncate">Download Cadet PRO Guide</p>
                      <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-tight mt-0.5 truncate">Setup Instruction Manual • PDF</p>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl text-zinc-500 group-hover:text-purple-400 group-hover:translate-y-0.5 transition-all shrink-0">
                    <Download size={15} />
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center w-full">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="w-full aspect-[16/10] rounded-3xl border border-purple-500/20 bg-slate-950 p-2.5 shadow-[0_0_50px_rgba(168,85,247,0.06)] relative overflow-hidden group"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[#020512] relative flex items-center justify-center">
                  <video className="w-full h-full object-cover" controls preload="metadata">
                    <source src={tazprime} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40 pointer-events-none flex flex-col justify-between p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-mono bg-black/60 px-2.5 py-0.5 rounded border border-white/10 text-zinc-400 tracking-widest uppercase flex items-center gap-1.5">
                        <Video size={10} className="text-purple-400" /> PRO_INTELLIGENCE_STREAM.MP4
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center mx-auto shadow-xl">
                      <Play size={14} fill="currentColor" className="ml-0.5" />
                    </div>
                    <span className="text-[8px] font-mono text-center text-zinc-500 uppercase tracking-widest">Initialize High-Tier Architecture Preview</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {primeSteps.map((step, i) => (
              <div key={i} className="bg-[#03091e]/30 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-purple-500/20 transition-colors duration-300">
                <span className="text-xs font-mono font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-lg">
                  {step.num}
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">{step.title}</h4>
                  <p className="text-zinc-400 text-xs font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* TAZ COURSE CADETS v1.30 (SIMPLE & BASIC WORDS)                     */}
        {/* ================================================================= */}
        <section id="cadets-suite" className="scroll-mt-28 border-t border-white/5 pt-24 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="text-amber-400 font-black tracking-[0.2em] text-[9px] uppercase">BASIC LEARNING CORE</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
                <br /> TAZ COURSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">CADETS v1.30</span>
              </h2>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium max-w-xl">
                A simple, friendly chart tool made for beginners and academy students. It helps you test your setups, practice chart reading, and see how everyday market trends look in real-time.
              </p>

              <div className="bg-[#070f2e]/30 border border-amber-500/10 p-6 rounded-2xl border-l-4 border-l-amber-500">
                <p className="text-zinc-400 text-xs leading-relaxed italic font-medium">
                  This basic system is designed to help you build good trading patience, understand simple buy-sell arrows, and log your daily practice results easily.
                </p>
              </div>

              {/* ACTION LINKS IN CADET (SAME MATCHING DESIGN) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-[700px]">
                {/* BUY NOW BUTTON */}
                <button
                  onClick={whatsappOpen}
                  className="w-full sm:w-auto justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-black text-xs tracking-widest uppercase flex items-center gap-2.5 transform active:scale-95 shadow-[0_10px_35px_rgba(245,158,11,0.2)] transition-all duration-300 group"
                >
                  <ShoppingCart size={14} className="text-white fill-white group-hover:scale-110 transition-transform" />
                  <span>BUY NOW</span>
                  
                </button>

                {/* DOWNLOAD LINK */}
                <a
                  href={cadetPdf}
                  download="TAZ-Cadet-Guide.pdf"
                  className="w-full sm:max-w-[460px] group flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/5 hover:from-amber-500/20 hover:to-orange-500/10 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20 transition-colors shrink-0">
                      <FileText size={16} />
                    </div>
                    <div className="text-left min-w-0">
                      <p className="text-xs font-black text-white uppercase tracking-wider truncate">Download Cadet Guide</p>
                      <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-tight mt-0.5 truncate">Setup Instruction Manual • PDF</p>
                    </div>
                  </div>
                  <div className="p-2 rounded-xl text-zinc-500 group-hover:text-amber-400 group-hover:translate-y-0.5 transition-all shrink-0">
                    <Download size={15} />
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Video Block */}
            <div className="lg:col-span-5 flex flex-col items-center gap-4 w-full">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="w-full max-w-[460px] aspect-[16/10] rounded-3xl border border-amber-500/20 bg-slate-950 p-2.5 shadow-[0_0_50px_rgba(245,158,11,0.06)] relative overflow-hidden group"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-[#020512] relative flex items-center justify-center">
                  <video className="w-full h-full object-cover" controls preload="metadata">
                    <source src={tazcadet} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40 pointer-events-none flex flex-col justify-between p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-mono bg-black/60 px-2.5 py-0.5 rounded border border-white/10 text-zinc-400 tracking-widest uppercase flex items-center gap-1.5">
                        <Video size={10} className="text-amber-400" /> BASIC_STUDENT_DASHBOARD.MP4
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center mx-auto shadow-xl">
                      <Play size={14} fill="currentColor" className="ml-0.5" />
                    </div>
                    <span className="text-[8px] font-mono text-center text-zinc-500 uppercase tracking-widest">Click to view student interface</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deploymentSteps.map((step, i) => (
              <div key={i} className="bg-[#03091e]/30 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-amber-500/20 transition-colors duration-300">
                <span className="text-xs font-mono font-black text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                  {step.num}
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-black text-white uppercase tracking-tight">{step.title}</h4>
                  <p className="text-zinc-400 text-xs font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. SYSTEM FOOTER STATS                                            */}
        {/* ================================================================= */}
        <footer className="py-12 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {corePillars.map((pillar, i) => (
            <div key={i} className="text-center p-4 bg-white/[0.01] border border-white/[0.02] rounded-2xl shadow-inner">
              <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{pillar.desc}</p>
              <h4 className="text-md font-black text-white italic tracking-wider uppercase">{pillar.label}</h4>
            </div>
          ))}
        </footer>

      </div>
    </div>
  );
};

export default TazAutoSignal;