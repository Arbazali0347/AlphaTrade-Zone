import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, MapPin, Users, Zap } from 'lucide-react';
import video1 from "../assets/alpha-vide-1.mp4";
import video2 from "../assets/alpha-vide-2.mp4";

const experiences = [
  {
    id: 1,
    title: "Trade Alpha Zone",
    tag: "Trading Community",
    tagIcon: <Users size={10} />,
    focus: [
      { label: "Model Colony Campus", sub: "Linguaphile Academia", icon: <MapPin size={10} /> },
      { label: "Saudabad Campus", sub: "Skill Box Institute", icon: <MapPin size={10} /> },
    ],
    video: video1,
    description: "Learn from experienced mentors and grow within a professional trading environment built for real results.",
    accent: "blue",
  },
  {
    id: 2,
    title: "Join Trade Alpha Zone",
    tag: "Physical Training",
    tagIcon: <Zap size={10} />,
    focus: [
      { label: "Team Collaboration", sub: "Work with top traders", icon: <Users size={10} /> },
      { label: "Mental Discipline", sub: "Build trading psychology", icon: <Zap size={10} /> },
      { label: "1-on-1 Coaching", sub: "Personalised mentorship", icon: <Play size={10} /> },
    ],
    video: video2,
    description: "Step into professional trading with expert mentorship, live market learning, and a high-performance community.",
    accent: "cyan",
  },
];

const accentMap = {
  blue: {
    badge: "bg-blue-600 shadow-blue-900/50",
    border: "hover:border-blue-500/30",
    glow: "bg-blue-600/10",
    glowStrong: "bg-blue-500/[0.07]",
    focusBorder: "border-blue-500/15 hover:border-blue-500/30",
    focusText: "text-blue-300",
    dot: "bg-blue-400",
    line: "from-blue-600/60 to-transparent",
    scanLine: "via-blue-400/20",
  },
  cyan: {
    badge: "bg-cyan-600 shadow-cyan-900/50",
    border: "hover:border-cyan-500/30",
    glow: "bg-cyan-600/10",
    glowStrong: "bg-cyan-500/[0.07]",
    focusBorder: "border-cyan-500/15 hover:border-cyan-500/30",
    focusText: "text-cyan-300",
    dot: "bg-cyan-400",
    line: "from-cyan-600/60 to-transparent",
    scanLine: "via-cyan-400/20",
  },
};

const VideoCard = ({ item, index }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const a = accentMap[item.accent];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative bg-[#060d1c] border border-white/[0.06] rounded-[2.5rem] overflow-hidden ${a.border} transition-all duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.6)]`}
    >
      {/* Card inner glow on hover */}
      <div className={`absolute inset-0 ${a.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

      {/* Top shimmer line */}
      <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${a.scanLine} to-transparent pointer-events-none`} />

      <div className="flex flex-col md:flex-row h-full">

        {/* ── VIDEO PANEL ── */}
        <div className="relative w-full md:w-[42%] shrink-0 overflow-hidden" style={{ minHeight: '420px' }}>
          {/* Subtle gradient overlay on video edges */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#060d1c] to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#060d1c]/60 to-transparent" />
          </div>

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1400ms] ease-out"
            style={{ minHeight: '420px' }}
          >
            <source src={item.video} type="video/mp4" />
          </video>

          {/* Tag badge */}
          <div className={`absolute top-5 left-5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full ${a.badge} shadow-lg`}>
            {item.tagIcon}
            <span className="text-[9px] font-black tracking-[0.22em] text-white uppercase">{item.tag}</span>
          </div>

          {/* Mute button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-5 right-5 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>

        {/* ── CONTENT PANEL ── */}
        <div className="flex-1 flex flex-col justify-between p-8 md:p-9 space-y-7">

          {/* Title block */}
          <div className="space-y-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className={`inline-block w-1.5 h-1.5 rounded-full ${a.dot}`} />
              <span className="text-[9px] font-black tracking-[0.3em] text-zinc-600 uppercase">Academy Showcase</span>
            </div>

            <h3 className="text-[1.85rem] md:text-[2rem] font-black text-white tracking-tight uppercase leading-[1] italic">
              {item.title}
            </h3>

            <p className="text-zinc-500 text-[13px] leading-relaxed font-medium">
              {item.description}
            </p>
          </div>

          {/* Divider */}
          <div className={`h-px bg-gradient-to-r ${a.line}`} />

          {/* Focus tags */}
          <div className="space-y-3">
            <p className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.3em]">Core Focus</p>
            <div className="flex flex-col gap-2">
              {item.focus.map((point) => (
                <div
                  key={point.label}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.02] border ${a.focusBorder} transition-colors duration-200 group/tag`}
                >
                  <div className={`shrink-0 ${a.focusText} opacity-60`}>{point.icon}</div>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-black tracking-widest uppercase ${a.focusText}`}>{point.label}</p>
                    {point.sub && (
                      <p className="text-[9px] text-zinc-700 mt-0.5 truncate">{point.sub}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StudentShowcase = () => {
  return (
    <section className="relative bg-[#010413] py-28 md:py-36 px-5 md:px-8 overflow-hidden">

      {/* Background watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
        <p className="absolute top-16 left-1/2 -translate-x-1/2 text-[16vw] font-black text-white/[0.018] uppercase italic whitespace-nowrap tracking-tighter">
          SUCCESS
        </p>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-cyan-500/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-blue-500/60" />
            <span className="text-blue-500 font-black tracking-[0.4em] text-[9px] uppercase">Academy Insight</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
            Learning in{' '}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300">
              Real-Time.
            </span>
          </h2>

          <p className="mt-6 text-zinc-600 text-sm md:text-base max-w-md leading-relaxed">
            See how our students learn, grow, and trade inside Trade Alpha Zone.
          </p>
        </motion.div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {experiences.map((item, i) => (
            <VideoCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentShowcase;