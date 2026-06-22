import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, LineChart, Sliders, Eye, ShieldCheck, Compass, HelpCircle } from 'lucide-react';
import whatsImage from "../assets/softwareCAD.jpeg" // Path to your cadet software screenshot

const CourseCadets = () => {
  const deploymentSteps = [
    {
      num: "01",
      title: "Dynamic Signal Behavior",
      desc: "Trainees can change input values globally and observe exactly how signal behavior and market structures respond in real-time."
    },
    {
      num: "02",
      title: "End-to-End Tracking",
      desc: "Follow a single, active tactical trade from the exact institutional entry point all the way to its final market outcome."
    },
    {
      num: "03",
      title: "Advanced Risk Analytics",
      desc: "Deeply study structural Stop Loss mechanics, Target Profit zones (TP1, TP2), floating Risk-to-Reward (R), and closed data results."
    },
    {
      num: "04",
      title: "Execution Discipline",
      desc: "Build professional execution patience by systematically waiting for active trades to hit computational validation or close out entirely."
    }
  ];

  return (
    <div className="bg-[#010413] text-white min-h-screen overflow-hidden font-sans relative pt-24 pb-16">
      
      {/* Premium Amber/Gold Tech Glows to match the Cadet Branding */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.02] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/[0.03] blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-24">
        
        {/* --- HERO SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[65vh] border-b border-white/5 pb-16">
          
          {/* Left Side: Core Pitch & Announcement */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full w-fit mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-amber-400 font-black tracking-[0.2em] text-[9px] uppercase">ANNOUNCEMENT // TRAINING SUITE</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.9]">
              TAZ COURSE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-orange-400">
                CADETS v1.30
              </span>
            </h1>

            <p className="text-emerald-400 font-bold tracking-wider text-xs md:text-sm uppercase block">
              One active signal. One clear trade path.
            </p>

            <p className="text-zinc-400 text-sm md:text-base font-medium max-w-xl mx-auto lg:mx-0 pt-2 leading-relaxed">
              A premium chart-based training software explicitly engineered for Academy trainees to learn, adjust, practice, and read institutional market signals with extreme professional discipline.
            </p>

            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4 text-[9px] font-black tracking-widest text-zinc-500 uppercase">
              <span>LEARN IT</span>
              <span className="text-amber-500">•</span>
              <span>ADJUST IT</span>
              <span className="text-amber-500">•</span>
              <span>PRACTICE IT</span>
            </div>
          </div>

          {/* Right Side: High-Quality Screenshot of Cadet Software */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[480px] aspect-[4/3] rounded-[2rem] border border-amber-500/10 bg-[#020718] relative flex items-center justify-center p-3 text-center group overflow-hidden shadow-[0_0_60px_rgba(245,158,11,0.1)] backdrop-blur-sm"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden relative">
                <img 
                    src={whatsImage} 
                    alt="TAZ Course Cadet Software Interface on TradingView" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Visual interface styling overlays (top bar, blur frame) */}
                <div className="absolute top-0 left-0 right-0 h-7 bg-black/60 border-b border-white/10 flex items-center gap-1.5 px-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <span className="text-[9px] font-mono text-zinc-500 tracking-wider ml-2">TradingView Frame v1.30</span>
                </div>
                
                {/* Lower glow aura */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent pointer-events-none" />
              </div>

            </motion.div>
          </div>

        </section>

        {/* --- PURPOSE & VALUES SECTION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/5 pb-20">
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto lg:mx-0 text-blue-400">
              <Compass size={20} />
            </div>
            <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tight text-white">
              A New Step For <br />Our Academy Ecosystem
            </h3>
            <p className="text-zinc-500 font-bold tracking-widest text-[9px] uppercase">
              Turning Theory Into Actionable Charts
            </p>
          </div>
          
          <div className="lg:col-span-7 bg-[#070f2e]/20 border border-white/5 p-8 rounded-[2rem] space-y-4">
            <p className="text-zinc-300 text-sm leading-relaxed font-medium">
              TAZ Course Cadets v1.30 gives our active trainees a seamless, practical framework to deploy the proprietary Academy signal model directly onto active **TradingView** charts.
            </p>
            <p className="text-zinc-400 text-xs leading-relaxed font-medium border-l-2 border-amber-500/40 pl-4 italic">
              The purpose of this architecture is absolutely not to distribute random or speculative alerts. The system is explicitly built for guided signal reading, active-trade execution discipline, and repeatable post-market data reviews.
            </p>
          </div>
        </section>

        {/* --- FUNCTIONAL BREAKDOWN (WHY WE MADE THE SOFTWARE) --- */}
        <section className="space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
              <GraduationCap size={20} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">
              WHY WE ENGINEERED THIS
            </h2>
            <p className="text-zinc-500 font-bold tracking-widest text-[10px] uppercase">
              A Commercial Training Companion for Serious Trainees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deploymentSteps.map((step, i) => (
              <div 
                key={i}
                className="bg-[#040a18]/40 border border-white/5 p-8 rounded-3xl flex items-start gap-6 hover:border-amber-500/10 transition-colors duration-300 shadow-sm"
              >
                <span className="text-xl font-mono font-black text-amber-500/40 bg-white/[0.02] border border-white/5 px-2.5 py-1 rounded-xl shrink-0">
                  {step.num}
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-black text-white uppercase tracking-tight">{step.title}</h4>
                  <p className="text-zinc-400 text-xs font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default CourseCadets;