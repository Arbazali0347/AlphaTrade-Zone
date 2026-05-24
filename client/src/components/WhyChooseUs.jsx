import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Zap, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Award 
} from 'lucide-react';

const Services = () => {
  // Course curriculum phases (Zero to Pro)
  const curriculum = [
    { title: "Basics (Zero Scratch)", desc: "Market introduction, terminal setup, and candle anatomy." },
    { title: "Technical Edge", desc: "SMC basics, Liquidity concepts, and Market Structure." },
    { title: "Psychology Mastery", desc: "Developing a winning mindset and mechanical discipline." },
    { title: "Pro Execution", desc: "Institutional order flow and advanced risk management." }
  ];

  return (
    <section className="bg-[#010413] py-24 px-6 min-h-screen relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* PAGE HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-blue-500 font-black tracking-[0.4em] text-[10px] uppercase">Flagship Education</span>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">PROGRAM.</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
              We offer one comprehensive path to mastery. No confusing tiers, just pure institutional knowledge from scratch.
            </p>
          </motion.div>
        </div>

        {/* MAIN COURSE CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Main Details (8 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/30 rounded-[40px] p-8 md:p-14 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                <Target size={14} /> Comprehensive Mastery
              </div>
              
              <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-none">
                TAZ TRADING <br /> COURSE.
              </h3>

              <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl font-medium">
                Our signature program is designed to take you from <span className="text-white italic">Zero Scratch</span> to a <span className="text-blue-500 italic">Professional Operator</span>. We eliminate the noise and teach you how the market actually functions.
              </p>

              {/* Curriculum Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {curriculum.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 size={18} className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-wider">{item.title}</h4>
                      <p className="text-zinc-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats & Fee Info (4 Cols) */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* Price Card */}
            <div className="bg-[#0a1120]/60 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] flex-grow flex flex-col justify-center text-center">
               <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Tuition Fee</span>
               <h4 className="text-7xl font-black text-white italic tracking-tighter mb-2">FREE.</h4>
               <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest line-through">$499 Value</p>
               <div className="mt-8 pt-8 border-t border-white/5">
                 <p className="text-white font-bold text-sm leading-relaxed">
                   Pay only <span className="text-blue-500">Center Charges</span> for facility, desks, and electricity.
                 </p>
               </div>
            </div>

            {/* Duration Card */}
            <div className="bg-blue-600 p-10 rounded-[40px] text-white">
               <Clock className="mb-4 opacity-50" size={32} />
               <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-1">Duration</h4>
               <p className="text-3xl font-black uppercase italic tracking-tighter">01 Month</p>
               <p className="text-[10px] mt-2 font-bold uppercase opacity-80">Intensive Training Phase</p>
            </div>

            {/* Certificate/Level Card */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] text-white">
               <Award className="mb-4 text-cyan-400" size={32} />
               <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-1">Skill Level</h4>
               <p className="text-3xl font-black uppercase italic tracking-tighter">Pro Level</p>
               <p className="text-[10px] mt-2 font-bold uppercase text-zinc-500 tracking-widest">Scratch to Institutional</p>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM MOTIVATION BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 py-10 border-y border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 px-6"
        >
          <div className="flex items-center gap-6">
            <TrendingUp className="text-blue-500" size={32} />
            <p className="text-zinc-400 text-sm font-medium italic">Join 3000+ successful traders who started from zero with TAZ.</p>
          </div>
          <div className="flex items-center gap-6">
            <ShieldCheck className="text-cyan-400" size={32} />
            <p className="text-zinc-400 text-sm font-medium italic">Proven Institutional Risk Management Strategies.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;