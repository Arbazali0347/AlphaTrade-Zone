import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Monitor, Users, GraduationCap, ArrowUpRight, BarChart3, Clock, MessageSquare } from 'lucide-react';

const AcademyPage = () => {
  const stats = [
    { value: "3+", label: "ACTIVE CAMPUSES" },
    { value: "500+", label: "GRADUATED TRADERS" },
    { value: "5+", label: "YEARS OF DISCIPLINE" },
    { value: "24/7", label: "COMMUNITY SUPPORT" }
  ];

  const perks = [
    {
      icon: <Monitor className="text-blue-500" size={24} />,
      title: "LIVE TRADING FLOORS",
      desc: "Step out of your room and trade alongside professionals in our high-tech physical trading desks."
    },
    {
      icon: <ShieldCheck className="text-cyan-400" size={24} />,
      title: "STRICT RISK PROTOCOLS",
      desc: "We don't just teach entries. We teach capital survival and institutional risk management scripts."
    },
    {
      icon: <Users className="text-blue-400" size={24} />,
      title: "ELITE NETWORKING",
      desc: "Surround yourself with serious individuals focused on funding, market efficiency, and wealth building."
    }
  ];

  return (
    <div className="bg-[#010413] text-white min-h-screen overflow-hidden font-sans select-none relative">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      {/* --- HERO / LOGO HEADER SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Logo Integration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-2 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            <img 
              src="/logo.png" 
              alt="Trade Alpha Zone Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]"
            />
          </motion.div>

          {/* Core Branding Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4 max-w-3xl"
          >
            <p className="text-blue-500 font-black tracking-[0.5em] text-[10px] uppercase">The Elite Execution Hub</p>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.85]">
              WE ENGINEEER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">PRO TRADERS.</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base font-medium max-w-xl mx-auto pt-4 leading-relaxed">
              Trade Alpha Zone is not a casual coaching center. We operate structured physical ecosystems in Pakistan built to transform raw talent into disciplined market executors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- STUDENT FEEDBACK VIDEO SPLIT SECTION (NOW 100% ENGLISH) --- */}
      <section className="py-12 px-6 max-w-7xl mx-auto border-y border-white/5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE: YouTube Embed Container */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-[340px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.15)] bg-slate-950 relative">
              <iframe
                src="https://www.youtube.com/embed/Bg0ji6344pk"
                title="Trade Alpha Zone Student Feedback"
                className="w-full h-full object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE: English Feedback Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2.5">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <MessageSquare size={14} />
              </div>
              <span className="text-emerald-400 font-bold tracking-widest text-[9px] uppercase">Verified Student Review</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none text-white">
              REAL RESULTS FROM <br />
              OUR PHYSICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">TRADING FLOORS.</span>
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Listen directly to the real success stories from our active community members. At Trade Alpha Zone, we move past passive learning; our students trade live on-floor, analyzing institutional order flow and algorithmic price movements in real-time. Watch how raw potential is molded into a structured, highly disciplined execution framework.
            </p>

            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider">Live Desk Environment</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider">Verified Account Metrics</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ACADEMY STATS COUNTER --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left md:border-l md:border-white/5 md:pl-8 first:border-0"
            >
              <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-1">{stat.value}</h3>
              <p className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- METHODOLOGY & FOUNDER PITCH --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-white/5">
        
        {/* Left Side: Business Mentality */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
             <div className="h-[2px] w-8 bg-blue-600"></div>
             <span className="text-blue-500 font-bold tracking-widest text-[9px] uppercase">Execution Over Theory</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
            OUR STRATEGY IS <br />ROOTED IN <span className="text-blue-500">REALITY.</span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed font-medium">
            Most institutional charts look confusing because people teach them with outdated methods. We specialize strictly in raw market mechanics, algorithmic order flow, and structural precision. We eliminate guesswork so you can view markets like a professional data scientist.
          </p>
        </div>

        {/* Right Side: Chief Mentor Focus Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 p-8 rounded-[35px] relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-600/10 blur-2xl rounded-full"></div>
          <GraduationCap className="text-blue-500 mb-6" size={36} />
          <p className="text-[9px] font-black text-blue-400 tracking-widest uppercase mb-1">Chief Instructor Panel</p>
          <h4 className="text-2xl font-black text-white tracking-tight uppercase mb-4">Elite Mindset Mentorship</h4>
          <p className="text-zinc-400 text-xs leading-relaxed font-medium">
            Led by professional operators with years of chart data experience. Our physical campus infrastructure mimics proprietary trading desks to cultivate unmatched mechanical discipline.
          </p>
        </div>
      </section>

      {/* --- PHYSICAL PERKS & CAMPUS FACILITIES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter">THE CAMPUS PREMIUMS</h2>
          <p className="text-zinc-500 font-bold tracking-widest text-[10px] uppercase">Why Serious Traders Choose Alpha Zone</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {perks.map((perk, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a1120]/30 border border-white/5 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-black tracking-tight uppercase text-white">{perk.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-medium">{perk.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AcademyPage;